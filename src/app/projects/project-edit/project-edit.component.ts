import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-project-edit',
    templateUrl: './project-edit.component.html',
    styleUrls: ['./project-edit.component.css'],
})
export class ProjectEditComponent implements OnInit {
    id: number;
    project: Project;
    constructor(
        private projectService: ProjectService,
        private location: Location,
        private route: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.project = this.projectService.getProject(this.id);
        });
        console.log(this.project);
    }

    onSubmit() {
        console.log(this.project);
    }

    onGoBack() {
        this.location.back();
    }
}
