import { Component, OnInit } from '@angular/core';
import ICar from 'src/shared/interface/ICar';

import { DashboardViewService } from './dashboard-view.service';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  constructor(private dashboardViewService: DashboardViewService) {}

  crawlerResponse = [];

  ngOnInit(): void {
    this.dashboardViewService.getAllCars().subscribe({
      next: (response) => {
        this.crawlerResponse = response.map((car: ICar) => {
          return {
            x: new Date(car.postDate),
            y: car.price,
            formattedPrice: car.formattedPrice,
            name: car.announceName,
            imgSrc: car.img,
            url: car.link,
          };
        });
      },
      error: (error) => {},
    });
  }
}
