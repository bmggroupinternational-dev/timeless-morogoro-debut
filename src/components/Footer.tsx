import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/90">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <img src="/logo.png" alt="Timeless Morogoro Hotel" className="h-16 w-auto mb-4 brightness-200" />
          <p className="font-body text-sm leading-relaxed text-background/70">
            Experience timeless elegance in the heart of Morogoro, Tanzania. Where luxury meets the warmth of African hospitality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg mb-4 text-primary">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/rooms", label: "Our Rooms" },
              { to: "/dining", label: "Dining & Amenities" },
              { to: "/gallery", label: "Gallery" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="font-body text-sm text-background/70 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg mb-4 text-primary">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
              <span className="font-body text-sm text-background/70">Morogoro, Tanzania</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <span className="font-body text-sm text-background/70">+255 XXX XXX XXX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <span className="font-body text-sm text-background/70">info@timelessmorogoro.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-background/10 text-center">
        <p className="font-body text-xs text-background/50">
          © {new Date().getFullYear()} Timeless Morogoro Hotel. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
