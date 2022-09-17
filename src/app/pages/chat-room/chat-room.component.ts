import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  
  constructor() { }
  
  msgs!:Array<string>
  
  ngOnInit(): void {
    this.msgs = ['str','str2'];
  }

}
