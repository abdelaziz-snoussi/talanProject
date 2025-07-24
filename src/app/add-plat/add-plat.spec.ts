import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlat } from './add-plat';

describe('AddPlat', () => {
  let component: AddPlat;
  let fixture: ComponentFixture<AddPlat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
