import { Command as cmd } from '@karuta/sanguosha-core';

import Neuron from '../Neuron';
import Robot from '../Robot';

export default class ChooseCards extends Neuron<void> {
	constructor(robot: Robot) {
		super(robot, cmd.ChooseCards);
	}

	proceed() {
		this.client.send(cmd.ChooseCards, []);
	}
}
