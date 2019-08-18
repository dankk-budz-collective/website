import { PrioListEntry } from './prio-list-entry';

export class WowClass implements PrioListEntry {
	value: string;
	constructor(name: string) {
		this.value = name;
	}
}
