import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapareaComponent } from './maparea.component';

describe('MapareaComponent', () => {
  let component: MapareaComponent;
  let fixture: ComponentFixture<MapareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
