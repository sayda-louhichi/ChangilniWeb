import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParcComponent } from './list-parc.component';

describe('ListParcComponent', () => {
  let component: ListParcComponent;
  let fixture: ComponentFixture<ListParcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListParcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
