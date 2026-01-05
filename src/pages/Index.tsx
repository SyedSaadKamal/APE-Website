import { Link } from "react-router-dom";
import { ArrowRight, Award, Globe, Users, Briefcase } from "lucide-react";
import { companyInfo } from "@/data/companyData";
import { areasOfOperation } from "@/data/areasOfOperation";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/services/ServiceCard";
import heroImage from "@/assets/hero-industrial.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Content */}
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent text-sm font-medium">
                Established {companyInfo.established} | Pakistan & Saudi Arabia
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Engineering Excellence,
              <span className="text-gradient-gold"> Delivered Globally</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl leading-relaxed">
              A leading multidisciplinary engineering company specializing in industrial plant construction, installation, and maintenance across the Power, Oil & Gas, Petrochemical, and Infrastructure sectors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/areas-of-operation" className="btn-accent inline-flex items-center justify-center gap-2">
                Explore Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 border border-primary-foreground/20">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-card/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {companyInfo.statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-secondary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
                <Award className="w-4 h-4 text-secondary" />
                <span className="text-secondary text-sm font-medium">About Arabian Pearl</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building the Future of Industrial Engineering
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {companyInfo.overview}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {companyInfo.coreValues.slice(0, 2).map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-industrial p-6 bg-gradient-navy text-primary-foreground">
                <Globe className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">Global Presence</h3>
                <p className="text-sm text-primary-foreground/70">
                  Operations in Pakistan and Saudi Arabia
                </p>
              </div>
              <div className="card-industrial p-6">
                <Users className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Expert Team</h3>
                <p className="text-sm text-muted-foreground">
                  Certified engineers and technicians
                </p>
              </div>
              <div className="card-industrial p-6">
                <Briefcase className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">500+ Projects</h3>
                <p className="text-sm text-muted-foreground">
                  Successful project deliveries
                </p>
              </div>
              <div className="card-industrial p-6 bg-gradient-maroon text-white">
                <Award className="w-10 h-10 text-gold-400 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Certified</h3>
                <p className="text-sm text-white/70">
                  PEC, KCCI, NTN registered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-6">
              <Briefcase className="w-4 h-4 text-secondary" />
              <span className="text-secondary text-sm font-medium">Our Expertise</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Areas of Operation
            </h2>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive engineering solutions across multiple disciplines, delivering excellence in construction, installation, and maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areasOfOperation.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/areas-of-operation"
              className="btn-maroon inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're proud to partner with some of the world's leading companies in the energy and industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {companyInfo.clients.slice(0, 12).map((client, index) => (
              <div
                key={index}
                className="card-industrial p-6 flex items-center justify-center min-h-[100px]"
              >
                <span className="text-sm font-medium text-muted-foreground text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
            >
              See All Our Clients
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Contact our engineering team today to discuss your requirements and get a customized solution for your industrial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent inline-flex items-center justify-center gap-2">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/areas-of-operation" className="btn-primary inline-flex items-center justify-center gap-2 border border-primary-foreground/20">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
