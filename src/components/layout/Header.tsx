import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { areasOfOperation } from "@/data/areasOfOperation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Areas of Operation", path: "/areas-of-operation", hasDropdown: true },
    { name: "Company Strategy", path: "/strategy" },
    
    { name: "Certifications", path: "/certifications" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-sm py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+92-XXX-XXXXXXX" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>Pakistan: +92-XXX-XXXXXXX</span>
            </a>
            <a href="tel:+966-XX-XXX-XXXX" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>KSA: +966-XX-XXX-XXXX</span>
            </a>
          </div>
          <a href="mailto:info@arabianpearl.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            <span>info@arabianpearl.com</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-card"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-gold">
                <span className="text-primary font-bold text-xl">AP</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display text-lg font-bold text-primary leading-tight">
                  Arabian Pearl
                </h1>
                <p className="text-xs text-muted-foreground">Engineering (Pvt.) Ltd.</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1",
                      location.pathname === link.path || (link.hasDropdown && location.pathname.startsWith("/areas-of-operation"))
                        ? "text-secondary bg-secondary/10"
                        : "text-foreground hover:text-secondary hover:bg-muted"
                    )}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Mega Menu for Services */}
                  {link.hasDropdown && isServicesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[800px]">
                      <div className="bg-card rounded-lg shadow-xl border border-border p-6">
                        <div className="grid grid-cols-3 gap-4">
                          {areasOfOperation.slice(0, 12).map((area) => (
                            <Link
                              key={area.slug}
                              to={`/areas-of-operation/${area.slug}`}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                            >
                              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:shadow-gold transition-shadow">
                                <span className="text-primary text-sm font-bold">
                                  {area.title.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <h4 className="font-medium text-sm text-foreground group-hover:text-secondary transition-colors">
                                  {area.title}
                                </h4>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-border">
                          <Link
                            to="/areas-of-operation"
                            className="text-secondary font-medium text-sm hover:underline"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden lg:inline-flex btn-accent text-sm"
            >
              Request Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "block px-4 py-3 rounded-md font-medium transition-colors",
                      location.pathname === link.path
                        ? "text-secondary bg-secondary/10"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <Link
                to="/contact"
                className="block btn-accent text-center mt-4"
              >
                Request Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
