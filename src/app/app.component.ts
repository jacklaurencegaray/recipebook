import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  loadedFeature = 'recipe';

  constructor(private authService: AuthService) {}

  ngOnInit() {    
    firebase.initializeApp({
      apiKey: 'AIzaSyASKaiDX8SfS-aFwUxGoUOhHHhmwoXuv_A',
      authDomain: 'recipe-abd2b.firebaseio.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
