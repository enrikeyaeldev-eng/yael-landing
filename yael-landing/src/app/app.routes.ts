import { Routes } from '@angular/router';
import { Landing } from './landing/landing';

/**
 * One route per language. Both are prerendered, so each language has its own
 * indexable URL and the server-rendered HTML always matches what hydrates —
 * no flash of the wrong language for returning visitors.
 */
export const routes: Routes = [
  { path: '', component: Landing, data: { lang: 'es' } },
  { path: 'en', component: Landing, data: { lang: 'en' } },
  { path: '**', redirectTo: '' },
];
