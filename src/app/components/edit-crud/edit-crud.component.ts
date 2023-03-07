import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Crud} from "../../models/crud";
import {CrudService} from "../../services/crud.service";

@Component({
  selector: 'app-edit-crud',
  templateUrl: './edit-crud.component.html',
  styleUrls: ['./edit-crud.component.scss']
})
export class EditCrudComponent implements OnInit {
  @Input() crud?: Crud;
  @Output() crudsUpdated = new EventEmitter<Crud[]>();

  constructor(private crudService: CrudService) {}

  ngOnInit() {}

  updateCrud(crud: Crud) {
    this.crudService
      .updateCrud(crud)
      .subscribe((cruds: Crud[]) => this.crudsUpdated.emit(cruds));
  }
  deleteCrud(crud: Crud) {
    this.crudService
      .deleteCrud(crud)
      .subscribe((cruds: Crud[]) => this.crudsUpdated.emit(cruds))
  }
  createCrud(crud: Crud) {
    this.crudService
      .createCrud(crud)
      .subscribe((cruds: Crud[]) => this.crudsUpdated.emit(cruds))
  }
}
