import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-wrap-page',
  templateUrl: './wrap-page.component.html',
  styleUrls: ['./wrap-page.component.sass'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    HeaderComponent
  ]
})
export class WrapPageComponent {

}
