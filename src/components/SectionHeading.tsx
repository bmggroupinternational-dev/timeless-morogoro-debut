import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12"
  >
    {subtitle && (
      <span className={`font-body text-xs tracking-[0.3em] uppercase ${light ? "text-primary" : "text-primary"}`}>
        {subtitle}
      </span>
    )}
    <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl mt-2 mb-4 ${light ? "text-background" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="gold-divider mb-4" />
    {description && (
      <p className={`font-body text-base max-w-2xl mx-auto leading-relaxed ${light ? "text-background/80" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
