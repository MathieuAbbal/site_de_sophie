import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="a-propos" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Notre Cabinet</h2>
          <div class="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        <div class="flex flex-col lg:flex-row items-center gap-12">
          <div class="lg:w-1/2">
            <img src="assets/images/cabinet-infirmiere.jpg" alt="Cabinet infirmier à Perpignan"
              class="rounded-2xl shadow-xl w-full mx-auto object-cover">
          </div>
          <div class="lg:w-1/2 space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800">Un cabinet à votre service</h3>
            <p class="text-gray-600 leading-relaxed text-lg">
              Situé au 02 rue Can Partere à Perpignan, notre cabinet infirmier vous accueille pour
              l'ensemble de vos soins infirmiers sur prescription médicale. Nous intervenons également
              à votre domicile dans Perpignan et ses environs.
            </p>
            <p class="text-gray-600 leading-relaxed text-lg">
              Notre engagement : vous offrir des soins de qualité dans le respect, l'écoute et la
              bienveillance. Chaque patient est unique et mérite une prise en charge personnalisée
              par des professionnels diplômés d'État.
            </p>
            <div class="flex flex-wrap gap-4 pt-4">
              <div class="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Diplômés d'État</div>
              <div class="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">ADELI : 666685458</div>
              <div class="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Cabinet conventionné</div>
              <div class="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">Soins à domicile</div>
            </div>
          </div>
        </div>

        <!-- L'équipe -->
        <div class="mt-20">
          <div class="text-center mb-12">
            <h3 class="text-2xl font-bold text-gray-800">L'équipe</h3>
            <div class="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded"></div>
          </div>
          <div class="flex flex-col md:flex-row items-center justify-center gap-8 max-w-2xl mx-auto">
            <div class="text-center">
              <img src="assets/images/sog.png" alt="Sophie Cama, infirmière libérale"
                class="w-40 h-40 rounded-full object-cover mx-auto shadow-lg mb-4">
              <h4 class="text-lg font-semibold text-gray-800">Sophie Cama</h4>
              <p class="text-blue-600 text-sm font-medium">Infirmière Libérale D.E.</p>
              <p class="text-gray-500 text-sm mt-1">Fondatrice du cabinet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
