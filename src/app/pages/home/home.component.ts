import { Component, OnInit, ViewRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  userId:String = this._makeId()
  value1=''
  ngOnInit(): void {
    
  }
  var1 = 10
  var2 =7

  createRoom(){
    this.var1 = this.var1 *this.var2
    this.var2 = this.var1/this.var2
    this.var1 = this.var1 / this.var2


    console.log(this.var1);
    console.log(this.var2);
    
    const roomId = this._makeId()
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
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+?/|';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

}
