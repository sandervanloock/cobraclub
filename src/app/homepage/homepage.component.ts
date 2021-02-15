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
        src: '/assets/images/2021/januari.jpg'
      },
      {
        month: 'februari',
        src: '/assets/images/2021/februari.jpg'
      },
      {
        month: 'maart',
        src: '/assets/images/2021/maart.jpg'
      },
      {
        month: 'april',
        src: '/assets/images/2021/april.jpg'
      },
      {
        month: 'mei',
        src: '/assets/images/2021/mei.jpg'
      },
      {
        month: 'juni',
        src: '/assets/images/2021/juni.jpg'
      },
      {
        month: 'juli',
        src: '/assets/images/2021/juli.jpg'
      },
      {
        month: 'augustus',
        src: '/assets/images/2021/augustus.jpg'
      },
      {
        month: 'september',
        src: '/assets/images/2021/september.jpg'
      },
      {
        month: 'oktober',
        src: '/assets/images/2021/oktober.jpg'
      },
      {
        month: 'november',
        src: '/assets/images/2021/november.jpg'
      },
      {
        month: 'december',
        src: '/assets/images/2021/december.jpg'
      }
    ]

  }

  ngOnInit(): void {
  }

}
