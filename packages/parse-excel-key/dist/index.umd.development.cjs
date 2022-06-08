(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["parse-excel-key"] = {}));
})(this, (function (exports) { 'use strict';

	const RE_ROW_KEY = /^([A-Z]+)(\d+)$/;
	function _getParsedMaxKeyCore(sheet, compareFn) {
	  let lastKey;

	  for (const curKey in sheet) {
	    let parsed = parseCellKey(curKey);

	    if (parsed !== null && parsed !== void 0 && parsed.length) {
	      if (typeof lastKey === 'undefined' || compareFn(parsed, lastKey) > 0) {
	        lastKey = parsed;
	      }
	    }
	  }

	  return lastKey;
	}
	function parseCellKey(key) {
	  const result = RE_ROW_KEY.exec(key);

	  if (result !== null) {
	    result.s = result[0];
	    result.c = result[1];
	    result.r = result[2];
	  }

	  return result;
	}

	function compareExcelColKey(a, b) {
	  const r1 = parseCellKey(a);
	  const r2 = parseCellKey(b);
	  return _compareExcelColKeyCore(r1, r2);
	}
	function compareExcelRowKey(a, b) {
	  const r1 = parseCellKey(a);
	  const r2 = parseCellKey(b);
	  return _compareExcelRowKeyCore(r1, r2);
	}
	function _compareExcelColKeyCore(r1, r2) {
	  return r1.c.length - r2.c.length || _compareExcelColKey(r1.c, r2.c);
	}
	function _compareExcelRowKeyCore(r1, r2) {
	  return r1.r - r2.r || _compareExcelColKeyCore(r1, r2);
	}
	function _compareExcelColKey(a, b) {
	  const max = Math.max(a.length, b.length);

	  for (let i = 0; i < max; i++) {
	    let result = a[0].charCodeAt(0) - b[0].charCodeAt(0);

	    if (result) {
	      return result;
	    }
	  }
	}

	function getParsedMaxColKey(sheet) {
	  return _getParsedMaxKeyCore(sheet, _compareExcelColKeyCore);
	}
	function getParsedMaxRowKey(sheet) {
	  return _getParsedMaxKeyCore(sheet, _compareExcelRowKeyCore);
	}
	function getMaxRow(sheet) {
	  var _getParsedMaxRowKey;

	  return parseInt((_getParsedMaxRowKey = getParsedMaxRowKey(sheet)) === null || _getParsedMaxRowKey === void 0 ? void 0 : _getParsedMaxRowKey.r);
	}
	function getMaxColKey(sheet) {
	  return getParsedMaxColKey(sheet).c;
	}
	function getMaxRowKey(sheet) {
	  return getParsedMaxRowKey(sheet).s;
	}
	function isRowKey(key) {
	  return parseCellKey(key) !== null;
	}

	exports._compareExcelColKey = _compareExcelColKey;
	exports._compareExcelColKeyCore = _compareExcelColKeyCore;
	exports._compareExcelRowKeyCore = _compareExcelRowKeyCore;
	exports._getParsedMaxKeyCore = _getParsedMaxKeyCore;
	exports.compareExcelColKey = compareExcelColKey;
	exports.compareExcelRowKey = compareExcelRowKey;
	exports.getMaxColKey = getMaxColKey;
	exports.getMaxRow = getMaxRow;
	exports.getMaxRowKey = getMaxRowKey;
	exports.getParsedMaxColKey = getParsedMaxColKey;
	exports.getParsedMaxRowKey = getParsedMaxRowKey;
	exports.isRowKey = isRowKey;
	exports.parseCellKey = parseCellKey;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.development.cjs.map
