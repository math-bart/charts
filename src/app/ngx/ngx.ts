import {Component} from '@angular/core';

@Component({
  selector: 'app-ngx',
  templateUrl: './ngx.html',
})
export class NgxComponent {
  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
    {
      "name": "Tczew",
      "value": 8940000
    },
    {
      "name": "Reda",
      "value": 5000000
    },
    {
      "name": "Grodziądz",
      "value": 7200000
    }
  ];
  multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": -8940000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": -8270000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": -5800000
        }
      ]
    }
  ];
  multi1 = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "2010",
          "value": 7300000
        },
        {
          "name": "2011",
          "value": 8940000
        }
      ]
    },

    {
      "name": "USA",
      "series": [
        {
          "name": "2010",
          "value": 7870000
        },
        {
          "name": "2011",
          "value": 8270000
        }
      ]
    },

    {
      "name": "France",
      "series": [
        {
          "name": "2010",
          "value": 5000002
        },
        {
          "name": "2011",
          "value": 5800000
        }
      ]
    }
  ];
  view: any[] = [700, 400];
  animation = false;

// options
  showLegend = true;

  colorScheme = {
    domain: ['#0288D1', '#00796B', '#689F38', '#FBC02D', '#F57C00', '#D32F2F']
  };

// pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  gradient = true;
  onSelect(event) {
    this.animation = true;
    this.multi1.splice(0, 1);
    // this.view = [900, 600];
   // event.closed = true;
  }

}
