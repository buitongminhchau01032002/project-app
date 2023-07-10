import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit, OnDestroy {
    projects: Project[];
    idToDelete?: number;
    private subscription: Subscription;

    constructor(private projectService: ProjectService) {}

    ngOnInit(): void {
        this.subscription = this.projectService.projectsChanged.subscribe(
            (projects: Project[]) => {
                this.projects = projects;
            },
        );
        this.projects = this.projectService.getProjects();
        this.idToDelete = null;
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onCancelDelete() {
        this.idToDelete = null;
    }

    onDeleteProject() {
        this.projectService.deleteProject(this.idToDelete);
        this.idToDelete = null;
    }
}
