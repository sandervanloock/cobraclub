import {Component, OnInit} from '@angular/core';
import {Image} from "./Image";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  images: Image[];

  constructor() {
    this.images = [
      {
        month: 'januari',
        src: '/assets/images/2024/1 FRONT.jpg'
      },
      {
        month: 'februari',
        src: '/assets/images/2024/2 FEBRUARI.jpg'
      },
      {
        month: 'maart',
        src: '/assets/images/2024/3 MAART.jpg'
      },
      {
        month: 'april',
        src: '/assets/images/2024/4 APRIL.jpg'
      },
      {
        month: 'mei',
        src: '/assets/images/2024/5 MEI.jpg'
      },
      {
        month: 'juni',
        src: '/assets/images/2024/6 JUNI.jpg'
      },
      {
        month: 'juli',
        src: '/assets/images/2024/7 JULI.jpg'
      },
      {
        month: 'augustus',
        src: '/assets/images/2024/8 AUGUSTUS.jpg'
      },
      {
        month: 'september',
        src: '/assets/images/2024/9 SEPTEMBER.jpg'
      },
      {
        month: 'oktober',
        src: '/assets/images/2024/10 OCTOBER.jpg'
      },
      {
        month: 'november',
        src: '/assets/images/2024/11 NOVEMBER.jpg'
      },
      {
        month: 'december',
        src: '/assets/images/2024/12 DECEMBER.jpg'
      },
       {
          month: 'januari',
          src: '/assets/images/2024/13 JANUARI 2025.jpg'
      }
    ]

  }

  ngOnInit(): void {
  }

}
