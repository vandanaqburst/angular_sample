import { Component, OnInit } from '@angular/core';

// import {
//   QuestionsService
// } from '../services/index';

@Component({
  selector: 'app-login',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [QuestionsService]
})

export class QuestionComponent implements OnInit {
	questions: any;
	private showDetails = false;

  constructor(private questionsService: QuestionsService) {}

  ngOnInit() {
    this.allQuestions();
  }

  allQuestions() {
    this.questionsService
	      .getQuestions()
	      .subscribe(
	        response => { this.questions = response.json(); },
	        error => { console.log('Error!!!'); }
	      );
  }

  showItems(val){
  	console.log("ljnljnkjn")
    val.srcElement.nextElementSibling.style['visibility']="visible";
	}

}
