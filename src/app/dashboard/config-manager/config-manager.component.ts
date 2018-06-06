import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-config-manager',
  templateUrl: './config-manager.component.html',
  styleUrls: ['./config-manager.component.css']
})
export class ConfigManagerComponent implements OnInit {

  phone;
  aboutus;
  location;
  email;
  constructor(private service: ConfigService) { }

  ngOnInit() {
    this.service.getObject(this.service.config).subscribe(response => {
      this.phone = response.phone;
      this.aboutus = response.aboutus;
      this.location = response.location;
      this.email = response.email;
    });
  }
  Save() {
    this.service.saveConfig(this.phone, this.aboutus, this.location, this.email);
    alert('Đã lưu thành công');
  }
}
