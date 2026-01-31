import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  template: `
    <section id="faq" class="py-20 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Questions fréquentes</h2>
          <div class="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        <div class="space-y-4">
          @for (faq of faqs; track faq.question; let i = $index) {
            <div class="border border-gray-200 rounded-lg overflow-hidden">
              <button (click)="toggle(i)"
                class="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition">
                <span>{{ faq.question }}</span>
                <svg class="w-5 h-5 transform transition-transform" [class.rotate-180]="openIndex() === i"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              @if (openIndex() === i) {
                <div class="px-6 pb-4 text-gray-600" [innerHTML]="faq.answer"></div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class FaqComponent {
  openIndex = signal<number | null>(null);

  faqs = [
    { question: 'Quels sont vos horaires ?', answer: 'Les soins sont réalisés 7 jours sur 7, de 8h à 20h, y compris le week-end. Les horaires peuvent être adaptés en fonction des besoins du patient.' },
    { question: 'Quelle est votre zone d\'intervention ?', answer: 'Notre cabinet intervient à Perpignan et dans les communes environnantes. N\'hésitez pas à nous contacter pour vérifier si votre domicile se situe dans notre zone d\'intervention.' },
    { question: 'Ai-je besoin d\'une ordonnance ?', answer: 'Oui, tous les soins infirmiers nécessitent une prescription médicale (ordonnance) de votre médecin traitant ou spécialiste pour être pris en charge par la Sécurité sociale.' },
    { question: 'Comment prendre rendez-vous ?', answer: 'Vous pouvez nous joindre par téléphone au <a href="tel:+33626038524" class="text-blue-600 hover:underline">06 26 03 85 24</a> ou par email à <a href="mailto:sophiecama@hotmail.com" class="text-blue-600 hover:underline">sophiecama&#64;hotmail.com</a>. Nous vous rappellerons dans les plus brefs délais.' },
    { question: 'Intervenez-vous en urgence ?', answer: 'En cas d\'urgence médicale, appelez le 15 (SAMU) ou le 112. Pour les soins urgents non vitaux, contactez-nous par téléphone et nous ferons notre possible pour intervenir rapidement.' },
  ];

  toggle(index: number) {
    this.openIndex.set(this.openIndex() === index ? null : index);
  }
}
