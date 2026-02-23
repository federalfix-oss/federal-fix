import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickProof from './components/QuickProof';
import VisualShowcase from './components/VisualShowcase';
import TrustCompliance from './components/TrustCompliance';
import Clients from './components/Clients';
import Services from './components/Services';
import Process from './components/Process';
import FeaturedProjects from './components/FeaturedProjects';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import NotFoundPage from './components/NotFoundPage';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';
import ServiceDetailPage, { ServiceNotFound } from './components/ServiceDetailPage';
import { getServiceBySlug } from './data/services';
import { getBlogPostBySlug } from './constants';
import { getProjectBySlug } from './constants';
import { getImportedPageByPath } from './data/importedPages';
import { mapImportedPageToServiceData } from './data/importedPageAdapter';
import SEO from './components/SEO';
import { trackPageView } from './lib/tracking';

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
  const serviceData = serviceSlug ? getServiceBySlug(serviceSlug) : undefined;
  const blogPostData = blogSlug ? getBlogPostBySlug(blogSlug) : undefined;
  const projectData = projectSlug ? getProjectBySlug(projectSlug) : undefined;
  const importedPage = getImportedPageByPath(pathname);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        {isHomePage && (
          <SEO
            title="Federal Fix | Renovation & Fit-Out Dubai"
            description="Dubai-based renovation and fit-out contractor specialising in shell & core, turnkey projects and villa refurbishments. Contact us for authority-ready delivery."
            canonical="https://federalfix.com/"
            ogImage="https://federalfix.com/Projects/Dubai%20Airport.jpg"
          />
        )}
        {isHomePage ? (
          <>
            <Hero />

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

            {/* <Blog /> */}
          </>
        ) : isAboutPage ? (
          <AboutPage />
        ) : isContactPage ? (
          <ContactPage />
        ) : isServicesPage ? (
          <ServicesPage />
        ) : isBlogPage ? (
          <BlogPage />
        ) : isBlogPostPage ? (
          blogPostData ? (
            <BlogPostPage slug={blogSlug} />
          ) : (
            <NotFoundPage />
          )
        ) : isProjectsPage ? (
          <ProjectsPage />
        ) : isProjectDetailPage ? (
          projectData ? (
            <ProjectDetailPage slug={projectSlug} />
          ) : (
            <NotFoundPage />
          )
        ) : isPrivacyPage ? (
          <PrivacyPolicy />
        ) : isTermsPage ? (
          <TermsOfService />
        ) : isServiceDetailPage ? (
          serviceData ? (
            <ServiceDetailPage service={serviceData} />
          ) : (
            <ServiceNotFound />
          )
        ) : importedPage ? (
          <ServiceDetailPage
            service={mapImportedPageToServiceData(importedPage)}
            canonicalPath={importedPage.path}
          />
        ) : (
          <NotFoundPage />
        )}
      </main>

      <Footer />

      <FloatingActionButton />
    </div>
  );
}

export default App;
