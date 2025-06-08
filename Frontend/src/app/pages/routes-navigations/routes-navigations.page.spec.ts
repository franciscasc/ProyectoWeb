import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutesNavigationsPage } from './routes-navigations.page';

describe('RoutesNavigationsPage', () => {
  let component: RoutesNavigationsPage;
  let fixture: ComponentFixture<RoutesNavigationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesNavigationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
