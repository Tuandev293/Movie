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

@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CastComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomeComponent,
    DetailComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CastComponent,
  ],
})
export class PagesModule {}
