import { Injectable } from '@angular/core';
import { Project, ProjectStatus } from './project.model';
import { Subject } from 'rxjs';

@Injectable()
export class ProjectService {
    private projects: Project[] = INIT_PROJECTS;
    projectsChanged = new Subject<Project[]>();
    constructor() {}
    getProjects(): Project[] {
        return this.projects.slice();
    }

    getProject(index: number): Project {
        return this.projects[index];
    }

    addProject(project: Project) {
        this.projects.push(project);
        this.notify();
    }

    updateProject(index: number, project: Project) {
        this.projects[index] = project;
        this.notify();
    }

    deleteProject(index: number) {
        this.projects.splice(index, 1);
        this.notify();
    }

    updateStatus(index: number, status: ProjectStatus) {
        this.projects[index].status = status;
        this.notify();
    }

    private notify() {
        this.projectsChanged.next(this.projects.slice());
    }
}

const INIT_PROJECTS = [
    new Project(
        'Website Redesign',
        'Redesigning the company website for better user experience',
        new Date('2023-07-01'),
        new Date('2023-07-15'),
        ProjectStatus.Active,
    ),
    new Project(
        'Mobile App Development',
        'Developing a mobile application for iOS and Android platforms',
        new Date('2023-08-01'),
        new Date('2023-08-30'),
        ProjectStatus.NotStarted,
    ),
    new Project(
        'Marketing Campaign',
        'Launching a marketing campaign to increase brand awareness',
        new Date('2023-09-01'),
        new Date('2023-09-30'),
        ProjectStatus.Cancel,
    ),
    new Project(
        'Product Launch',
        'Preparing for the launch of a new product line',
        new Date('2023-10-01'),
        new Date('2023-11-15'),
        ProjectStatus.Completed,
    ),
    new Project(
        'Sales Training',
        'Conducting training sessions for the sales team',
        new Date('2023-07-20'),
        new Date('2023-08-10'),
        ProjectStatus.Active,
    ),
];
