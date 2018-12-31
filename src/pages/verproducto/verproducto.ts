import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerproductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verproducto',
  templateUrl: 'verproducto.html',
})
export class VerproductoPage {

  public get navParams(): NavParams {
    return this._navParams;
  }
  public set navParams(value: NavParams) {
    this._navParams = value;
  }

  private _producto;

  public get producto() {
    return this._producto;
  }
  public set producto(value) {
    this._producto = value;
  }

  constructor(public navCtrl: NavController, private _navParams: NavParams) {
    this.producto = _navParams.data.producto;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerproductoPage');
  }

}
