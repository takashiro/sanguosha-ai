import Robot from '../src/Robot';

describe('Robot', () => {
	const robot = new Robot(1, 'Robot A');

	it('creates a client', () => {
		const client = robot.getClient();
		expect(client).toBeTruthy();
	});
});
