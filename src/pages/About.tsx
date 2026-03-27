import { motion } from "framer-motion";
import { Heart, MapPin, Users, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import hotelExterior from "@/assets/hotel-exterior.jpeg";
import hotelCorridor from "@/assets/hotel-corridor.jpeg";
import hotelMountainView from "@/assets/hotel-mountain-view.jpeg";
import hotelSuite from "@/assets/hotel-suite.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const values = [
  { icon: Heart, title: "Warmth & Care", desc: "Every guest is family. We go above and beyond to make your stay truly special." },
  { icon: MapPin, title: "Rooted in Morogoro", desc: "Celebrating the rich culture and natural beauty of the Uluguru Mountain region." },
  { icon: Users, title: "Dedicated Team", desc: "Our passionate staff brings years of hospitality excellence to every interaction." },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative h-[70vh] flex items-end overflow-hidden mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hotelExterior})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 pb-16"
      >
        <span className="font-body text-xs tracking-[0.4em] uppercase text-primary block mb-3">Our Heritage</span>
        <h1 className="font-heading text-5xl md:text-7xl text-background">About Us</h1>
      </motion.div>
    </section>

    {/* Story */}
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Our Heritage</span>
            <h2 className="font-heading text-3xl md:text-5xl mt-2 mb-6">A Story of Timeless Hospitality</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Founded with a vision to bring world-class hospitality to the heart of Tanzania, Timeless Morogoro Hotel stands as a beacon of elegance and comfort. Our journey began with a simple belief: that every traveler deserves an experience that transcends the ordinary.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Situated at the base of the stunning Uluguru Mountains, our hotel draws inspiration from the breathtaking natural beauty that surrounds us. Every corner of our property reflects the harmony between modern luxury and the timeless charm of East African culture.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Whether you're here for business or leisure, a weekend getaway or an extended stay, we promise an experience that will stay with you long after you leave.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1} className="overflow-hidden rounded-2xl">
            <img src={hotelCorridor} alt="Hotel corridor" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="What We Stand For" title="Our Values" />
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="text-center p-8 bg-background rounded-2xl hover:shadow-xl transition-shadow duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon size={26} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl mb-3">{v.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Location */}
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="overflow-hidden rounded-2xl">
            <img src={hotelMountainView} alt="Uluguru Mountains view" className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-1000" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Our Location</span>
            <h2 className="font-heading text-3xl md:text-4xl mt-2 mb-6">Heart of Morogoro</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Located in the vibrant town of Morogoro, nestled at the foot of the majestic Uluguru Mountains. Easy access to national parks, local markets, and natural attractions.
            </p>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 h-12 px-8 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-hotel-dark-gold transition-all duration-300 group"
            >
              Explore Rooms
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
