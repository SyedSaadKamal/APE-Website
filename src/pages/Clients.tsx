import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { companyInfo } from "@/data/companyData";

const Clients = () => (
  <Layout>
    <PageHero title="Major Clients" subtitle="Trusted by industry leaders worldwide." breadcrumbItems={[{ label: "Clients" }]} />
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companyInfo.clients.map((client, i) => (
            <div key={i} className="card-industrial p-8 flex items-center justify-center min-h-[120px]">
              <span className="font-semibold text-muted-foreground text-center">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Clients;
