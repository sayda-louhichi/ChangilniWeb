import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChefParcComponent } from './edit-chef-parc.component';

describe('EditChefParcComponent', () => {
  let component: EditChefParcComponent;
  let fixture: ComponentFixture<EditChefParcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChefParcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChefParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
