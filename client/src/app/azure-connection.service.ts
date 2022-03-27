import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
const REPORT_API_BASE_URL = 'https://localhost:44394/';

@Injectable({
  providedIn: 'root',
})
export class AzureConnectionService {
  isLoggedIn: Subject<boolean> = new Subject<boolean>();
  constructor(private httpClient: HttpClient) {}

  getReport() {
    return this.httpClient.get(REPORT_API_BASE_URL + 'report', {
      responseType: 'blob',
    });
  }

  getReportStatus() {
    return this.httpClient.get<any>(REPORT_API_BASE_URL + 'reportstatus');
  }
}
