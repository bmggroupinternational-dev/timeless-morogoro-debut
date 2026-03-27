import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Utensils, Bed, Waves, Users, ArrowUpRight, Star, ArrowDown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";
import RoomCarousel from "@/components/RoomCarousel";
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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleReveal = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const facilities = [
  { icon: Utensils, label: "Dining & Culinary", image: hotelRobe },
  { icon: Bed, label: "Luxurious Rooms", image: hotelSuite },
  { icon: Waves, label: "Swimming Pool", image: hotelMountainView },
  { icon: Users, label: "Event Spaces", image: hotelCorridor },
];

const carouselRooms = [
  {
    name: "Presidential Suite",
    subtitle: "Ultimate luxury experience",
    price: "$200",
    beds: "3 King Beds",
    guests: "6 Person",
    image: hotelRoomWide,
  },
  {
    name: "Deluxe Suite",
    subtitle: "Refined elegance",
    price: "$120",
    beds: "2 King Beds",
    guests: "4 Person",
    image: hotelSuite,
  },
  {
    name: "Executive Room",
    subtitle: "Modern comfort",
    price: "$85",
    beds: "1 King Bed",
    guests: "2 Person",
    image: hotelRoomBright,
  },
  {
    name: "Standard Room",
    subtitle: "Essential comfort",
    price: "$55",
    beds: "1 Double Bed",
    guests: "2 Person",
    image: hotelBedroomWindow,
  },
];

const galleryImages = [
  { src: hotelCorridor, alt: "Corridor" },
  { src: hotelRobe, alt: "Details" },
  { src: hotelBathroom, alt: "Bathroom" },
  { src: hotelMountainView, alt: "Views" },
  { src: hotelRoomWide, alt: "Suite" },
  { src: hotelExterior, alt: "Exterior" },
];

const Index = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const welcomeRef = useRef(null);
  const welcomeInView = useInView(welcomeRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{ y: heroY }}
        >
          <motion.img
            src={hotelPromo}
            alt="Timeless Morogoro Hotel"
            className="w-full h-[120%] object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/20 via-foreground/40 to-foreground/80" />

        {/* Circular Book CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-24 right-6 md:right-16 z-10"
        >
          <Link
            to="/rooms"
            className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-primary flex flex-col items-center justify-center text-primary-foreground hover:scale-110 transition-transform duration-500 shadow-[0_0_60px_rgba(184,134,11,0.3)]"
          >
            <span className="font-heading text-xs md:text-sm leading-tight text-center">
              Book Your
              <br />
              Stay
            </span>
          </Link>
        </motion.div>

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-start justify-end h-full pb-20 md:pb-28">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <div className="overflow-hidden">
              <motion.span
                variants={slideUp}
                className="block font-body text-xs md:text-sm tracking-[0.5em] uppercase text-primary mb-4"
              >
                Timeless Morogoro Hotel
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={slideUp}
                className="font-heading text-5xl md:text-7xl lg:text-[6.5rem] text-background leading-[1] max-w-4xl"
              >
                Your Gateway to
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={slideUp}
                className="font-heading text-5xl md:text-7xl lg:text-[6.5rem] text-primary italic leading-[1]"
              >
                Unforgettable
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                variants={slideUp}
                className="font-heading text-5xl md:text-7xl lg:text-[6.5rem] text-background leading-[1]"
              >
                Memories
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-10 flex flex-col md:flex-row md:items-end justify-between w-full gap-6"
          >
            <p className="font-body text-background/70 max-w-md text-sm md:text-base leading-relaxed">
              Experience exquisite accommodations, world-class amenities, and personalized service tailored to exceed your expectations.
            </p>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-full border border-background/20 text-background font-body text-sm tracking-wider uppercase hover:bg-background hover:text-foreground transition-all duration-500 group w-fit backdrop-blur-sm"
            >
              View Rooms
              <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-background/50" />
          </motion.div>
        </motion.div>
      </section>

      {/* ─── WELCOME ─── */}
      <section className="py-32 bg-background overflow-hidden" ref={welcomeRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={welcomeInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="font-body text-[10px] tracking-[0.5em] uppercase text-primary">
              Welcome to The World of
            </span>
          </motion.div>

          <div className="overflow-hidden text-center mb-6">
            <motion.h2
              initial={{ y: "100%" }}
              animate={welcomeInView ? { y: 0 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-6xl lg:text-8xl"
            >
              Luxury <span className="text-primary italic">&</span> Comfort
            </motion.h2>
          </div>

          <TextReveal
            className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center text-sm md:text-base mb-20"
            delay={0.5}
          >
            Experience a stay like no other, where indulgence knows no bounds and your every desire is our priority. Join us in redefining the art of hospitality, and let us pamper you in a world where luxury and comfort intertwine seamlessly.
          </TextReveal>

          {/* Two images — asymmetric layout */}
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-5 items-end">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleReveal}
              className="overflow-hidden rounded-3xl"
            >
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 1 }}
                src={hotelCorridor}
                alt="Hotel corridor"
                className="w-full h-[350px] md:h-[550px] object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleReveal}
              className="overflow-hidden rounded-3xl"
            >
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 1 }}
                src={hotelSuite}
                alt="Hotel suite"
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FACILITIES ─── */}
      <section className="py-32 bg-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-body text-[10px] tracking-[0.5em] uppercase text-primary block mb-4"
              >
                Facilities and Services
              </motion.span>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-heading text-4xl md:text-6xl lg:text-7xl text-background"
                >
                  Discover Our
                  <br />
                  <span className="text-primary italic">World</span>
                </motion.h2>
              </div>
            </div>
            <div className="flex items-end">
              <TextReveal
                className="font-body text-background/60 leading-relaxed text-sm md:text-base"
                delay={0.3}
              >
                Discover a realm where opulence meets tranquility, where every moment is a symphony of relaxation and refinement. Our sanctuary of luxury and comfort awaits your arrival.
              </TextReveal>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {facilities.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer"
              >
                <motion.img
                  src={f.image}
                  alt={f.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-3">
                    <f.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-background text-sm md:text-lg leading-tight">
                    {f.label}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPECIAL ACTIVITIES ─── */}
      <section className="py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="overflow-hidden">
                <motion.span variants={slideUp} className="block font-body text-[10px] tracking-[0.5em] uppercase text-primary mb-4">
                  Special Activities
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.h2 variants={slideUp} className="font-heading text-4xl md:text-6xl leading-[1.05]">
                  Curated{" "}
                  <span className="text-primary italic">Experiences</span>
                  <br />in our Hotel
                </motion.h2>
              </div>
              <TextReveal className="font-body text-muted-foreground leading-relaxed mt-6 mb-8 text-sm md:text-base" delay={0.3}>
                Discover a realm where opulence meets tranquility, where every moment is a symphony of relaxation and refinement. Our sanctuary of luxury and comfort awaits your arrival.
              </TextReveal>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Link
                  to="/dining"
                  className="inline-flex items-center gap-3 h-14 px-8 rounded-full bg-foreground text-background font-body text-sm tracking-wider uppercase hover:bg-primary transition-all duration-500 group"
                >
                  Learn More
                  <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleReveal}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1 }}
                  src={hotelBedroomWindow}
                  alt="Room with mountain view"
                  className="w-full h-[450px] md:h-[550px] object-cover"
                />
              </div>
              {/* Floating price tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5, ease: "backOut" }}
                className="absolute -bottom-6 -left-6 md:-left-10 bg-primary text-primary-foreground p-6 rounded-2xl shadow-2xl"
              >
                <span className="font-heading text-3xl">From $55</span>
                <span className="block font-body text-xs mt-1 text-primary-foreground/70">per night</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="py-32 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={slideUp} className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: "backOut" }}
                >
                  <Star size={22} className="text-primary fill-primary" />
                </motion.div>
              ))}
            </motion.div>
            <TextReveal
              className="font-heading text-xl md:text-3xl italic leading-relaxed text-foreground"
              delay={0.4}
            >
              Our stay at Timeless Morogoro was nothing short of extraordinary. From the moment we arrived, we were greeted with warmth and professionalism. The room was impeccably clean, the bed was incredibly comfortable, and the view from our window was breathtaking.
            </TextReveal>
            <motion.div variants={slideUp} className="mt-10">
              <div className="w-12 h-[2px] bg-primary mx-auto mb-4" />
              <p className="font-body text-sm text-muted-foreground tracking-wider uppercase">
                — John and Mary P. from New York
              </p>
              <p className="font-body text-xs text-primary mt-2 tracking-[0.3em] uppercase">
                Top-Rated Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── ROOM CAROUSEL ─── */}
      <section className="py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-body text-[10px] tracking-[0.5em] uppercase text-primary"
            >
              Our Luxury
            </motion.span>
          </div>
          <div className="overflow-hidden text-center mb-12">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl"
            >
              Rooms
            </motion.h2>
          </div>
          <RoomCarousel rooms={carouselRooms} />
        </div>
      </section>

      {/* ─── GALLERY BENTO ─── */}
      <section className="py-32 bg-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-body text-[10px] tracking-[0.5em] uppercase text-primary block mb-4"
              >
                Gallery
              </motion.span>
              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="font-heading text-4xl md:text-6xl text-background"
                >
                  Moments at
                  <br />
                  <span className="text-primary italic">Timeless</span>
                </motion.h2>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-full border border-background/20 text-background font-body text-sm tracking-wider uppercase hover:bg-background hover:text-foreground transition-all duration-500 group"
              >
                View Full Gallery
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`overflow-hidden rounded-2xl ${
                  i === 0 ? "col-span-2 row-span-2" :
                  i === 3 ? "col-span-2" : ""
                }`}
              >
                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8 }}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-40 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <img
            src={hotelExterior}
            alt="Hotel exterior"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-foreground/70" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="overflow-hidden">
              <motion.h2 variants={slideUp} className="font-heading text-4xl md:text-6xl lg:text-8xl text-background leading-[1.05]">
                Ready for a
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2 variants={slideUp} className="font-heading text-4xl md:text-6xl lg:text-8xl text-primary italic leading-[1.05]">
                Timeless
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2 variants={slideUp} className="font-heading text-4xl md:text-6xl lg:text-8xl text-background leading-[1.05]">
                Experience?
              </motion.h2>
            </div>
            <motion.p variants={slideUp} className="font-body text-background/70 max-w-lg mx-auto mt-8 mb-12 text-sm md:text-base">
              Book your stay today and discover the finest hospitality in Morogoro.
            </motion.p>
            <motion.div variants={slideUp}>
              <Link
                to="/rooms"
                className="inline-flex items-center gap-3 h-16 px-12 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:shadow-[0_0_60px_rgba(184,134,11,0.4)] transition-all duration-500 group"
              >
                Reserve Your Room
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
