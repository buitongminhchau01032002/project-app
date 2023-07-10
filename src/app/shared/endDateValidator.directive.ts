import { Directive, Attribute, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[appEndDateValidator]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useClass: EndDateValidatorDirective,
            multi: true,
        },
    ],
})
export class EndDateValidatorDirective implements Validator {
    constructor(
        @Attribute('appEndDateValidator') public startDateCtrl: string,
    ) {}

    validate(c: FormControl) {
        const startDate = c.parent.controls[this.startDateCtrl];
        const endDate = c;

        if (endDate.value === null) {
            return null;
        }

        if (startDate) {
            const subscription: Subscription = startDate.valueChanges.subscribe(
                () => {
                    endDate.updateValueAndValidity();
                    subscription.unsubscribe();
                },
            );
        }
        return startDate && endDate.value < startDate.value
            ? { afterDateError: true }
            : null;
    }
}
