import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsFuncionarioComponent } from './fields-funcionario.component';

describe('FieldsFuncionarioComponent', () => {
  let component: FieldsFuncionarioComponent;
  let fixture: ComponentFixture<FieldsFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldsFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
