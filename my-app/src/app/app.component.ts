import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeatureComponentComponent } from './feature-component/feature-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FeatureComponentComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Fixed typo here
})
export class AppComponent {
  title = 'my-app';
  //message: string = ''; // Explicit type instead of `any`

//   constructor() {
//     console.log('Constructor is executed');
//   }

//   printMessage(msg: string): void {
//     this.title = msg; // Use the passed message directly
//     console.log('Updated title:', this.title);
//   }

//   initTitle(event: Event): void {
//     const inputElement = event.target as HTMLInputElement; // Type cast for `value` property access
//     this.message = inputElement.value;
//     console.log('Input value:', this.message);
//   }
 }
