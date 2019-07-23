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
  masters: Observable<any>;

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    this.masters = this.httpClient.get("https://swapi.co/api/");
    this.masters.subscribe(data => {
      console.log("my data: ", data);
    });
  }
}
