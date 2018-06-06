import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  menuObservable: Observable<any[]>;
  menu2Observable: Observable<any[]>;
  menu3Observable: Observable<any[]>;
  result: Observable<any[]>;
  constructor(private service: ConfigService, private orderPipe: OrderPipe) { }
  ngOnInit() {
    this.service.getMenuCap1().subscribe((response) => {
      this.result = this.orderPipe.transform(response, 'order');
    });
    this.menu2Observable = this.service.getMenuCap2();
    this.menu3Observable = this.service.getMenuCap3();
  }
  checkChild(parentId, idcheck): Boolean {
    if ( parentId === idcheck ) {
      return true;
    }
    return false;
  }

}
