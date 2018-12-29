import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {
  @Input() buttonText: string;
  @Input() buttonIcon: string;

  constructor() { }

  ngOnInit() {
  }

}
