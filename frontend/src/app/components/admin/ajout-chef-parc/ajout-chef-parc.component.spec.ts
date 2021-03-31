import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutChefPArcComponent } from './ajout-chef-parc.component';

describe('AjoutChefPArcComponent', () => {
  let component: AjoutChefPArcComponent;
  let fixture: ComponentFixture<AjoutChefPArcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutChefPArcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutChefPArcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
