import type { Transition, Variants } from 'framer-motion';
import { cubicBezier } from './config';

export const bgModalVariants: Variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export const scrollHeaderVariants: Variants = {
	down: { y: 16 },
	up: { y: 0 },
};

export const bgModalTransition: Transition = {
	duration: 0.4,
};

export const cardModalVariants: Variants = {
	hidden: { opacity: 0.5, y: 512 },
	visible: { opacity: 1, y: 0 },
};

export const cardModalTransition: Transition = {
	duration: 0.4,
	delay: 0.2,
};
