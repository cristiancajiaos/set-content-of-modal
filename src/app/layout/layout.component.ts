import { ModalComponent } from './modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  sizes: string[] = ['sm', 'md', 'lg'];

  currentSize = this.sizes[1];
  centered = false;
  content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta convallis mauris sed auctor. Suspendisse laoreet lacus a magna auctor, vitae suscipit orci commodo.';

  constructor(
    private modal: NgbModal
  ) {}

  ngOnInit(): void { }

  openModal(): void {
    this.modal.open(ModalComponent, {
      size: this.currentSize,
      centered: this.centered,
    }).result.then((resolve) => {
      console.log(resolve);
    }, (reject) => {
      console.log(reject);
    });
  }
}
