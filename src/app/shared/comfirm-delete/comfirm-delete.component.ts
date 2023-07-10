import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-comfirm-delete',
    templateUrl: './comfirm-delete.component.html',
    styleUrls: ['./comfirm-delete.component.css'],
})
export class ComfirmDeleteComponent {
    @Output('cancel') cancelEvent = new EventEmitter();
    @Output('delete') deleteEvent = new EventEmitter();
    onCancel() {
        this.cancelEvent.emit();
    }

    onDelete() {
        this.deleteEvent.emit();
    }
}
