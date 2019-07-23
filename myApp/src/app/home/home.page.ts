import { Component } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { NavController, NavParams } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  tasks:any[]=[]
  masters: Observable<any>;


  constructor(private http: HttpClient) {
    this.http.get("https://swapi.co/api/people").subscribe((response) => {

      // console.log(response['results']);
      this.masters = response['results'];


    });
    console.log(this.masters);
  }
}
