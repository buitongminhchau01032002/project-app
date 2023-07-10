import { Component } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-project-edit',
    templateUrl: './project-edit.component.html',
    styleUrls: ['./project-edit.component.css'],
})
export class ProjectEditComponent {
    constructor(
        private projectService: ProjectService,
        private location: Location,
        private router: Router,
    ) {}

    onGoBack() {
        this.location.back();
    }
}
