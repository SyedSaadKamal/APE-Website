import { Link } from "react-router-dom";
import { Target, Eye, Compass, Heart } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { companyInfo } from "@/data/companyData";
import aboutHeroImage from "@/assets/about-hero.jpg";

const About = () => {
  const valueIcons = [Heart, Target, Eye, Compass];

  return (
    <Layout>
      <PageHero
        title="About Arabian Pearl"
        subtitle="A leading multidisciplinary engineering company delivering excellence since 2010."
        breadcrumbItems={[{ label: "About Us" }]}
        backgroundImage={aboutHeroImage}
      />

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Company Overview
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {companyInfo.overview}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With operations spanning Pakistan and Saudi Arabia, we bring together technical expertise, industry experience, and a commitment to quality that has earned us the trust of major clients in the energy and industrial sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Purpose */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="card-industrial p-8">
              <div className="w-14 h-14 bg-gradient-accent rounded-lg flex items-center justify-center mb-6 shadow-gold">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="card-industrial p-8 bg-gradient-navy text-primary-foreground">
              <div className="w-14 h-14 bg-accent rounded-lg flex items-center justify-center mb-6 shadow-gold">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {companyInfo.mission}
              </p>
            </div>

            {/* Purpose */}
            <div className="card-industrial p-8">
              <div className="w-14 h-14 bg-gradient-maroon rounded-lg flex items-center justify-center mb-6 shadow-maroon">
                <Compass className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Purpose</h3>
              <p className="text-muted-foreground leading-relaxed">
                {companyInfo.purpose}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and action at Arabian Pearl Engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyInfo.coreValues.map((value, index) => {
              const IconComponent = valueIcons[index];
              return (
                <div key={index} className="card-industrial p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Want to Learn More?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Explore our areas of operation or get in touch with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/areas-of-operation" className="btn-accent">
              Our Services
            </Link>
            <Link to="/contact" className="bg-white text-secondary font-semibold px-6 py-3 rounded-md hover:bg-white/90 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
