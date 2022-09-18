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
  ngOnInit(): void {
    this.msgs = [{txt:'str',sentBy:'guestId'},{txt:'str2',sentBy:'hostId'}];
  }

  sendMsg(){
    console.log('send')
  }

  writeMsg(event:Event){
    console.log('write')
  }

}
