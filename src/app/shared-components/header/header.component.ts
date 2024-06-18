import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    AsyncPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isLogged: boolean = false;

  constructor(){
    
  }

  switchLogin(){
    this.isLogged = !this.isLogged
  }

}
