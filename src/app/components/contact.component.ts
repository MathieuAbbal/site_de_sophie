import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="py-20 bg-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white">Contact & Localisation</h2>
          <div class="w-20 h-1 bg-white mx-auto mt-4 rounded opacity-50"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">Adresse</h3>
                <p class="text-blue-100">02 rue Can Partere<br>66100 Perpignan</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">Téléphone</h3>
                <a href="tel:+33626038524" class="text-blue-100 hover:text-white text-lg transition">06 26 03 85 24</a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">Email</h3>
                <a href="mailto:sophiecama@hotmail.com" class="text-blue-100 hover:text-white transition">sophiecama&#64;hotmail.com</a>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-white">Horaires</h3>
                <p class="text-blue-100">7j/7 : 08h00 - 20h00</p>
              </div>
            </div>
          </div>

          <div class="rounded-xl overflow-hidden shadow-xl">
            <iframe class="w-full h-80 lg:h-full" title="Localisation du cabinet sur Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.263391215751!2d2.9080385!3d42.6769627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06fda734a196b%3A0xc48b14720ea8a552!2s2%20Rue%20de%20Can%20Partere%2C%2066100%20Perpignan!5e0!3m2!1sfr!2sfr!4v1669914962110!5m2!1sfr!2sfr"
              style="border:0; min-height: 320px;" allowfullscreen loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}
