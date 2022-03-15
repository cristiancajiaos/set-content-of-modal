import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    private modal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.modal.close('Cross click');
  }

  dismiss(): void {
    this.modal.dismiss('Close button');
  }

}
