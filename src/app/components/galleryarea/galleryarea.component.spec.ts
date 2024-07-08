import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryareaComponent } from './galleryarea.component';

describe('GalleryareaComponent', () => {
  let component: GalleryareaComponent;
  let fixture: ComponentFixture<GalleryareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
