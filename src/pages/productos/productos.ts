import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { VerproductoPage } from '../verproducto/verproducto';

/**
 * Generated class for the ProductosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {

  private _listaProductos: Array<any> = [
    {
      nombre: "Aceite",
      precio: "2000"
    },
    {
      nombre: "Shampo",
      precio: "2500"
    },
    {
      nombre: "Perfume",
      precio: "21000"
    },
    {
      nombre: "Crema",
      precio: "5000"
    },
  ];
  public get listaProductos(): Array<any> {
    return this._listaProductos;
  }
  public set listaProductos(value: Array<any>) {
    this._listaProductos = value;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  verProducto(producto){
    this.navCtrl.push(VerproductoPage, { producto: producto });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductosPage');
  }

}
