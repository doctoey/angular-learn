import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.scss']
})
export class MaxMinMeterComponent {
  @Input() minLabel = 'minLabel';
  @Input() maxLabel = 'maxLabel';

  
}
