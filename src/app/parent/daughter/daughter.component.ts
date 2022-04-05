import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.scss']
})
export class DaughterComponent implements OnInit {

  constructor(private dataService: DataService) { }

  @Input() messageFromParent: String = ''
  
  messageFromBrother:any = ''

  @Output() customEvent = new EventEmitter()

  ngOnInit(): void {
  }
  ngOnChanges() {
    this.dataService.subject.subscribe(response => {
      this.messageFromBrother = response
    })
    console.log(this.messageFromBrother)
  }

  sendToBrother(data: String) {
    this.dataService.subject.next(data)
  }

  sendToParent() {
    this.customEvent.emit("Hello Paa!")
  }
}
