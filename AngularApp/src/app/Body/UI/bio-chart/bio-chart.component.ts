import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart, ChartConfiguration, ChartData, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-bio-chart',
  templateUrl: './bio-chart.component.html',
  standalone: true,
  styleUrls: ['./bio-chart.component.css']
})
export class BioChartComponent implements OnInit, AfterViewInit {
  @ViewChild('bioChart', { static: false }) bioChart!: ElementRef<HTMLCanvasElement>;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    Chart.register(...registerables);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.createChart();
    }
  }

  createChart(): void {
    const chart_data: ChartData = {
      labels: [
        'Солома та качан кукурудзи',
        'Солома соняшнику',
        'Макуха насіння соняшнику',
        'Гній ВРХ',
        'Послід курячий',
        'Лушпиння соняшнику',
        'Некондиційний врожай',
        'Бадилля буряків цукрових',
        'Дефекат',
        'Свіжий жом',
        'Гній свинячий',
        'Шрот',
        'Інше',
        'Солома зернових',
      ],
      datasets: [
        {
          label: 'Dataset 1',
          data: [17.0, 15.0, 5.0, 4.0, 3.0, 2.0, 2.0, 2.0, 1.0, 1.0, 1.0, 1.0, 12.0, 34.0],
          backgroundColor: [
            '#ffc099', '#ffdfcc', '#fa5d00', '#8a3300', '#b84400', '#e65500',
            '#ff6c14', '#ff8238', '#bd4600', '#ff8238', '#ffac7a', '#ff6205',
            '#ff9557', '#ff5f00',
          ],
          borderColor: 'rgba(255,255,255, 0)',
          borderWidth: 0,
          weight: 0.5,
        },
        {
          label: 'empty to make chart thinner',
          data: [0],
          backgroundColor: ['rgba(0,0,0,0)'],
          borderWidth: 0,
          weight: 0.5,
        },
      ],
    };

    const chart_config: ChartConfiguration = {
      type: 'doughnut' as ChartType,
      data: chart_data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'top',
          },
          title: {
            display: false,
            text: 'Chart.js Doughnut Chart',
          },
        },
      },
    };

    if (this.bioChart && this.bioChart.nativeElement) {
      new Chart(this.bioChart.nativeElement, chart_config);
    }
  }
}
