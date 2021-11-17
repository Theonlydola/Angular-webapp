import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Machine } from './machine-model';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { machineService } from '../machineService';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {
  panelOpenState = false;
  headertitle:string = "Machines list";
  machines:Machine[] = [];
  machine$: Machine | undefined;
  
  constructor(private http:HttpClient, private router: Router, private route: ActivatedRoute,) {
    
  }
  
   
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:9080/demo/training/jsondata/get100')
    .subscribe(
      data => {
        data.map(machine => {
          const x = JSON.parse(machine);
          this.machines.push(new Machine(x.TICKET_NUMBER, x.MACHINE_TYPE, x.MACHINE_SERIAL,
            x.OTMS, x.SUBJECT, x.DESCRIPTION));
        })
      }
    );
  }

  

}
