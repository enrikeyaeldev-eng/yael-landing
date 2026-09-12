import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { Landing } from './landing';
import { CONTENT } from '../i18n/content';
import { routes } from '../app.routes';

describe('Landing', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landing],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  async function renderAt(path: string) {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl(path, Landing);
    harness.detectChanges();
    return harness.routeNativeElement as HTMLElement;
  }

  it('renders Spanish at the root, and marks the document as Spanish', async () => {
    const el = await renderAt('/');
    expect(el.querySelector('h1')?.textContent?.trim()).toBe(CONTENT.es.heroTitulo);
    expect(document.documentElement.lang).toBe('es');
  });

  it('renders English at /en, and marks the document as English', async () => {
    const el = await renderAt('/en');
    expect(el.querySelector('h1')?.textContent?.trim()).toBe(CONTENT.en.heroTitulo);
    expect(document.documentElement.lang).toBe('en');
  });

  it('gives every step a real heading, not a styled div', async () => {
    const el = await renderAt('/');
    expect(el.querySelectorAll('.steps h3').length).toBe(CONTENT.es.pasos.length);
  });

  it('points both contact affordances at the same person', async () => {
    const el = await renderAt('/');
    const hrefs = [...el.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')!);
    expect(hrefs.some((h) => h.startsWith('mailto:'))).toBe(true);
    expect(hrefs.some((h) => h.startsWith('https://wa.me/'))).toBe(true);
  });
});
