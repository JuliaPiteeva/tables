import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  standalone: true,
  imports: [CommonModule]
})
export class HeaderComponent implements OnInit, OnDestroy {
  tabs = [
    {
      state: '/book',
      cssClass: '',
      text: 'Справочник',
      show: true,
      active: false
    },
    {
      state: '/book-events',
      cssClass: '', //warning
      text: 'События',
      show: true,
      active: false
    }
]
  activeState = '';
  subs: Subscription[] = [];

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

  updateState(){
    this.activeState = this.router.url;
    // this.tabs[this.activeState]
    console.debug(this.activeState);
  }

  goTo($event: any, tab: any){
    $event.preventDefault();
    this.router.navigate([tab.state]);
  }
  
  ngOnDestroy(): void {
    this.subs.map((s) => s.unsubscribe());
  }
}

