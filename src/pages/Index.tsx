import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Utensils, Waves, Wifi, Car, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const rooms = [
  {
    name: "Deluxe Suite",
    description: "Spacious suite with king-sized bed, private balcony, and mountain views.",
    price: "From $120/night",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&h=400&fit=crop",
  },
  {
    name: "Executive Room",
    description: "Elegant room with modern amenities, work desk, and city views.",
    price: "From $85/night",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
  },
  {
    name: "Standard Room",
    description: "Comfortable room with all essentials for a relaxing stay.",
    price: "From $55/night",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
  },
];

const amenities = [
  { icon: Utensils, label: "Fine Dining" },
  { icon: Waves, label: "Swimming Pool" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Car, label: "Parking" },
  { icon: Star, label: "Concierge" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
];

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&h=1080&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-foreground/50" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 text-center px-4"
      >
        <span className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
          Welcome to
        </span>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-background mb-6 leading-tight">
          Timeless Morogoro
          <span className="block text-primary text-3xl md:text-4xl mt-2">Hotel</span>
        </h1>
        <p className="font-body text-lg text-background/90 max-w-xl mx-auto mb-8 leading-relaxed">
          Where timeless elegance meets the warmth of Tanzanian hospitality
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to="/rooms"
            className="inline-flex h-12 px-8 items-center justify-center rounded-sm bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-hotel-dark-gold transition-colors"
          >
            Explore Rooms
          </Link>
          <Link
            to="/about"
            className="inline-flex h-12 px-8 items-center justify-center rounded-sm border-2 border-background/50 text-background font-body text-sm tracking-wider uppercase hover:bg-background/10 transition-colors"
          >
            Our Story
          </Link>
        </div>
      </motion.div>
    </section>

    {/* Welcome */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Our Story"
          title="A Haven of Elegance"
          description="Nestled in the vibrant town of Morogoro at the foot of the majestic Uluguru Mountains, Timeless Morogoro Hotel offers an unforgettable blend of luxury, comfort, and African warmth."
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center mt-8"
        >
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&h=500&fit=crop"
              alt="Hotel lobby"
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Our hotel is more than a place to stay — it's a destination. Every detail has been carefully curated to ensure your experience is nothing short of extraordinary. From our beautifully appointed rooms to our world-class dining, we invite you to discover what makes us truly timeless.
            </p>
            <Link
              to="/about"
              className="font-body text-sm tracking-wider uppercase text-primary hover:text-hotel-dark-gold transition-colors inline-flex items-center gap-2"
            >
              Learn More →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Featured Rooms */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Accommodation"
          title="Our Finest Rooms"
          description="Each room is thoughtfully designed to provide comfort, elegance, and a touch of Tanzanian charm."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl mb-2">{room.name}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">{room.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-heading text-primary font-semibold">{room.price}</span>
                  <Link
                    to="/rooms"
                    className="font-body text-xs tracking-wider uppercase text-primary hover:text-hotel-dark-gold transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Amenities */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Facilities"
          title="Hotel Amenities"
          description="Everything you need for a perfect stay, all under one roof."
        />
        <div className="flex flex-wrap justify-center gap-12">
          {amenities.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <a.icon size={28} className="text-primary" />
              </div>
              <span className="font-body text-sm text-foreground">{a.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Gallery Strip */}
    <section className="py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Gallery" title="Moments at Timeless" light />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden rounded-sm"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="font-body text-sm tracking-wider uppercase text-primary hover:text-hotel-gold transition-colors"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl text-primary-foreground mb-4">
          Ready for a Timeless Experience?
        </h2>
        <p className="font-body text-primary-foreground/80 max-w-lg mx-auto mb-8">
          Book your stay today and discover the finest hospitality in Morogoro.
        </p>
        <Link
          to="/rooms"
          className="inline-flex h-12 px-10 items-center justify-center rounded-sm bg-background text-foreground font-body text-sm tracking-wider uppercase hover:bg-secondary transition-colors"
        >
          Reserve Your Room
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Index;
