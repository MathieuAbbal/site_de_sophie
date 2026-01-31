import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav class="fixed top-0 w-full bg-white shadow-md z-50 transition-shadow duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <a href="#" class="flex items-center space-x-2">
            <img src="assets/images/icon-angel-grey.svg" alt="" class="w-8 h-8">
            <span class="text-xl font-bold text-blue-600">Moulin à Vent Catalunya</span>
          </a>

          <div class="hidden md:flex items-center space-x-8">
            <a href="#accueil" class="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Accueil</a>
            <a href="#a-propos" class="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Le cabinet</a>
            <a href="#services" class="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Services</a>
            <a href="#tarifs" class="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Remboursement</a>
            <a href="#temoignages" class="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Avis</a>
            <a href="#faq" class="text-sm font-medium text-gray-600 hover:text-blue-600 transition">FAQ</a>
            <a href="#contact" class="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Contact</a>
            <a href="tel:+33626038524"
              class="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition shadow">
              Prendre RDV
            </a>
          </div>

          <button (click)="mobileMenu.set(!mobileMenu())" class="md:hidden text-gray-600 focus:outline-none" aria-label="Ouvrir le menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              @if (!mobileMenu()) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              }
            </svg>
          </button>
        </div>

        @if (mobileMenu()) {
          <div class="md:hidden pb-4 space-y-2">
            <a (click)="mobileMenu.set(false)" href="#accueil" class="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition">Accueil</a>
            <a (click)="mobileMenu.set(false)" href="#a-propos" class="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition">Le cabinet</a>
            <a (click)="mobileMenu.set(false)" href="#services" class="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition">Services</a>
            <a (click)="mobileMenu.set(false)" href="#tarifs" class="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition">Remboursement</a>
            <a (click)="mobileMenu.set(false)" href="#temoignages" class="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition">Avis</a>
            <a (click)="mobileMenu.set(false)" href="#faq" class="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition">FAQ</a>
            <a (click)="mobileMenu.set(false)" href="#contact" class="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition">Contact</a>
            <a href="tel:+33626038524"
              class="block text-center bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition mt-2">
              Prendre RDV
            </a>
          </div>
        }
      </div>
    </nav>
  `
})
export class NavbarComponent {
  mobileMenu = signal(false);
}
