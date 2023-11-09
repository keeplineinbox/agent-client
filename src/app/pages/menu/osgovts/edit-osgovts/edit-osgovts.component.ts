import {Component, ViewEncapsulation} from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {InsuranceForm} from '../../../../core/models/eosgouz/osgovts/insuranceForm';
import {ApiService} from '../../../../core/services/api.service';

@Component({
  selector: 'app-edit-osgovts',
  templateUrl: './edit-osgovts.component.html',
  styleUrls: ['./edit-osgovts.component.scss'],
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
export class EditOsgovtsComponent {

}
