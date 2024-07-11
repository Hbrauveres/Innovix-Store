import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../../../../../models/user-data.model';

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit {
  @Input() userData!: UserData | null

  numOrders: number = 0;

  ngOnInit(){
    this.getNumberOfOrders();
  }

  getNumberOfOrders(){
    if(this.userData){
      this.numOrders = this.userData.orders.length;
    }
  }
}
