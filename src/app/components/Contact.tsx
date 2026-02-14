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
    <section id="contact" className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/5 mb-6">
            <span className="text-sm tracking-wide text-[#00d4ff]">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-6xl tracking-tight mb-6">
            Let's Build Something <span className="text-[#00d4ff]">Together</span>
          </h2>
          <p className="text-xl text-white/60">
            Ready to start your project? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Email</div>
                    <div className="text-white">hello@klicksparkmedia.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Phone</div>
                    <div className="text-white">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#00d4ff]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1">Location</div>
                    <div className="text-white">San Francisco, CA<br />New York, NY</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 border border-white/10 rounded-2xl bg-white/[0.02] backdrop-blur-sm">
              <h4 className="text-lg mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/60">Monday - Friday</span>
                  <span className="text-white">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Saturday</span>
                  <span className="text-white">10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
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
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg focus:border-[#00d4ff] focus:outline-none transition-colors text-white"
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
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg focus:border-[#00d4ff] focus:outline-none transition-colors text-white"
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
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg focus:border-[#00d4ff] focus:outline-none transition-colors text-white"
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
                    className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg focus:border-[#00d4ff] focus:outline-none transition-colors text-white"
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
                  className="w-full px-4 py-3 bg-white/[0.05] border border-white/10 rounded-lg focus:border-[#00d4ff] focus:outline-none transition-colors text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00d4ff] text-black px-8 py-4 rounded-lg hover:bg-[#00bfe6] transition-all duration-200 hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#00d4ff]/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
