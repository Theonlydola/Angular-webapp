import { Injectable } from '@angular/core';

export class Machine {
   DESCRIPTION:string= "";
   MACHINE_TYPE:string = "";
   MACHINE_SERIAL:string = "";
   TICKET_NUMBER:string = "";
   SUBJECT:string = "";
   OTMS:string = "";
   
  constructor(TICKET_NUMBER:string,MACHINE_TYPE:string,MACHINE_SERIAL:string,OTMS:string, SUBJECT:string,
   DESCRIPTION:string) {
     this.TICKET_NUMBER = TICKET_NUMBER;
     this.MACHINE_TYPE = MACHINE_TYPE;
     this.MACHINE_SERIAL = MACHINE_SERIAL;
     this.OTMS = OTMS;
     this.SUBJECT = SUBJECT;
     this.DESCRIPTION = DESCRIPTION;
  }
}