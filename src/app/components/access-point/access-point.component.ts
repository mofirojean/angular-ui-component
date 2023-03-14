import { Component, OnInit } from '@angular/core';
import { AccessType } from 'src/app/model/access.model';
import { AccessService } from 'src/app/service/access.service';

@Component({
  selector: 'app-access-point',
  templateUrl: './access-point.component.html',
  styleUrls: ['./access-point.component.scss']
})
export class AccessPointComponent implements OnInit {
  accessDatas!: AccessType[];

  constructor(private accessService: AccessService) { }

  ngOnInit(): void {
    this.accessDatas = this.accessService.getAllAccessComponent()
  }

}
