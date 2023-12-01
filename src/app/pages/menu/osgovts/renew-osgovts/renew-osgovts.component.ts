import { CommonModule } from '@angular/common';
import {Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, signal } from '@angular/core';
import {FormGroup, Validators, ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';
import {InsuranceForm} from 'src/app/core/models/eosgouz/osgovts/insuranceForm';
import {ApiService} from 'src/app/core/services/api.service';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { StepperComponent } from 'src/app/shared/components/stepper/stepper.component';
import { DatepickerComponent } from 'src/app/shared/components/datepicker/datepicker.component';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { map, switchMap, tap } from 'rxjs';
import { OsgovtsLists } from 'src/app/core/models/eosgouz/osgovtsLists';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PremiumCalculationService } from 'src/app/core/services/premium-calculation.service';
import { SelectItem } from 'primeng/api';
import { OsgovtsDriverComponent } from 'src/app/shared/components/osgovts-driver/osgovts-driver.component';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-renew-osgovts',
  templateUrl: './renew-osgovts.component.html',
  styleUrls: ['renew-osgovts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    StepperComponent,
    ReactiveFormsModule,
    CommonModule,
    SpinnerComponent,
    DatepickerComponent,
    ButtonModule,
    OsgovtsDriverComponent,
    
		FormsModule,
		CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		CascadeSelectModule,
		MultiSelectModule,
		InputTextareaModule,
		InputTextModule,
    RadioButtonModule,
  ],
  providers: [
    ApiService,
    OsgovtsLists,
    PremiumCalculationService,
    DatePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenewOsgovtsComponent implements OnInit {
  public isLoading = signal(false);
  public info = window?.Telegram?.WebApp?.initData;
  insuranceForm: InsuranceForm | undefined;
  steps: number[] = [1, 2, 3, 4];
  currentStep = 1;
  lastPage = false;
  form!: FormGroup;
  lastGovNumber = '';
  lastPolicySeria = '';
  lastPolicyNumber = '';
  cost = 0;
  selectedInsurancePeriod: any;
  insurancePeriods: SelectItem[] = [];
  selectedRegion: any;
  insuranceRegions: SelectItem[] = [];
  driverComponentsData: string[] = [];
  
  constructor(private apiService: ApiService, 
    private osgovtsLists: OsgovtsLists,
    private premiumCalculate: PremiumCalculationService,
    public datepipe: DatePipe) 
  {  }
  
  ngOnInit() {
    this.form = new FormGroup({
      policySeria: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(6),
      ]),
      policyNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      govNumber: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ]),
      // email: new FormControl(null, [Validators.required, Validators.email]),
      // phone: new FormControl(null, [
      //   Validators.required,
      //   Validators.pattern(
      //     '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'
      //   ),
      // ]),
    });
    this.insurancePeriods = this.osgovtsLists.periods;
    this.selectedInsurancePeriod = this.osgovtsLists.periods[0];
    this.insuranceRegions = this.osgovtsLists.regions;
    this.selectedRegion = this.osgovtsLists.regions[0];
  }

  onSubmit() {
    this.lastPage = true;
    this.form.reset();
  }

  changePage(isNextPage: boolean) {
    if (!isNextPage) {
      return this.currentStep--;
    } else {
      if (this.currentStep === 1){
        this.isLoading.set(true);
        this.apiService
        .getPolicyBySeriaAndNumberAndVehicleNumber(this.lastPolicySeria, this.lastPolicyNumber, this.lastGovNumber)
        .subscribe((result) => {
          if (result.error === 0 && result.data) {
            this.insuranceForm = result.data;
            this.selectedRegion = this.osgovtsLists.regions.find(item => item.value === this.insuranceForm?.vehicle.regionId);
            this.calculatePolicyPeriod();
            console.log("radio " + this.insuranceForm.details.driverNumberRestriction);
            this.calaculatePremium();
            this.currentStep++;
          }
    
          this.isLoading.set(false);
        });
      }
      else if (this.currentStep === 2){
        this.isLoading.set(true);
        this.currentStep++;
        this.isLoading.set(false);
      }
    }
    return this.currentStep;
  }

  addDriverComponent() {
    if(this.driverComponentsData.length < 5){
      const newData = `Component ${this.driverComponentsData.length + 1}`;
      this.driverComponentsData.push(newData);
    }
  }
  removeDriverComponent(index: number) {
    this.driverComponentsData.splice(index, 1);
  }
  onFormSubmit(submittedData: {birthdate: Date, passportSeria: string, passportNumber: string}) {
    console.log('Submitted Data: ', submittedData);
    this.isLoading.set(true);
    let birthdateStr = this.datepipe.transform(submittedData.birthdate, 'yyyy-MM-dd');
    this.apiService
    .getPersonInfoByBirthdate(birthdateStr!, submittedData.passportSeria, submittedData.passportNumber)
    .subscribe((result) => {
      if (result.error === 0 && result.data) {
        //this.insuranceForm = result.data;
        console.log("radio " + result.data);
      }

      this.isLoading.set(false);
    });
    
    // Handle the submitted data (for demonstration purposes, update the receivedData of the last component)
    //if (this.driverComponentsData.length > 0) {
    //  const lastIndex = this.driverComponentsData.length - 1;
    //  this.driverComponentsData[lastIndex] = submittedData;
    //}
  }

  calculatePolicyPeriod()
  {
    const details = this.insuranceForm?.details;

    if (details?.startDate) {
      const nowDate = new Date();
      const lastEndDate = new Date(details.endDate);
      
      console.log("start " + details.startDate);
      console.log("end " + details.endDate);

      if (lastEndDate < nowDate) {
        details.startDate = nowDate;
      } else {
        details.startDate = lastEndDate;
      }

      details.endDate = new Date(details.startDate);
      details.endDate.setFullYear(details.endDate.getFullYear() + 1);
    }
  }

  calaculatePremium()
  {
    console.log('works ');
    if (this.insuranceForm)
    {
      console.log('vehicletypeId ' + this.insuranceForm.vehicle.typeId);
      console.log('regionId ' + this.selectedRegion.value);
      console.log('selectedInsurancePeriod ' + this.selectedInsurancePeriod.value);
      console.log('discountId ' + this.insuranceForm.cost.discountId);
      console.log('islimited ' + this.insuranceForm.details.driverNumberRestriction);
      this.cost = this.premiumCalculate.calculateOsgovtsAmount(
        this.insuranceForm.vehicle.typeId,
        this.selectedRegion.value,
        false, //vehicle.isForeignVehicle нужно найти способ определения данногопараметра из insuranceForm
        this.selectedInsurancePeriod.value,
        this.insuranceForm.cost.discountId,
        this.insuranceForm.details.driverNumberRestriction,
        0); //insuranceClaimCoefficient 
    }
  }

  choseInsurerPage()
  {

  }

  onPolicySeriaChange(event: any) {
    const policySeriaControl = this.form.get('policySeria');
    const newValue = event.target.value;
    console.log('txt ' + event.target.value);
    
    if (policySeriaControl)
    {
      if (newValue.length > 6){
        policySeriaControl.setValue(this.lastPolicySeria);
      }
      else if (!/^[a-zA-Z]*$/.test(newValue)) {
        policySeriaControl.setValue(newValue.replace(/[^a-zA-Z]/g, ''));
      } 
      else {
        this.lastPolicySeria = newValue.toUpperCase();
        policySeriaControl.setValue(this.lastPolicySeria);
      }
    }
  }

  onPolicyNumberChange(event: any) {
    const policyNumberControl = this.form.get('policyNumber');
    const newValue = event.target.value;
    console.log('txt ' + event.target.value);
    
    if (policyNumberControl)
    {
      if (newValue.length > 10){
        policyNumberControl.setValue(this.lastPolicyNumber);
      }
      else if (!/^[0-9]*$/.test(newValue)) {
        policyNumberControl.setValue(newValue.replace(/[^0-9]/g, ''));
      } 
      else {
        this.lastPolicyNumber = newValue;
        policyNumberControl.setValue(this.lastPolicyNumber);
      }
    }
  }

  onGovNumberChange(event: any) {
    const inputValue = event.target.value;
    const policyGovControl = this.form.get('govNumber');
    console.log('inputValue ' + inputValue);

    if (policyGovControl) {
      if (inputValue.length === 0)
      {
        this.lastGovNumber = '';
        policyGovControl.setValue(this.lastGovNumber);
        return
      }

      const validPatterns = [
        /^\d{2}[a-zA-Z]\d{3}[a-zA-Z]{2}$/,
        /^\d{2}[a-zA-Z]\d{3}[a-zA-Z]{1}$/,
        /^\d{2}[a-zA-Z]\d{3}$/,
        /^\d{2}[a-zA-Z]\d{2}$/,
        /^\d{2}[a-zA-Z]\d{1}$/,
        /^\d{2}[a-zA-Z]$/,
        /^\d{2}$/,
        /^\d{1}$/,
      ];

      for (let i = 0; i < validPatterns.length; i++) {
        if (inputValue.length === 8 - i && validPatterns[i].test(inputValue)) {
          this.lastGovNumber = inputValue.toUpperCase();
          policyGovControl.setValue(this.lastGovNumber);
          return;
        }
      }

      // If none of the patterns match, revert to the previous value
      policyGovControl.setValue(this.lastGovNumber);
    }
  }

  onPhoneNumberChange(event: any)
  {}
}
