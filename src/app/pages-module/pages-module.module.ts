import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';
import { DetailComponent } from '../pages/detail/detail.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from '../components/card/card.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { ContentComponent } from '../components/content/content.component';
import { CastComponent } from '../components/cast/cast.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlidesComponent } from '../components/slides/slides.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CastComponent,
    SpinnerComponent,
    SlidesComponent,
  ],

  imports: [CommonModule, RouterModule, SlickCarouselModule],
  exports: [
    HomeComponent,
    DetailComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CastComponent,
    SlidesComponent,
    SpinnerComponent,
  ],
})
export class PagesModule {}
