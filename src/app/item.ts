import { PrioListEntry } from './prio-list-entry';

export class Item implements PrioListEntry {
	value: string;

	constructor(public name: string, public id?: number) {
		this.value = name;
	}
}
