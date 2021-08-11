import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue;
    }`]
})
export class AppComponent {
  showSecret = false;
  logArr = [];

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // @ts-ignore
    // this.logArr.push(this.logArr.length +1);
    this.logArr.push(new Date());
  }
}
