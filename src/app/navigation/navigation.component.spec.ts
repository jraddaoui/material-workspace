import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MatExpansionModule,
        MatIconModule,
        MatListModule,
      ],
      declarations: [ NavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have navigation items', () => {
    expect(component.navigation.length).toBeGreaterThan(1);
  });

  it('should have links', () => {
    expect(fixture.nativeElement.querySelectorAll('a').length).toBeGreaterThan(1);
  });

  it('should emit linkClicked', () => {
    spyOn(component.linkClicked, 'emit');
    fixture.nativeElement.querySelector('a').click();
    expect(component.linkClicked.emit).toHaveBeenCalled();
  });
});
