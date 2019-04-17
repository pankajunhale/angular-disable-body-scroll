import { Component } from '@angular/core';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  flyOutContainer = null; // only this has to use in SAP if ElementRef not exist
  constructor(){
    console.log(disableBodyScroll,clearAllBodyScrollLocks);
  }

  public openModal(e:any):void{    
    disableBodyScroll(this.flyOutContainer); // only this has to use in SAP
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
    this.flyOutContainer = document.querySelector('#myModal');
    enableBodyScroll(this.flyOutContainer);
  }
  public closeModal(e:any):void{
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    //enable
    enableBodyScroll(this.flyOutContainer); // only this has to use in SAP
  }

  ngDestroy(){
    clearAllBodyScrollLocks(); // only this has to use in SAP
  }
}
