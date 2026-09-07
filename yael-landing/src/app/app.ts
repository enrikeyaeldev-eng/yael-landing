import { Component, inject } from '@angular/core';
import { LanguageService } from './i18n/language.service';
import { MAILTO_HREF } from './i18n/content';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly lang = inject(LanguageService);
  protected readonly t = this.lang.content;
  protected readonly mailto = MAILTO_HREF;
}
