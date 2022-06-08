import { Sheet } from 'xlsx';
import { _compareExcelColKeyCore, _compareExcelRowKeyCore } from './compare';
import { _getParsedMaxKeyCore, parseRowKey } from './core';

export * from './core';
export * from './compare';
export * from './types';

export function getParsedMaxColKey(sheet: Sheet)
{
	return _getParsedMaxKeyCore(sheet, _compareExcelColKeyCore);
}

export function getParsedMaxRowKey(sheet: Sheet)
{
	return _getParsedMaxKeyCore(sheet, _compareExcelRowKeyCore);
}

export function getMaxRow(sheet: Sheet): number
{
	return parseInt(getParsedMaxRowKey(sheet)?.r);
}

export function getMaxColKey(sheet: Sheet)
{
	return getParsedMaxColKey(sheet).c
}

export function getMaxRowKey(sheet: Sheet)
{
	return getParsedMaxRowKey(sheet).s
}

export function isRowKey(key: string)
{
	return parseRowKey(key) !== null
}
