import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.css'],
})
export class PreFooterComponent implements OnInit {
  menuObservable: Observable<any[]>;
  configObservable: Observable<any>;
  constructor(private service: ConfigService) {
  }

  ngOnInit() {
    this.menuObservable = this.service.getMenuCap1();
    this.configObservable = this.service.getObject(this.service.config);
  }
}
