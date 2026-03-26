import { motion } from "framer-motion";
import { Heart, MapPin, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Heart, title: "Warmth & Care", desc: "Every guest is family. We go above and beyond to make your stay truly special." },
  { icon: MapPin, title: "Rooted in Morogoro", desc: "Celebrating the rich culture and natural beauty of the Uluguru Mountain region." },
  { icon: Users, title: "Dedicated Team", desc: "Our passionate staff brings years of hospitality excellence to every interaction." },
];

const About = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1920&h=800&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-foreground/60" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <h1 className="font-heading text-5xl md:text-6xl text-background mb-4">About Us</h1>
        <div className="gold-divider" />
      </motion.div>
    </section>

    {/* Story */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">Our Heritage</span>
            <h2 className="font-heading text-3xl md:text-4xl mt-2 mb-6">A Story of Timeless Hospitality</h2>
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
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=700&h=900&fit=crop"
              alt="Hotel exterior"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="What We Stand For" title="Our Values" />
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center p-8 bg-background rounded-sm"
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <SectionHeading
          subtitle="Our Location"
          title="Heart of Morogoro"
          description="Located in the vibrant town of Morogoro, nestled at the foot of the majestic Uluguru Mountains. Easy access to national parks, local markets, and natural attractions."
        />
        <div className="overflow-hidden rounded-sm max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&h=500&fit=crop"
            alt="Morogoro landscape"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
