import { Component } from '@angular/core';

import { NewRequestComponent } from '../new-request/new-request.component'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [FontAwesomeModule, NewRequestComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  squarePlus = faSquarePlus;
  listCheck = faListCheck;

}
