import React, { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import SEO from './components/SEO';
import { trackPageView } from './lib/tracking';

const QuickProof = lazy(() => import('./components/QuickProof'));
const VisualShowcase = lazy(() => import('./components/VisualShowcase'));
const TrustCompliance = lazy(() => import('./components/TrustCompliance'));
const Clients = lazy(() => import('./components/Clients'));
const Services = lazy(() => import('./components/Services'));
const Process = lazy(() => import('./components/Process'));
const FeaturedProjects = lazy(() => import('./components/FeaturedProjects'));
const Stats = lazy(() => import('./components/Stats'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Industries = lazy(() => import('./components/Industries'));
const Contact = lazy(() => import('./components/Contact'));

const AboutPage = lazy(() => import('./components/AboutPage'));
const ContactPage = lazy(() => import('./components/ContactPage'));
const ServicesPage = lazy(() => import('./components/ServicesPage'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));
const BlogPage = lazy(() => import('./components/BlogPage'));
const BlogPostPage = lazy(() => import('./components/BlogPostPage'));
const ProjectsPage = lazy(() => import('./components/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./components/ProjectDetailPage'));
const ServiceRoutePage = lazy(() => import('./components/ServiceRoutePage'));
const UnknownPathPage = lazy(() => import('./components/UnknownPathPage'));

function App() {
  const pathname =
    typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') || '/' : '/';
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';
  const isContactPage = pathname === '/contact';
  const isServicesPage = pathname === '/services';
  const isBlogPage = pathname === '/blog';
  const isBlogPostPage = pathname.startsWith('/blog/');
  const blogSlug = isBlogPostPage ? pathname.replace('/blog/', '') : '';
  const isProjectsPage = pathname === '/projects';
  const isProjectDetailPage = pathname.startsWith('/projects/');
  const projectSlug = isProjectDetailPage ? pathname.replace('/projects/', '') : '';
  const isPrivacyPage = pathname === '/privacy';
  const isTermsPage = pathname === '/terms';
  const isServiceDetailPage = pathname.startsWith('/services/');
  const serviceSlug = isServiceDetailPage ? pathname.replace('/services/', '') : '';

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {isHomePage ? (
          <>
            <SEO
              title="Federal Fix | Renovation & Fit-Out Dubai"
              description="Dubai-based renovation and fit-out contractor specialising in shell & core, turnkey projects and villa refurbishments. Contact us for authority-ready delivery."
              canonical="https://federalfix.com/"
              ogImage="https://federalfix.com/Projects/Dubai%20Airport.jpg"
            />
            <Hero />

            <Suspense fallback={null}>
              <QuickProof />
              <Stats />
              <VisualShowcase />
              <TrustCompliance />

              <Services />
              <Industries />

              <Process />

              <FeaturedProjects />

              {/* <BeforeAfter /> */}
              <Clients />

              <Testimonials />

              <Contact />
              <FAQ />
            </Suspense>
          </>
        ) : (
          <Suspense fallback={null}>
            {isAboutPage ? (
              <AboutPage />
            ) : isContactPage ? (
              <ContactPage />
            ) : isServicesPage ? (
              <ServicesPage />
            ) : isBlogPage ? (
              <BlogPage />
            ) : isBlogPostPage ? (
              <BlogPostPage slug={blogSlug} />
            ) : isProjectsPage ? (
              <ProjectsPage />
            ) : isProjectDetailPage ? (
              <ProjectDetailPage slug={projectSlug} />
            ) : isPrivacyPage ? (
              <PrivacyPolicy />
            ) : isTermsPage ? (
              <TermsOfService />
            ) : isServiceDetailPage ? (
              <ServiceRoutePage slug={serviceSlug} />
            ) : (
              <UnknownPathPage pathname={pathname} />
            )}
          </Suspense>
        )}
      </main>

      <Footer />

      <FloatingActionButton />
    </div>
  );
}

export default App;
