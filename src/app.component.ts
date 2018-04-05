import { Component, Input } from '@angular/core';

import someType from './some';

@Component({
  selector: 'app-root',
  template: '<div>Hello</div>',
})
export class AppComponent {
  @Input()
    get position(): someType.animationConfig {
      return this._position;
        //return this._getOption('position');
    }
    set position(value: someType.animationConfig) {
      this._position = value;
        //this._setOption('position', value);
    }

    // @Output() positionChange: EventEmitter<DevExpress.ui.dxCalendarOptions>;

  // title: DevExpress.ui.dxCalendarOptions;
  constructor() {
  }
   _position: any;
  // _getOption() {

  // }
}