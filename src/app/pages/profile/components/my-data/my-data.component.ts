import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserData } from '../../../../../models/user-data.model'; // Adjust path as per your project structure

@Component({
  selector: 'app-my-data',
  standalone: true,
  imports: [],
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent {
  @Input() userData!: UserData | null  // Initialize with an observable

  toggleEdit() {
    
  }
}