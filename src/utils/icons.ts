import type { typeIconsVersion, typeAllIcons } from '@/types/icons';

export const v1_0 = ['accountBox', 'agriculture', 'bevipentagono'];

export const v1_1 = ['alternateEmail', 'article', 'bank', 'bookmark', 'chat'];

export const iconsByVersion = [
	{
		version: '1.0',
		icons: v1_0,
	},
	{
		version: '1.1',
		icons: v1_1,
	},
];

export const allIconsSorted = [...v1_0, ...v1_1].sort();
