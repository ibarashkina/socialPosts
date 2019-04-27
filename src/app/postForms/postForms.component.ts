import { Component,Input,Output, EventEmitter} from '@angular/core';

export interface Posting {
  subject:string;
  body: string;
}

@Component({
  selector: 'postForms',
  templateUrl: './postForms.component.html',
  styleUrls: ['./postForms.component.css']
})
export class PostFormsComponent {
title = "socialPosts";

@Input() show: boolean;
@Output() submitted = new EventEmitter<Posting>();
@Output() showEvent = new EventEmitter<boolean>();
@Input() form: boolean;


  addPost = (subject: string, body: string ) => {  
  if (body && subject){

  this.submitted.emit({subject,body});
      
  }
      
    }

  hideForm = () => {
    this.showEvent.emit(false);
    this.show=false;
  }
}
