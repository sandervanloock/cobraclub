import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../homepage/Image";

@Component({
    selector: 'app-homepage-image',
    templateUrl: './homepage-image.component.html',
    styleUrls: ['./homepage-image.component.css'],
    standalone: false
})
export class HomepageImageComponent implements OnInit {

  @Input() image: Image |undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
