import { Component, OnInit, ViewRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }
  userId:String = this._makeId()
  value1=''
  ngOnInit(): void {
    
  }

  createRoom(){
    const roomId : String = this._makeId()
    this.router.navigateByUrl('/chat-room')
    //route to chat room with id params
  }
  inviteUser(event:SubmitEvent){
    const item = event.target as HTMLFormElement
    const item1 = item[0] as HTMLInputElement
    const invUserId = item1.value

    console.log(invUserId)
    //route to chat room with id params

  }

  _makeId(length=10){
    var txt = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?/|';
    for (var i = 0; i < length; i++) {
        txt += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return txt;
}

}
