import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
    ViewEncapsulation,
  } from '@angular/core';
  import { CommonModule } from '@angular/common';
  
  @Component({
    selector: 'app-stepper',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class StepperComponent implements OnInit {
    @Input() steps: number[] = [];
    @Input() currentStep!: number;
    
    ngOnInit(): void {}
  }