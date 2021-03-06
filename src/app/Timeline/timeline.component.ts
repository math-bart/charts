import { Component, OnInit, } from '@angular/core';
import * as c3 from 'c3';
import * as d3 from 'd3';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {

  ngOnInit() {
    const chart = c3.generate({
      size: {
        width: 1200,
        height: 500
      },
      bindto: '#chart3',
      padding: {
        right: 0,
        top: 80,
        bottom: 0
      },
      data: {
        x: 'x',
        columns: [
          ['x', '2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06',
            '2013-01-07', '2013-01-08', '2013-01-09', '2013-01-10', '2013-01-11', '2013-01-12'
            , '2013-01-13', '2013-01-14', '2013-01-15', '2013-01-16', '2013-01-17', '2013-01-18'
            , '2013-01-19', '2013-01-20', '2013-01-21', '2013-01-22', '2013-01-23', '2013-01-24'
            , '2013-01-25', '2013-01-26', '2013-01-27', '2013-01-28', '2013-01-29', '2013-01-30',
            '2013-02-01', '2013-02-02', '2013-02-03', '2013-02-04', '2013-02-05', '2013-02-06',
            '2013-02-07', '2013-02-08', '2013-02-09', '2013-02-10', '2013-02-11', '2013-02-12'
            , '2013-02-13', '2013-02-14', '2013-02-15', '2013-02-16', '2013-02-17', '2013-02-18'
            , '2013-02-19', '2013-02-20', '2013-02-21', '2013-02-22', '2013-02-23', '2013-02-24'
            , '2013-02-25', '2013-02-26', '2013-02-27', '2013-02-28', '2013-03-01', '2013-03-02'
            , '2013-03-03', '2013-03-04', '2013-03-05', '2013-03-06', '2013-03-07', '2013-03-08'
            , '2013-03-09', '2013-03-12', '2013-03-13', '2013-03-14', '2013-03-15', '2013-03-16'],
          ['aplicants', 12, 34, 87, 3, 52, 36,
            12, 34, 87, 3, 52, 36,
            12, 34, 87, 3, 52, 36,
            12, 34, 87, 3, 52, 36,
            12, 34, 87, 3, 52, 36,
            12, 34, 87, 3, 52, 36,
            12, 34, 87, 3, 52, 36,
            12, 34, 87, 3, 52, 36,
            12, 34, 87, 3, 52, 36,
            12, 34, 87, 3, 52, 36,
            12, 34, 87, 3, 52, 36,
            12, 34, 87, 3, 52, 36,
            /*12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36
            , 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3,
            52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36
            , 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3,
            52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36
            , 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3,
            52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36, 12, 34, 87, 3, 52, 36*/],
        ],
        type: 'bar',
        colors: {
          aplicants: '#ff0000',
        },
        order: null,
        labels: {
          format: {
            ooo: function (v) { return v ; },
          }
        }
      },
      bar: {
        width: {
          ratio: 0.8
        }
      },
      axis: {
        rotated: false,
        x: {
          show: true,
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d',
            rotate: -60,
            culling: {
              max: 50
            }
          },
        },
        y: {
          show: true,
          padding: { top: 30, bottom: 30 }
        },
      },
      zoom: {
        enabled: true,
        rescale: true,
        onzoomend: function (domain) {
          d3.selectAll('.selection')
            .attr('style', 'display: none');
        }
      },
      legend: {
        hide: true,
      },
      subchart: {
        show: true,
        size: {
          height: 40
        },
      }
    });
  }
}
