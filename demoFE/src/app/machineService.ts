import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Machine } from "./machine/machine-model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class machineService {
    machinesArray:Machine[] = [];
    machine:Machine = new Machine("","","","","","");
   
    constructor (private http:HttpClient){ 
        this.getAllMachines()
    }

    getAllMachines(){
        console.log("GETTING MACHINES");
        this.http.get<any[]>('http://localhost:9080/demo/training/jsondata/get100').subscribe(
        data => {
        data.map(machine => {
          const x = JSON.parse(machine);
          this.machinesArray.push(new Machine(x.TICKET_NUMBER, x.MACHINE_TYPE, x.MACHINE_SERIAL,
            x.OTMS, x.SUBJECT, x.DESCRIPTION));
        })
      }
    );
    }

    getJsonMachine(TICKET_NUMBER: string): object {
        console.log("GETTING JSON");
        this.machinesArray.map( machine =>{
                console.log(machine);
                if (machine.TICKET_NUMBER === TICKET_NUMBER)
                    this.machine = machine;
                    return;
                }
            )
        return this.machine;
    }

    printFromAnotherClass(){
        console.log("PRINTING");
        
    }

}