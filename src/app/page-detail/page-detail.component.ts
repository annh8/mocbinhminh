import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Response } from '@angular/http';
@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  productObservable: Observable<any>;
  url;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private service: ConfigService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getPageDetail();
  }
  getPageDetail(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productObservable = this.service.getObjectByKey('product', 'id', id.toString());
    this.service.getObjectByKey('product', 'id', id.toString()).subscribe(response => {
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(response[0].video);
    });
  }
}
