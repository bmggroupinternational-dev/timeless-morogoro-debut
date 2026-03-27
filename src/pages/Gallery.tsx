import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hotelCorridor from "@/assets/hotel-corridor.jpeg";
import hotelRobe from "@/assets/hotel-robe.jpeg";
import hotelBedroomWindow from "@/assets/hotel-bedroom-window.jpeg";
import hotelSuite from "@/assets/hotel-suite.jpeg";
import hotelBathroom from "@/assets/hotel-bathroom.jpeg";
import hotelRoomWide from "@/assets/hotel-room-wide.jpeg";
import hotelRoomBright from "@/assets/hotel-room-bright.jpeg";
import hotelExterior from "@/assets/hotel-exterior.jpeg";
import hotelMountainView from "@/assets/hotel-mountain-view.jpeg";

const categories = ["All", "Rooms", "Facilities", "Grounds", "Views"];

const images = [
  { src: hotelSuite, cat: "Rooms", alt: "Deluxe suite interior" },
  { src: hotelRoomWide, cat: "Rooms", alt: "Spacious room" },
  { src: hotelRoomBright, cat: "Rooms", alt: "Bright room" },
  { src: hotelBedroomWindow, cat: "Rooms", alt: "Room with view" },
  { src: hotelRobe, cat: "Rooms", alt: "Hotel robe detail" },
  { src: hotelBathroom, cat: "Facilities", alt: "Modern bathroom" },
  { src: hotelCorridor, cat: "Facilities", alt: "Hotel corridor" },
  { src: hotelExterior, cat: "Grounds", alt: "Hotel exterior" },
  { src: hotelMountainView, cat: "Views", alt: "Uluguru Mountains view" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.cat === active);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[50vh] flex items-end overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hotelExterior})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 pb-12"
        >
          <h1 className="font-heading text-5xl md:text-7xl text-background">Gallery</h1>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-secondary sticky top-20 z-30">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm tracking-wider transition-all duration-300 ${
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

      {/* Masonry Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
                  onClick={() => setLightbox(img.src)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover hover:scale-110 transition-transform duration-700"
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
            className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-background hover:text-primary transition-colors" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightbox}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
