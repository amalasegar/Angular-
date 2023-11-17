import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles:[`
  .online{
    color:white;
  }
  `]
})
export class AppComponent {

 
  title='DemoNewway';
  disabledVal=false;
  inputtextVal='';
  newInput='';
  strDiv= true;
  innerText='Inner Text content display';
  attDirContent:string="online";
serverText='TextServer'
  servers =['TextServer','TextServer1'];
  constructor(){
    this.attDirContent= Math.random() > 0.5 ?"online":"Offline";
  }
  buttonClick(){
    this.servers.push(this.serverText);
    alert("buttonClick"+this.inputtextVal);
    this.disabledVal=true;
   
  }
  inputVal(event:any){
this.inputtextVal=(<HTMLInputElement>event.target).value;
  }
  getServerStatus(){
    return this.attDirContent;
  }
  getStyle(){
    return this.attDirContent === "online"? 'Green':'Red';
  }
  
}
