import React from 'react';
import SEO from './SEO';
import { getBlogPostBySlug } from '../constants';

const RELATED_LINKS_BY_POST: Record<string, { label: string; href: string }[]> = {
  'office-fit-out-trends-2024': [
    { label: 'Office Fit-Out Service', href: '/services/office-fit-out' },
    { label: 'Recent Fit-Out Projects', href: '/projects' },
  ],
  'dubai-authority-approvals-guide': [
    { label: 'Shell & Core Fit-Out', href: '/services/shell-core-fit-out' },
    { label: 'Contact Our Team', href: '/contact' },
  ],
  'villa-renovation-budget-planning': [
    { label: 'Villa Renovation Service', href: '/services/villa-renovation' },
    { label: 'Request a Project Quote', href: '/contact' },
  ],
};

const BlogPostPage: React.FC<{ slug: string }> = ({ slug }) => {
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return (
      <section className="bg-white pt-40 pb-24 text-center">
        <SEO
          title="Article Not Found - Federal Fix"
          description="The requested blog article cannot be found."
          canonical="https://federalfix.com/blog"
          noIndex
        />
        <h1 className="text-4xl font-black text-gray-900">Article Not Found</h1>
        <p className="mt-4 text-gray-600">
          We couldn&apos;t locate this article. Return to the blog list below.
        </p>
        <a
          href="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#bd1920] px-6 py-3 font-bold text-white hover:bg-[#a1151a]"
        >
          Back to Blog
        </a>
      </section>
    );
  }

  return (
    <article className="bg-white pt-40 pb-24 md:pt-44 md:pb-28">
      <SEO
        title={`${post.title} - Federal Fix`}
        description={post.excerpt}
        canonical={`https://federalfix.com/blog/${post.slug}`}
        ogImage={post.image}
      />
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-4 text-4xl font-black text-gray-900">{post.title}</h1>
        <div className="mb-8 flex items-center gap-4 text-sm text-gray-500">
          <span>{post.date}</span>
          <span>&bull;</span>
          <span>{post.readTime}</span>
        </div>
        <img src={post.image} alt={post.title} className="mb-8 w-full rounded-2xl" loading="lazy" />
        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.fullContent }}
        />
        <div className="mt-10 rounded-2xl border border-gray-200 bg-[#fafafa] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">Related Pages</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {(RELATED_LINKS_BY_POST[post.slug] || []).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-[#bd1920] hover:text-[#bd1920]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <a
          href="/blog"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#bd1920] px-6 py-3 font-bold text-white hover:bg-[#a1151a]"
        >
          Back to Blog
        </a>
      </div>
    </article>
  );
};

export default BlogPostPage;
