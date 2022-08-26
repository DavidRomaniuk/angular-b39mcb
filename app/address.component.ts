
import { Component } from '@angular/core';
import { ControlContainer, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'address',
  templateUrl: 'address.component.html',
  viewProviders: [ { provide: ControlContainer, useExisting: NgModelGroup }]
})
export class AddressComponent  {}
