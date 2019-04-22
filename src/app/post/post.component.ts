import { Component, OnInit,Input, Output, EventEmitter  } from '@angular/core';


export interface PostList {
  subject:string;
  body: string;
}
@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: PostList;
  @Output() deleted = new EventEmitter<boolean>();
  title = 'socialPosts';
  

  constructor() { }

  ngOnInit() {
  }
  
    deleteAt = () => {
        this.deleted.emit(true);
    }
 

}
