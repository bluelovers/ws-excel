import { Sheet } from 'xlsx';
import { ICompareParsedFn, IParsedRowKey } from './types';

const RE_ROW_KEY = /^([A-Z]+)(\d+)$/;

export function _getParsedMaxKeyCore(sheet: Sheet, compareFn: ICompareParsedFn)
{
	let lastKey: IParsedRowKey;
	for (const curKey in sheet)
	{
		let parsed = parseCellKey(curKey);
		if (parsed?.length)
		{
			if (typeof lastKey === 'undefined' || compareFn(parsed, lastKey) > 0)
			{
				lastKey = parsed
			}
		}
	}
	return lastKey
}

export function parseCellKey(key: string): IParsedRowKey | null
{
	const result: IParsedRowKey = RE_ROW_KEY.exec(key) as any

	if (result !== null)
	{
		result.s = result[0];
		result.c = result[1];
		result.r = result[2];
	}

	return result
}
