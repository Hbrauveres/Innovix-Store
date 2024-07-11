import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-order-concluded',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './order-concluded.component.html',
  styleUrl: './order-concluded.component.css'
})
export class OrderConcludedComponent {
  constructor(private router: Router){}
}
