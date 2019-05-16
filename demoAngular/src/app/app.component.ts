import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'demoAngular';
  time = new Date().toTimeString();
  counter = 0;
  interval = null;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.time = new Date().toTimeString();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  count(value) {
    this.counter += value;
  }
}
