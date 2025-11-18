import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Image} from '../homepage/Image';
import {LightboxService} from './lightbox.service';
import Swiper from 'swiper';
import {Keyboard, Navigation, Pagination, Zoom} from 'swiper/modules';

@Component({
  selector: 'app-image-lightbox',
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.css'],
  standalone: false
})
export class ImageLightboxComponent implements OnInit, OnDestroy {
  isOpen = false;
  images: Image[] = [];
  currentIndex = 0;
  swiper?: Swiper;

  constructor(private lightboxService: LightboxService) {
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (this.isOpen) {
      event.preventDefault();
      this.close();
    }
  }

  ngOnInit(): void {
    this.lightboxService.lightboxState$.subscribe(state => {
      this.isOpen = state.isOpen;
      this.images = state.images;
      this.currentIndex = state.currentIndex;

      if (this.isOpen) {
        setTimeout(() => this.initSwiper(), 100);
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        if (this.swiper) {
          this.swiper.destroy();
          this.swiper = undefined;
        }
      }
    });
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  initSwiper(): void {
    const swiperEl = document.querySelector('.lightbox-swiper') as HTMLElement;
    if (!swiperEl) return;

    this.swiper = new Swiper(swiperEl, {
      modules: [Navigation, Pagination, Keyboard, Zoom],
      initialSlide: this.currentIndex,
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      zoom: {
        maxRatio: 3,
        minRatio: 1,
      },
      loop: true,
      speed: 300,
    });
  }

  close(): void {
    this.lightboxService.close();
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('lightbox-backdrop')) {
      this.close();
    }
  }

  getWebPSrc(src: string): string {
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
}
