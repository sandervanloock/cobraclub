import { Component, OnInit } from '@angular/core';
import { StructuredDataService } from './services/structured-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'ng-cobraclub';

  constructor(private structuredDataService: StructuredDataService) {}

  ngOnInit(): void {
    // Add Organization structured data for SEO
    const organizationSchema = this.structuredDataService.getOrganizationSchema();
    this.structuredDataService.insertSchema(organizationSchema, 'organization-schema');
  }
}
