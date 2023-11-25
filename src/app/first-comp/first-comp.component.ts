import { Component, inject} from '@angular/core';
import { MyFirstService } from '../services/my-first.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];
  private service: MyFirstService = inject(MyFirstService);
  
  constructor(){
    this.messages= this.service.getAllMessages();
    this.isSubmitted = this.messages.length > 0;
  }
  onSubmit(): void{
    this.isSubmitted = true;
    this.service.insert({
      'name': this.name,
      'email': this.email,
      'message': this.message
    });
  }

  deleteMessage(index: number): void {
    this.service.deleteMessage(index);
  }
}
