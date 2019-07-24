# Ionic-App

Our challenge was to build this app.

![app](https://cloud.githubusercontent.com/assets/1513265/15188880/a24de426-17b0-11e6-82fd-252b59b9c8d3.png)

Following the guidelines, we started with: `ionic start myApp sidemenu`

We then decided that on the tutorials we previously did, adding pages and links would be fine but our real challenge would be to implement the feed with the cards using data from the API.

In app.module.ts 

We added: `import { HttpClientModule } from "@angular/common/http";`

And we added it to the import array in `@NgModule`

Then, in home.page.ts

We added: `import { HttpClient } from "@angular/common/http";`

Then, we took the data from the SWAPI API, we succeeded to get them in the Chrome tool console.

```javascript
export class HomePage {
  masters: Observable<any>;
  constructor(private http: HttpClient) {
    this.http.get("https://swapi.co/api/people").subscribe((response) => {
      this.masters = response['results'];
    });
```

Our challenge was to display those data into a the feed.

From our research, we were trying to create and populate a web-component such as the [ion-card](https://ionicframework.com/docs/api/card) in order to populate the feed. 

We focused on it and we found that would need to use `.create` in the `.ts` file to create each card. 

Or we could use something like: 

```angular
<ul>
  <li *ngFor="let element of array" [type]="element">
    {{element.name}}, {{element.age}}
  </li>
</ul>
```

We did not succeed to implement it. Working with Angular and Ionic web components for the first time, progresses were slow. May be we could have made faster progress if we would have started by stepping out of this project for the first hour and get a better understanding of the flow of data. 
