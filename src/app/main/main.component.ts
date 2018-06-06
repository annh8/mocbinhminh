import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  menuObservable: Observable<any[]>;
  product1Observable: Observable<any[]>;
  product2Observable: Observable<any[]>;
  product3Observable: Observable<any[]>;

  constructor(private db: AngularFireDatabase, private service: ConfigService) { }
  ngOnInit() {
    this.menuObservable = this.service.getMenuCap1();
    this.getProduct('product');
  }
  getMenu(listPath): Observable<any[]> {
    return this.db.list(listPath, ref => ref.limitToFirst(3)).valueChanges();
  }
  getProduct(listPath) {
    const oneref = this.db.database.ref().child(listPath).orderByChild('categoryId').equalTo('1');
    const tworef = this.db.database.ref().child(listPath).orderByChild('categoryId').equalTo('2').limitToFirst(4);
    const threeref = this.db.database.ref().child(listPath).orderByChild('categoryId').equalTo('3').limitToFirst(4);
    this.product1Observable =  this.db.list(listPath, ref => oneref).valueChanges();
    this.product2Observable =  this.db.list(listPath, ref => tworef).valueChanges();
    this.product3Observable =  this.db.list(listPath, ref => threeref).valueChanges();
  }
}
