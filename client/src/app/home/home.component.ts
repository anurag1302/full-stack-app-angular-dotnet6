import { Component, OnInit } from '@angular/core';
import { AzureConnectionService } from '../azure-connection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private azureConnectionService: AzureConnectionService) {}

  ngOnInit(): void {
    console.log('home hit');
    console.log('isloggedin', this.isLoggedIn);
    this.azureConnectionService.isLoggedIn.subscribe((x) => {
      this.isLoggedIn = x;
    });
  }
}
