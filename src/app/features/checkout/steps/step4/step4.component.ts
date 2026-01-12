import { Component } from '@angular/core';
import { CartComponent } from "../../../cart/cart.component";
import { Step1Component } from "../step1/step1.component";
import { Step2Component } from "../step2/step2.component";
import { Step3Component } from "../step3/step3.component";

@Component({
  selector: 'app-step4',
  imports: [CartComponent, Step1Component, Step2Component, Step3Component],
  templateUrl: './step4.component.html',
  styleUrl: './step4.component.css'
})
export class Step4Component {

}
