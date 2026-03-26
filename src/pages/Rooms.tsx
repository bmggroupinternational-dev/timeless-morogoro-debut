import { motion } from "framer-motion";
import { Wifi, Wind, Tv, Coffee, Bath, Users, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const rooms = [
  {
    name: "Presidential Suite",
    description: "Our finest accommodation featuring a separate living area, premium furnishings, panoramic mountain views, and personalized butler service.",
    price: "$200",
    size: "75 m²",
    guests: "2 Adults + 1 Child",
    amenities: ["King Bed", "Living Room", "Balcony", "Mini Bar", "Room Service"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=500&fit=crop",
  },
  {
    name: "Deluxe Suite",
    description: "Spacious suite with king-sized bed, private balcony overlooking the Uluguru Mountains, and luxurious bathroom with rain shower.",
    price: "$120",
    size: "50 m²",
    guests: "2 Adults",
    amenities: ["King Bed", "Balcony", "Rain Shower", "Desk", "Safe"],
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=500&fit=crop",
  },
  {
    name: "Executive Room",
    description: "Elegant room designed for the modern traveler, with a comfortable work area, city views, and all modern amenities.",
    price: "$85",
    size: "35 m²",
    guests: "2 Adults",
    amenities: ["Queen Bed", "Work Desk", "City View", "Minibar", "Iron"],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=500&fit=crop",
  },
  {
    name: "Standard Room",
    description: "Comfortable and well-appointed room with all the essentials for a relaxing and pleasant stay in Morogoro.",
    price: "$55",
    size: "25 m²",
    guests: "2 Adults",
    amenities: ["Double Bed", "Shower", "TV", "Wi-Fi", "A/C"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=500&fit=crop",
  },
];

const allAmenities = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Wind, label: "Air Conditioning" },
  { icon: Tv, label: "Flat Screen TV" },
  { icon: Coffee, label: "Tea & Coffee" },
  { icon: Bath, label: "En-suite Bath" },
];

const Rooms = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1920&h=800&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="font-heading text-5xl md:text-6xl text-background mb-4">Our Rooms</h1>
        <div className="gold-divider" />
        <p className="font-body text-background/80 mt-4 max-w-md mx-auto">
          Choose from our carefully curated selection of rooms and suites
        </p>
      </motion.div>
    </section>

    {/* All amenities bar */}
    <section className="py-8 bg-secondary border-b border-border">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">
        {allAmenities.map((a) => (
          <div key={a.label} className="flex items-center gap-2">
            <a.icon size={18} className="text-primary" />
            <span className="font-body text-sm text-foreground">{a.label}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Room Cards */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 space-y-16">
        {rooms.map((room, i) => (
          <motion.div
            key={room.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}
          >
            <div className={`overflow-hidden rounded-sm ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <h3 className="font-heading text-2xl md:text-3xl mb-2">{room.name}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground font-body mb-4">
                <span>{room.size}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Users size={14} /> {room.guests}</span>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">{room.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {room.amenities.map((a) => (
                  <span key={a} className="px-3 py-1 bg-secondary text-sm font-body rounded-sm text-foreground">
                    {a}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl text-primary">{room.price}<span className="text-sm font-body text-muted-foreground"> /night</span></span>
                <a
                  href={`https://wa.me/?text=Hello, I would like to inquire about the ${room.name} at Timeless Morogoro Hotel.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 px-6 items-center gap-2 justify-center rounded-sm bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-hotel-dark-gold transition-colors"
                >
                  <MessageCircle size={16} />
                  Inquire Now
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default Rooms;
