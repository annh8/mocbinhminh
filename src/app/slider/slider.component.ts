import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  configObservable: Observable<any>;
  constructor(private service: ConfigService) { }
  ngOnInit() {
    this.configObservable = this.service.getObject(this.service.config);
  }

}
