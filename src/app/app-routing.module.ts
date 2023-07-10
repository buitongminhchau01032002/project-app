import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

const appRoutes: Routes = [
    { path: '', component: ProjectListComponent },
    { path: 'create', component: ProjectCreateComponent },
    { path: 'edit/:id', component: ProjectEditComponent },
    { path: ':id', component: ProjectDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
