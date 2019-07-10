import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.sass']
})
export class LandingPageComponent implements OnInit {

  public name = "PROJETO"
  public projectText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi nisl, auctor fermentum ante nec, rutrum facilisis sapien. Praesent efficitur tempus eros a volutpat. Praesent fringilla tellus urna. Integer a posuere."
  public projectList = ["1","2","3","4","5","6"]
  public title = ["Desenvolvimento Mobile","Desenvolvimento WEB","Desenvolvimento Mobile","Desenvolvimento Mobile","Desenvolvimento Mobile","Desenvolvimento Mobile","Desenvolvimento Mobile","Desenvolvimento Mobile"]

  constructor() { }

  ngOnInit() {
  }

};

