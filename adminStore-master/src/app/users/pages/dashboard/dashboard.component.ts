import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  chartOptions!: {};

  Highcharts = Highcharts;
  users: User[] = [];
  constructor(private userService: UsersService) {
    //this.getUsers();
  }

  chartOptions1 = {};
  ngOnInit() {
    this.chartOptions1 = {
      chart: {
        type: 'area',
        backgroundColor: null,
        borderwidth: 0,
        margin: [2, 2, 2, 2],
        height: 60,
      },
      title: {
        text: null,
      },
      subtitle: {
        text: null,
      },
      tooltip: {
        split: true,
        outside: true,
      },
      legend: {
        enable: false,
      },
      creditos: {
        enable: false,
      },
      exporting: {
        enable: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: [],
      },
      series: [
        {
          data: [71, 78, 39, 66],
        },
      ],
    };
    HC_exporting(Highcharts);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'Mega Vendidos',
      },
      subtitle: {
        text: 'Tecnologico',
      },
      tooltip: {
        split: true,
        valueSuffix: 'millions',
      },
      creditos: {
        enable: false,
      },
      exporting: {
        enable: true,
      },
      series: [
        {
          name: 'Audifonos',
          data: [502, 635, 809, 947, 1402, 3634, 5268],
        },
        {
          name: 'Laptops',
          data: [501, 600, 509, 947, 102, 4634, 2568],
        },
        {
          name: 'Mause',
          data: [601, 435, 709, 247, 102, 2634, 4268],
        },
        {
          name: 'Case',
          data: [291, 435, 609, 247, 102, 3204, 3268],
        },
        {
          name: 'Adaptadores',
          data: [291, 435, 609, 247, 102, 3204, 3268],
        },
      ],
    };
  }

  getUsers() {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log('this.users', this.users);
    });
  }
}
