import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ConfigService } from '../config.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.component.html',
  styleUrls: ['./sub-page.component.css']
})
export class SubPageComponent implements OnInit {
  menu: Observable<any>;
  productObservable: Observable<any[]>;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private service: ConfigService
  ) { }

  ngOnInit() {
    this.getPage();
  }
  getPage(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.menu = this.service.getObjectByKey(this.service.menu, 'id', id.toString());
    this.productObservable = this.service.getProduct(id.toString());
  }
}
