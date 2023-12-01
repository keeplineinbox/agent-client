import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output, 
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-osgovts-driver',
  templateUrl: './osgovts-driver.component.html',
  styleUrls: ['./osgovts-driver.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    ButtonModule, 
    FormsModule,
		CalendarModule,
		InputTextModule,
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OsgovtsDriverComponent {
  @Input() data: string | undefined;
  @Output() remove = new EventEmitter<void>();
  @Output() formSubmit = new EventEmitter<{birthdate: Date; passportSeria: string; passportNumber: string}>();

  birthdate!: Date;
  passportSeria: string = '';
  passportNumber: string = '';
  receivedData: string = '';
  
  onFormSubmit() {
    console.log('submited !!! ');
    // Emit an event to notify the parent component about the submitted data
    this.formSubmit.emit({birthdate: this.birthdate, passportSeria: this.passportSeria, passportNumber: this.passportNumber});

    // Update the second input with the received data (for demonstration purposes)
    //this.input2 = this.receivedData;
  }

  removeDriverComponent() {
    // Emit an event to notify the parent component to remove this dynamic component
    // You can use an Output EventEmitter for more complex scenarios
    // For simplicity, let's just log a message for now
    console.log('Removing component with data:', this.data);
    this.remove.emit();
  }
}
