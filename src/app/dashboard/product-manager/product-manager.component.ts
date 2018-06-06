import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { ConfigService } from '../../config.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  parentId = '';
  menuName = '';
  menuObservable: Observable<any[]>;
  menu2Observable: Observable<any[]>;
  menu3Observable: Observable<any[]>;
  productObservable: Observable<any[]>;
  result: Observable<any[]>;
  public progress: number;
  public message: string;

  constructor(private http: HttpClient, private service: ConfigService, private orderPipe: OrderPipe) {}
  ngOnInit() {
    this.service.getMenuCap1().subscribe((response) => {
      this.result = this.orderPipe.transform(response, 'order');
    });
    this.menu2Observable = this.service.getMenuCap2();
    this.menu3Observable = this.service.getMenuCap3();
  }
  Delete(productId) {
    this.service.deleteProduct(productId);
  }
  LoadProduct(id) {
    this.productObservable = this.service.getProduct(id.toString());
  }
}
