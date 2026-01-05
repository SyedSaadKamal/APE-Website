import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle, Building2, BookOpen, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { getAreaBySlug, areasOfOperation, iconMap } from "@/data/areasOfOperation";

const AreaDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = slug ? getAreaBySlug(slug) : undefined;

  if (!area) {
    return <Navigate to="/areas-of-operation" replace />;
  }

  const IconComponent = iconMap[area.icon];

  // Get related services (excluding current)
  const relatedServices = areasOfOperation
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <Layout>
      <PageHero
        title={area.title}
        subtitle={area.shortDescription}
        breadcrumbItems={[
          { label: "Areas of Operation", path: "/areas-of-operation" },
          { label: area.title },
        ]}
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="btn-accent inline-flex items-center justify-center gap-2">
            Request a Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="tel:+92-XXX-XXXXXXX" className="btn-primary inline-flex items-center justify-center gap-2 border border-primary-foreground/20">
            <Phone className="w-5 h-5" />
            Contact Engineering Team
          </a>
        </div>
      </PageHero>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-container">
                    {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Overview
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {area.fullDescription}
                </p>
              </div>

              {/* Scope of Services */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-container-navy">
                    <CheckCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Scope of Services
                  </h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {area.scopeOfServices.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standards & Codes */}
              {area.standardsAndCodes && area.standardsAndCodes.length > 0 && (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="icon-container">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Standards & Codes
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {area.standardsAndCodes.map((code, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                      >
                        {code}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Industries Served */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-container-navy">
                    <Building2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    Industries Served
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {area.industriesServed.map((industry, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-secondary/10 text-secondary rounded-lg text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* CTA Card */}
              <div className="card-industrial bg-gradient-navy p-8 text-primary-foreground">
                <h3 className="font-display text-xl font-bold mb-4">
                  Need This Service?
                </h3>
                <p className="text-primary-foreground/80 mb-6 text-sm">
                  Contact our engineering team for a customized solution tailored to your project requirements.
                </p>
                <Link
                  to="/contact"
                  className="btn-accent w-full text-center block"
                >
                  Request Quote
                </Link>
              </div>

              {/* Related Services */}
              <div className="card-industrial p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4">
                  Related Services
                </h3>
                <div className="space-y-4">
                  {relatedServices.map((service) => {
                    const RelatedIcon = iconMap[service.icon];
                    return (
                      <Link
                        key={service.slug}
                        to={`/areas-of-operation/${service.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          {RelatedIcon && <RelatedIcon className="w-5 h-5 text-accent" />}
                        </div>
                        <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">
                          {service.title}
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  to="/areas-of-operation"
                  className="block mt-4 text-center text-sm text-secondary font-medium hover:underline"
                >
                  View All Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
            Our team is ready to discuss your {area.title.toLowerCase()} requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent">
              Contact Our Team
            </Link>
            <a href="tel:+92-XXX-XXXXXXX" className="bg-white text-secondary font-semibold px-6 py-3 rounded-md hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AreaDetail;
