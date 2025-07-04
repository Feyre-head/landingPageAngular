import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, NgOptimizedImage],
  providers: [],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
