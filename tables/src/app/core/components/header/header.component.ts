import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  tabs = [
    {
      state: '/book',
      cssClass: '',
      text: 'Справочник',
      show: true,
      active: false,
      isCounterVisible: false,

    },
    {
      state: '/book-events',
      cssClass: 'warning', //warning
      text: 'События',
      show: true,
      active: false,
      isCounterVisible: true
    }
]
  activeState = '';
  subs: Subscription[] = [];
  triggerCounter = 8;


  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.updateState();
    this.subs.push(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.updateState();
        }
      }),
    );
  }

  ngAfterViewInit(): void {
    this.setTriggerCounter();
  }

  updateState(){
    this.activeState = this.router.url;
    // this.tabs[this.activeState]
    console.debug(this.activeState);
  }

  setTriggerCounter() {
    const countOfTasks = 50; // убрать
    const pi = 22 / 7;
    const radius = 10;
    const circumferenceLen = 2 * pi * radius;
    const percentOfUnprocessedTask = (this.triggerCounter * 100) / countOfTasks;
    const progressLine = document.getElementById('progressLine');
    const dasharray = `${circumferenceLen + (circumferenceLen * percentOfUnprocessedTask) / 100}`;
    if (progressLine) progressLine.style.strokeDasharray = dasharray;
  }


  goTo($event: any, tab: any){
    $event.preventDefault();
    this.router.navigate([tab.state]);
  }
  
  ngOnDestroy(): void {
    this.subs.map((s) => s.unsubscribe());
  }
}

