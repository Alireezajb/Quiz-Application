import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiestionMainComponent } from './quiestion-main.component';

describe('QuiestionMainComponent', () => {
  let component: QuiestionMainComponent;
  let fixture: ComponentFixture<QuiestionMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiestionMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiestionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
