import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreStartPage } from './pre-start.page';

describe('PreStartPage', () => {
  let component: PreStartPage;
  let fixture: ComponentFixture<PreStartPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
