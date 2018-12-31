import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ProductosPage } from '../productos/productos';
import { ClientesPage } from '../clientes/clientes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProductosPage;
  tab3Root = ClientesPage;

  constructor() {

  }
}
