import {Component} from '@angular/core';
import {MatIconRegistry, MatDialog} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isDarkTheme = true;

  constructor() {
  }
}
