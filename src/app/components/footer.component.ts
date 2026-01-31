import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-800 text-gray-400 py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-white font-semibold text-lg mb-4">Moulin à Vent Catalunya</h3>
            <p class="text-sm leading-relaxed">Cabinet infirmier conventionné, diplômés d'État, à votre service à Perpignan et environs. Soins à domicile et au cabinet.</p>
          </div>
          <div>
            <h3 class="text-white font-semibold text-lg mb-4">Liens rapides</h3>
            <ul class="space-y-2 text-sm">
              <li><a href="#accueil" class="hover:text-white transition">Accueil</a></li>
              <li><a href="#services" class="hover:text-white transition">Services</a></li>
              <li><a href="#faq" class="hover:text-white transition">FAQ</a></li>
              <li><a href="#contact" class="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold text-lg mb-4">Informations légales</h3>
            <ul class="space-y-2 text-sm">
              <li>ADELI : 666685458</li>
              <li>
                <a href="https://www.ordre-infirmiers.fr/assets/files/000/ONI_Charte%20Internet_HD.pdf"
                  target="_blank" rel="noopener noreferrer"
                  class="hover:text-white transition">Charte internet ONI</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          &copy; MatWeb {{ currentYear }}. Tous droits réservés.
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
