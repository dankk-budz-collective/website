import { Component, OnInit } from '@angular/core';
import { ItemPrio } from '../item-prio';
import { Item } from '../item';
import { PrioOperator } from '../prio-operator';
import { Operator } from '../operator.enum';
import { WowClass } from '../wow-class';
import { PriosService } from '../prios.service';

@Component({
	selector: 'app-prios',
	templateUrl: './prios.component.html',
	styleUrls: ['./prios.component.scss']
})
export class PriosComponent implements OnInit {

	prios: ItemPrio[];

	constructor(private priosService: PriosService) {
		this.prios = new Array();
	}

	ngOnInit() {
		this.priosService.getMCPrios().subscribe(
			prioResponse => {
				const lines = prioResponse.match(/^(.*)$/gm); // get whole match, line by line
				lines.forEach(line => {
					this.prios.push(new ItemPrio(line));
				});
			}
		);
	}
}
