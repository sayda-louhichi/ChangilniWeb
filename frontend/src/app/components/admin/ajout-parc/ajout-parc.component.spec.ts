import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutParcComponent } from './ajout-parc.component';

describe('AjoutParcComponent', () => {
  let component: AjoutParcComponent;
  let fixture: ComponentFixture<AjoutParcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutParcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
