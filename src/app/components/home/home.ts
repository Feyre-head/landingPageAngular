import { Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header],
  providers: [],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
