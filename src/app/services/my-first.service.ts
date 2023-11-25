import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
   }

  init(): void{
    this.insert({name:'ken', email: 'dsa@gmail.com', message: 'hi world1'});
    this.insert({name:'jon', email: 'dsfdsa@gmail.com', message: 'hi world2'});
    this.insert({name:'ben', email: 'd32sa@gmail.com', message: 'hi world3'});
    console.log(this.messages);
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message);
  }

  getAllMessages(): any[]{
    return this.messages;
  }

  deleteMessage(index: number): void{
    this.messages.splice(index,1);
  }
}
