import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuObservable: Observable<any[]>;
  menu2Observable: Observable<any[]>;
  menu3Observable: Observable<any[]>;
  constructor(private service: ConfigService) { }
  ngOnInit() {
    this.menuObservable = this.service.getMenuCap1();
    this.menu2Observable = this.service.getMenuCap2();
    this.menu3Observable = this.service.getMenuCap3();
  }
}
