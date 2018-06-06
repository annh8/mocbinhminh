import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { OrderPipe } from 'ngx-order-pipe';
import { ConfigService } from '../../config.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  passnew = '';
  constructor(private authService: AuthService) { }
  ngOnInit() {
  }
  Save() {
    this.authService.changepass(this.passnew);
  }
}

