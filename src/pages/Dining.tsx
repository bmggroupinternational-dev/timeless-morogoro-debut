import { motion } from "framer-motion";
import { Clock, Utensils, Waves, Dumbbell, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&h=400&fit=crop",
  },
  {
    icon: Leaf,
    title: "Spa & Wellness",
    desc: "Rejuvenate with our signature treatments inspired by traditional African healing practices and modern wellness techniques.",
    hours: "9:00 AM – 8:00 PM",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=700&h=400&fit=crop",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    desc: "State-of-the-art equipment in a modern facility for guests who wish to maintain their fitness routine.",
    hours: "6:00 AM – 10:00 PM",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&h=400&fit=crop",
  },
];

const Dining = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=800&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="font-heading text-5xl md:text-6xl text-background mb-4">Dining & Amenities</h1>
        <div className="gold-divider" />
      </motion.div>
    </section>

    {/* Restaurant */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Culinary Excellence"
          title="The Timeless Restaurant"
          description="Savor a fusion of local Tanzanian flavors and international cuisine, prepared by our world-class chefs using the freshest local ingredients."
        />
        <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&h=500&fit=crop"
              alt="Restaurant interior"
              className="w-full h-96 object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Leisure & Wellness" title="Hotel Facilities" />
        <div className="space-y-16">
          {facilities.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "" : ""}`}
            >
              <div className={`overflow-hidden rounded-sm ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={f.image} alt={f.title} className="w-full h-72 object-cover hover:scale-105 transition-transform duration-700" />
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
