import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}

  async ngOnInit(): Promise<void> {
    const res = await cordova.plugins.health.isAvailable();
    console.log('Health available? ', res);
  }
}
