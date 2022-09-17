import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  
  constructor() { }
  
  msgs!:Array<any>
  
  ngOnInit(): void {
    this.msgs = [{txt:'str',sentBy:'guestId'},{txt:'str2',sentBy:'hostId'}];
  }

}
