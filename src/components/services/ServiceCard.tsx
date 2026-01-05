import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AreaOfOperation, iconMap } from "@/data/areasOfOperation";

interface ServiceCardProps {
  service: AreaOfOperation;
  variant?: "default" | "compact";
}

const ServiceCard = ({ service, variant = "default" }: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon];

  if (variant === "compact") {
    return (
      <Link
        to={`/areas-of-operation/${service.slug}`}
        className="group card-industrial p-6 flex items-start gap-4"
      >
        <div className="icon-container flex-shrink-0">
          {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors mb-2 line-clamp-1">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {service.shortDescription}
          </p>
        </div>
        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-all group-hover:translate-x-1 flex-shrink-0" />
      </Link>
    );
  }

  return (
    <Link
      to={`/areas-of-operation/${service.slug}`}
      className="group card-industrial overflow-hidden"
    >
      {/* Card Header */}
      <div className="bg-gradient-navy p-6">
        <div className="icon-container mb-4">
          {IconComponent && <IconComponent className="w-6 h-6 text-primary" />}
        </div>
        <h3 className="font-display text-xl font-bold text-primary-foreground group-hover:text-accent transition-colors">
          {service.title}
        </h3>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {service.shortDescription}
        </p>

        {/* Industries */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.industriesServed.slice(0, 3).map((industry, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
            >
              {industry}
            </span>
          ))}
        </div>

        <div className="flex items-center text-secondary font-medium text-sm group-hover:gap-2 transition-all">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
