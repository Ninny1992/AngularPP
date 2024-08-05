import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  house= faHouse;

}
