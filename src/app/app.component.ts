import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ExtrarightComponent } from './extraright/extraright.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HttpClientModule,
    QuestionsListComponent,
    ScheduleComponent,
    ExtrarightComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'interview_Prep_DSA';
}
