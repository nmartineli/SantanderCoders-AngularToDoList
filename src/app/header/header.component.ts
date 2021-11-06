import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor() {}

  title = 'To-do List';
  url = 'https://www.google.com';

  isSelected = true;
  classes = ['titulo_principal', 'titulo_size'];
  fundo_verde = 'green';
}
