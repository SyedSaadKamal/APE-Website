import { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbItems?: { label: string; path?: string }[];
  backgroundImage?: string;
  children?: ReactNode;
}

const PageHero = ({
  title,
  subtitle,
  breadcrumbItems = [],
  backgroundImage,
  children,
}: PageHeroProps) => {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 hero-overlay" />
        </div>
      )}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-28">
        {breadcrumbItems.length > 0 && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        )}

        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default PageHero;
