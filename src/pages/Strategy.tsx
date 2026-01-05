import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { Target, TrendingUp, Users, Globe } from "lucide-react";

const Strategy = () => (
  <Layout>
    <PageHero title="Company Strategy" subtitle="Our roadmap for sustainable growth and excellence." breadcrumbItems={[{ label: "Strategy" }]} />
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Target, title: "Operational Excellence", desc: "Continuously improve processes and deliver projects on time, within budget, and to the highest quality standards." },
            { icon: TrendingUp, title: "Market Expansion", desc: "Strengthen presence in Pakistan and Saudi Arabia while exploring new regional markets." },
            { icon: Users, title: "Talent Development", desc: "Invest in training and development to build a world-class engineering workforce." },
            { icon: Globe, title: "Sustainability", desc: "Integrate sustainable practices and expand renewable energy services portfolio." }
          ].map((item, i) => (
            <div key={i} className="card-industrial p-8">
              <item.icon className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Strategy;
