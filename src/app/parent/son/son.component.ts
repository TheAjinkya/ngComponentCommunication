import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent implements OnInit {

  constructor(private dataService: DataService) {
    console.log("Constructor called!")
  }

  @Input() messageFromParent: String = ''

  @Output() customEvent = new EventEmitter()

  messageFromSister: String = ''

  subObservable: any

  ngOnChanges() {
    console.log("Son: ngOnChanges Son")
    this.subObservable = this.dataService.subject.subscribe(response => {
      this.messageFromSister = response
    })
    
  }
  ngOnInit(): void {
    console.log("Son: ngOninit")
  }
  

  sendToParent() {
    this.customEvent.emit('Hello Dad!')
  }

  sendToSister(data: string) {
    this.dataService.subject.next(data)
  }

}
