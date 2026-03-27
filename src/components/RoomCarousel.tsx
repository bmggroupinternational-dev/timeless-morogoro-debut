import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Bed, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface Room {
  name: string;
  subtitle: string;
  price: string;
  beds: string;
  guests: string;
  image: string;
}

interface RoomCarouselProps {
  rooms: Room[];
}

const RoomCarousel = ({ rooms }: RoomCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % rooms.length);
  };

  const prev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const getIndex = (offset: number) => (activeIndex + offset + rooms.length) % rooms.length;

  return (
    <div className="relative w-full">
      {/* Room name as giant background text */}
      <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h2
            key={rooms[activeIndex].name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.06, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-[8rem] md:text-[12rem] lg:text-[16rem] whitespace-nowrap text-foreground leading-none select-none"
          >
            {rooms[activeIndex].name.split(" ")[0]}
          </motion.h2>
        </AnimatePresence>
      </div>

      {/* Carousel container */}
      <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px] pt-20 md:pt-32">
        {/* Left card (small) */}
        <motion.div
          className="absolute left-0 md:left-[5%] w-[30%] md:w-[25%] z-10 cursor-pointer"
          animate={{ opacity: 0.5, scale: 0.85 }}
          whileHover={{ opacity: 0.7 }}
          onClick={prev}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={rooms[getIndex(-1)].image}
              alt={rooms[getIndex(-1)].name}
              className="w-full h-[250px] md:h-[380px] object-cover"
            />
          </div>
        </motion.div>

        {/* Center card (large) */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            initial={{ opacity: 0, scale: 0.9, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-20 w-[55%] md:w-[45%]"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={rooms[activeIndex].image}
                alt={rooms[activeIndex].name}
                className="w-full h-[320px] md:h-[480px] object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right card (small) */}
        <motion.div
          className="absolute right-0 md:right-[5%] w-[30%] md:w-[25%] z-10 cursor-pointer"
          animate={{ opacity: 0.5, scale: 0.85 }}
          whileHover={{ opacity: 0.7 }}
          onClick={next}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={rooms[getIndex(1)].image}
              alt={rooms[getIndex(1)].name}
              className="w-full h-[250px] md:h-[380px] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Info panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mt-10 text-center"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            {rooms[activeIndex].subtitle}
          </p>
          <h3 className="font-heading text-3xl md:text-5xl mb-3">
            {rooms[activeIndex].name}
          </h3>
          <div className="flex items-center justify-center gap-4 text-sm font-body text-muted-foreground mb-4">
            <span className="flex items-center gap-1">
              <Bed size={16} className="text-primary" />
              {rooms[activeIndex].beds}
            </span>
            <span className="text-primary">•</span>
            <span className="flex items-center gap-1">
              <Users size={16} className="text-primary" />
              {rooms[activeIndex].guests}
            </span>
          </div>
          <motion.p
            className="font-heading text-4xl md:text-5xl text-primary"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "backOut" }}
          >
            {rooms[activeIndex].price}
            <span className="text-base font-body text-muted-foreground">/night</span>
          </motion.p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        {/* Dots */}
        <div className="flex items-center gap-2">
          {rooms.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > activeIndex ? 1 : -1);
                setActiveIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === activeIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* View all link */}
      <div className="text-center mt-6">
        <Link
          to="/rooms"
          className="inline-flex items-center gap-2 font-body text-sm tracking-wider uppercase text-primary hover:text-hotel-dark-gold transition-colors"
        >
          Explore All Rooms →
        </Link>
      </div>
    </div>
  );
};

export default RoomCarousel;
