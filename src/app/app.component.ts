import { Component } from '@angular/core';
import { Crud } from "./models/crud";
import { CrudService } from "./services/crud.service";
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRUD.UI';
  cruds: Crud[] = [];
  crudToEdit?: Crud;

  constructor(private crudService: CrudService) {}

  ngOnInit() : void {
    this.crudService
      .getCrud()
      .subscribe((result: Crud[]) => (this.cruds = result));
  }

  updateCrudList(cruds: Crud[]) {
    this.cruds = cruds;
  }

  initNewCrud() {
    this.crudToEdit = new Crud();
  }

  editCrud(crud: Crud) {
    this.crudToEdit = crud;
  }
}
