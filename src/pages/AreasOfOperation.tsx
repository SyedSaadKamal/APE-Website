import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import ServiceCard from "@/components/services/ServiceCard";
import { areasOfOperation } from "@/data/areasOfOperation";

const AreasOfOperation = () => {
  return (
    <Layout>
      <PageHero
        title="Areas of Operation"
        subtitle="Comprehensive engineering solutions across multiple disciplines, delivering excellence in construction, installation, and maintenance."
        breadcrumbItems={[{ label: "Areas of Operation" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areasOfOperation.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AreasOfOperation;
