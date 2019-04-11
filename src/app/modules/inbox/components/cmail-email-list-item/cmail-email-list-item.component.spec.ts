import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmailEmailListItemComponent } from './cmail-email-list-item.component';

describe('CmailEmailListItemComponent', () => {
  let component: CmailEmailListItemComponent;
  let fixture: ComponentFixture<CmailEmailListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmailEmailListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmailEmailListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
