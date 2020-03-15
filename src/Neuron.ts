import { Command } from '@karuta/sanguosha-core';
import { Client } from '@karuta/client';

import Robot from './Robot';

export default abstract class Neuron<ParamType> {
	protected owner: Robot;

	protected client: Client;

	protected command: Command;

	constructor(owner: Robot, command: Command) {
		this.owner = owner;
		this.client = owner.getClient();
		this.command = command;
	}

	getCommand(): Command {
		return this.command;
	}

	abstract proceed(params: ParamType): void;
}
