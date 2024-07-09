import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserData } from '../../../../../models/user-data.model'; // Adjust path as per your project structure
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-data',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.css']
})
export class MyDataComponent {
  @Input() user: Observable<UserData | null> = of(null); // Initialize with an observable

  editing: boolean = false;

  toggleEdit() {
    this.editing = !this.editing;
  }
}