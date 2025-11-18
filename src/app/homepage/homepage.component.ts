import {Component, OnInit} from '@angular/core';
import {Image} from "./Image";

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css'],
    standalone: false
})
export class HomepageComponent implements OnInit {

  images: Image[];
  heroLoaded = false;

  constructor() {
    this.images = [
      {
        month: 'januari',
        src: '/assets/images/2025/1.jpg'
      },
      {
        month: 'februari',
        src: '/assets/images/2025/2.jpg'
      },
      {
        month: 'maart',
        src: '/assets/images/2025/3.jpg'
      },
      {
        month: 'april',
        src: '/assets/images/2025/4.jpg'
      },
      {
        month: 'mei',
        src: '/assets/images/2025/5.jpg'
      },
      {
        month: 'juni',
        src: '/assets/images/2025/6.jpg'
      },
      {
        month: 'juli',
        src: '/assets/images/2025/7.jpg'
      },
      {
        month: 'augustus',
        src: '/assets/images/2025/8.jpg'
      },
      {
        month: 'september',
        src: '/assets/images/2025/9.jpg'
      },
      {
        month: 'oktober',
        src: '/assets/images/2025/10.jpg'
      },
      {
        month: 'november',
        src: '/assets/images/2025/11.jpg'
      },
      {
        month: 'december',
        src: '/assets/images/2025/12.jpg'
      },
       {
          month: 'januari',
         src: '/assets/images/2025/13.jpg'
      }
    ]

  }

  ngOnInit(): void {
  }

  onHeroLoad(): void {
    this.heroLoaded = true;
  }

}
