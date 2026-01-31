import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="accueil" class="relative baniere flex items-center justify-center" style="min-height: 100vh;">
      <div class="absolute inset-0 bg-gradient-to-b from-teal-900 to-teal-800 opacity-60"></div>
      <div class="relative text-center px-6 max-w-3xl mx-auto">
        <p class="text-teal-200 text-lg font-medium tracking-widest uppercase mb-4 animate-fade-in">Bienvenue</p>
        <h1 class="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up">
          Cabinet Infirmier<br>
          <span class="text-teal-300">Moulin à Vent Catalunya</span>
        </h1>
        <p class="text-xl text-teal-100 mb-8 animate-fade-in-up">
          Soins infirmiers à domicile et au cabinet sur prescription médicale
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
          <a href="tel:+33626038524"
            class="bg-white text-teal-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-teal-50 transition shadow-lg">
            06 26 03 85 24
          </a>
          <a href="#services"
            class="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition">
            Nos services
          </a>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  `
})
export class HeroComponent {}
