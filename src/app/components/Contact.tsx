import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background mb-6">
            <span className="text-sm tracking-wide text-muted-foreground">START HERE</span>
          </div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6">
            Bring KlickSpark Media the <span className="text-white/75">next build</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tell us whether you need a Shopify storefront, a SaaS interface, or a stronger WordPress system. We will respond with a tighter next step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div>
              <h3 className="mb-8 text-2xl">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border bg-white/[0.03]">
                    <Mail className="w-5 h-5 text-white/85" />
                  </div>
                  <div>
                    <div className="mb-1 text-sm text-muted-foreground">Email</div>
                    <div className="text-white">hello@klicksparkmedia.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border bg-white/[0.03]">
                    <Phone className="w-5 h-5 text-white/85" />
                  </div>
                  <div>
                    <div className="mb-1 text-sm text-muted-foreground">Focus</div>
                    <div className="text-white">Shopify, SaaS, WordPress</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border bg-white/[0.03]">
                    <MapPin className="w-5 h-5 text-white/85" />
                  </div>
                  <div>
                    <div className="mb-1 text-sm text-muted-foreground">Working Style</div>
                    <div className="text-white">Remote studio<br />Focused project delivery</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border bg-background/70 p-6 backdrop-blur-sm">
              <h4 className="text-lg mb-4">What To Include</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Platform</span>
                  <span className="text-white">Shopify / SaaS / WP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Stage</span>
                  <span className="text-white">New build / redesign</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Need</span>
                  <span className="text-white">Design / dev / system</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/80 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-white/[0.04] px-4 py-3 text-white transition-colors focus:border-white/30 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-white/80 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-white/[0.04] px-4 py-3 text-white transition-colors focus:border-white/30 focus:outline-none"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm text-white/80 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-white/[0.04] px-4 py-3 text-white transition-colors focus:border-white/30 focus:outline-none"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm text-white/80 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-white/[0.04] px-4 py-3 text-white transition-colors focus:border-white/30 focus:outline-none"
                    style={{ colorScheme: "dark" }}
                  >
                    <option value="">Select budget range</option>
                    <option value="10k-25k">$10k - $25k</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-white/80 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full resize-none rounded-lg border bg-white/[0.04] px-4 py-3 text-white transition-colors focus:border-white/30 focus:outline-none"
                  placeholder="Tell us what you are building, what is not working, and what outcome you need."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-black transition-all duration-200 hover:bg-white/90"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 right-1/4 -z-10 h-96 w-96 rounded-full bg-white/[0.03] blur-[120px]"></div>
    </section>
  );
}
