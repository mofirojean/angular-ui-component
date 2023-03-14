import { Injectable } from '@angular/core';
import { AccessType } from '../model/access.model';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  accessData: AccessType[] = [
    new AccessType('bi bi-kanban', "Dashboard UI Component", "ui-dashboard", "Lorem, ipsum dolor sit amet consectetur adipisicing.")
  ]
  constructor() { }

  getAllAccessComponent(): AccessType[] {
    return this.accessData;
  }
}
