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
        src: '/assets/images/2023/1 CCB_kalender2023 front.jpg'
      },
      {
        month: 'februari',
        src: '/assets/images/2023/2 feb.jpg'
      },
      {
        month: 'maart',
        src: '/assets/images/2023/3 ma (2).jpg'
      },
      {
        month: 'april',
        src: '/assets/images/2023/4 april.jpg'
      },
      {
        month: 'mei',
        src: '/assets/images/2023/5 mei.jpg'
      },
      {
        month: 'juni',
        src: '/assets/images/2023/6 juni.jpg'
      },
      {
        month: 'juli',
        src: '/assets/images/2023/7 jul.jpg'
      },
      {
        month: 'augustus',
        src: '/assets/images/2023/8 aug.jpg'
      },
      {
        month: 'september',
        src: '/assets/images/2023/9 september (2).jpg'
      },
      {
        month: 'oktober',
        src: '/assets/images/2023/10 oct.jpg'
      },
      {
        month: 'november',
        src: '/assets/images/2023/11 nov (3).jpg'
      },
      {
        month: 'december',
        src: '/assets/images/2023/12 dec.jpg'
      },
       {
          month: 'januari',
          src: '/assets/images/2023/13 feb 2024.jpg'
      }
    ]

  }

  ngOnInit(): void {
  }

}
