import { Injectable, computed, signal } from '@angular/core';
import { CONTENT, Lang } from './content';

const STORAGE_KEY = 'yael-cmp-lang';

function readStoredLang(): Lang {
  if (typeof localStorage === 'undefined') return 'es';
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'en' ? 'en' : 'es';
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(readStoredLang());
  readonly content = computed(() => CONTENT[this.lang()]);

  set(lang: Lang): void {
    this.lang.set(lang);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
    }
  }
}
