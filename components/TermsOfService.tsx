import React from 'react';
import SEO from './SEO';

const TermsOfService: React.FC = () => {
  return (
    <section className="bg-white pt-40 pb-24 md:pt-44 md:pb-28">
      <SEO
        title="Terms of Service – Federal Fix"
        description="Review the terms and conditions governing your use of the Federal Fix website and services."
        canonical="https://federalfix.com/terms"
      />
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-black text-gray-900 mb-6">Terms of Service</h1>
        <p className="text-gray-700 mb-4">
          These terms of service govern your use of the Federal Fix website. By accessing or using
          the site, you agree to be bound by these terms.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Use of the Website</h2>
        <p className="text-gray-700 mb-4">
          You may browse and download materials for personal, non-commercial use. Redistribution or
          modification of content is prohibited without written permission.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Intellectual Property</h2>
        <p className="text-gray-700 mb-4">
          All content on this site, including text, graphics, and images, is the property of
          Federal Fix or its licensors and is protected by copyright laws.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-gray-700 mb-4">
          Federal Fix is not liable for any direct, indirect, or consequential damages arising from
          the use of this website.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Modifications</h2>
        <p className="text-gray-700 mb-4">
          We may update these terms at any time. Continued use of the site after changes implies
          acceptance of the revised terms.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          Questions about these terms should be sent to <a href="/contact" className="text-[#bd1920] underline">info@federalfix.com</a>.
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;
