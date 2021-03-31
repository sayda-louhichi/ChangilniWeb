import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChefPArcComponent } from './list-chef-parc.component';

describe('ListChefPArcComponent', () => {
  let component: ListChefPArcComponent;
  let fixture: ComponentFixture<ListChefPArcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListChefPArcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListChefPArcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
