import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  template: `
    <section id="temoignages" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800">Ce que disent nos patients</h2>
          <div class="w-20 h-1 bg-teal-600 mx-auto mt-4 rounded"></div>
          <p class="text-gray-500 mt-4 max-w-2xl mx-auto">
            Retrouvez les avis de nos patients sur notre fiche Google.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          @for (review of reviews; track review.name) {
            <div class="bg-white rounded-xl shadow-md p-8">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg" [class]="review.avatarClass">
                  {{ review.initial }}
                </div>
                <div>
                  <p class="font-semibold text-gray-800">{{ review.name }}</p>
                  <p class="text-sm text-gray-400">{{ review.date }}</p>
                </div>
              </div>
              <div class="flex gap-1 mb-3">
                @for (star of [1,2,3,4,5]; track star) {
                  <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                }
              </div>
              <p class="text-gray-600 leading-relaxed">{{ review.text }}</p>
              <p class="text-xs text-gray-400 mt-3 flex items-center gap-1">
                <svg class="w-4 h-4" viewBox="0 0 48 48"><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/></svg>
                Avis Google
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `
})
export class ReviewsComponent {
  reviews = [
    {
      name: 'Hélène D',
      initial: 'H',
      date: 'Avril 2025',
      avatarClass: 'bg-teal-600',
      text: 'Très bon cabinet d\'infirmières. Marion comme Sophie sont extrêmement agréables et compétentes.'
    },
    {
      name: 'Rachida El azzaoui',
      initial: 'R',
      date: 'Juillet 2023',
      avatarClass: 'bg-teal-500',
      text: 'Sophie est super ! Hyper douce et agréable.'
    }
  ];
}
