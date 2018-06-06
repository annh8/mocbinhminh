import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { ConfigService } from '../../config.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-menu-manager',
  templateUrl: './menu-manager.component.html',
  styleUrls: ['./menu-manager.component.css']
})
export class MenuManagerComponent implements OnInit {
  parentId = '';
  menuName = '';
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
  Save() {
    console.log(this.parentId);
    if (this.parentId !== '') {
      this.service.getObjectByKey(this.service.menu, 'id', this.parentId).subscribe((response) => {
        this.service.saveMenu(this.menuName, response[0]);
      });
    }
  }
  Delete(menuId) {
    this.service.getProduct(menuId).subscribe((response) => {
      if (response.length > 0) {
        alert('Không thể xoá vì vẫn còn sản phẩm');
      } else {
        console.log('xoa');
        this.service.deleteMenu(menuId);
      }
    });
  }
}
