import { Routes } from '@angular/router';
import { QuestionsListComponent } from './questions-list/questions-list.component';

export const routes: Routes = [
    {path: "dsa", component: QuestionsListComponent},
    {path: "**", component: QuestionsListComponent }

];
