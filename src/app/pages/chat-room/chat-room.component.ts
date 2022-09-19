import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  
  constructor() { }
  
  msgs!:Array<any>
  msg:String = ''
  userId:String = '12345'

  ngOnInit(): void {
    this.msgs = [{txt:'str',sentBy:'sad'},{txt:'str2',sentBy:'12345'}];
  }

  sendMsg(){
    if(!this.msg) return
    this.msgs.push({
      txt:this.msg,
      sentBy:this.userId,
    })
    this.msg = ''
  }
}
