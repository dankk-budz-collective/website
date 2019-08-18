import { PrioListEntry } from './prio-list-entry';
import { Operator } from './operator.enum';

export class PrioOperator implements PrioListEntry {
	value: string;

	constructor(operator: Operator) {
		switch (operator) {
			case Operator.EQ:
				this.value = '=';
				break;

			case Operator.GT:
				this.value = '>';
				break;

			case Operator.LT:
				this.value = '<';
				break;

			default:
				break;
		}
	}
}
