import {Component, OnInit} from '@angular/core';
import {StructuredDataService} from './services/structured-data.service';
import {NavigationEnd, Router} from '@angular/router';
import {ViewportScroller} from '@angular/common';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'ng-cobraclub';
  menuOpen = false;

  constructor(
    private structuredDataService: StructuredDataService,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
  }

  ngOnInit(): void {
    // Add Organization structured data for SEO
    const organizationSchema = this.structuredDataService.getOrganizationSchema();
    this.structuredDataService.insertSchema(organizationSchema, 'organization-schema');

    // Scroll to top on route change
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
      this.closeMenu();
    });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    // If not on homepage, navigate there first
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(sectionId);
        }, 100);
      });
    } else {
      this.viewportScroller.scrollToAnchor(sectionId);
    }
  }
}
