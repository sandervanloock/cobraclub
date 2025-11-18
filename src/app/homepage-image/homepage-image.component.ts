import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../homepage/Image";
import {LightboxService} from "../image-lightbox/lightbox.service";

@Component({
    selector: 'app-homepage-image',
    templateUrl: './homepage-image.component.html',
    styleUrls: ['./homepage-image.component.css'],
    standalone: false
})
export class HomepageImageComponent implements OnInit {

  @Input() image: Image |undefined;
  @Input() isLCP: boolean = false;
  @Input() allImages: Image[] = [];
  @Input() imageIndex: number = 0;
  imageLoaded = false;

  constructor(private lightboxService: LightboxService) {
  }

  ngOnInit(): void {
  }

  getWebPSrc(src: string): string {
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }

  getPlaceholderSrc(src: string): string {
    // Extract filename and create placeholder path
    const filename = src.split('/').pop()?.replace(/\.(jpg|jpeg|png)$/i, '');
    return `/assets/images/2025/placeholders/${filename}.jpg`;
  }

  onImageLoad(): void {
    this.imageLoaded = true;
  }

  openLightbox(): void {
    this.lightboxService.open(this.allImages, this.imageIndex);
  }

}
