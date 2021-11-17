import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Machine} from '../machine/machine-model';
@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.css']
})

export class MachineDetailsComponent implements OnInit {
  
  ticket_number:string=""
  machine: Machine = new Machine("","","","","","");
  machineService:any

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

   ngOnInit(): void {
    const ticket_number = this.route.snapshot.paramMap.get('TICKET_NUMBER');
    console.log(ticket_number);
    if(ticket_number){
    console.log("INSIDE");
    this.http.get<any[]>('http://localhost:9080/demo/training/jsondata/get100')
    .subscribe(
      data => {
        data.map(machine => {
          const x = JSON.parse(machine);
          if(x.TICKET_NUMBER === ticket_number){
            this.machine = x;
            console.log("FOUND!");
          }
          console.log("Searching...");
        })  
      }
    );
    }
  }



}
