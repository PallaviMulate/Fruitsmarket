import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitimagesComponent } from './fruitimages.component';

describe('FruitimagesComponent', () => {
  let component: FruitimagesComponent;
  let fixture: ComponentFixture<FruitimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
