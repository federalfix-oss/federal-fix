
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { trackLead } from '../lib/tracking';

const Contact: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation();
  const [statusMessage, setStatusMessage] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    serviceNeeded: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trackLead('contact_section_form_submit', {
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

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    window.location.href = `mailto:info@federalfix.com?subject=${mailSubject}&body=${mailBody}`;
    setStatusMessage('Thank you. Your inquiry has been prepared for WhatsApp and email. Our team will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" ref={elementRef} className="relative overflow-hidden bg-[#111] py-24">
      {/* Background decoration */}
      <div className={`absolute top-0 left-0 w-64 h-64 bg-[#bd1920]/10 rounded-full blur-3xl -ml-32 -mt-32 ${
        isVisible ? 'animate-[fadeIn_1s_ease-out_forwards]' : 'opacity-0'
      }`} />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#bd1920]/10 blur-3xl animate-[driftX_11s_ease-in-out_infinite]" />
      <div className="fx-grid absolute inset-0 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Content */}
          <div className={`text-white ${isVisible ? 'animate-[slideUp_0.7s_ease-out_forwards]' : 'opacity-0'}`}>
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-[#bd1920] mb-6 animate-[fadeIn_0.6s_ease-out_forwards]">Get Started</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight animate-[slideUp_0.8s_ease-out_forwards]">Ready to start <br />your project?</h3>
            <p className="text-gray-400 text-xl mb-12 max-w-lg leading-relaxed animate-[slideUp_0.95s_ease-out_forwards]">
              Request a free site visit or a customized BOQ estimate today. Our team typically responds within 4 working hours.
            </p>
            
            <div className="space-y-8">
              <div className={`flex items-center gap-6 group ${isVisible ? 'animate-[slideUp_1s_ease-out_forwards]' : 'opacity-0'}`}>
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-gray-800 flex items-center justify-center text-[#bd1920] group-hover:bg-[#bd1920] group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Call Us</span>
                  <a href="tel:+971543004006" className="block text-xl font-bold hover:text-[#ff8c90] transition-colors">+971 54 300 4006</a>
                </div>
              </div>
              <div className={`flex items-center gap-6 group ${isVisible ? 'animate-[slideUp_1.1s_ease-out_forwards]' : 'opacity-0'}`}>
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-gray-800 flex items-center justify-center text-[#bd1920] group-hover:bg-[#bd1920] group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Email Us</span>
                  <a href="mailto:info@federalfix.com" className="text-xl font-bold hover:text-[#ff8c90] transition-colors">info@federalfix.com</a>
                </div>
              </div>
              <div className={`flex items-center gap-6 group ${isVisible ? 'animate-[slideUp_1.2s_ease-out_forwards]' : 'opacity-0'}`}>
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] border border-gray-800 flex items-center justify-center text-[#bd1920] group-hover:bg-[#bd1920] group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-gray-500 text-xs font-black uppercase tracking-widest mb-1">Visit Us</span>
                  <span className="text-xl font-bold">1110, Clover Bay Tower, Al Abraj St - Business Bay.</span>
                  <span className="text-xl font-bold">P.O.Box 72177, Dubai</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form Card */}
          <div className={`relative ${isVisible ? 'animate-[slideUp_0.95s_ease-out_forwards]' : 'opacity-0'}`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#bd1920] to-red-400 rounded-[2.5rem] blur opacity-25" />
            <div className="fx-sheen relative rounded-[2.5rem] bg-white p-8 shadow-2xl md:p-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-8">Request a Quote</h4>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="quick-name" className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Name</label>
                    <input id="quick-name" name="name" value={formData.name} onChange={handleChange} required type="text" className="w-full bg-[#f8f8f8] border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#bd1920] transition-all" placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="quick-phone" className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                    <input id="quick-phone" name="phone" value={formData.phone} onChange={handleChange} required type="tel" className="w-full bg-[#f8f8f8] border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#bd1920] transition-all" placeholder="+971 50 000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="quick-email" className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Email</label>
                  <input id="quick-email" name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full bg-[#f8f8f8] border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#bd1920] transition-all" placeholder="your@email.com" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="quick-project-type" className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Project Type</label>
                    <select id="quick-project-type" name="projectType" value={formData.projectType} onChange={handleChange} required className="w-full bg-[#f8f8f8] border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#bd1920] transition-all appearance-none">
                      <option value="" disabled>Select project type</option>
                      <option>Office</option>
                      <option>Villa</option>
                      <option>Retail</option>
                      <option>Restaurant</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quick-service-needed" className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Service Needed</label>
                    <select id="quick-service-needed" name="serviceNeeded" value={formData.serviceNeeded} onChange={handleChange} required className="w-full bg-[#f8f8f8] border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#bd1920] transition-all appearance-none">
                      <option value="" disabled>Select service</option>
                      <option>Shell & Core</option>
                      <option>Turnkey Fit-Out</option>
                      <option>Renovation</option>
                      <option>Annual Maintenance Contracts</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="quick-message" className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Message</label>
                  <textarea id="quick-message" name="message" value={formData.message} onChange={handleChange} required className="w-full bg-[#f8f8f8] border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#bd1920] transition-all min-h-[120px]" placeholder="Tell us about your project requirements..." />
                </div>
                <button className="w-full bg-[#bd1920] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#a1151a] transition-all transform active:scale-[0.98] shadow-lg shadow-red-900/20">
                  Get Quote
                </button>
                {statusMessage ? <p className="text-sm font-semibold text-green-700">{statusMessage}</p> : null}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
