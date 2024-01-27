import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//
import { DSAQues } from '../Models/DSAQues.Model';
import { QuestionsService } from '../Services/questions.service';
import { ScheduleComponent } from '../schedule/schedule.component';
import { ExtrarightComponent } from '../extraright/extraright.component';


@Component({
  selector: 'app-questions-list',
  standalone: true,
  imports: [RouterModule, CommonModule, ScheduleComponent, ExtrarightComponent],
  templateUrl: './questions-list.component.html',
  styleUrl: './questions-list.component.css'
})
export class QuestionsListComponent implements OnInit {
  DSAQuestions: DSAQues[] = [];
  category_questions : any;
  showQuestionOfCategory: number = 0;

  // filters
  // filter 1
  showQuestionsOnPreference = "Based on Preferences"; 
  // filter 2
  questionsOrderByTopics = "Order by Topics";
  // filter 3
  questionsGroupByTopics = "Group by Topics";
  // filter 4
  hideOrShowTopicStatus = "Show topics";

  current_completed_questions = 0;
  total_user_questions = 75;

  currentCategoryToShow = 0;
  currentToggleId = "";

  weeksToPrepare = 0;
  hoursPerWeekToPrepare = 0;
  
  constructor(private questionsService: QuestionsService) {

  }

  hideOrShowTopicStatusChange() {
    if(this.hideOrShowTopicStatus == "Show topics") {
      this.hideOrShowTopicStatus = "Hide topics";
    }
    else {
      this.hideOrShowTopicStatus = "Show topics";
    }
  }

  showQuesCategory(categoryId: number) {
    this.currentCategoryToShow = categoryId;
    this.currentToggleId = "collapse" + categoryId;
    console.log(this.currentToggleId);
  }

  currentToggleIdname() {
    return this.currentToggleId;
  }

  showQuesOfCategory(id: number) {
    this.showQuestionOfCategory = id;
    console.log("Show questions of category " + this.showQuestionOfCategory);
  }

  categoryQuesToShow() {
    return this.showQuestionOfCategory;
  }

  ngOnInit() {
    this.getQuestions();
    this.getCategoryQues();
  }

  getCategoryQues() {
    this.questionsService.getCategoryQuestions()
        .subscribe(
          (data) => {
            this.category_questions = data;
          },
          (error) => {
            console.log("Some error occurred.");
            console.log(error);
          }
        )
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
