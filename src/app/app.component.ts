import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngComponentCommunicationApp';

  ngOnChanges() {
    console.log("SuperParent: ngOnChanges SuperParent")
  }
  ngDoCheck() {
    // this.subObservable.unsubscribe()
    console.log("SuperParent: ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("SuperParent: ngAfterContentInit")
  }
  ngAfterContentChecked() {
    console.log("SuperParent: ngAfterContentChecked")
  }
  ngAfterViewInit() {
    console.log("SuperParent: ngAfterViewInit")
  }
  ngAfterviewChecked() {
    console.log("SuperParent: ngAfterviewChecked")
  }

}
