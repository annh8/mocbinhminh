import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css'],
})
export class TopHeaderComponent implements OnInit {
  configObservable: Observable<any>;
  constructor(private service: ConfigService) { }
  ngOnInit() {
    this.configObservable = this.service.getObject(this.service.config);
  }
}
