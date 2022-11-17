import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
// import { ChatRoomComponent } from '../pages/chat-room/chat-room.component';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

    socket:any

  constructor(
    // private chatRoom:ChatRoomComponent
  ) {   }

  setupSocketConnection() {
    this.socket = io('http://localhost:3000',{
      auth:{
        userId:'asdasd'
      }
    });

    this.socket.on('incomingMsg',(msg:string)=>{
      console.log(msg)
      // this.chatRoom.addMsgFromSocket(msg)
    })
  }

 public sendMsg(msg:string){
    this.socket.emit('broadcastMsg', msg)
  }
}
