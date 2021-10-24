import {Component, OnInit} from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'myPortfolio';

  constructor(private metaTagService: Meta) {
  }

  ngOnInit(): void {
    this.metaTagService.addTags([
      {name:'keywords', content:'this is working very well'},
      {name:'author', content:'VS'},
      {name:'keywords', content:'this is working very well'},

    ])
  }
}
