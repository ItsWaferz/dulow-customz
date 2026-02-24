import { useEffect, useState } from "react";
import { Calculator, Car, Plus, Minus, ChevronDown } from "lucide-react";
import { supabase } from "../lib/supabase";
import { AudioProduct, InsulationProduct } from "../types";

interface CarSize {
  id: string;
  name: string;
  area: number;
}

const carSizes: CarSize[] = [
  { id: "small", name: "Mică (Hatchback)", area: 8 },
  { id: "medium", name: "Medie (Sedan)", area: 12 },
  { id: "large", name: "Mare (Break/MPV)", area: 16 },
  { id: "suv", name: "SUV/Offroad", area: 20 },
];

const zones = [
  { id: "doors", name: "Uși", multiplier: 0.35 },
  { id: "floor", name: "Podea", multiplier: 0.3 },
  { id: "roof", name: "Plafon", multiplier: 0.2 },
  { id: "trunk", name: "Portbagaj", multiplier: 0.15 },
];

export function PriceCalculator() {
  const [audioProducts, setAudioProducts] = useState<AudioProduct[]>([]);
  const [insulationProducts, setInsulationProducts] = useState<
    InsulationProduct[]
  >([]);
  const [selectedCarSize, setSelectedCarSize] = useState<string>("medium");
  const [selectedZones, setSelectedZones] = useState<Set<string>>(
    new Set(["doors", "floor"]),
  );
  const [selectedAudio, setSelectedAudio] = useState<Map<string, number>>(
    new Map(),
  );
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const [audioResult, insulationResult] = await Promise.all([
        supabase
          .from("audio_products")
          .select("*")
          .eq("in_stock", true)
          .order("type", { ascending: true })
          .order("brand", { ascending: true }),
        supabase
          .from("insulation_products")
          .select("*")
          .order("layer", { ascending: true }),
      ]);

      if (audioResult.data) setAudioProducts(audioResult.data);
      if (insulationResult.data) setInsulationProducts(insulationResult.data);
      setLoading(false);
    }

    fetchData();
  }, []);

  const toggleZone = (zoneId: string) => {
    const newZones = new Set(selectedZones);
    if (newZones.has(zoneId)) {
      newZones.delete(zoneId);
    } else {
      newZones.add(zoneId);
    }
    setSelectedZones(newZones);
  };

  const updateAudioCount = (productId: string, delta: number) => {
    const newSelected = new Map(selectedAudio);
    const current = newSelected.get(productId) || 0;
    const newCount = Math.max(0, current + delta);

    if (newCount === 0) {
      newSelected.delete(productId);
    } else {
      newSelected.set(productId, newCount);
    }

    setSelectedAudio(newSelected);
  };

  const calculateInsulationPrice = () => {
    const carSize = carSizes.find((s) => s.id === selectedCarSize);
    if (!carSize) return 0;

    let totalArea = 0;
    zones.forEach((zone) => {
      if (selectedZones.has(zone.id)) {
        totalArea += carSize.area * zone.multiplier;
      }
    });

    const pricePerSqm = insulationProducts.reduce(
      (sum, p) => sum + p.price_per_sqm,
      0,
    );
    return totalArea * pricePerSqm;
  };

  const calculateAudioPrice = () => {
    let total = 0;
    selectedAudio.forEach((count, productId) => {
      const product = audioProducts.find((p) => p.id === productId);
      if (product) {
        total += product.price * count;
      }
    });
    return total;
  };

  const totalPrice = calculateInsulationPrice() + calculateAudioPrice();

  const audioByTypeAndBrand = audioProducts.reduce(
    (acc, product) => {
      if (!acc[product.type]) {
        acc[product.type] = {};
      }
      if (!acc[product.type][product.brand]) {
        acc[product.type][product.brand] = [];
      }
      acc[product.type][product.brand].push(product);
      return acc;
    },
    {} as Record<string, Record<string, AudioProduct[]>>,
  );

  const typeDisplayNames: Record<string, string> = {
    tweeter: "Tweetere",
    woofer: "Difuzoare",
    subwoofer: "Subwoofere",
    amplifier: "Amplificatoare",
  };

  if (loading) {
    return (
      <section id="calculator" className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="text-yellow-400">Se încarcă calculatorul...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="calculator" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 px-6 py-2 rounded-full mb-4">
            <Calculator className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">
              Calculator Preț
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Calculează Costul
            <br />
            <span className="text-yellow-400">Proiectului Tău</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-900 border-2 border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Car className="w-6 h-6 text-yellow-400" />
                <h3 className="text-2xl font-bold">1. Dimensiunea Mașinii</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {carSizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedCarSize(size.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedCarSize === size.id
                        ? "border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/20"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="font-bold">{size.name}</div>
                    <div className="text-sm text-gray-400">
                      ~{size.area}m² suprafață
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 border-2 border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6">
                2. Zone de Insonorizat
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {zones.map((zone) => (
                  <button
                    key={zone.id}
                    onClick={() => toggleZone(zone.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      selectedZones.has(zone.id)
                        ? "border-yellow-400 bg-yellow-400/10 shadow-lg shadow-yellow-400/20"
                        : "border-gray-700 hover:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 ${
                          selectedZones.has(zone.id)
                            ? "border-yellow-400 bg-yellow-400"
                            : "border-gray-600"
                        }`}
                      >
                        {selectedZones.has(zone.id) && (
                          <span className="text-black text-xs">✓</span>
                        )}
                      </div>
                      <span className="font-bold">{zone.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 border-2 border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-bold mb-6">3. Echipamente Audio</h3>
              <div className="space-y-4">
                {Object.entries(audioByTypeAndBrand).map(([type, brands]) => (
                  <div key={type}>
                    <h4 className="text-yellow-400 font-bold mb-4 text-lg">
                      {typeDisplayNames[type] || type}
                    </h4>
                    <div className="space-y-2 ml-2">
                      {Object.entries(brands).map(([brand, products]) => {
                        const brandKey = `${type}-${brand}`;
                        const isExpanded = expandedBrand === brandKey;

                        return (
                          <div key={brandKey}>
                            <button
                              onClick={() =>
                                setExpandedBrand(isExpanded ? null : brandKey)
                              }
                              className="w-full bg-gray-800 hover:bg-gray-750 rounded-lg p-3 flex items-center justify-between transition-all duration-300 group"
                            >
                              <span className="font-semibold group-hover:text-yellow-400 transition-colors duration-300">
                                {brand}
                              </span>
                              <ChevronDown
                                className={`w-5 h-5 text-yellow-400 transition-transform duration-300 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            {isExpanded && (
                              <div className="space-y-3 mt-3 ml-2">
                                {products.map((product) => (
                                  <div
                                    key={product.id}
                                    className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-yellow-400/30 transition-all duration-300 flex items-center justify-between gap-4"
                                  >
                                    <div className="flex-1">
                                      <div className="font-semibold text-sm md:text-base">
                                        {product.name}
                                      </div>
                                      <div className="text-xs md:text-sm text-gray-400 flex items-center gap-4">
                                        <span>{product.price} RON</span>
                                        {product.power && (
                                          <span>{product.power}W</span>
                                        )}
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-0 md:gap-3">
                                      <button
                                        onClick={() =>
                                          updateAudioCount(product.id, -1)
                                        }
                                        className="w-8 h-8 rounded-full bg-gray-700 hover:bg-yellow-400 hover:text-black text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                                      >
                                        <Minus className="w-4 h-4" />
                                      </button>
                                      <span className="w-8 text-center font-bold text-yellow-400">
                                        {selectedAudio.get(product.id) || 0}
                                      </span>
                                      <button
                                        onClick={() =>
                                          updateAudioCount(product.id, 1)
                                        }
                                        className="w-8 h-8 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black flex items-center justify-center transition-all duration-300 hover:scale-110"
                                      >
                                        <Plus className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black rounded-2xl p-6 sticky top-6 shadow-2xl shadow-yellow-400/30">
              <h3 className="text-2xl font-black mb-6">Sumar Comandă</h3>

              <div className="space-y-4 mb-6">
                <div className="bg-black/10 rounded-lg p-4 hover:bg-black/15 transition-colors duration-300">
                  <div className="text-sm font-semibold mb-1">Insonorizare</div>
                  <div className="text-xs opacity-70 mb-2">
                    {carSizes.find((s) => s.id === selectedCarSize)?.name} -{" "}
                    {selectedZones.size} zone
                  </div>
                  <div className="text-2xl font-black">
                    {calculateInsulationPrice().toFixed(0)} RON
                  </div>
                </div>

                {selectedAudio.size > 0 && (
                  <div className="bg-black/10 rounded-lg p-4 hover:bg-black/15 transition-colors duration-300">
                    <div className="text-sm font-semibold mb-1">
                      Echipamente Audio
                    </div>
                    <div className="text-xs opacity-70 mb-2">
                      {selectedAudio.size} produse selectate
                    </div>
                    <div className="text-2xl font-black">
                      {calculateAudioPrice().toFixed(0)} RON
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-black/20 pt-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">TOTAL</span>
                  <span className="text-4xl font-black">
                    {totalPrice.toFixed(0)}
                  </span>
                </div>
                <div className="text-right text-sm font-bold">RON</div>
              </div>

              <button className="w-full bg-black text-yellow-400 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-lg shadow-black/50">
                Solicită Ofertă
              </button>

              <p className="text-xs text-center mt-4 opacity-70">
                *Prețurile sunt orientative. Contactați-ne pentru o ofertă
                detaliată.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
