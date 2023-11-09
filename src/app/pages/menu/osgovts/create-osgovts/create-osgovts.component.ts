import {Component, ViewEncapsulation} from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {InsuranceForm} from '../../../../core/models/eosgouz/osgovts/insuranceForm';
import {ApiService} from '../../../../core/services/api.service';

@Component({
  selector: 'app-create-osgovts',
  templateUrl: './create-osgovts.component.html',
  styleUrls: ['./create-osgovts.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
  ],
  providers: [
    ApiService,
  ],
})
export class CreateOsgovtsComponent {

}
