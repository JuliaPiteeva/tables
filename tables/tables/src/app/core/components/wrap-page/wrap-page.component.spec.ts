import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapPageComponent } from './wrap-page.component';

describe('WrapPageComponent', () => {
  let component: WrapPageComponent;
  let fixture: ComponentFixture<WrapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
