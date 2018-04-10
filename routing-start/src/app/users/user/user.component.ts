import { Component, OnInit, OnDestroy } from '@angular/core';
import { Route, ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  paramsSubscription:Subscription;

  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.user = {id:this.route.snapshot.params['id'], name:this.route.snapshot.params['name']};
    this.paramsSubscription = this.route.params.subscribe((params:Params)=>{
      this.user = {id:params.id,name:params.name};
      console.log("user updated:" + params['id'] + "," + params['name']);
      console.log(params);
    });
  }

  ngOnDestroy(){
    this.paramsSubscription.unsubscribe();
  }

}
 