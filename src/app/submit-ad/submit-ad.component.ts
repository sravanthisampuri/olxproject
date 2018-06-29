import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormsModule, NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SubmitAddService } from '../submitAdd.service';


@Component({
  selector: 'app-submit-ad',
  templateUrl: './submit-ad.component.html',
  styleUrls: ['./submit-ad.component.css']
})
export class SubmitAdComponent implements OnInit {
  toggleOpen = false;
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  data;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  openModal2(templateNested: TemplateRef<any>) {
    this.modalRef.hide();
    this.modalRef2 = this.modalService.show(templateNested);
  }

  log = {
    title: '',
    category: '',
    description: '',
    name: '',
    mobile: '',
    price: '',
    city: ''
  }
  public show: any;
  public show1: any;
  public show2: any;
  public show3: any;
 


  maxlength = 4096;
  titlelength = 70
  public msg;
  public tweetmsg: any;
  characterleft = this.maxlength;
  charactersleft = this.titlelength;


  clickedOne(menuName1) {
    console.log(menuName1)
    this.show2 = '';
    this.show1 = menuName1;
   
    

  }

  clicked(menuName2) {
    // console.log(menuName2)

    this.show2 = menuName2;

  }
  clickedTwo(menuName3) {
    this.modalRef2.hide();

    console.log(menuName3,this.show1)
    this.data =  this.show1 +" >> "+this.show2+ " >> "+ menuName3.target.childNodes[0].data ;
    console.log(menuName3)
    // console.log(menuName3.target.childNodes[0].data);
  //  this.printdata(this.show1);
    this.log.category = this.data
  }





  count(tweetmsg) {
    tweetmsg = this.log.description.length;
    console.log(tweetmsg)
    if (this.maxlength >= tweetmsg) {
      this.characterleft = (this.maxlength) - (tweetmsg);
    }
    else {
      tweetmsg = tweetmsg.substr(0, tweetmsg - 1);
      console.log(tweetmsg);
    }
  }
  counttitle(msg) {

    msg = this.log.title.length;
    console.log(msg)
    if (this.titlelength >= msg) {
      this.charactersleft = (this.titlelength) - (msg);
    }
    else {
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

  constructor(private route: Router,
    private modalService: BsModalService,
    private submitAddService : SubmitAddService
  ) {
  }

  ngOnInit() {
  }
  toggle() {
    this.show = !this.show;
  }
  onSubmit(form: NgForm) {
    console.log(form)
    if (!this.log.title) {
      alert("please enter title");
    } else if (!this.log.category) {
      alert("Please select Category")
    }else if (!this.log.price) {
      alert("please add Price")
    }else if (!this.log.description) {
      alert("please add Description")
    } else if (!this.log.name) {
      alert("please enter name")
    } else if (!this.log.mobile) {
      alert("please enter mobile number")
    } else if (!this.log.city) {
      alert("please enter city")
    }else{
      this.submitAddService.submitAdd(this.log)
        .subscribe(
          function(response){
            console.log(response)
          }
        )
    }
  }
  // onKey(event: any){
  // console.log(this.onKey)
  // }

}
