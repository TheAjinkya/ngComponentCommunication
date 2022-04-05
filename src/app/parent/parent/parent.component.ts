import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() messageForHim: string = 'Hello Son!'
  
  @Input() messageForHer: string = 'Hello Daughter!'
  
  messageFromSon: String = ''
  messageFromDaughter:String=''


  sendHim(data: string) {
    this.messageForHim = data
    console.log(data)
  }

  sendHer(data:string) {
    this.messageForHer = data
    console.log(data)
  }

  getMessageFromSon(data: any) {
    console.log(data)
    this.messageFromSon = data
  }

  getMessageFromDaughter(data: string) {
    this.messageFromDaughter = data
  }

  ngOnChanges() {
    console.log("Parent: ngOnChanges Parent")
  }
  ngDoCheck() {
    // this.subObservable.unsubscribe()
    console.log("Parent: ngDoCheck")
  }
  ngAfterContentInit() {
    console.log("Parent: ngAfterContentInit")
  }
  ngAfterContentChecked() {
    console.log("Parent: ngAfterContentChecked")
  }
  ngAfterViewInit() {
    console.log("Parent: ngAfterViewInit")
  }
  ngAfterviewChecked() {
    console.log("Parent: ngAfterviewChecked")
  }

}
