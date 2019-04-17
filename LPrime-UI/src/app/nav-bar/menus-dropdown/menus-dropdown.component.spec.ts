import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusDropdownComponent } from './menus-dropdown.component';

describe('MenusDropdownComponent', () => {
  let component: MenusDropdownComponent;
  let fixture: ComponentFixture<MenusDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenusDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
