import {Component, OnInit} from '@angular/core';
import {DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType} from 'angular-gridster2';


@Component({
  selector: 'app-gridster',
  templateUrl: './gridster.component.html',
  styleUrls: ['./gridster.component.css']
})

export class GridsterComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  chartList: Array<any> = [];
  isModalVisible = false;
  ngOnInit() {
    if (localStorage.getItem('chartList')) {
      this.chartList = JSON.parse(localStorage.getItem('chartList'));
    } else {
      this.chartList = [
        { name: 'funnel', imageSrc: '/assets/images/funnel.png', isChecked: false, numbers: {cols: 9, rows: 5, y: 0, x: 0} },
        { name: 'timeline', imageSrc: '/assets/images/timeline.png', isChecked: false, numbers: {cols: 12, rows: 6, y: 10, x: 0}},
        { name: 'chart.js', imageSrc: '/assets/images/chartJs.png', isChecked: false, numbers: {cols: 6, rows: 5, y: 5, x: 0} },
        { name: 'ngx', imageSrc: '/assets/images/ngx.png', isChecked: false, numbers: {cols: 6, rows: 5, y: 5, x: 6} }
      ];
    }
    this.options = {
      gridType: GridType.Fixed,
      displayGrid: DisplayGrid.OnDragAndResize,
      pushItems: false,
      draggable: {
        enabled: true,
        stop: (i, c, e) => this.draggStop(i, c, e),
      },
      resizable: {
        enabled: true,
        stop: (i, c, e) => this.resizeStop(i, c, e),
      },
    };

    this.dashboard = [];
  }
  resizeStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    this.changeSizeOrPosition(item, itemComponent);
  }
  draggStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    this.changeSizeOrPosition(item, itemComponent);
  }
  changeSizeOrPosition(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    const singleChart =  this.chartList.find(x => x.numbers === item);
    const index = this.chartList.indexOf(singleChart);
    this.chartList[index].numbers = itemComponent.$item;
    localStorage.setItem('chartList', JSON.stringify(this.chartList));
  }
  changeDisplay(index, event) {
    this.chartList[index].isChecked = event.checked;
    localStorage.setItem('chartList', JSON.stringify(this.chartList));
  }
  visible(name) {
   const singleChart =  this.chartList.find(x => x.name === name);
   return singleChart.isChecked;
  }
  showModal() {
    this.isModalVisible = true;
  }
  hideModal() {
    this.isModalVisible = false;
  }
}
