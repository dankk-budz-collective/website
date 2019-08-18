import { Item } from './item';
import { PrioOperator } from './prio-operator';
import { WowClass } from './wow-class';
import { Operator } from './operator.enum';

export class ItemPrio {
	item: Item;
	order: Array<WowClass | PrioOperator> = Array();
	note?: string;

	constructor(rawLineString: string) {
		const triSplit = /(.+?)\|(.+?)(?:\|(.+))?$/;
		const result = rawLineString.match(triSplit);

		if (result === null) {
			this.item = new Item('<Warning, empty line>');
			return;
		}

		this.processName(result[1]);
		this.processPriority(result[2]);
		this.processNote(result[3]);
	}

	private processName(rawName: string) {
		rawName.trim();
		this.item = new Item(rawName);
	}

	private processPriority(rawPrioString: string) {
		const prioritySplit = /^(.*?)(?:([=<>])(.+?))?(?:([=<>])(.+?))?(?:([=<>])(.+?))?(?:([=<>])(.+?))?(?:([=<>])(.+?))?$/;
		const split = rawPrioString.match(prioritySplit);
		const opCheck = /[=<>]/;

		for (let i = 1; i < split.length; i++) {
			if (split[i] === undefined) {
				continue;
			}

			const trim = split[i].trim();
			if (opCheck.test(trim)) {
				let newOp;
				if (trim === '=') {
					newOp = Operator.EQ;
				} else if (trim === '>') {
					newOp = Operator.GT;
				} else if (trim === '<') {
					newOp = Operator.LT;
				} else {
					newOp = Operator.UK;
				}
				this.order.push(new PrioOperator(newOp));
			} else {
				this.order.push(new WowClass(trim));
			}
		}
	}

	private processNote(rawNote: string) {
		if (rawNote !== undefined) {
			this.note = rawNote.trim();
		}
	}
}
