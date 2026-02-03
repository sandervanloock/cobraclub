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
        src: '/assets/images/2026/1.webp',
        events: [
          {date: 'Zondag 22 februari', title: 'Bezoek Abarth museum'}
        ]
      },
      {
        month: 'maart',
        src: '/assets/images/2026/2.webp',
        events: [
          {date: 'Zaterdag 7 maart', title: 'Afternoon Cruise'},
          {date: 'Zondag 22 maart', title: 'Pallieterrally Lier'}
        ]
      },
      {
        month: 'april',
        src: '/assets/images/2026/3.webp',
        events: [
          {date: 'Zondag 19 april', title: 'Openingsrit'},
          {date: '24-25-26 april', title: 'Spa Summer Classic'}
        ]
      },
      {
        month: 'mei',
        src: '/assets/images/2026/4.webp'
      },
      {
        month: 'juni',
        src: '/assets/images/2026/5.webp',
        events: [
          {date: 'Zaterdag 13 juni', title: 'Classic Wings & Wheels Gilzerijen'}
        ]
      },
      {
        month: 'juli',
        src: '/assets/images/2026/6.webp',
        events: [
          {date: 'Zondag 5 juli', title: 'Mustang Meeting'},
          {date: 'Zondag 12 juli', title: 'Brabantrit NL nr 8'}
        ]
      },
      {
        month: 'augustus',
        src: '/assets/images/2026/7.webp'
      },
      {
        month: 'september',
        src: '/assets/images/2026/8.webp',
        events: [
          {date: '4-5-6 september', title: 'Weekend CCB'},
          {date: '25-26-27 september', title: '6 uren Spa Francorchamps'}
        ]
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
