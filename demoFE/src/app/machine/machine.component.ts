import { Component, OnInit } from '@angular/core';
import { Machine } from './machine-model';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.css']
})
export class MachineComponent implements OnInit {
  headertitle:string = "Machines list";
  machines:any [] = [
    {
      TICKET_NUMBER: "TS003265498",
      MACHINE_TYPE: "GA48",
      MACHINE_SERIAL: "99C0760",
      OTMS: "2020-01-23 10:07:00.0",
      SUBJECT: "WSDB0047C01,WSDB0047C02 - SERVERS AND DAS BOX WITH OS WINDOWS 2000 HAS",
      DESCRIPTION: "WSDB0047C01,WSDB0047C02 - SERVERS AND DAS BOX WITH OS WINDOWS 2000 HAS  TO POWER CYCLE. MODEL OF THE SERVER IS IBM ESERVER XSERIES NEED TO CH ECK PHYSICAL STATUS OF SERVER AS WELL."
    },
    {
      TICKET_NUMBER: "TS003265498",
      MACHINE_TYPE: "GA48",
      MACHINE_SERIAL: "99C0760",
      OTMS: "2020-01-23 10:07:00.0",
      SUBJECT: "WSDB0047C01,WSDB0047C02 - SERVERS AND DAS BOX WITH OS WINDOWS 2000 HAS",
      DESCRIPTION: "WSDB0047C01,WSDB0047C02 - SERVERS AND DAS BOX WITH OS WINDOWS 2000 HAS  TO POWER CYCLE. MODEL OF THE SERVER IS IBM ESERVER XSERIES NEED TO CH ECK PHYSICAL STATUS OF SERVER AS WELL."
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
