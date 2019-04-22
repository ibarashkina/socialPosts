import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

export interface Posting {
  subject:string;
  body: string;
}

@Component({
  selector: 'postForms',
  templateUrl: './postForms.component.html',
  styleUrls: ['./postForms.component.css']
})
export class PostFormsComponent implements OnInit {
title = "socialPosts";
@Input() show: boolean;

@Output() submitted = new EventEmitter<Posting>();
@Output() showEvent = new EventEmitter<boolean>();
// @Input() form: boolean;



  constructor() { }

  ngOnInit() {
  }
  // addPost = (subject: string, body: string ) => {
    
  //   if (subject && body){


  //     this.submitted.emit({subject, body});
      
      
  //   }
  // }

  addPost = (subject: string, body: string ) => {  
  if (body && subject){


      this.submitted.emit({subject,body});
  }
      
    }

  hideForm = () => {
    this.showEvent.emit(false);
  }
}
