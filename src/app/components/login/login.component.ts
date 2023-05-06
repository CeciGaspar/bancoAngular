import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    AOS.init()
  }

  public open(modal: any): void {

    this.modalService.open(modal);

  }



}
