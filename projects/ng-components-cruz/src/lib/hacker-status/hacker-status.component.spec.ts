import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HackerStatusComponent } from './hacker-status.component';

@Component({
  template: `
    <vw-hacker-status [status]="appStatus"></vw-hacker-status>
  `
})
class TestHostComponent {
  appStatus: string | undefined;
}

describe('NgComponentsCruzComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHostComponent, HackerStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
  });

  it('should create', () => {
    expect(testHost).toBeTruthy();
  });

  it('Should set pulse color to green when input is "safe"',()=>{
    testHost.appStatus = "safe";
    fixture.detectChanges();
    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;
    expect(pulseEl.classList).toContain('green');
  })

  it('Should set pulse color to yellow when input is "safe (snapshot testing)"',()=>{
    testHost.appStatus = "warning";
    fixture.detectChanges();
    //expect(fixture).toMatchSnapShot();
    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;
    expect(pulseEl.classList).toContain('yellow');
  })


  it('Should set pulse color to red when input is "safe (snapshot testing)"',()=>{
    testHost.appStatus = "danger";
    fixture.detectChanges();
    //expect(fixture).toMatchSnapShot();
    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;
    expect(pulseEl.classList).toContain('red');
  })

  it('Should set pulse color to yellow when input is "undefilned/null"',()=>{
    testHost.appStatus = undefined;
    fixture.detectChanges();
    //expect(fixture).toMatchSnapShot();
    const pulseEl: HTMLElement = fixture.debugElement.query(By.css('.pulse')).nativeElement;
    expect(pulseEl.classList).toContain('yellow');
  })


});
