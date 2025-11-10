import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Service for managing structured data (Schema.org) in the application
 * Helps search engines understand the content better
 */
@Injectable({
  providedIn: 'root'
})
export class StructuredDataService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  /**
   * Insert structured data script into the document head
   * @param schema - The schema object to insert
   * @param id - Unique identifier for the script tag
   */
  insertSchema(schema: any, id: string = 'structured-data'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return; // Only execute in browser
    }

    let script: HTMLScriptElement;
    let shouldAppend = false;

    script = document.getElementById(id) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      shouldAppend = true;
    }

    script.text = JSON.stringify(schema);

    if (shouldAppend) {
      document.head.appendChild(script);
    }
  }

  /**
   * Remove structured data script from the document head
   * @param id - Unique identifier for the script tag to remove
   */
  removeSchema(id: string = 'structured-data'): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const script = document.getElementById(id);
    if (script) {
      script.remove();
    }
  }

  /**
   * Get Organization schema for Cobra Club Belgium
   */
  getOrganizationSchema(): any {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cobra Club Belgium",
      "url": "https://www.cobraclub.be",
      "logo": "https://www.cobraclub.be/assets/images/logo2.jpg",
      "description": "De Belgische gemeenschap voor AC Cobra en Shelby Cobra liefhebbers",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BE"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "email": "info@cobraclub.be"
      }
    };
  }

  /**
   * Get BreadcrumbList schema
   * @param breadcrumbs - Array of breadcrumb items with name and url
   */
  getBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>): any {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  }
}
