import { Component, Input, OnChanges, OnInit } from '@angular/core';

// TODO only import what is using
import * as Highcharts from 'highcharts';

import ICar from 'src/shared/interface/ICar';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnChanges, OnInit {
  @Input() chartData: Highcharts.PointOptionsObject[] | undefined;

  options: Highcharts.Options = {};

  ngOnChanges() {
    if (
      this.options &&
      this.options.series &&
      this.options.series[0].type === 'scatter'
    ) {
      this.options.series[0].data = this.chartData;
    }

    Highcharts.chart('chart-container', this.options);
  }

  ngOnInit() {
    this.options = {
      title: {
        text: 'Preço de carros seminovos',
      },

      chart: {
        type: 'scatter',
      },

      subtitle: {
        text: 'Source: Olx PE',
      },

      yAxis: {
        title: {
          text: 'Preço',
        },
      },

      xAxis: {
        type: 'datetime',
        labels: {
          formatter: function () {
            return new Date(this.value).toString();
          },
        },
        accessibility: {
          rangeDescription: 'Data Postagem',
        },
      },

      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
      },

      tooltip: {
        useHTML: true,
        formatter: function () {
          var point = this.point.options as ICar;
          return `<div class="d-flex flex-column">
                        <span class="my-2"><b>Anuncio:</b> ${point.announceName}</span>
                        <span class="my-2"><b>Preço:</b> ${point.formattedPrice}</span>
                        <img  class="my-2" src = "${point.img}" height="120" width="200"/>
                      </div>`;
        },
      },

      series: [
        {
          name: 'Carros',
          type: 'scatter',
          data: [],
        },
      ],

      plotOptions: {
        series: {
          point: {
            events: {
              // click: (pointClickEventObject) => {
              //   var point = pointClickEventObject.point as unknown as ICar;
              //   if (point && window) {
              //     window.open(point.link, '_blank').focus();
              //   }
              // },
            },
          },
        },
      },

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };
    Highcharts.chart('chart-container', this.options);
  }
}
