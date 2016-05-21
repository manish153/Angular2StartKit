import {Directive, AfterViewInit} from 'angular2/core';

declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})


export class MDL implements AfterViewInit {

    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}