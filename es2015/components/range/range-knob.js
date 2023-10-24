import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { KEY_DOWN, KEY_LEFT, KEY_RIGHT, KEY_UP } from '../../platform/key';
/**
 * @hidden
 */
export class RangeKnob {
    constructor() {
        this.ionIncrease = new EventEmitter();
        this.ionDecrease = new EventEmitter();
    }
    set ratio(r) {
        this._x = `${r * 100}%`;
    }
    _keyup(ev) {
        const keyCode = ev.keyCode;
        if (keyCode === KEY_LEFT || keyCode === KEY_DOWN) {
            (void 0) /* console.debug */;
            this.ionDecrease.emit();
            ev.preventDefault();
            ev.stopPropagation();
        }
        else if (keyCode === KEY_RIGHT || keyCode === KEY_UP) {
            (void 0) /* console.debug */;
            this.ionIncrease.emit();
            ev.preventDefault();
            ev.stopPropagation();
        }
    }
}
RangeKnob.decorators = [
    { type: Component, args: [{
                selector: '.range-knob-handle',
                template: '<div class="range-pin" *ngIf="pin" role="presentation">{{val}}</div>' +
                    '<div class="range-knob" role="presentation"></div>',
                host: {
                    '[class.range-knob-pressed]': 'pressed',
                    '[class.range-knob-min]': 'val===min||val===undefined',
                    '[class.range-knob-max]': 'val===max',
                    '[style.left]': '_x',
                    '[attr.aria-valuenow]': 'val',
                    '[attr.aria-valuemin]': 'min',
                    '[attr.aria-valuemax]': 'max',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.aria-labelledby]': 'labelId',
                    '[tabindex]': 'disabled?-1:0',
                    'role': 'slider'
                }
            },] },
];
/** @nocollapse */
RangeKnob.ctorParameters = () => [];
RangeKnob.propDecorators = {
    'ratio': [{ type: Input },],
    'pressed': [{ type: Input },],
    'pin': [{ type: Input },],
    'min': [{ type: Input },],
    'max': [{ type: Input },],
    'val': [{ type: Input },],
    'disabled': [{ type: Input },],
    'labelId': [{ type: Input },],
    'ionIncrease': [{ type: Output },],
    'ionDecrease': [{ type: Output },],
    '_keyup': [{ type: HostListener, args: ['keydown', ['$event'],] },],
};
//# sourceMappingURL=range-knob.js.map