import {Component, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import * as c3 from 'c3';
import * as d3 from 'd3';
import {scaleBand, scaleLinear} from 'd3';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})

export class D3Component implements OnInit, AfterViewInit {
  @ViewChild('rejectedLabel') rejectedLabel;
  totalRejected = 1345;
  totalWithdrawn = 673;
  totalTotal = 2673;
  ngOnInit() {
    const chart = c3.generate({
      size: {
        width: 680
      },
      bindto: '#chart12',
      padding: {
        right: 0,
        top: 50,
        bottom: 0
      },
      data: {
        columns: [
          ['rejected', -0.52, -0.17, -0.16, -0.08, -0.04, -0.02],
          ['witddraw', 0.76, 0.18, 0.08, 0.05, 0.03, 0.01],
        ],
        type: 'bar',
        colors: {
          rejected: '#673AB7',
          witddraw: '#F44336',
        },
        groups: [
          ['rejected',  'witddraw']
        ],
        order: null,
        labels: {
          format: {
            rejected: function (v) { return -v * 100 + '%'; },
            witddraw: d3.format('.0%')
          }
        }
      },
      grid: {
        y: {
          lines: [{value: 0}],
        },
        x: {
          lines: [
            {value: -0.5},
            {value: 0.5},
            {value: 1.5},
            {value: 2.5},
            {value: 3.5},
            {value: 4.5},
            {value: 5.5},
            {value: 6.5},
            {value: 7.5},
            {value: 8.5},
          ]
        }
      },
      bar: {
        width: {
          ratio: 0.97
        }
      },
      axis: {
        rotated: true,
        x: {
          show: false
        },
        y: {
          show: false,
          min: -0.9,
          max: 0.9
        },
      },
      legend: {
        hide: true,
      },
      tooltip: {
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
          const categories = ['dupa1dfhgdf', 'dupa2', 'dupa3', 'dupa4', 'dupa5', 'dupa6'];
          let $$ = this, config = $$.config,
            titleFormat = config.tooltip_format_title || defaultTitleFormat,
            nameFormat = config.tooltip_format_name || function (name) { return name; },
            valueFormat = config.tooltip_format_value || defaultValueFormat,
            text, i, title, value, name, bgcolor;
          for (i = 0; i < d.length; i++) {
            if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }
            if (! text) {
              title = titleFormat ? titleFormat(d[i].x) : d[i].x;
              text = '<table class=\'' + $$.CLASS.tooltip + '\'>' + (title || title === 0 ? '<tr><th colspan=\'2\'>' + categories[title] + '</th></tr>' : '');
            }
            name = nameFormat(d[i].name);
            value = valueFormat(d[i].value, d[i].ratio, d[i].id, d[i].index);
            bgcolor = $$.levelColor ? $$.levelColor(d[i].value) : color(d[i].id);
            text += '<tr class=\'' + $$.CLASS.tooltipName + '-' + d[i].id + '\'>';
            text += '<td class=\'name\'><span style=\'background-color:' + bgcolor + '\'></span>' + name + '</td>';
            text += '<td class=\'value\'>' + (i === 0 ? 100 * -value : 100 * value) + '%' + '</td>';
            text += '</tr>';
          }
          const total = 100 * -d[0].value + 100 * d[1].value;
          text += '<tr>';
          text += '<td class=\'name\'><span style=\'background-color:' + '#03A9F4' + '\'></span>' + 'total' + '</td>';
          text += '<td class=\'value\'>' + total + '</td>';
          text += '</tr>';
          return text + '</table>';
        }
      },
    });
    const chart1 = c3.generate({
      size: {
        width: 200
      },
      bindto: '#chart11',
      padding: {
        top: 50,
        bottom: 0
      },
      interaction: {
        enabled: true,
      },
      data: {
        // iris data from R
        json: [
          {name: 'site1', total: 90, label: 'dupa'},
          {name: 'site2', total: 80, label: 'dupa'},
          {name: 'site3', total: 60, label: 'dupa'},
          {name: 'site4', total: 50, label: 'dupa'},
          {name: 'site3', total: 30, label: 'dupa'},
          {name: 'site4', total: 10, label: 'dupa'}
        ],
        keys: {
          value: ['total']
        },
        colors: {
          total: '#03A9F4',
        },
        type : 'bar',
        labels: {
          format: {
            total: function (v, id, i, j) {
              const categories = ['dupa1dfhgdf', 'dupafggdh2', 'dupa3', 'dupa4', 'dupa5', 'dupa6'];
              return categories[i];
              },
          }
        }
      },
      pie: {
        label: {
          threshold: 0.2
        }
      },
      grid: {
        y: {
          lines: [{value: 0}],
        },
        x: {
          lines: [
            {value: -0.5},
            {value: 0.5},
            {value: 1.5},
            {value: 2.5},
            {value: 3.5},
            {value: 4.5},
            {value: 5.5},
            {value: 6.5},
            {value: 7.5},
            {value: 8.5},
          ]
        }
      },
      bar: {
        width: {
          ratio: 0.9
        }
      },
      axis: {
        rotated: true,
        x: {
          show: false,
          type: 'category',
          categories: ['dupa1dfhgdf', 'dupafggdh2', 'dupa3', 'dupa4', 'dupa5', 'dupa6'],
          tick: {
            centered: true
          },
        },
        y: {
          show: false,
          padding: { top: 230}
        },
      },
      legend: {
        hide: true
      },
      tooltip: {
        contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
          const rejected = [ -0.52, -0.17, -0.16, -0.08, -0.04, -0.02];
          const witddraw =  [ 0.76, 0.18, 0.08, 0.05, 0.03, 0.01];
          let $$ = this, config = $$.config,
            titleFormat = config.tooltip_format_title || defaultTitleFormat,
            nameFormat = config.tooltip_format_name || function (name) { return name; },
            valueFormat = config.tooltip_format_value || defaultValueFormat,
            text, i, title, value, name, bgcolor;
          for (i = 0; i < d.length; i++) {
            if (! (d[i] && (d[i].value || d[i].value === 0))) { continue; }
            if (! text) {
              title = titleFormat ? titleFormat(d[i].x) : d[i].x;
              text = '<table class=\'' + $$.CLASS.tooltip + '\'>' + (title || title === 0 ? '<tr><th colspan=\'2\'>' + title + '</th></tr>' : '');
            }
            const  reject = 100 * -rejected[d[0].index];
            text += '<tr>';
            text += '<td class=\'name\'><span style=\'background-color:' + '#673AB7' + '\'></span>' + 'rejected' + '</td>';
            text += '<td class=\'value\'>' + reject + '%' + '</td>';
            text += '</tr>';
            const  witdd = 100 * witddraw[d[0].index];
            text += '<tr>';
            text += '<td class=\'name\'><span style=\'background-color:' + '#F44336' + '\'></span>' + 'witddraw' + '</td>';
            text += '<td class=\'value\'>' + witdd + '%' + '</td>';
            text += '</tr>';
            name = nameFormat(d[0].name);
            value = valueFormat(d[0].value, d[0].ratio, d[0].id, d[0].index);
            bgcolor = $$.levelColor ? $$.levelColor(d[0].value) : color(d[0].id);
            text += '<tr class=\'' + $$.CLASS.tooltipName + '-' + d[0].id + '\'>';
            text += '<td class=\'name\'><span style=\'background-color:' + bgcolor + '\'></span>' + name + '</td>';
            text += '<td class=\'value\'>' + value + '</td>';
            text += '</tr>';
          }
          return text + '</table>';
        }
      },
    });
  }
  ngAfterViewInit() {
    const cc = true;
    d3.selectAll('svg').style('font-size', '16px');
    /*setTimeout(function () {
      const leg = d3.selectAll('.total-label')
        .attr('style', 'left: 850px');
    }, 500);
    setTimeout(function () {
      const leg = d3.selectAll('.withdrawn-label')
        .attr('style', 'left: 515px');
    }, 2500);
    setTimeout(function () {
      const leg = d3.selectAll('.rejected-label')
        .attr('style', 'left: 120px');
    }, 4000);*/
    /* d3.selectAll('#chart11 .c3-legend-item')
      .attr('display', 'none');*/
    /*d3.selectAll('#chart12 .c3-target-totals')
      .attr('style', 'display: none');
    d3.selectAll('#chart12 .c3-shapes-totals .c3-shape')
      .attr('style', 'display: none');*/
    /*let leg = d3.selectAll('.total-label')
      .on('click', function() {
        if (cc === true) {
          let label = document.getElementsByClassName('rejected-label')[0];
          label.setAttribute('style', 'left: -100px');
          cc = !cc;
          let aa = d3.selectAll('.c3-target-ooo')
            .transition()
            .attr('display', 'none');
          d3.scaleLinear()
            .domain([0, 1]);
          /!* .duration(12500) // second time
               .ease(d3.easeBounce); // second ease
            console.log(aa);*!/
        } else {
          let label = document.getElementsByClassName('rejected-label')[0];
          label.setAttribute('style', 'left: 55px');
          cc = !cc;
          let aa = d3.selectAll('.c3-target-ooo')
            .transition()
            .attr('display', 'block');
        }
      });*/
      }
}
