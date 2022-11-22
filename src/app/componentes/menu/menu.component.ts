import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  openClose(){
    document.getElementById('menumobile')?.classList.toggle('visivel')
  }
}
