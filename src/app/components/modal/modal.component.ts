import {Component, Input} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {IProduct} from "src/app/models/product";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() title: string;
  constructor(public modalService: ModalService) {}
  ngOnInit(): void {

  }

}
