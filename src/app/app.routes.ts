import { Routes } from '@angular/router';
import { MainPageComponent } from '../app/main-page/main-page.component'
import { NewRequestComponent } from '../app/new-request/new-request.component'
import { ManageRequestComponent } from '../app/manage-request/manage-request.component'
import { ArchiveRequestComponent } from '../app/archive-request/archive-request.component';

export const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path: 'new-request', component: NewRequestComponent },
  { path: 'manage-request', component: ManageRequestComponent },
  { path: 'archive-request', component: ArchiveRequestComponent }
];
