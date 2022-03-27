import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AzureConnectionService } from '../azure-connection.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  pdfUrl?: SafeResourceUrl;
  reportStatus?: string;
  isAccessible: boolean = false;
  nonAccessibleMessage?: string;
  constructor(
    private azureConnectionService: AzureConnectionService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  getReport() {
    this.azureConnectionService.getReport().subscribe(
      (res) => {
        this.isAccessible = true;
        var urlCreator = window.URL || window.webkitURL;

        this.pdfUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
          urlCreator.createObjectURL(res)
        );
      },
      (error: HttpErrorResponse) => {
        if (error.status == 401 || error.status == 403) {
          this.isAccessible = false;
          this.nonAccessibleMessage = "You're not authorized !!!";
        }
      }
    );
  }

  getReportStatus() {
    this.azureConnectionService.getReportStatus().subscribe((res) => {
      this.reportStatus = res.status;
    });
  }
}
