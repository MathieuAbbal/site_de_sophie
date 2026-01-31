import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { ServicesComponent } from './components/services.component';
import { ReimbursementComponent } from './components/reimbursement.component';
import { ReviewsComponent } from './components/reviews.component';
import { FaqComponent } from './components/faq.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';
import { BackToTopComponent } from './components/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ReimbursementComponent,
    ReviewsComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    BackToTopComponent,
  ],
  template: `
    <app-navbar />
    <app-hero />
    <app-about />
    <app-services />
    <app-reimbursement />
    <app-reviews />
    <app-faq />
    <app-contact />
    <app-footer />
    <app-back-to-top />
  `
})
export class App {}
