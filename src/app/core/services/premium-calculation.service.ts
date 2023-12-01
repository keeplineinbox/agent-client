import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PremiumCalculationService {
  calculateOsgovtsAmount(
    vehicleTypeId: number,
    vehicleRegionId: number,
    isForeignVehicle: boolean,
    periodId: number,
    discountTypeId: number,
    isLimited: boolean,
    insuranceClaimCoefficient: number
  ): number {
    let limit: number = 0;
    const insuredAmount: number = 40000000;
    let coefficent: number = 0;
    let premiumAmount: number = 0;
    
    switch (vehicleTypeId) {
      case 1:
        coefficent = 0.1;
        break;
      case 6:
      case 9:
        coefficent = 0.12;
        break;
      case 15:
        coefficent = 0.04;
        break;
    }
  
    premiumAmount = insuredAmount * coefficent;
    limit = (premiumAmount / 100) * 5;
  
    if (isForeignVehicle) {
      switch (periodId) {
        case 1:
          coefficent = 0.2;
          break;
        case 3:
          coefficent = 0.4;
          break;
        case 4:
          coefficent = 1;
          break;
      }
    } else {
      switch (periodId) {
        case 1:
          coefficent = 1;
          break;
        case 2:
          coefficent = 0.7;
          break;
        case 4:
          coefficent = 0.2;
          break;
      }
    }
  
    premiumAmount = premiumAmount * coefficent;
  
    if (vehicleRegionId == 10 || vehicleRegionId == 11 || isForeignVehicle) {
      premiumAmount = premiumAmount * 1.4;
    }
  
    if (discountTypeId > 1) {
      premiumAmount = premiumAmount / 2;
    }
  
    if (insuranceClaimCoefficient > 1) {
      coefficent = insuranceClaimCoefficient;
    }
    
    if (!isLimited) {
      premiumAmount = premiumAmount * 3;
    }
  
    premiumAmount = premiumAmount / 100;
  
    if (premiumAmount > limit) {
      premiumAmount = limit;
    }
  
    const result = Math.round(premiumAmount * 100) / 100;

    return result;
  }
}