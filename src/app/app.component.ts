import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angpipes';
  technology="Angular";
  abc='AasHisH';
  todaydate=new Date();
  jsonval={"name":"aashish" ,"age":22,"city":"ballabgarh"};
  months=["jan","feb","march","apr","may","june","july","aug","sep","oct","nov","dec"]
}
