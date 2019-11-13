import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dkp',
  templateUrl: './dkp.component.html',
  styleUrls: ['./dkp.component.scss']
})
export class DkpComponent implements OnInit, AfterViewInit {
  @ViewChild('html', { static: false }) elementRef: ElementRef;

  constructor() { }

  ngOnInit() {
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
