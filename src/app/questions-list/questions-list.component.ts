import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//
import { DSAQues } from '../Models/DSAQues.Model';
import { QuestionsService } from '../Services/questions.service';


@Component({
  selector: 'app-questions-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css'
})
export class QuestionsListComponent implements OnInit {
  DSAQuestions: DSAQues[] = [];

  current_completed_questions = 0;
  total_user_questions = 75;
  
  constructor(private questionsService: QuestionsService) {

  }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionsService.getQuestions()
        .subscribe(
          (data) => {
          this.DSAQuestions = data;
        }, 
        (error) => {
          console.log("Some error occured");
          console.log(error);
        })
  }
}
