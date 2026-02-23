import React from 'react';
import { ArrowRight } from 'lucide-react';
import SEO from './SEO';

const NotFoundPage: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white pb-24 pt-40 text-center md:pb-28 md:pt-44">
      <SEO
        title="Page Not Found - Federal Fix"
        description="The page you were looking for does not exist or has been moved."
        canonical="https://federalfix.com/404"
        noIndex
      />
      <h1 className="mb-6 text-6xl font-black text-gray-900">404</h1>
      <p className="mb-8 text-xl text-gray-600">
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <a
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-[#bd1920] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#a1151a]"
      >
        Go back home <ArrowRight className="h-5 w-5" />
      </a>
    </section>
  );
};

export default NotFoundPage;
