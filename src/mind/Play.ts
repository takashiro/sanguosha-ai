import { Command as cmd } from '@karuta/sanguosha-core';

import Neuron from '../Neuron';
import Robot from '../Robot';

export default class Play extends Neuron<void> {
	constructor(robot: Robot) {
		super(robot, cmd.Play);
	}

	proceed(): void {
		const locker = this.client.lock();
		this.client.reply(locker, { cancel: true });
	}
}
