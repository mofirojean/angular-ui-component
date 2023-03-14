import { Component, Input, OnInit } from '@angular/core';
import { AccessType } from 'src/app/model/access.model';

@Component({
  selector: 'app-access-tile',
  templateUrl: './access-tile.component.html',
  styleUrls: ['./access-tile.component.scss']
})
export class AccessTileComponent implements OnInit {
  @Input() accessData!: AccessType ;
  
  constructor() { }

  ngOnInit(): void {
  }

}
