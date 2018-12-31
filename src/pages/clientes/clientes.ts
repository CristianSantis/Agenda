import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClienteProvider } from '../../providers/cliente/cliente'
import { FormClientePage } from '../form-cliente/form-cliente';

/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  clientes;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public cliente:ClienteProvider) {
  }

  ionViewDidLoad() {
    this.cliente.obtenerDatos()
      .subscribe(
        (data) => {this.clientes = data},
        (error) => {console.log(error);}
      )
  }

  verCliente(cliente){
    this.navCtrl.push(FormClientePage, { cliente: cliente });
  }

}
