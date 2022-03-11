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
        month: 'februari',
        src: '/assets/images/2022/februari.jpeg'
      },
      {
        month: 'maart',
        src: '/assets/images/2022/maart.jpeg'
      },
      {
        month: 'april',
        src: '/assets/images/2022/april.jpeg'
      },
      {
        month: 'mei',
        src: '/assets/images/2022/mei.jpg'
      },
      {
        month: 'juni',
        src: '/assets/images/2022/juni.jpeg'
      },
      {
        month: 'juli',
        src: '/assets/images/2022/juli.jpeg'
      },
      {
        month: 'augustus',
        src: '/assets/images/2022/augustus.jpeg'
      },
      {
        month: 'september',
        src: '/assets/images/2022/september.jpg'
      },
      {
        month: 'oktober',
        src: '/assets/images/2022/oktober.JPG'
      },
      {
        month: 'november',
        src: '/assets/images/2022/november.jpeg'
      },
      {
        month: 'december',
        src: '/assets/images/2022/december.jpeg'
      },
       {
              month: 'januari',
              src: '/assets/images/2022/januari-2023.jpg'
      }
    ]

  }

  ngOnInit(): void {
  }

}
