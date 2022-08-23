import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-photo',
  templateUrl: './app-photo.component.html',
  styleUrls: ['./app-photo.component.scss']
})
export class AppPhotoComponent implements OnInit {
  // o @Input faz com que essa variavel possa ser preenchida por um dado fora, como por exemplo no html
  @Input() title= '';

  @Input() url = ''

  constructor() { }

  ngOnInit(): void {
  }

}
