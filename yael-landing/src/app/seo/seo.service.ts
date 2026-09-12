import { DOCUMENT, Injectable, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LANGS, LANG_PATH, SITE_URL } from '../i18n/content';
import { LanguageService } from '../i18n/language.service';

/**
 * Keeps the document head in step with the active language: title, description,
 * social cards, canonical and hreflang alternates, plus the `lang` attribute on
 * <html> itself — which has to match the language of the copy actually rendered,
 * for screen readers and for search engines.
 *
 * Runs during prerendering too, so the built HTML for each route ships complete.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly language = inject(LanguageService);

  constructor() {
    effect(() => {
      const t = this.language.content();
      const url = SITE_URL + LANG_PATH[this.language.lang()];
      // PNG, no SVG: WhatsApp y Facebook no renderizan tarjetas en SVG.
      const image = `${SITE_URL}/images/og-card-${this.language.lang()}.png`;

      this.doc.documentElement.lang = t.htmlLang;
      this.title.setTitle(t.metaTitle);

      this.meta.updateTag({ name: 'description', content: t.metaDescription });
      this.meta.updateTag({ name: 'theme-color', content: '#f5ead8' });

      this.meta.updateTag({ property: 'og:type', content: 'website' });
      this.meta.updateTag({ property: 'og:site_name', content: t.brand });
      this.meta.updateTag({ property: 'og:title', content: t.metaTitle });
      this.meta.updateTag({ property: 'og:description', content: t.metaDescription });
      this.meta.updateTag({ property: 'og:url', content: url });
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ property: 'og:image:type', content: 'image/png' });
      this.meta.updateTag({ property: 'og:image:width', content: '1200' });
      this.meta.updateTag({ property: 'og:image:height', content: '630' });
      this.meta.updateTag({ property: 'og:image:alt', content: t.metaTitle });
      this.meta.updateTag({
        property: 'og:locale',
        content: t.htmlLang === 'es' ? 'es_MX' : 'en_US',
      });

      this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
      this.meta.updateTag({ name: 'twitter:title', content: t.metaTitle });
      this.meta.updateTag({ name: 'twitter:description', content: t.metaDescription });
      this.meta.updateTag({ name: 'twitter:image', content: image });

      this.setLink('canonical', url);
      for (const lang of LANGS) {
        this.setLink('alternate', SITE_URL + LANG_PATH[lang], lang);
      }
      this.setLink('alternate', SITE_URL + LANG_PATH['es'], 'x-default');
    });
  }

  /** Upserts a <link> in <head>, keyed by rel + hreflang so alternates don't collide. */
  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang
      ? `link[rel="${rel}"][hreflang="${hreflang}"]`
      : `link[rel="${rel}"]:not([hreflang])`;

    let el = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!el) {
      el = this.doc.createElement('link');
      el.setAttribute('rel', rel);
      if (hreflang) el.setAttribute('hreflang', hreflang);
      this.doc.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }
}
