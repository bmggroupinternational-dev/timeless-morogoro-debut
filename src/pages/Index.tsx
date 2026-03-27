import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Utensils, Bed, Waves, Users, ArrowUpRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import hotelPromo from "@/assets/hotel-promo.png";
import hotelSuite from "@/assets/hotel-suite.jpeg";
import hotelCorridor from "@/assets/hotel-corridor.jpeg";
import hotelRobe from "@/assets/hotel-robe.jpeg";
import hotelBathroom from "@/assets/hotel-bathroom.jpeg";
import hotelRoomWide from "@/assets/hotel-room-wide.jpeg";
import hotelRoomBright from "@/assets/hotel-room-bright.jpeg";
import hotelExterior from "@/assets/hotel-exterior.jpeg";
import hotelMountainView from "@/assets/hotel-mountain-view.jpeg";
import hotelBedroomWindow from "@/assets/hotel-bedroom-window.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const facilities = [
  { icon: Utensils, label: "Dining & Culinary Options", image: hotelRobe },
  { icon: Bed, label: "Luxurious Rooms", image: hotelSuite },
  { icon: Waves, label: "Swimming Pool", image: hotelMountainView },
  { icon: Users, label: "Meeting & Event Spaces", image: hotelCorridor },
];

const rooms = [
  {
    name: "Presidential Suite",
    beds: "3 King Beds",
    guests: "6 Person",
    image: hotelRoomWide,
  },
  {
    name: "Deluxe Suite",
    beds: "2 King Beds",
    guests: "4 Person",
    image: hotelSuite,
  },
  {
    name: "Executive Room",
    beds: "1 King Bed",
    guests: "2 Person",
    image: hotelRoomBright,
  },
];

const galleryImages = [hotelCorridor, hotelRobe, hotelBathroom, hotelMountainView];

const Index = () => {
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero — HotelBeach inspired */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${hotelPromo})`,
            scale: heroScale,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />

        {/* Circular Book button — top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "backOut" }}
          className="absolute top-28 right-8 md:right-16 z-10"
        >
          <Link
            to="/rooms"
            className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-primary/90 backdrop-blur-sm flex flex-col items-center justify-center text-primary-foreground hover:bg-primary transition-all duration-500 hover:scale-110 shadow-2xl"
          >
            <span className="font-heading text-sm md:text-base leading-tight text-center">
              Book Your
              <br />
              Stay
            </span>
          </Link>
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 pb-16 md:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-background leading-[1.05] max-w-3xl">
              Your Gateway to{" "}
              <span className="text-primary italic">Unforgettable</span>{" "}
              Memories
            </h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <p className="font-body text-background/80 max-w-md text-base leading-relaxed">
              Experience exquisite accommodations, world-class amenities, and personalized service tailored to exceed your expectations.
            </p>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-full border border-background/30 text-background font-body text-sm tracking-wider uppercase hover:bg-background/10 transition-all duration-300 group w-fit"
            >
              View Rooms
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Welcome — Two images side by side */}
      <section className="py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary">
              Welcome to The World of
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-3 mb-6">
              Luxury and Comfort
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience a stay like no other, where indulgence knows no bounds and your every desire is our priority. Join us in redefining the art of hospitality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={hotelCorridor}
                alt="Hotel corridor"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={hotelSuite}
                alt="Hotel suite"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities — Scrolling cards */}
      <section className="py-28 bg-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary">
              Facilities and
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-3 mb-6 text-background">
              Services
            </h2>
            <p className="font-body text-background/70 max-w-2xl mx-auto leading-relaxed">
              Discover a realm where opulence meets tranquility, where every moment is a symphony of relaxation and refinement.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {facilities.map((f, i) => (
              <motion.div
                key={f.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
              >
                <img
                  src={f.image}
                  alt={f.label}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <f.icon size={24} className="text-primary mb-2" />
                  <h3 className="font-heading text-background text-sm md:text-lg leading-tight">
                    {f.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Activities */}
      <section className="py-28 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="font-body text-xs tracking-[0.4em] uppercase text-primary">
                Special Activities
              </span>
              <h2 className="font-heading text-4xl md:text-5xl mt-3 mb-6">
                in our Hotel
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Discover a realm where opulence meets tranquility, where every moment is a symphony of relaxation and refinement. Our sanctuary of luxury and comfort awaits your arrival.
              </p>
              <Link
                to="/dining"
                className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-primary hover:text-hotel-dark-gold transition-colors group"
              >
                Learn More
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={hotelBedroomWindow}
                alt="Room with mountain view"
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="font-heading text-xl md:text-2xl italic leading-relaxed mb-8 text-foreground">
              "Our stay at Timeless Morogoro was nothing short of extraordinary. From the moment we arrived, we were greeted with warmth and professionalism. The room was impeccably clean, the bed was incredibly comfortable, and the view from our window was breathtaking."
            </p>
            <div className="gold-divider mb-4" />
            <p className="font-body text-sm text-muted-foreground tracking-wider uppercase">
              — John and Mary P. from New York
            </p>
            <p className="font-body text-xs text-primary mt-2 tracking-widest uppercase">
              Top-Rated Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Luxury Rooms — Lumea-inspired cards */}
      <section className="py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary">
              Our Luxury
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-3">
              Rooms
            </h2>
          </motion.div>

          <div className="space-y-20">
            {rooms.map((room, i) => (
              <motion.div
                key={room.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={0}
                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "" : ""}`}
              >
                <div className={`overflow-hidden rounded-2xl ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={room.image}
                    alt={room.name}
                    className="w-full h-[350px] md:h-[450px] object-cover"
                  />
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                  <h3 className="font-heading text-3xl md:text-4xl mb-4">{room.name}</h3>
                  <div className={`flex items-center gap-4 text-sm text-muted-foreground font-body mb-6 ${i % 2 === 1 ? "md:justify-end" : ""}`}>
                    <span className="flex items-center gap-1">
                      <Bed size={16} className="text-primary" />
                      {room.beds}
                    </span>
                    <span className="text-primary">•</span>
                    <span className="flex items-center gap-1">
                      <Users size={16} className="text-primary" />
                      {room.guests}
                    </span>
                  </div>
                  <Link
                    to="/rooms"
                    className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-hotel-dark-gold transition-all duration-300 group"
                  >
                    View Details
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-28 bg-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary">Gallery</span>
            <h2 className="font-heading text-4xl md:text-5xl mt-3 text-background">
              Moments at Timeless
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="overflow-hidden rounded-2xl"
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-1000"
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-primary hover:text-hotel-gold transition-colors group"
            >
              View Full Gallery
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${hotelExterior})` }}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading text-4xl md:text-6xl text-background mb-6">
              Ready for a <span className="text-primary italic">Timeless</span> Experience?
            </h2>
            <p className="font-body text-background/80 max-w-lg mx-auto mb-10">
              Book your stay today and discover the finest hospitality in Morogoro.
            </p>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-3 h-14 px-10 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-hotel-dark-gold transition-all duration-300 group"
            >
              Reserve Your Room
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
