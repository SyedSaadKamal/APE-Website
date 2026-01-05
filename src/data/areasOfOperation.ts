import { 
  Wrench, 
  PipetteIcon, 
  Building2, 
  Flame, 
  Fuel, 
  Users, 
  ClipboardList, 
  SearchCheck, 
  HardHat, 
  Paintbrush, 
  Droplets, 
  Sun, 
  SprayCan, 
  Truck, 
  Cog, 
  Gauge, 
  Container
} from "lucide-react";

export interface AreaOfOperation {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  scopeOfServices: string[];
  standardsAndCodes?: string[];
  industriesServed: string[];
  heroImage?: string;
}

export const areasOfOperation: AreaOfOperation[] = [
  {
    id: "electro-mechanical-contracting",
    slug: "electro-mechanical-contracting",
    title: "Electro Mechanical Contracting",
    shortDescription: "Comprehensive electro-mechanical solutions for industrial facilities including installation, maintenance, and commissioning.",
    fullDescription: "Arabian Pearl Engineering provides end-to-end electro-mechanical contracting services for industrial plants. Our expertise spans from initial design through installation, testing, and commissioning of complex mechanical and electrical systems. We serve power generation, oil & gas, petrochemical, and heavy industrial sectors with precision-engineered solutions.",
    icon: "Wrench",
    scopeOfServices: [
      "Installation of rotating equipment (pumps, compressors, turbines, fans)",
      "Static equipment installation (heat exchangers, vessels, reactors)",
      "Mechanical piping systems installation",
      "Equipment alignment and balancing",
      "Commissioning and start-up support",
      "Preventive and predictive maintenance programs",
      "Shutdown and turnaround services",
      "Equipment overhaul and refurbishment"
    ],
    standardsAndCodes: [
      "ASME B31.1 / B31.3 - Power and Process Piping",
      "API 610 - Centrifugal Pumps",
      "API 617 - Axial and Centrifugal Compressors",
      "API 686 - Machinery Installation",
      "ISO 9001 Quality Management"
    ],
    industriesServed: [
      "Power Generation",
      "Oil & Gas",
      "Petrochemical",
      "Refining",
      "Fertilizer Plants",
      "Cement Industry"
    ]
  },
  {
    id: "pipeline-construction",
    slug: "pipeline-construction",
    title: "Pipeline Construction & Installation",
    shortDescription: "Complete pipeline construction services from fabrication to hydrostatic testing and commissioning.",
    fullDescription: "APE delivers comprehensive pipeline construction services including cross-country pipelines, in-plant piping, and process piping systems. Our certified welders and experienced crews ensure quality fabrication and installation adhering to international codes and client specifications.",
    icon: "PipetteIcon",
    scopeOfServices: [
      "Cross-country pipeline construction",
      "In-plant process piping installation",
      "High-pressure steam and utility piping",
      "Pipe fabrication and pre-fabrication",
      "Welding (SMAW, GTAW, FCAW, GMAW, SAW)",
      "Pipe stress analysis support",
      "Hydrostatic testing and flushing",
      "Pipeline integrity assessment"
    ],
    standardsAndCodes: [
      "ASME B31.1 - Power Piping",
      "ASME B31.3 - Process Piping",
      "ASME B31.4 - Pipeline Transportation Systems",
      "ASME B31.8 - Gas Transmission Pipelines",
      "API 1104 - Pipeline Welding",
      "AWS D1.1 - Structural Welding Code"
    ],
    industriesServed: [
      "Oil & Gas Transmission",
      "Refineries",
      "Power Plants",
      "Petrochemical Plants",
      "Water Treatment Facilities"
    ]
  },
  {
    id: "tanks-steel-structure-fabrication",
    slug: "tanks-steel-structure-fabrication",
    title: "Tanks & Steel Structure Fabrication",
    shortDescription: "Design and fabrication of storage tanks, pressure vessels, and structural steel components.",
    fullDescription: "APE specializes in the design, fabrication, erection, and maintenance of atmospheric and pressurized storage tanks, as well as heavy structural steelwork. Our in-house fabrication facilities and qualified personnel ensure precision manufacturing to international standards.",
    icon: "Building2",
    scopeOfServices: [
      "Atmospheric storage tank fabrication (API 650)",
      "Pressure vessel manufacturing (ASME Section VIII)",
      "Structural steel fabrication and erection",
      "Tank repair and maintenance",
      "Floating roof installation and repair",
      "Tank calibration and inspection",
      "Cathodic protection installation",
      "Secondary containment systems"
    ],
    standardsAndCodes: [
      "API 650 - Welded Tanks for Oil Storage",
      "API 620 - Large, Low-Pressure Storage Tanks",
      "ASME Section VIII - Pressure Vessels",
      "AWS D1.1 - Structural Welding Code",
      "AISC - Steel Construction Manual"
    ],
    industriesServed: [
      "Oil Storage Terminals",
      "Refineries",
      "Petrochemical Plants",
      "Water Treatment",
      "Chemical Industry"
    ]
  },
  {
    id: "boiler-maintenance-services",
    slug: "boiler-maintenance-services",
    title: "Boiler Maintenance Services",
    shortDescription: "Comprehensive boiler maintenance, repair, and overhaul services for industrial and utility boilers.",
    fullDescription: "APE provides expert boiler maintenance and repair services for water tube and fire tube boilers in power plants, refineries, and industrial facilities. Our services include routine maintenance, emergency repairs, tube replacements, and complete boiler overhauls.",
    icon: "Flame",
    scopeOfServices: [
      "Boiler tube replacement and repair",
      "Refractory installation and repair",
      "Pressure part inspection and repair",
      "Economizer and superheater maintenance",
      "Air preheater overhaul",
      "Burner maintenance and tuning",
      "Safety valve testing and repair",
      "Boiler chemical cleaning coordination"
    ],
    standardsAndCodes: [
      "ASME Section I - Power Boilers",
      "NBIC - National Board Inspection Code",
      "API 573 - Inspection of Fired Heaters",
      "NFPA 85 - Boiler and Combustion Systems"
    ],
    industriesServed: [
      "Thermal Power Plants",
      "Cogeneration Facilities",
      "Sugar Mills",
      "Textile Mills",
      "Refineries"
    ]
  },
  {
    id: "oil-gas-power-plant-services",
    slug: "oil-gas-power-plant-services",
    title: "Oil, Gas & Power Plant Services",
    shortDescription: "Specialized maintenance and construction services for oil & gas facilities and power generation plants.",
    fullDescription: "APE offers a complete range of services for oil & gas production facilities, refineries, and power generation plants. From routine maintenance to major shutdowns, our experienced teams deliver reliable solutions that minimize downtime and maximize plant efficiency.",
    icon: "Fuel",
    scopeOfServices: [
      "Plant shutdown and turnaround management",
      "Turbine and generator maintenance",
      "Compressor overhaul and repair",
      "Heat exchanger maintenance",
      "Valve maintenance and repair",
      "Flare system maintenance",
      "Process equipment installation",
      "Plant modification and upgrades"
    ],
    standardsAndCodes: [
      "API 510 - Pressure Vessel Inspection",
      "API 570 - Piping Inspection",
      "API 653 - Tank Inspection",
      "ASME PCC-2 - Repair of Pressure Equipment"
    ],
    industriesServed: [
      "Oil & Gas Exploration",
      "Refineries",
      "Gas Processing Plants",
      "Combined Cycle Power Plants",
      "Steam Power Plants"
    ]
  },
  {
    id: "manpower-supply",
    slug: "manpower-supply",
    title: "Manpower Supply",
    shortDescription: "Skilled and semi-skilled workforce supply for industrial projects across multiple disciplines.",
    fullDescription: "APE provides qualified technical manpower for industrial projects, including engineers, supervisors, technicians, and skilled tradesmen. Our workforce is trained in HSE practices and equipped to work in demanding industrial environments.",
    icon: "Users",
    scopeOfServices: [
      "Engineers and Project Coordinators",
      "Supervisors and Foremen",
      "Mechanical Technicians and Fitters",
      "Multi-process Welders (SMAW, GTAW, FCAW, GMAW)",
      "Pipe Fitters and Fabricators",
      "Riggers and Crane Operators",
      "Electrical and Instrument Technicians",
      "HVAC Technicians",
      "Sand Blasters and Painters",
      "Skilled and Semi-skilled Helpers"
    ],
    industriesServed: [
      "Power Generation",
      "Oil & Gas",
      "Petrochemical",
      "Construction",
      "Manufacturing"
    ]
  },
  {
    id: "engineering-consultancy",
    slug: "engineering-consultancy",
    title: "Engineering Consultancy",
    shortDescription: "Professional engineering consultancy including feasibility studies, design, and project management.",
    fullDescription: "Our consultancy division offers comprehensive engineering, design, and project management solutions across multiple disciplines. We conduct feasibility studies, detailed design, value engineering, technical audits, and construction supervision to ensure the highest levels of efficiency and cost optimization.",
    icon: "ClipboardList",
    scopeOfServices: [
      "Feasibility studies and concept design",
      "Basic and detailed engineering design",
      "Value engineering and optimization",
      "Project management consultancy",
      "Technical audits and assessments",
      "Construction supervision",
      "As-built documentation",
      "Life-cycle cost analysis"
    ],
    standardsAndCodes: [
      "ISO 9001 Quality Management",
      "Project Management Institute (PMI) Standards",
      "Industry-specific codes and standards"
    ],
    industriesServed: [
      "Power Generation",
      "Oil & Gas",
      "Petrochemical",
      "Infrastructure",
      "Manufacturing"
    ]
  },
  {
    id: "inspection-testing",
    slug: "inspection-testing",
    title: "Inspection & Testing Services",
    shortDescription: "Third-party inspection and NDT services ensuring quality, safety, and compliance.",
    fullDescription: "APE provides third-party inspection and testing services to assure quality, safety, and compliance across fabrication, construction, and operational stages. Our certified inspectors and engineers perform Non-Destructive Testing (NDT), quality control checks, weld inspection, and performance evaluation of critical assets.",
    icon: "SearchCheck",
    scopeOfServices: [
      "Non-Destructive Testing (RT, UT, MT, PT, VT)",
      "Weld inspection and quality control",
      "Pressure testing and leak detection",
      "Material verification (PMI)",
      "Dimensional inspection",
      "Third-party inspection services",
      "Pre-shipment inspection",
      "Vendor surveillance"
    ],
    standardsAndCodes: [
      "ASME Section V - NDT",
      "API 510, 570, 653 - Inspection Codes",
      "ISO 17025 - Testing Laboratory Standards",
      "AWS D1.1 - Weld Inspection",
      "ASNT SNT-TC-1A - NDT Personnel Qualification"
    ],
    industriesServed: [
      "Oil & Gas",
      "Petrochemical",
      "Power Generation",
      "Fabrication Shops",
      "Infrastructure"
    ]
  },
  {
    id: "civil-construction",
    slug: "civil-construction",
    title: "Civil Construction",
    shortDescription: "Industrial civil construction including foundations, structures, and infrastructure development.",
    fullDescription: "APE provides civil construction services for industrial facilities, including reinforced concrete foundations, equipment pads, pipe racks, control buildings, and site infrastructure. Our experienced civil teams work seamlessly with mechanical and electrical divisions to deliver integrated project solutions.",
    icon: "HardHat",
    scopeOfServices: [
      "Equipment and turbine foundations",
      "Reinforced concrete structures",
      "Pipe rack and support structures",
      "Control room and substation buildings",
      "Underground utilities and drainage",
      "Roads and paving",
      "Fireproofing applications",
      "Demolition and site preparation"
    ],
    standardsAndCodes: [
      "ACI 318 - Structural Concrete",
      "AISC - Steel Design Standards",
      "Local building codes and regulations"
    ],
    industriesServed: [
      "Power Plants",
      "Industrial Facilities",
      "Oil & Gas Plants",
      "Infrastructure Projects"
    ]
  },
  {
    id: "surface-preparation-coating",
    slug: "surface-preparation-coating",
    title: "Surface Preparation & Coating",
    shortDescription: "Industrial surface preparation, painting, and protective coating application services.",
    fullDescription: "APE offers complete surface preparation and protective coating services for industrial equipment and structures. Our qualified applicators use advanced techniques including abrasive blasting, power tool cleaning, and spray application to ensure lasting corrosion protection.",
    icon: "Paintbrush",
    scopeOfServices: [
      "Abrasive blasting (sand, grit, garnet)",
      "Ultra-high pressure water jetting",
      "Surface preparation to SSPC/NACE standards",
      "Protective coating application",
      "Epoxy and polyurethane systems",
      "Fireproofing coatings",
      "Tank lining and specialty coatings",
      "Coating inspection and quality control"
    ],
    standardsAndCodes: [
      "SSPC - Surface Preparation Standards",
      "NACE - Coating Standards",
      "ISO 8501 - Surface Preparation Grades",
      "ISO 12944 - Protective Paint Systems"
    ],
    industriesServed: [
      "Oil & Gas",
      "Petrochemical",
      "Marine",
      "Infrastructure",
      "Power Generation"
    ]
  },
  {
    id: "lube-oil-hydraulic-systems",
    slug: "lube-oil-hydraulic-systems",
    title: "Lube Oil & Hydraulic Systems",
    shortDescription: "Installation, maintenance, and flushing of lubrication and hydraulic systems.",
    fullDescription: "APE provides comprehensive services for lube oil, hydraulic, and control oil systems. From new system installation to flushing and maintenance, we ensure optimal performance of critical lubrication systems for rotating equipment.",
    icon: "Droplets",
    scopeOfServices: [
      "Lube oil system installation",
      "Hydraulic system installation and testing",
      "Oil flushing and conditioning",
      "Filter system maintenance",
      "Oil reservoir cleaning",
      "Seal oil system services",
      "Control oil system maintenance",
      "Oil analysis and monitoring"
    ],
    standardsAndCodes: [
      "API 614 - Lubrication Systems",
      "ISO 4406 - Fluid Cleanliness",
      "OEM specifications"
    ],
    industriesServed: [
      "Power Generation",
      "Oil & Gas",
      "Petrochemical",
      "Manufacturing"
    ]
  },
  {
    id: "renewable-energy-systems",
    slug: "renewable-energy-systems",
    title: "Renewable Energy Systems",
    shortDescription: "Installation and maintenance of solar, wind, and other renewable energy systems.",
    fullDescription: "APE is expanding into the renewable energy sector, providing installation and maintenance services for solar power systems, wind turbines, and energy storage solutions. We support clients in their transition to sustainable energy sources.",
    icon: "Sun",
    scopeOfServices: [
      "Solar PV system installation",
      "Solar thermal system installation",
      "Wind turbine installation support",
      "Energy storage system installation",
      "Grid connection and integration",
      "O&M services for renewable assets",
      "Performance monitoring",
      "System upgrades and optimization"
    ],
    standardsAndCodes: [
      "IEC 61215 - PV Module Standards",
      "IEC 61400 - Wind Turbine Standards",
      "Local grid connection codes"
    ],
    industriesServed: [
      "Utility Scale Solar",
      "Commercial & Industrial Solar",
      "Wind Energy",
      "Hybrid Power Systems"
    ]
  },
  {
    id: "cleaning-services",
    slug: "cleaning-services",
    title: "Industrial Cleaning Services",
    shortDescription: "Specialized industrial cleaning including hydro jetting and condenser cleaning.",
    fullDescription: "We specialize in industrial hydro jetting and condenser cleaning services for power plants and refineries. Our high-pressure hydro jetting systems efficiently remove scale, deposits, and fouling from heat exchangers, pipelines, and condensers, ensuring improved thermal performance and extended equipment life.",
    icon: "SprayCan",
    scopeOfServices: [
      "High-pressure hydro jetting",
      "Condenser tube cleaning",
      "Heat exchanger cleaning",
      "Pipeline pigging and cleaning",
      "Tank cleaning services",
      "Fin fan cooler cleaning",
      "Boiler chemical cleaning support",
      "Vacuum truck services"
    ],
    industriesServed: [
      "Power Plants",
      "Refineries",
      "Petrochemical Plants",
      "Manufacturing"
    ]
  },
  {
    id: "material-equipment-heavy-machinery",
    slug: "material-equipment-heavy-machinery",
    title: "Material, Equipment & Heavy Machinery",
    shortDescription: "Supply of industrial materials, equipment, and heavy machinery for EPC projects.",
    fullDescription: "Arabian Pearl Engineering provides a comprehensive range of industrial materials, equipment, and heavy machinery to support mechanical EPC, maintenance, and shutdown projects across multiple sectors including power, oil & gas, petrochemical, and infrastructure.",
    icon: "Truck",
    scopeOfServices: [
      "Rotating equipment supply and installation",
      "Static equipment procurement",
      "Scaffolding supply and erection",
      "Heavy machinery rental (cranes, excavators, loaders)",
      "Low bed and dump trailer services",
      "Rigging equipment supply",
      "Construction tools and equipment",
      "Logistics and transportation"
    ],
    standardsAndCodes: [
      "ASTM material standards",
      "ANSI equipment standards",
      "API equipment specifications",
      "ISO quality standards"
    ],
    industriesServed: [
      "Power Generation",
      "Oil & Gas",
      "Petrochemical",
      "Infrastructure",
      "Construction"
    ]
  },
  {
    id: "manufacturing-mechanical-components",
    slug: "manufacturing-mechanical-components",
    title: "Manufacturing of Mechanical Components",
    shortDescription: "Precision manufacturing of shafts, impellers, seals, and mechanical components.",
    fullDescription: "Arabian Pearl Engineering specializes in the design, manufacturing, and refurbishment of precision-engineered mechanical components for industrial applications. Our in-house facilities are equipped with advanced machining, casting, and grinding systems, enabling us to produce high-performance components that meet stringent quality and dimensional tolerances.",
    icon: "Cog",
    scopeOfServices: [
      "Pump shaft manufacturing",
      "Impeller manufacturing and repair",
      "Mechanical seal production",
      "Coupling and gearbox components",
      "Custom machined parts",
      "Casting and grinding services",
      "Component refurbishment",
      "Reverse engineering services"
    ],
    standardsAndCodes: [
      "ASTM material standards",
      "ASME dimensional standards",
      "ISO 9001 Quality Management",
      "OEM specifications"
    ],
    industriesServed: [
      "Power Generation",
      "Oil & Gas",
      "Petrochemical",
      "Water Treatment",
      "Manufacturing"
    ]
  },
  {
    id: "instrumentation-controls-electrical",
    slug: "instrumentation-controls-electrical",
    title: "Instrumentation, Controls & Electrical",
    shortDescription: "Complete electrical and instrumentation services including DCS, PLC, and SCADA systems.",
    fullDescription: "Arabian Pearl Engineering offers a complete range of electrical and instrumentation (E&I) services for power generation, oil & gas, petrochemical, and industrial facilities, covering design, installation, testing, commissioning, and maintenance. Our capabilities include the installation and integration of electrical and control systems.",
    icon: "Gauge",
    scopeOfServices: [
      "DCS and PLC installation and commissioning",
      "SCADA system integration",
      "HV/MV/LV electrical installations",
      "Cable laying, glanding, and termination",
      "Switchgear installation",
      "Motor control center installation",
      "Instrument calibration and loop checking",
      "Control panel fabrication",
      "Fire and safety system installation"
    ],
    standardsAndCodes: [
      "IEC 61131 - PLC Standards",
      "IEC 61439 - Switchgear Standards",
      "IEEE Electrical Standards",
      "NFPA 70 - National Electrical Code",
      "ISA Instrumentation Standards"
    ],
    industriesServed: [
      "Power Generation",
      "Oil & Gas",
      "Petrochemical",
      "Manufacturing",
      "Infrastructure"
    ]
  },
  {
    id: "machinery-equipment-trading",
    slug: "machinery-equipment-trading",
    title: "Machinery & Equipment Trading",
    shortDescription: "Trading, modification, and leasing of industrial machinery and plant equipment.",
    fullDescription: "APE engages in the trading, modification, and leasing of industrial machinery and plant equipment, including compressors, turbines, generators, and fabrication tools. We provide end-to-end solutions covering procurement, installation, and after-sales service, enabling clients to optimize asset utilization and production efficiency.",
    icon: "Container",
    scopeOfServices: [
      "Industrial machinery trading",
      "Equipment leasing and rental",
      "Used equipment refurbishment",
      "Spare parts procurement",
      "Equipment modification services",
      "After-sales service and support",
      "Asset management",
      "Technical evaluation and appraisal"
    ],
    industriesServed: [
      "Power Generation",
      "Oil & Gas",
      "Petrochemical",
      "Manufacturing",
      "Construction"
    ]
  }
];

export const getAreaBySlug = (slug: string): AreaOfOperation | undefined => {
  return areasOfOperation.find(area => area.slug === slug);
};

export const iconMap: Record<string, any> = {
  Wrench,
  PipetteIcon,
  Building2,
  Flame,
  Fuel,
  Users,
  ClipboardList,
  SearchCheck,
  HardHat,
  Paintbrush,
  Droplets,
  Sun,
  SprayCan,
  Truck,
  Cog,
  Gauge,
  Container
};
