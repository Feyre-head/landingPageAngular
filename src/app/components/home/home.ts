import { Component } from '@angular/core';
import { Header } from '../header/header';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BtnPrimary } from "../btn-primary/btn-primary";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, NgOptimizedImage, BtnPrimary, CommonModule],
  providers: [],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

}
