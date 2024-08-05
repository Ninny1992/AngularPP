import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveRequestComponent } from './archive-request.component';

describe('ArchiveRequestComponent', () => {
  let component: ArchiveRequestComponent;
  let fixture: ComponentFixture<ArchiveRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchiveRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
