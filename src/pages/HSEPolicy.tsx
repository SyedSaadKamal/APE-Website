import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { companyInfo } from "@/data/companyData";
import { Shield } from "lucide-react";

const HSEPolicy = () => (
  <Layout>
    <PageHero title="HSE Policy" subtitle="Health, Safety & Environment is our highest priority." breadcrumbItems={[{ label: "About Us", path: "/about" }, { label: "HSE Policy" }]} />
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="card-industrial p-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-container"><Shield className="w-6 h-6 text-primary" /></div>
            <h2 className="font-display text-2xl font-bold text-foreground">Our Commitment</h2>
          </div>
          <div className="prose prose-lg text-muted-foreground">
            {companyInfo.hsePolicy.split('\n\n').map((p, i) => <p key={i} className="mb-4 leading-relaxed">{p}</p>)}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default HSEPolicy;
