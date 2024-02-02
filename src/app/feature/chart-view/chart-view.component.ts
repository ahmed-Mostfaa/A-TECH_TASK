import { ToastModule } from 'primeng/toast';
import { Component, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions, Language } from '../../core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'ATECH-chart-view',
  standalone: true,
  imports: [NgApexchartsModule, TranslateModule, TooltipModule, ToastModule],
  templateUrl: './chart-view.component.html',
  styleUrl: './chart-view.component.scss',
})
export class ChartViewComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(private __translate: TranslateService) {
    this.chartOptions = {
      series: [
        {
          name: this.__translate.instant('chart.tooltipTitle'),
          data: [84, 62, 101, 93, 49, 62, 69, 91, 54, 120, 140, 100],
        },
      ],
      colors: ['#8a74f9', '#8a74f942', '#8a74f91a'],
      chart: {
        background: '#fff',
        fontFamily: 'unset',
        height: '264px',
        width: '839px',
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: this.__translate.instant('chart.title'),
        align: this.__translate.instant('dir'),
        offsetX: __translate.currentLang == Language.Arabic ? -170 : 5,
        offsetY: 20,
        style: {
          fontWeight: '500',
        },
      },
      subtitle: {
        text: this.__translate.instant('chart.subtitle'),
        align: this.__translate.instant('dir'),
        offsetX: __translate.currentLang == Language.Arabic ? -200 : 5,
        offsetY: 45,
        style: {
          color: '#92A1AD',
        },
      },
      yaxis: {
        show: false,
      },

      xaxis: {
        categories: this.__translate.instant('chart.xaxis'),
      },
      tooltip: {
        theme: 'dark',
      },
      annotations: {
        yaxis: [
          {
            y: 150,

            label: {
              text: __translate.instant('chart.yearly'),
              style: {
                background: '#E8E8E8',
                color: '#1C1C28',
                fontSize: '14px',
                padding: {
                  left: 10,
                  right: 10,
                  top: 8,
                  bottom: 10,
                },
              },
              position:
                __translate.currentLang === Language.Arabic ? 'left' : 'right',
              offsetX: __translate.currentLang == Language.Arabic ? 20 : -20,
              offsetY: -20,
              click: () => {
                console.log('Hello world');
              },
            },
          },
        ],
        points: [
          {
            marker: {
              strokeWidth: 0,
            },
          },
        ],
      },
      responsive: [
        {
          breakpoint: 1120,
          options: {
            chart: {
              width: '740px',
              type: 'bar',
            },
          },
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              width: '400px',
            },
          },
        },
        {
          breakpoint: 425,
          options: {
            chart: {
              width: '',
            },
          },
        },
      ],
    };
  }
}
