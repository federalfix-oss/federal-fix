import React, { useState } from "react";
import { CheckCircle2, Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import SEO from "./SEO";
import { trackLead } from "../lib/tracking";

const ContactPage: React.FC = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    serviceNeeded: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trackLead("contact_page_form_submit", {
      project_type: formData.projectType,
      service_needed: formData.serviceNeeded,
    });

    const whatsappText = `New inquiry from federalfix.com
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Project Type: ${formData.projectType}
Service Needed: ${formData.serviceNeeded}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/971543004006?text=${encodeURIComponent(whatsappText)}`;
    const mailSubject = encodeURIComponent(`New Website Inquiry - ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Project Type: ${formData.projectType}
Service Needed: ${formData.serviceNeeded}
Message: ${formData.message}`
    );

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    window.location.href = `mailto:info@federalfix.com?subject=${mailSubject}&body=${mailBody}`;
    setStatusMessage("Thank you. Your inquiry has been prepared for WhatsApp and email. Our team will contact you shortly.");
  };

  return (
    <section className="relative overflow-hidden bg-[#050608] pb-24 pt-36 md:pb-28 md:pt-44">
      <SEO
        title="Contact Federal Fix - Get a Quote"
        description="Reach out to Federal Fix for expert fit-out and renovation services in Dubai. Fill the form or use WhatsApp/email."
        canonical="https://federalfix.com/contact"
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(189,25,32,0.28),transparent_36%),radial-gradient(circle_at_88%_8%,rgba(255,118,64,0.14),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(189,25,32,0.14),transparent_46%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl md:mb-12 md:p-10">
          <span className="inline-flex rounded-full border border-[#bd1920]/50 bg-[#bd1920]/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#ff6b70]">
            Contact Federal Fix
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Plan your fit-out with a premium execution partner in Dubai.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Share your scope and timeline. Our team provides a practical project direction with clear steps,
            realistic budget guidance, and fast response.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
              <p className="text-2xl font-black text-white">4 hrs</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-400">Avg. response</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
              <p className="text-2xl font-black text-white">24/7</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-400">WhatsApp support</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
              <p className="text-2xl font-black text-white">Turnkey</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-400">Fit-out delivery</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <aside className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl lg:col-span-2 md:p-8">
            <h2 className="text-2xl font-black text-white">Direct Contact</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              Reach our team directly for quotes, site visits, and technical consultations.
            </p>

            <div className="mt-7 space-y-5">
              <a
                href="tel:+971543004006"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition-all hover:border-[#bd1920]/60 hover:bg-[#bd1920]/10"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#bd1920]/20 text-[#ff6b70]">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gray-400">Phone</span>
                  <span className="mt-1 block text-lg font-bold text-white">+971 54 300 4006</span>
                </span>
              </a>

              <a
                href="mailto:info@federalfix.com"
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4 transition-all hover:border-[#bd1920]/60 hover:bg-[#bd1920]/10"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#bd1920]/20 text-[#ff6b70]">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gray-400">Email</span>
                  <span className="mt-1 block text-lg font-bold text-white">info@federalfix.com</span>
                </span>
              </a>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#bd1920]/20 text-[#ff6b70]">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gray-400">Office</span>
                  <span className="mt-1 block text-base font-semibold text-white">1110, Clover Bay Tower, Al Abraj St - Business Bay</span>
                  <span className="block text-base font-semibold text-white">P.O.Box 72177, Dubai</span>
                </span>
              </div>
            </div>

            <div className="mt-7 space-y-3 border-t border-white/10 pt-6">
              <p className="flex items-center gap-2 text-sm text-gray-300">
                <Clock3 className="h-4 w-4 text-[#ff6b70]" />
                Response window: within 4 working hours
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-300">
                <ShieldCheck className="h-4 w-4 text-[#ff6b70]" />
                Licensed team with compliance-first execution
              </p>
              <p className="flex items-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="h-4 w-4 text-[#ff6b70]" />
                BOQ and scope review available on request
              </p>
            </div>
          </aside>

          <div className="rounded-3xl border border-white/10 bg-white p-7 shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:col-span-3 md:p-10">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-black text-gray-900 md:text-3xl">Request a Quote</h2>
                <p className="mt-2 text-sm text-gray-600">Send your details and we will prepare the best execution route for your project.</p>
              </div>
              <span className="hidden rounded-full border border-[#bd1920]/20 bg-[#fff3f3] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#bd1920] sm:inline-flex">
                Priority Support
              </span>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-3.5 text-gray-900 placeholder:text-gray-500 focus:border-[#bd1920] focus:outline-none"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  type="tel"
                  placeholder="+971 50 000 0000"
                  className="w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-3.5 text-gray-900 placeholder:text-gray-500 focus:border-[#bd1920] focus:outline-none"
                />
              </div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-3.5 text-gray-900 placeholder:text-gray-500 focus:border-[#bd1920] focus:outline-none"
              />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-3.5 text-gray-900 focus:border-[#bd1920] focus:outline-none"
                >
                  <option value="" disabled>
                    Project Type
                  </option>
                  <option>Office</option>
                  <option>Villa</option>
                  <option>Retail</option>
                  <option>Restaurant</option>
                </select>
                <select
                  name="serviceNeeded"
                  value={formData.serviceNeeded}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-3.5 text-gray-900 focus:border-[#bd1920] focus:outline-none"
                >
                  <option value="" disabled>
                    Service Needed
                  </option>
                  <option>Shell & Core</option>
                  <option>Turnkey Fit-Out</option>
                  <option>Renovation</option>
                  <option>Annual Maintenance Contracts</option>
                </select>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project requirements..."
                className="min-h-[140px] w-full rounded-xl border border-gray-200 bg-[#f8f8f8] px-4 py-3.5 text-gray-900 placeholder:text-gray-500 focus:border-[#bd1920] focus:outline-none"
              />
              <button className="w-full rounded-xl bg-[#bd1920] py-3.5 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#a1151a] hover:shadow-[0_12px_30px_rgba(189,25,32,0.35)]">
                Submit Inquiry
              </button>
              {statusMessage ? <p className="text-sm font-semibold text-green-700">{statusMessage}</p> : null}
            </form>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl md:mt-12 md:p-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-black text-white">Find Us on Map</h2>
            <a
              href="https://maps.google.com/?q=Federal+Fix+Technical+Services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff6b70] hover:text-[#ff858a]"
            >
              Open in Google Maps
            </a>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.229847597644!2d55.26968900000001!3d25.188867699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f1f5549267120d%3A0xcae0e7ea410327be!2sFederal%20Fix%20Technical%20Services!5e1!3m2!1sen!2sae!4v1771313535026!5m2!1sen!2sae"
            className="h-[320px] w-full rounded-2xl md:h-[460px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Federal Fix Technical Services location map"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
