import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm,FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-submit-ad',
  templateUrl: './submit-ad.component.html',
  styleUrls: ['./submit-ad.component.css']
})
export class SubmitAdComponent implements OnInit {
log={
title:'',
category:'',
description:'',
name:'',
phnnum:'',
city:''

}
public show:boolean = false;
maxlength=4096;
titlelength=70
public msg;
public tweetmsg:any;
characterleft=this.maxlength;
charactersleft=this.titlelength

count(tweetmsg){
  tweetmsg=this.log.description.length;
 console.log(tweetmsg)
  if(this.maxlength>=tweetmsg){
    this.characterleft=(this.maxlength)-(tweetmsg);
  }
  else{
     tweetmsg = tweetmsg.substr(0, tweetmsg - 1);
     console.log(tweetmsg);
  }
}
counttitle(msg){
  msg=this.log.title.length;
  console.log(msg)
  if(this.titlelength>=msg){
    this.charactersleft=(this.titlelength)-(msg);
  }
  else{
    msg = msg.substr(0, msg - 1);
     console.log(msg);
  }

}
// limitText(limitField, limitCount, limitNum) {
//   if (limitField.value.length > limitNum) {
//     limitField.value = limitField.value.substring(0, limitNum);
//   } else {
//     limitCount.value = limitNum - limitField.value.length;
//   } public show:boolean = false;
// }

constructor(private route: Router){
}

  ngOnInit() {
  }
  toggle() {
       this.show = !this.show;
  }
  onSubmit(form: NgForm) {
    console.log(form)
    if(!this.log.title){
      alert("please enter title");
    }else if(!this.log.category){
      alert("Please select Category")
    }else if(!this.log.description){
      alert("please add Description")
    }else if(!this.log.name){
      alert("please enter name")
    }else if(!this.log.phnnum){
      alert("please enter mobile number")
    }else if(!this.log.city){
      alert("please enter city")
    }
  }
  // onKey(event: any){
  // console.log(this.onKey)
  // }

}
