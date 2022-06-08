const e = /^([A-Z]+)(\d+)$/;

function _getParsedMaxKeyCore(e, o) {
  let r;
  for (const l in e) {
    let e = parseCellKey(l);
    null != e && e.length && (void 0 === r || o(e, r) > 0) && (r = e);
  }
  return r;
}

function parseCellKey(o) {
  const r = e.exec(o);
  return null !== r && (r.s = r[0], r.c = r[1], r.r = r[2]), r;
}

function compareExcelColKey(e, o) {
  return _compareExcelColKeyCore(parseCellKey(e), parseCellKey(o));
}

function compareExcelRowKey(e, o) {
  return _compareExcelRowKeyCore(parseCellKey(e), parseCellKey(o));
}

function _compareExcelColKeyCore(e, o) {
  return e.c.length - o.c.length || _compareExcelColKey(e.c, o.c);
}

function _compareExcelRowKeyCore(e, o) {
  return e.r - o.r || _compareExcelColKeyCore(e, o);
}

function _compareExcelColKey(e, o) {
  const r = Math.max(e.length, o.length);
  for (let l = 0; l < r; l++) {
    let r = e[0].charCodeAt(0) - o[0].charCodeAt(0);
    if (r) return r;
  }
}

function getParsedMaxColKey(e) {
  return _getParsedMaxKeyCore(e, _compareExcelColKeyCore);
}

function getParsedMaxRowKey(e) {
  return _getParsedMaxKeyCore(e, _compareExcelRowKeyCore);
}

function getMaxRow(e) {
  var o;
  return parseInt(null === (o = getParsedMaxRowKey(e)) || void 0 === o ? void 0 : o.r);
}

function getMaxColKey(e) {
  return getParsedMaxColKey(e).c;
}

function getMaxRowKey(e) {
  return getParsedMaxRowKey(e).s;
}

function isRowKey(e) {
  return null !== parseCellKey(e);
}

export { _compareExcelColKey, _compareExcelColKeyCore, _compareExcelRowKeyCore, _getParsedMaxKeyCore, compareExcelColKey, compareExcelRowKey, getMaxColKey, getMaxRow, getMaxRowKey, getParsedMaxColKey, getParsedMaxRowKey, isRowKey, parseCellKey };
//# sourceMappingURL=index.esm.mjs.map
