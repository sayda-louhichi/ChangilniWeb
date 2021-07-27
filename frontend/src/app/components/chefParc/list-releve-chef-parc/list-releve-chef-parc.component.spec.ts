import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReleveChefParcComponent } from './list-releve-chef-parc.component';

describe('ListReleveChefParcComponent', () => {
  let component: ListReleveChefParcComponent;
  let fixture: ComponentFixture<ListReleveChefParcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReleveChefParcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReleveChefParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
