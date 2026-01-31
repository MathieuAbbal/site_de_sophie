import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="services" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Nos Services</h2>
          <div class="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          <p class="text-gray-500 mt-4 max-w-2xl mx-auto">
            Tous les soins sont réalisés sur prescription médicale et pris en charge par la Sécurité sociale.
          </p>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          @for (service of services; track service.title) {
            <div class="service-card bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
              <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" [class]="service.bgClass">
                <svg class="w-7 h-7" [class]="service.iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="service.icon" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ service.title }}</h3>
              <p class="text-gray-500 text-sm">{{ service.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  services = [
    { title: 'Pansements & Plaies', desc: 'Soins de plaies chroniques et aiguës, pansements complexes, suivi de cicatrisation.', bgClass: 'bg-blue-100', iconClass: 'text-blue-600', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { title: 'Injections & Perfusions', desc: 'Injections intramusculaires, sous-cutanées, intraveineuses et mise en place de perfusions.', bgClass: 'bg-green-100', iconClass: 'text-green-600', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
    { title: 'Prise en charge diabétique', desc: 'Surveillance glycémique, injections d\'insuline, éducation thérapeutique du patient.', bgClass: 'bg-purple-100', iconClass: 'text-purple-600', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { title: 'Soins post-opératoires', desc: 'Surveillance post-chirurgicale, retrait de fils et agrafes, soins de drainage.', bgClass: 'bg-red-100', iconClass: 'text-red-500', icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'Nursing & Hygiène', desc: 'Toilettes, aide à la mobilisation, prévention des escarres, soins d\'hygiène et de confort.', bgClass: 'bg-yellow-100', iconClass: 'text-yellow-600', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { title: 'Prélèvements', desc: 'Prises de sang à domicile, prélèvements sanguins sur prescription de votre médecin.', bgClass: 'bg-indigo-100', iconClass: 'text-indigo-600', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { title: 'Accompagnement', desc: 'Accompagnement en fin de vie, soins palliatifs à domicile, soutien aux familles.', bgClass: 'bg-pink-100', iconClass: 'text-pink-600', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { title: 'Vaccination', desc: 'Administration des vaccins prescrits par votre médecin, vaccin antigrippal.', bgClass: 'bg-teal-100', iconClass: 'text-teal-600', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  ];
}
