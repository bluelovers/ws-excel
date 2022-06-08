import { _compareExcelColKeyCore } from './compare';

export type IParsedRowKey = RegExpExecArray & [key: string, col: string, row: string] & {
	/**
	 * key
	 */
	s: string,
	/**
	 * col
	 */
	c: string,
	/**
	 * row
	 */
	r: string,
}

export type ICompareParsedFn = (r1: IParsedRowKey, r2: IParsedRowKey) => number;
