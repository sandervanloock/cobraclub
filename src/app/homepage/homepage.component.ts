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
        month: 'februari',
        src: '/assets/images/2026/1.webp'
      },
      {
        month: 'maart',
        src: '/assets/images/2026/2.webp'
      },
      {
        month: 'april',
        src: '/assets/images/2026/3.webp'
      },
      {
        month: 'mei',
        src: '/assets/images/2026/4.webp'
      },
      {
        month: 'juni',
        src: '/assets/images/2026/5.webp'
      },
      {
        month: 'juli',
        src: '/assets/images/2026/6.webp'
      },
      {
        month: 'augustus',
        src: '/assets/images/2026/7.webp'
      },
      {
        month: 'september',
        src: '/assets/images/2026/8.webp'
      },
      {
        month: 'oktober',
        src: '/assets/images/2026/9.webp'
      },
      {
        month: 'november',
        src: '/assets/images/2026/10.webp'
      },
      {
        month: 'december',
        src: '/assets/images/2026/11.webp'
      },
      {
        month: 'januari',
        src: '/assets/images/2026/12.webp'
      }
    ]

  }

  ngOnInit(): void {
  }

  onHeroLoad(): void {
    this.heroLoaded = true;
  }

}
