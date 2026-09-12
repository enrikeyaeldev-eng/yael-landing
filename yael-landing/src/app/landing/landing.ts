import { Component, inject } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LANGS, LANG_PATH, Lang, MAILTO_HREF, WHATSAPP_HREF } from '../i18n/content';
import { LanguageService } from '../i18n/language.service';
import { SeoService } from '../seo/seo.service';

@Component({
  selector: 'app-landing',
  imports: [RouterLink, UpperCasePipe],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  protected readonly lang = inject(LanguageService);
  protected readonly t = this.lang.content;

  protected readonly mailto = MAILTO_HREF;
  protected readonly whatsapp = WHATSAPP_HREF;
  protected readonly langs = LANGS;
  protected readonly paths = LANG_PATH;

  constructor() {
    // The route decides the language; see LanguageService.
    const lang = inject(ActivatedRoute).snapshot.data['lang'] as Lang;
    this.lang.setFromRoute(lang);

    // Instantiating the service starts the effect that keeps <head> in step.
    inject(SeoService);
  }
}
