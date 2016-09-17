// ElementRef = access to host element
// Renderer = service to modify that element
import {Directive, ElementRef, Renderer} from 'angular2/core'
import {ElementRef} from "../node_modules/angular2/ts/src/core/linker/element_ref";
import {ElementRef} from "../node_modules/angular2/ts/src/core/linker/element_ref";

@Directive({
    selector: '[autoGrow]', //This says anytime you see a autoGrow element do something
    host: {
        '(focus)': 'onFocus()', // binding onFocus method to focus event
        '(blur)': 'onBlur()'
    }
})
export class AutoGrowDirective {

    // _ means private field can be done this way
    //_el: ElementRef;

    // Ansible automatically add these in constructor
    constructor(private el: ElementRef, private renderer: Renderer) {
        // this will essentially do what was done above and below.
        //this._el = el;

    }

    onFocus() {
        this.renderer.setElementStyle(this.el, 'width', '200');
    }

    onBlur() {
        this.renderer.setElementStyle(this.el, 'width', '120');
    }

}