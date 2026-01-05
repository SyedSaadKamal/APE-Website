import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { companyInfo } from "@/data/companyData";
import { Award } from "lucide-react";

const Certifications = () => (
  <Layout>
    <PageHero title="Certifications & Registrations" subtitle="Our credentials demonstrate our commitment to quality and compliance." breadcrumbItems={[{ label: "Certifications" }]} />
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companyInfo.certifications.map((cert, i) => (
            <div key={i} className="card-industrial p-8">
              <div className="icon-container mb-4"><Award className="w-6 h-6 text-primary" /></div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{cert.name}</h3>
              <p className="text-muted-foreground">{cert.details}</p>
              {cert.validity && <p className="text-sm text-secondary mt-2">Valid until: {cert.validity}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Certifications;
