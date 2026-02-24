import { Image } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Sistem Audio Premium",
  },
  {
    url: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Interior Lux",
  },
  {
    url: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Detalii Audio",
  },
  {
    url: "https://images.pexels.com/photos/3802507/pexels-photo-3802507.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Montaj Profesional",
  },
  {
    url: "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Subwoofer Custom",
  },
  {
    url: "https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Amplificator",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 px-6 py-2 rounded-full mb-4">
            <Image className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Portofoliu</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Galeria Noastră
            <br />
            <span className="text-yellow-400">de Proiecte</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Fiecare proiect este realizat cu atenție la detalii și pasiune
            pentru excelență.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-800 cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Vrei să vezi mai multe din munca noastră?
          </p>
          <a href="https://www.instagram.com/dulowcustomz/" target="_blank">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50">
              Vezi Toate Proiectele
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
