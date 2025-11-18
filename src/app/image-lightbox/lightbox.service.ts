import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Image} from '../homepage/Image';

export interface LightboxState {
  isOpen: boolean;
  images: Image[];
  currentIndex: number;
}

@Injectable({
  providedIn: 'root'
})
export class LightboxService {
  private lightboxStateSubject = new BehaviorSubject<LightboxState>({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  lightboxState$ = this.lightboxStateSubject.asObservable();

  open(images: Image[], index: number): void {
    this.lightboxStateSubject.next({
      isOpen: true,
      images,
      currentIndex: index
    });
  }

  close(): void {
    this.lightboxStateSubject.next({
      isOpen: false,
      images: [],
      currentIndex: 0
    });
  }
}
