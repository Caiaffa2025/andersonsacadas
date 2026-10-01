import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'Anderson Sacadas - Manutenção & Peças de Envidraçamento de Sacadas',
  description = 'Especialista em manutenção, troca de roldanas blindadas, vedação contra chuva e fabricação própria de peças para todas as marcas de sacadas desde 2014.',
  image = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&h=630&q=80',
  url,
}) => {
  useEffect(() => {
    const currentUrl = url || window.location.href;

    // Helper to update or create meta tags
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=');
        element.setAttribute(attrName.replace(/['"]/g, ''), attrVal.replace(/['"]/g, ''));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Update document title
    document.title = title;

    // Standard Description
    updateMetaTag('meta[name="description"]', 'content', description);

    // OpenGraph Tags
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:image"]', 'content', image);
    updateMetaTag('meta[property="og:url"]', 'content', currentUrl);
    updateMetaTag('meta[property="og:type"]', 'content', 'website');
    updateMetaTag('meta[property="og:site_name"]', 'content', 'Anderson Sacadas');

    // Twitter Card Tags
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[name="twitter:image"]', 'content', image);

    // Canonical link tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

  }, [title, description, image, url]);

  return null;
};
