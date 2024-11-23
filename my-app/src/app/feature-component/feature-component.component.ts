import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'feature-component',
  standalone: true,
  imports: [FormsModule],  // Import FormsModule for ngModel to work
  templateUrl: './feature-component.component.html',
  styleUrls: ['./feature-component.component.css']
})
export class FeatureComponentComponent {
  dateValue: string = '';  // Declare the dateValue property

  constructor() {
    console.log('Feature component loaded');
  }
}
