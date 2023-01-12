import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionsService } from '../Service/questions.service';

@Component({
  selector: 'app-quiestion-main',
  templateUrl: './quiestion-main.component.html',
  styleUrls: ['./quiestion-main.component.scss']
})
export class QuiestionMainComponent implements OnInit {

  public name: string = "";
  public questionsList: any = [];
  public currentQuestions: number = 0;
  public points: number = 0;
  public counter = 60;
  public correctAnswer: number = 0;
  public wrongAnswer: number = 0;
  public interval$: any;
  public progress: string = "0"
  public isQuizComplete: boolean = false;


  constructor(private service: QuestionsService) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    this.service.getJsonQuestions().subscribe(
      (question) => {
        this.questionsList = question.questions;

      }
    )
  }

  nextQuestion() {
    this.currentQuestions++;

  }

  previousQuestion() {
    this.currentQuestions--;
  }
  answerChecker(currentq: number, option: any) {
    if (currentq === this.questionsList.length) {
      this.isQuizComplete = true;
      this.stopCounter();


    }


    if (option.correct) {
      this.points += 10;
      this.correctAnswer += 1;
      setTimeout(() => {
        this.currentQuestions += 1;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);

    }

    else {
      setTimeout(() => {
        this.wrongAnswer += 1;
        this.currentQuestions += 1;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
      this.points -= 10;
    }
  }

  startCounter() {
    this.interval$ = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestions += 1;
          this.counter = 60;
          this.points -= 10;
          this.wrongAnswer++;
        }

      })
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 6000000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;

  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }
  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestions = 0
    this.progress = "0"


  }
  getProgressPercent() {
    this.progress = ((this.currentQuestions / this.questionsList.length) * 100).toString();
    return this.progress;
  }
}
