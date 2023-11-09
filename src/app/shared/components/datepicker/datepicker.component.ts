import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CalendarModule, 
    CommonModule, 
    FormsModule,
  ],
})
export class DatepickerComponent {
  datepicker: Date | undefined;
}
