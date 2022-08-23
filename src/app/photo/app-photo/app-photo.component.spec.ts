import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPhotoComponent } from './app-photo.component';

describe('AppPhotoComponent', () => {
  let component: AppPhotoComponent;
  let fixture: ComponentFixture<AppPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPhotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
