import { Component } from '@angular/core';

@Component({
  selector: 'app-reimbursement',
  standalone: true,
  template: `
    <section id="tarifs" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Remboursement & Prise en charge</h2>
          <div class="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-blue-50 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Conventionné</h3>
            <p class="text-gray-600">Le cabinet est conventionné par la Sécurité sociale. Les soins sont remboursés selon les tarifs en vigueur.</p>
          </div>

          <div class="bg-green-50 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Tiers payant</h3>
            <p class="text-gray-600">Dispense d'avance de frais selon votre situation. Carte Vitale acceptée pour une prise en charge simplifiée.</p>
          </div>

          <div class="bg-purple-50 rounded-xl p-8 text-center">
            <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-800 mb-3">Sur prescription</h3>
            <p class="text-gray-600">Tous les soins sont réalisés uniquement sur prescription médicale de votre médecin traitant ou spécialiste.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ReimbursementComponent {}
