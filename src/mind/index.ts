import Neuron from '../Neuron';
import Robot from '../Robot';

import ChooseCards from './ChooseCards';
import ChooseGeneral from './ChooseGeneral';
import Play from './Play';

const minds: (new(robot: Robot) => Neuron<unknown>)[] = [
	ChooseCards,
	ChooseGeneral,
	Play,
];

export default minds;
