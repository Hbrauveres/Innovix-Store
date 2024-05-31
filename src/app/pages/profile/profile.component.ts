import { Component } from '@angular/core';
import { MyDataComponent } from './components/my-data/my-data.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MyDataComponent, MyOrdersComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent { 

}