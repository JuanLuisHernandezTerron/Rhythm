import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantantesDialogComponent } from './cantantes-dialog.component';

describe('CantantesDialogComponent', () => {
  let component: CantantesDialogComponent;
  let fixture: ComponentFixture<CantantesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantantesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantantesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
