import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers:[DataService]
})
export class UsersComponent implements OnInit {

  constructor(private dataService: DataService) { }

  users:any[]=[]

  ngOnInit(): void {
    this.dataService.getusers().subscribe(response => {
      this.users = response
      console.log(this.users)
    })
  }

}
