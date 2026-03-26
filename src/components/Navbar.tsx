import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/dining", label: "Dining & Amenities" },
  { to: "/gallery", label: "Gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Timeless Morogoro Hotel" className="h-14 w-auto" />
          <div className="hidden sm:block">
            <span className="font-heading text-lg font-semibold text-foreground tracking-wide">
              Timeless Morogoro
            </span>
            <span className="block text-xs text-primary font-body tracking-[0.2em] uppercase">Hotel</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`font-body text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary font-bold" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/rooms"
          className="hidden lg:inline-flex h-10 px-6 items-center justify-center rounded-sm bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase hover:bg-hotel-dark-gold transition-colors"
        >
          Book Now
        </Link>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-up">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`font-body text-sm tracking-wide uppercase transition-colors hover:text-primary ${
                    location.pathname === link.to ? "text-primary font-bold" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/rooms"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 px-6 items-center justify-center rounded-sm bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
