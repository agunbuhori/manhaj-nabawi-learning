import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {

  activeRoute:string = "/";

  constructor(private router: Router) { }

  ngOnInit() {
    this.getActiveRoute();
  }

  getActiveRoute() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd)
        this.activeRoute = event.url
    });
    
  }

}
