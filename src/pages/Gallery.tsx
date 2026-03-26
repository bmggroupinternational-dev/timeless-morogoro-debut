import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const categories = ["All", "Rooms", "Dining", "Grounds", "Views"];

const images = [
  { src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop", cat: "Rooms", alt: "Deluxe suite interior" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop", cat: "Dining", alt: "Fine dining setup" },
  { src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop", cat: "Grounds", alt: "Hotel pool area" },
  { src: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&h=400&fit=crop", cat: "Views", alt: "Mountain landscape" },
  { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop", cat: "Rooms", alt: "Executive room" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop", cat: "Dining", alt: "Restaurant ambiance" },
  { src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop", cat: "Grounds", alt: "Hotel exterior" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop", cat: "Views", alt: "Sunset over mountains" },
  { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop", cat: "Rooms", alt: "Standard room" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop", cat: "Dining", alt: "Bar area" },
  { src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop", cat: "Grounds", alt: "Garden path" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop", cat: "Views", alt: "Nature view" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.cat === active);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=800&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center"
        >
          <h1 className="font-heading text-5xl md:text-6xl text-background mb-4">Gallery</h1>
          <div className="gold-divider" />
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-sm font-body text-sm tracking-wider uppercase transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-primary/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map((img) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer overflow-hidden rounded-sm"
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-48 md:h-56 object-cover hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-background hover:text-primary transition-colors" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox.replace("w=600&h=400", "w=1200&h=800")}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
