import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCrM5fC6_VCC2Fm1mP1-pT6nKsaMpD_aFg',
    authDomain: 'ng-recipe-book-f9f03.firebaseapp.com'
  });
  }
}
