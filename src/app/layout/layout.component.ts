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
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porta convallis mauris sed auctor. Suspendisse laoreet lacus a magna auctor, vitae suscipit orci commodo.';

  constructor(
    private modal: NgbModal
  ) {}

  ngOnInit(): void { }

  openModal(content: any): void {
    this.modal.open(content, {
      size: this.currentSize,
      centered: this.centered,
    }).result.then((resolve) => {
      console.log(resolve);
    }, (reject) => {
      console.log(reject);
    });
  }
}
