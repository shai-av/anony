import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  @ViewChild('chat')
  chat!: ElementRef;
  
  constructor() { }
  
  msgs!:Array<any>
  msg:String = ''
  userId:String = this._makeId()
  

  ngOnInit(): void {
    this.msgs = [{txt:'str',sentBy:'sad'},{txt:this.userId,sentBy:this.userId}];
  }

  sendMsg(){
    if(!this.msg) return
    this.msgs.unshift({
      txt:this.msg,
      sentBy:this.userId,
    })
    this.msg = ''
    this._scrollToBottom()
  }

  _scrollToBottom(): void {
        this.chat.nativeElement.scrollTop = this.chat.nativeElement.scrollHeight;
}

  _makeId(length=10){
      var txt = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?/|';
      for (var i = 0; i < length; i++) {
          txt += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return txt;
  }
}
