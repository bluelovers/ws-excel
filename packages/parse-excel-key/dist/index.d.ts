import { Sheet } from 'xlsx';

export declare type IParsedRowKey = RegExpExecArray & [
	key: string,
	col: string,
	row: string
] & {
	/**
	 * key
	 */
	s: string;
	/**
	 * col
	 */
	c: string;
	/**
	 * row
	 */
	r: string;
};
export declare type ICompareParsedFn = (r1: IParsedRowKey, r2: IParsedRowKey) => number;
export declare function _getParsedMaxKeyCore(sheet: Sheet, compareFn: ICompareParsedFn): IParsedRowKey;
export declare function parseRowKey(key: string): IParsedRowKey | null;
export declare function compareExcelColKey(a: string, b: string): number;
export declare function compareExcelRowKey(a: string, b: string): number;
export declare function _compareExcelColKeyCore(r1: IParsedRowKey, r2: IParsedRowKey): number;
export declare function _compareExcelRowKeyCore(r1: IParsedRowKey, r2: IParsedRowKey): number;
export declare function _compareExcelColKey(a: string, b: string): number;
export declare function getParsedMaxColKey(sheet: Sheet): IParsedRowKey;
export declare function getParsedMaxRowKey(sheet: Sheet): IParsedRowKey;
export declare function getMaxRow(sheet: Sheet): number;
export declare function getMaxColKey(sheet: Sheet): string;
export declare function getMaxRowKey(sheet: Sheet): string;
export declare function isRowKey(key: string): boolean;

export {};
