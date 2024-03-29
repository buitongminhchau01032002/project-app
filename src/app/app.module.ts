import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectCreateComponent } from './projects/project-create/project-create.component';
import { ProjectEditComponent } from './projects/project-edit/project-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectService } from './projects/project.service';
import { FormsModule } from '@angular/forms';
import { EndDateValidatorDirective } from './shared/endDateValidator.directive';
import { ComfirmDeleteComponent } from './shared/comfirm-delete/comfirm-delete.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProjectListComponent,
        ProjectDetailComponent,
        ProjectCreateComponent,
        ProjectEditComponent,
        EndDateValidatorDirective,
        ComfirmDeleteComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [ProjectService],
    bootstrap: [AppComponent],
})
export class AppModule {}
