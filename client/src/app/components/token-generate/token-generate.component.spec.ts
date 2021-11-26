import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenGenerateComponent } from './token-generate.component';

describe('TokenGenerateComponent', () => {
  let component: TokenGenerateComponent;
  let fixture: ComponentFixture<TokenGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
