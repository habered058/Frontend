import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalSpaceComponent } from '../modal-table-space/modal-space.component';
import { Space } from '../../../../core/interfaces/space.interface';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as SpaceActions from '../../store/space.actions';
import { selectAllSpaces, selectError, selectLoading } from '../../store/space.selectors';
import { ModalAvailabilitySpaceComponent } from '../modal-availability-space/modal-availability-space.component';

@Component({
  selector: 'app-space',
  standalone: true,
  templateUrl: './space.component.html', 
  styleUrls: ['./space.component.scss'],
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class SpaceComponent implements OnInit {
  spaces$: Observable<Space[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;


  displayedColumns: string[] = ['id', 'name', 'description', 'capacity', 'actions'];
  dataSource = new MatTableDataSource<Space>([]);

  constructor(public dialog: MatDialog, private store:Store) {
    this.spaces$ = this.store.select(selectAllSpaces);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnInit(): void {
    this.store.dispatch(SpaceActions.loadSpaces()); 

    this.spaces$.subscribe((spaces: Space[]) => {
      if (spaces) {
        this.dataSource.data = spaces;  
      }
    });
  }

  openDialog(element?: any): void {
    const dialogRef = this.dialog.open(ModalSpaceComponent, {
      width: '600px',
      height: '600px',
      data: element ? { ...element } : { id: null, name: '' },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (element) {
          this.updateElement(result);
        } else {
          this.addElement(result);
        }
      }
    });
  }

  openAvailability(element?: any): void {
    const dialogRef = this.dialog.open(ModalAvailabilitySpaceComponent, {
      width: '600px',
      height: '600px',
      data: element ? { ...element } : { id: null, name: '' },
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  addElement(space: Space) {
    //this.dataSource.data = [...this.dataSource.data, element]; 
    this.store.dispatch(SpaceActions.addSpace({space})); 
  }
  
  updateElement(space: Space) {
    this.store.dispatch(SpaceActions.updateSpace({space}));
  }
  
  deleteElement(id: number) {
    this.store.dispatch(SpaceActions.deleteSpace({id}));
  }
}
