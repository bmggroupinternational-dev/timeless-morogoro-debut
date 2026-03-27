import { motion } from "framer-motion";
import { Wifi, Wind, Tv, Coffee, Bath, Users, MessageCircle, Bed, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hotelSuite from "@/assets/hotel-suite.jpeg";
import hotelRoomWide from "@/assets/hotel-room-wide.jpeg";
import hotelRoomBright from "@/assets/hotel-room-bright.jpeg";
import hotelBedroomWindow from "@/assets/hotel-bedroom-window.jpeg";
import hotelBathroom from "@/assets/hotel-bathroom.jpeg";
import hotelCorridor from "@/assets/hotel-corridor.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const rooms = [
  {
    name: "Presidential Suite",
    subtitle: "Presidential Suite – ultimate luxury",
    description: "Our finest accommodation featuring a separate living area, premium furnishings, panoramic mountain views, and personalized butler service.",
    price: "$200",
    size: "75 m²",
    beds: "3 King Beds",
    guests: "6 Person",
    amenities: ["King Bed", "Living Room", "Balcony", "Mini Bar", "Room Service"],
    image: hotelRoomWide,
    thumbnail: hotelBathroom,
  },
  {
    name: "Deluxe Suite",
    subtitle: "Deluxe Suite – refined elegance",
    description: "Spacious suite with king-sized bed, private balcony overlooking the Uluguru Mountains, and luxurious bathroom with rain shower.",
    price: "$120",
    size: "50 m²",
    beds: "2 King Beds",
    guests: "4 Person",
    amenities: ["King Bed", "Balcony", "Rain Shower", "Desk", "Safe"],
    image: hotelSuite,
    thumbnail: hotelCorridor,
  },
  {
    name: "Executive Room",
    subtitle: "Executive Room – modern comfort",
    description: "Elegant room designed for the modern traveler, with a comfortable work area, city views, and all modern amenities.",
    price: "$85",
    size: "35 m²",
    beds: "1 King Bed",
    guests: "2 Person",
    amenities: ["Queen Bed", "Work Desk", "City View", "Minibar", "Iron"],
    image: hotelRoomBright,
    thumbnail: hotelBedroomWindow,
  },
  {
    name: "Standard Room",
    subtitle: "Standard Room – essential comfort",
    description: "Comfortable and well-appointed room with all the essentials for a relaxing and pleasant stay in Morogoro.",
    price: "$55",
    size: "25 m²",
    beds: "1 Double Bed",
    guests: "2 Person",
    amenities: ["Double Bed", "Shower", "TV", "Wi-Fi", "A/C"],
    image: hotelBedroomWindow,
    thumbnail: hotelRoomBright,
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
    <section className="relative h-[70vh] flex items-end overflow-hidden mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hotelCorridor})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 container mx-auto px-4 pb-16"
      >
        <span className="font-body text-xs tracking-[0.4em] uppercase text-primary block mb-3">Accommodation</span>
        <h1 className="font-heading text-5xl md:text-7xl text-background leading-tight">
          Our Luxury<br /><span className="text-primary italic">Rooms</span>
        </h1>
      </motion.div>
    </section>

    {/* Amenities bar */}
    <section className="py-6 bg-secondary border-b border-border">
      <div className="container mx-auto px-4 flex flex-wrap justify-center gap-8">
        {allAmenities.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="flex items-center gap-2"
          >
            <a.icon size={18} className="text-primary" />
            <span className="font-body text-sm text-foreground">{a.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Room Cards — Lumea style */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 space-y-24">
        {rooms.map((room, i) => (
          <motion.div
            key={room.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-stretch"
          >
            {/* Main image */}
            <div className={`overflow-hidden rounded-2xl ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.8 }}
                src={room.image}
                alt={room.name}
                className="w-full h-full min-h-[350px] md:min-h-[450px] object-cover"
              />
            </div>

            {/* Info + thumbnail */}
            <div className={`flex flex-col justify-between ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl mb-2">{room.name}</h2>
                <p className="font-body text-sm text-muted-foreground mb-4">{room.subtitle}</p>

                <div className="flex items-center gap-4 text-sm font-body mb-4">
                  <span className="flex items-center gap-1">
                    <Bed size={16} className="text-primary" />
                    {room.beds}
                  </span>
                  <span className="text-primary">•</span>
                  <span className="flex items-center gap-1">
                    <Users size={16} className="text-primary" />
                    {room.guests}
                  </span>
                  <span className="text-primary">•</span>
                  <span className="font-heading text-primary font-semibold">{room.price}<span className="text-xs font-body text-muted-foreground">/night</span></span>
                </div>

                <p className="font-body text-muted-foreground leading-relaxed mb-4">{room.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.map((a) => (
                    <span key={a} className="px-3 py-1 bg-secondary text-xs font-body rounded-full text-foreground">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Thumbnail + CTA */}
              <div className="flex items-end gap-4">
                <div className="overflow-hidden rounded-xl w-32 h-24 shrink-0 hidden md:block">
                  <img src={room.thumbnail} alt="" className="w-full h-full object-cover" />
                </div>
                <a
                  href={`https://wa.me/?text=Hello, I would like to inquire about the ${room.name} at Timeless Morogoro Hotel.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-hotel-dark-gold transition-all duration-300 group"
                >
                  <MessageCircle size={16} />
                  Inquire Now
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
