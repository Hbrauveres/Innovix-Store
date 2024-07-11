import { Component, OnInit } from '@angular/core';
import { MyDataComponent } from './components/my-data/my-data.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserData } from '../../../models/user-data.model';
import { isLoggedIn } from '../../state/auth/auth.selectors';
import { selectUser } from '../../state/user/user.selectors'

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MyDataComponent, MyOrdersComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit { 

  userData!: UserData | null;

  constructor(private store: Store){

  }

  ngOnInit() {
    this.LoadUserData();
  }

  LoadUserData(){
    this.store.select(selectUser).subscribe(user => {
      this.userData = user;
    });
  }

}
