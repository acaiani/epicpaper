/* SHA-256 sincrono, minimale (UTF-8). Usato al posto di crypto.subtle
   perché funziona anche aprendo i file in locale. */
window.sha256 = function (str) {
  function rr(v, a) { return (v >>> a) | (v << (32 - a)); }
  var bytes = unescape(encodeURIComponent(str)), K = [], H = [], i, j, p = 2;
  for (var c = 0; K.length < 64; p++) {
    for (j = 2; j * j <= p; j++) if (p % j === 0) break;
    if (j * j > p) {
      if (H.length < 8) H.push((Math.pow(p, 1 / 2) * 4294967296) | 0);
      K.push((Math.pow(p, 1 / 3) * 4294967296) | 0);
    }
  }
  var l = bytes.length, words = [];
  bytes += "\x80";
  while (bytes.length % 64 - 56) bytes += "\x00";
  for (i = 0; i < bytes.length; i++) words[i >> 2] |= bytes.charCodeAt(i) << ((3 - i) % 4) * 8;
  words.push(0, (l * 8) | 0);
  for (j = 0; j < words.length;) {
    var w = words.slice(j, j += 16), old = H.slice(0);
    for (i = 0; i < 64; i++) {
      var w15 = w[i - 15], w2 = w[i - 2], a = H[0], e = H[4];
      if (i >= 16) w[i] = (w[i - 16] + (rr(w15, 7) ^ rr(w15, 18) ^ (w15 >>> 3)) + w[i - 7] + (rr(w2, 17) ^ rr(w2, 19) ^ (w2 >>> 10))) | 0;
      var t1 = H[7] + (rr(e, 6) ^ rr(e, 11) ^ rr(e, 25)) + ((e & H[5]) ^ (~e & H[6])) + K[i] + w[i];
      var t2 = (rr(a, 2) ^ rr(a, 13) ^ rr(a, 22)) + ((a & H[1]) ^ (a & H[2]) ^ (H[1] & H[2]));
      H = [(t1 + t2) | 0].concat(H);
      H[4] = (H[4] + t1) | 0;
      H.length = 8;
    }
    for (i = 0; i < 8; i++) H[i] = (H[i] + old[i]) | 0;
  }
  var out = "";
  for (i = 0; i < 8; i++) for (j = 3; j + 1; j--) { var b = (H[i] >> (j * 8)) & 255; out += (b < 16 ? "0" : "") + b.toString(16); }
  return out;
};
window.normalizza = function (s) {
  return (s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, "");
};
