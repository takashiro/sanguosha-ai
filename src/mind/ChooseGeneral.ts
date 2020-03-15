import { Command as cmd } from '@karuta/sanguosha-core';

import Neuron from '../Neuron';
import Robot from '../Robot';

interface GeneralMeta {
	id: number;
}

interface ChooseGeneralOption {
	generals: GeneralMeta[];
	num?: number;
}

export default class ChooseGeneral extends Neuron<ChooseGeneralOption> {
	constructor(robot: Robot) {
		super(robot, cmd.ChooseGeneral);
	}

	proceed(option: ChooseGeneralOption): void {
		const num = option.num || 1;
		const generals = option.generals || [];
		const selected = generals.slice(0, num).map((g) => g.id);
		this.client.send(cmd.ChooseGeneral, selected);
	}
}
