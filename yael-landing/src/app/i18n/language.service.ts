import { Injectable, computed, signal } from '@angular/core';
import { CONTENT, LANG_PATH, Lang } from './content';

/**
 * The active language.
 *
 * Each language is a real prerendered route ('/' and '/en'), so the language is
 * decided by the URL rather than by client-side state. That keeps the server-rendered
 * HTML and the hydrated DOM identical — no flash of the wrong language on load — and
 * lets both languages be indexed and linked to independently.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly current = signal<Lang>('es');

  readonly lang = this.current.asReadonly();
  readonly content = computed(() => CONTENT[this.current()]);

  /** The language the toggle switches to, and the path it lives at. */
  readonly other = computed<Lang>(() => (this.current() === 'es' ? 'en' : 'es'));
  readonly otherPath = computed(() => LANG_PATH[this.other()]);

  /** Called once per navigation, from the route's `data.lang`. */
  setFromRoute(lang: Lang): void {
    this.current.set(lang);
  }
}
