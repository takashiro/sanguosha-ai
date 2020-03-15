import {
	Command as cmd,
	Client,
} from '@karuta/client';

import minds from './mind';

class Robot {
	protected client: Client;

	protected roomId: number;

	protected name: string;

	protected uid: number;

	constructor(roomId: number, name: string) {
		const client = new Client();
		this.client = client;
		this.roomId = roomId;
		this.name = name;
		this.uid = 0;
	}

	async connect(url: string): Promise<void> {
		await this.client.connect(url);
		const uid = await this.client.request(cmd.Login, { name: this.name });
		this.uid = Number.parseInt(uid, 10);
		await this.client.request(cmd.EnterRoom, this.roomId);

		for (const MindClass of minds) {
			const mind = new MindClass(this);
			this.client.bind(mind.getCommand(), (args: any): void => {
				mind.proceed(args);
			});
		}
	}

	getClient(): Client {
		return this.client;
	}
}

export default Robot;
