import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.css'],
})
export class ProjectDetailComponent implements OnInit {
    id: number;
    project: Project;
    idToDelete?: number;
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
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.project = this.projectService.getProject(this.id);
            this.idToDelete = null;
        });
    }

    onGoBack() {
        this.canGoBack && this.location.back();
    }

    onCancelDelete() {
        this.idToDelete = null;
    }

    onDeleteProject() {
        this.projectService.deleteProject(this.idToDelete);
        this.idToDelete = null;
        this.router.navigate(['/']);
    }
}
