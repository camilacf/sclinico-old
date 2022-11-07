import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth$ } from "@spms/utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sclinico-old';
  isAuthenticated: boolean = false;
  username: string = '';

  constructor(private router: Router){
  }

  ngOnInit(){
    auth$.subscribe((s:any) => {
      this.isAuthenticated = s.authenticated;
      this.username = s.username;
    })
  }

  gotoApp(){
    this.router.navigate(['/auth']);
  }
}
