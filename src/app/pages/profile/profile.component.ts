import { Component, OnInit } from '@angular/core';
import { MyDataComponent } from './components/my-data/my-data.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserData } from '../../../models/user-data.model';
import { isLoggedIn, selectUser } from '../../state/auth/auth.selectors';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MyDataComponent, MyOrdersComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit { 

  isLoggedIn: Observable<boolean> = this.store.select(isLoggedIn);
  user: Observable<UserData | null> = this.store.select(selectUser);

  constructor(private store: Store){

  }

  ngOnInit() {
    this.isLoggedIn = this.store.select(isLoggedIn);
    this.user = this.store.select(selectUser);
  }


}
