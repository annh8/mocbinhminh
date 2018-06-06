import { Component, OnInit} from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { ConfigService } from '../../config.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  parentId = '';
  productName = '';
  video = '';
  content = '';
  fileNames = [];
  menuObservable: Observable<any[]>;
  menu2Observable: Observable<any[]>;
  menu3Observable: Observable<any[]>;
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
  Save() {
    if (this.parentId !== '') {
        this.service.saveProduct(this.productName, this.video, this.content, this.parentId, this.fileNames);
    }
    alert('Đã lưu thành công');
  }
  upload(files) {
    const apiUrl = 'http://mocbinhminh.com/test.php';
    if (files.length === 0) {
      return;
    }
    this.fileNames = [];
    for (const file of files) {
      const data = {
        url: file.name
      };
      this.fileNames.push(data);
      const formData = new FormData();
      formData.append('file', file);
      const headers = new HttpHeaders().set('Content-Type', []);
      const uploadReq = new HttpRequest('POST', apiUrl, formData, {
        headers,
        reportProgress: true,
        responseType: 'text'
      });

      this.http.request(uploadReq).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.message = event.body.toString();
            }
      });
    }
  }
}
