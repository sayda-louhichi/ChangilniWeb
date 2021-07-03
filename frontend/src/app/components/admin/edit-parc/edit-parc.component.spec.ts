import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParcComponent } from './edit-parc.component';

describe('EditParcComponent', () => {
  let component: EditParcComponent;
  let fixture: ComponentFixture<EditParcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditParcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
