import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import PageHero from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our engineering team for inquiries, quotations, or partnership opportunities."
        breadcrumbItems={[{ label: "Contact Us" }]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Have a project in mind? Contact us for a consultation and let's discuss how we can help.
                </p>
              </div>

              {/* Pakistan Office */}
              <div className="card-industrial p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  Pakistan Office
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Karachi, Pakistan</p>
                  <a href="tel:+92-XXX-XXXXXXX" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Phone className="w-4 h-4" />
                    +92-XXX-XXXXXXX
                  </a>
                  <a href="mailto:info@arabianpearl.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Mail className="w-4 h-4" />
                    info@arabianpearl.com
                  </a>
                </div>
              </div>

              {/* Saudi Arabia Office */}
              <div className="card-industrial p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-secondary" />
                  Saudi Arabia Office
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Kingdom of Saudi Arabia</p>
                  <a href="tel:+966-XX-XXX-XXXX" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Phone className="w-4 h-4" />
                    +966-XX-XXX-XXXX
                  </a>
                  <a href="mailto:ksa@arabianpearl.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Mail className="w-4 h-4" />
                    ksa@arabianpearl.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card-industrial p-6">
                <h3 className="font-semibold text-lg text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-industrial p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="+92 XXX XXXXXXX"
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Company"
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service Required
                    </label>
                    <select className="w-full px-3 py-2 bg-background border border-input rounded-md text-foreground">
                      <option value="">Select a service</option>
                      <option value="electro-mechanical">Electro Mechanical Contracting</option>
                      <option value="pipeline">Pipeline Construction</option>
                      <option value="tanks">Tanks & Steel Structure Fabrication</option>
                      <option value="boiler">Boiler Maintenance</option>
                      <option value="plant">Oil, Gas & Power Plant Services</option>
                      <option value="manpower">Manpower Supply</option>
                      <option value="consultancy">Engineering Consultancy</option>
                      <option value="inspection">Inspection & Testing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      required
                      placeholder="Describe your project requirements..."
                      rows={5}
                      className="bg-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-accent w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
