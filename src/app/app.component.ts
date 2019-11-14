import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { TestService } from './test.service';

export interface Customer {
  userName: string
  firstName: string;
  lastName: string;
  houseNo: string;
  plotNo: string;
  area: number;
  houseType: string;
  locality: string;
  propertyRegistrationDate: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  customers: Customer[] = [];

  constructor(private service: TestService) { }

  displayedColumns: string[] = ['slno', 'customerName', 'locality', 'houseType', 'houseNo', 'plotNo','propertyRegistrationDate', 'area', 'action'];
  dataSource

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.service.getCustomers().subscribe(data => {
      this.customers = data;
      this.dataSource = new MatTableDataSource(this.customers);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.customers);
    });

  }

  func(customer){
    console.log(customer)
  }
}

