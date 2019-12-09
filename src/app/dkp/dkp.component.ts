import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MonDkpConverterService } from '../services/mon-dkp-converter.service';
import { MonDkpImportService } from '../services/mon-dkp-import.service';
import { DKPRecord } from '../services/mon-dkp.models';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dkp',
  templateUrl: './dkp.component.html',
  styleUrls: ['./dkp.component.scss']
})
export class DkpComponent implements OnInit, AfterViewInit {
  @ViewChild('html', { static: false }) elementRef: ElementRef;
  public monDkpData: Observable<DKPRecord[]>;
  constructor( private monDkpImportService : MonDkpImportService) { }

  ngOnInit() {
    this.monDkpData = this.monDkpImportService.getDkpRecords();
  }

  ngAfterViewInit(): void {
    var tabSwitcher = document.createElement("script");
    tabSwitcher.type = "text/javascript";
    tabSwitcher.innerHTML = `
    function openTab(tabName) {
      var i;
      var x = document.getElementsByClassName("tab");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      document.getElementById(tabName).style.display = "block";
   }
    `;
    this.elementRef.nativeElement.appendChild(tabSwitcher);


    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://wow.zamimg.com/widgets/power.js";
    this.elementRef.nativeElement.appendChild(script);
  }
}
