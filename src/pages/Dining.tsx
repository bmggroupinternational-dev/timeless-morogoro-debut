import { motion } from "framer-motion";
import { Clock, Utensils, Waves, Dumbbell, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import hotelRobe from "@/assets/hotel-robe.jpeg";
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

const menuHighlights = [
  { name: "Grilled Tilapia", desc: "Fresh Lake Victoria tilapia with coconut rice and tropical salsa", price: "$18" },
  { name: "Nyama Choma", desc: "Slow-roasted Tanzanian beef with traditional sides", price: "$22" },
  { name: "Pilau Rice Platter", desc: "Aromatic spiced rice with grilled vegetables and raita", price: "$14" },
  { name: "Seafood Coconut Curry", desc: "Fresh prawns and fish in rich Swahili coconut curry", price: "$24" },
];

const facilities = [
  {
    icon: Waves,
    title: "Swimming Pool",
    desc: "A stunning outdoor pool surrounded by lush tropical gardens. Perfect for relaxation under the Tanzanian sun.",
    hours: "7:00 AM – 9:00 PM",
    image: hotelMountainView,
  },
  {
    icon: Leaf,
    title: "Spa & Wellness",
    desc: "Rejuvenate with our signature treatments inspired by traditional African healing practices and modern wellness techniques.",
    hours: "9:00 AM – 8:00 PM",
    image: hotelRobe,
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    desc: "State-of-the-art equipment in a modern facility for guests who wish to maintain their fitness routine.",
    hours: "6:00 AM – 10:00 PM",
    image: hotelCorridor,
  },
];

const Dining = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative h-[70vh] flex items-end overflow-hidden mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${hotelSuite})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 pb-16"
      >
        <span className="font-body text-xs tracking-[0.4em] uppercase text-primary block mb-3">Culinary Excellence</span>
        <h1 className="font-heading text-5xl md:text-7xl text-background">
          Dining &<br /><span className="text-primary italic">Amenities</span>
        </h1>
      </motion.div>
    </section>

    {/* Restaurant */}
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Culinary Excellence"
          title="The Timeless Restaurant"
          description="Savor a fusion of local Tanzanian flavors and international cuisine, prepared by our world-class chefs using the freshest local ingredients."
        />
        <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="overflow-hidden rounded-2xl">
            <img src={hotelRobe} alt="Dining experience" className="w-full h-96 object-cover hover:scale-105 transition-transform duration-1000" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
            <div className="flex items-center gap-2 text-primary mb-6">
              <Clock size={18} />
              <span className="font-body text-sm">Breakfast: 6:30–10:00 AM • Lunch: 12:00–3:00 PM • Dinner: 6:30–10:30 PM</span>
            </div>
            <h3 className="font-heading text-2xl mb-6">Menu Highlights</h3>
            <div className="space-y-4">
              {menuHighlights.map((item) => (
                <div key={item.name} className="flex justify-between items-start pb-4 border-b border-border last:border-0">
                  <div>
                    <h4 className="font-heading text-lg">{item.name}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="font-heading text-primary font-semibold ml-4 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Facilities */}
    <section className="py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Leisure & Wellness" title="Hotel Facilities" />
        <div className="space-y-16">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className={`overflow-hidden rounded-2xl ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={f.image} alt={f.title} className="w-full h-72 object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <f.icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl">{f.title}</h3>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-3">{f.desc}</p>
                <div className="flex items-center gap-2 text-primary">
                  <Clock size={16} />
                  <span className="font-body text-sm">{f.hours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Dining;
