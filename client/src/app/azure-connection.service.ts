import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AzureConnectionService {
  isLoggedIn: Subject<boolean> = new Subject<boolean>();
  constructor() {}
}
