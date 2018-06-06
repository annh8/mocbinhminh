import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {
  menu = 'menu';
  config = 'config';
  product = 'product';
  constructor(private db: AngularFireDatabase) { }
  getObject(path): Observable<any> {
    return this.db.object('/' + path).valueChanges();
  }
  getListObject(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
  getObjectByKey(path, key, value): Observable<any> {
    const refone = this.db.database.ref(path).orderByChild(key).equalTo(value).limitToFirst(1);
    return this.db.list('/' + path, ref => refone).valueChanges();
  }
  getMenuCap1(): Observable<any[]> {
    const refOne = this.db.database.ref(this.menu).orderByChild('cap').equalTo(1);
    return this.db.list('/' + this.menu, ref => refOne).valueChanges();
  }
  getMenuCap2(): Observable<any[]> {
    const refOne = this.db.database.ref(this.menu).orderByChild('cap').equalTo(2);
    return this.db.list('/' + this.menu, ref => refOne).valueChanges();
  }
  getMenuCap3(): Observable<any[]> {
    const refOne = this.db.database.ref(this.menu).orderByChild('cap').equalTo(3);
    return this.db.list('/' + this.menu, ref => refOne).valueChanges();
  }
  getProduct(id): Observable<any[]> {
    const oneref = this.db.database.ref().child(this.product).orderByChild('categoryId').equalTo(id);
    return this.db.list(this.product, ref => oneref).valueChanges();
  }
  saveProduct(product_name, video, content, menuId, images) {
    const newPostKey = this.db.database.ref().child('product').push().key;
    const data = {
      categoryId: menuId,
      images: images,
      name: product_name,
      video: video,
      content: content,
      id: newPostKey
    };
    const updates = {};
    updates['/product/' + newPostKey] = data;
    return this.db.database.ref().update(updates);
  }
  saveConfig(phone, aboutus, location, email) {
    const data = {
      phone: phone,
      aboutus: aboutus,
      location: location,
      email: email,
    };
    const updates = {};
    updates['/config'] = data;
    return this.db.database.ref().update(updates);
  }
  saveEditProduct(newPostKey, product_name, video, content, menuId, images) {
    const data = {
      categoryId: menuId,
      images: images,
      name: product_name,
      video: video,
      content: content,
      id: newPostKey
    };
    const updates = {};
    updates['/product/' + newPostKey] = data;
    return this.db.database.ref().update(updates);
  }
  saveMenu(menuName, parent) {
    const newPostKey = this.db.database.ref().child('menu').push().key;
    const data = {
      name: menuName,
      parentId: parent.id,
      cap: parent.cap + 1,
      id: newPostKey
    };
    const updates = {};
    updates['/menu/' + newPostKey] = data;
    return this.db.database.ref().update(updates);
  }
  deleteProduct(id) {
    this.db.database.ref().child('product').child(id).set(null);
  }
  deleteMenu(menuId) {
    this.db.database.ref().child('menu').child(menuId).set(null);
  }
}
