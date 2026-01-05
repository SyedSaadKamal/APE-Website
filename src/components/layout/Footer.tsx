import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { companyInfo } from "@/data/companyData";
import { areasOfOperation } from "@/data/areasOfOperation";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-gold">
                <span className="text-primary font-bold text-xl">AP</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold">Arabian Pearl</h3>
                <p className="text-xs text-primary-foreground/70">Engineering (Pvt.) Ltd.</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A leading multidisciplinary engineering company specializing in industrial plant construction, installation, and maintenance across the Power, Oil & Gas, Petrochemical, and Infrastructure sectors.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Areas of Operation", path: "/areas-of-operation" },
                { name: "Company Strategy", path: "/strategy" },
                { name: "HSE Policy", path: "/hse-policy" },
                { name: "Certifications", path: "/certifications" },
                { name: "Major Clients", path: "/clients" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {areasOfOperation.slice(0, 7).map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/areas-of-operation/${area.slug}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-6">
              {/* Pakistan Office */}
              <div>
                <h5 className="font-semibold text-accent mb-3">Pakistan Office</h5>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                    <span>Karachi, Pakistan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                    <a href="tel:+92-XXX-XXXXXXX" className="hover:text-accent transition-colors">
                      +92-XXX-XXXXXXX
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                    <a href="mailto:info@arabianpearl.com" className="hover:text-accent transition-colors">
                      info@arabianpearl.com
                    </a>
                  </li>
                </ul>
              </div>

              {/* Saudi Arabia Office */}
              <div>
                <h5 className="font-semibold text-accent mb-3">Saudi Arabia Office</h5>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                    <span>Kingdom of Saudi Arabia</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                    <a href="tel:+966-XX-XXX-XXXX" className="hover:text-accent transition-colors">
                      +966-XX-XXX-XXXX
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                    <a href="mailto:ksa@arabianpearl.com" className="hover:text-accent transition-colors">
                      ksa@arabianpearl.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} {companyInfo.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
