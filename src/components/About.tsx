import { useEffect, useState } from "react";
import { Layers, Shield, VolumeX, ThermometerSnowflake } from "lucide-react";
import { supabase } from "../lib/supabase";
import { InsulationProduct } from "../types";

export function About() {
  const [products, setProducts] = useState<InsulationProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from("insulation_products")
        .select("*")
        .order("layer", { ascending: true });

      if (!error && data) {
        setProducts(data);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  const layerIcons = [Shield, VolumeX, ThermometerSnowflake];

  return (
    <section
      id="about"
      className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 md:px-0 md:pt-20"
    >
      {products.map((product, index) => {
        const Icon = layerIcons[index] || Shield;

        return (
          <div
            key={product.id}
            className="bg-gray-800/50 backdrop-blur border-2 border-gray-700 rounded-2xl p-6 md:p-8 hover:border-yellow-400 transition-all hover:scale-105"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="bg-yellow-400/10 p-4 rounded-xl">
                <Icon className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-yellow-400 text-5xl font-black opacity-20">
                {product.layer}
              </div>
            </div>

            <h3 className="text-white text-2xl font-bold mb-2">
              {product.name}
            </h3>
            <p className="text-yellow-400 font-semibold mb-4 text-sm">
              STRATUL {product.layer} - {product.brand}
            </p>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {product.description}
            </p>
          </div>
        );
      })}
    </section>
  );
}
