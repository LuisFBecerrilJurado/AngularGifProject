import { Component, OnInit, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input()
  public gif !: Gif;

  ngOnInit() {
    if (!this.gif) throw new Error('Gif property is required');
  }

}
