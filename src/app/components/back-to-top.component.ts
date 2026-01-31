import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    @if (visible()) {
      <button (click)="scrollToTop()" aria-label="Retour en haut"
        class="fixed right-4 bottom-6 bg-blue-600 text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition z-40">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    }
  `
})
export class BackToTopComponent {
  visible = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.visible.set((document.documentElement.scrollTop || document.body.scrollTop) > 300);
  }

  scrollToTop() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }
}
