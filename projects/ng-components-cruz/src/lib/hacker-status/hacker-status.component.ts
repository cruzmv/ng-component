import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vw-hacker-status',
  template: `
    <div class="status-pulse">
      <span class="pulse" [ngClass]="color"></span>
      <span class="dot" [ngClass]="color"></span>
    </div>
`,
  styleUrls: ['./hacker-status.component.scss']
})
export class HackerStatusComponent implements OnInit {
  @Input() status: string = "";
  color: string = "";

  constructor() { }

  ngOnInit(): void {
    this.color = this.statusToColor(this.status);
  }

  statusToColor(status: string){
    switch(status){
      case 'danger':
        return 'red';
      case 'safe':
        return 'green';
      case 'warning':
        return 'yellow';
      default:
        return 'yellow';
    }
  }

}
