import React from 'react';
import SEO from './SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="bg-white pt-40 pb-24 md:pt-44 md:pb-28">
      <SEO
        title="Privacy Policy – Federal Fix"
        description="Read Federal Fix's privacy policy describing how we collect, use and protect your information."
        canonical="https://federalfix.com/privacy"
      />
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-black text-gray-900 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Your privacy is important to us. This privacy policy explains how Federal Fix
          General Contracting LLC collects, uses, discloses, and safeguards your information
          when you visit our website.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        <p className="text-gray-700 mb-4">
          We may collect personal information you voluntarily provide when contacting us or
          requesting a quote, such as name, email address, phone number, and project details.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-gray-700 mb-4">
          We use your information to respond to inquiries, improve our services, and comply
          with legal obligations. We do not sell or rent your personal information to third parties.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Cookies and Tracking</h2>
        <p className="text-gray-700 mb-4">
          Our site uses cookies to enhance user experience. You can opt out by adjusting your browser settings.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have questions about this policy, please <a href="/contact" className="text-[#bd1920] underline">contact us</a>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
