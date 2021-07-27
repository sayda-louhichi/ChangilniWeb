import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRelevesComponent } from './list-releves.component';

describe('ListRelevesComponent', () => {
  let component: ListRelevesComponent;
  let fixture: ComponentFixture<ListRelevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRelevesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRelevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
