import { parseRowKey } from './core';
import { IParsedRowKey } from './types';

export function compareExcelColKey(a: string, b: string): number
{
	const r1 = parseRowKey(a);
	const r2 = parseRowKey(b);

	return _compareExcelColKeyCore(r1, r2)
}

export function compareExcelRowKey(a: string, b: string): number
{
	const r1 = parseRowKey(a);
	const r2 = parseRowKey(b);

	return _compareExcelColKeyCore(r1, r2)
}

export function _compareExcelColKeyCore(r1: IParsedRowKey, r2: IParsedRowKey): number
{
	return r1.c.length - r2.c.length || _compareExcelColKey(r1.c, r2.c)
}

export function _compareExcelRowKeyCore(r1: IParsedRowKey, r2: IParsedRowKey): number
{
	return (r1.r as any) - (r2.r as any) || _compareExcelColKeyCore(r1, r2)
}

export function _compareExcelColKey(a: string, b: string): number
{
	const max = Math.max(a.length, b.length);

	for (let i = 0; i < max; i++)
	{
		let result = a[0].charCodeAt(0) - b[0].charCodeAt(0);

		if (result)
		{
			return result
		}
	}
}
