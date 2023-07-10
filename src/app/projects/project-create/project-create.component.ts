import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Project, ProjectStatus } from '../project.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-project-create',
    templateUrl: './project-create.component.html',
    styleUrls: ['./project-create.component.css'],
})
export class ProjectCreateComponent implements OnInit {
    id: number;
    project: Project;
    private readonly canGoBack: boolean;
    constructor(
        private projectService: ProjectService,
        private location: Location,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.canGoBack =
            !!this.router.getCurrentNavigation()?.previousNavigation;
    }

    ngOnInit(): void {
        this.project = new Project(
            '',
            '',
            new Date(),
            new Date(),
            ProjectStatus.NotStarted,
        );
    }

    onCreateProject() {
        this.projectService.addProject(this.project);
        this.router.navigate(['/']);
    }

    onGoBack() {
        this.canGoBack && this.location.back();
    }
}
