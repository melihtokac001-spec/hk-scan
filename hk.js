// Shared helpers: remembers which staff member owns this phone.
// Saved in localStorage with a cookie backup, so staff identify themselves only once.
(function () {
  var KEY = "hk_staff";
  var LAST = "hk_last_scan";
  var TWO_YEARS = 60 * 60 * 24 * 730;

  function readCookie(name) {
    var m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function writeCookie(name, value, maxAge) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; max-age=" + maxAge + "; SameSite=Lax";
  }
  function readStore(key) {
    var v = null;
    try { v = localStorage.getItem(key); } catch (e) {}
    if (!v) v = readCookie(key);
    try { return v ? JSON.parse(v) : null; } catch (e) { return null; }
  }
  function writeStore(key, obj) {
    var v = JSON.stringify(obj);
    try { localStorage.setItem(key, v); } catch (e) {}
    writeCookie(key, v, TWO_YEARS);
  }
  function clearStore(key) {
    try { localStorage.removeItem(key); } catch (e) {}
    writeCookie(key, "", 0);
  }

  window.HK = {
    getStaff: function () {
      var s = readStore(KEY);
      return s && s.id ? s : null;
    },
    setStaff: function (id, name) { writeStore(KEY, { id: id, name: name, since: new Date().toISOString() }); },
    clearStaff: function () { clearStore(KEY); clearStore(LAST); },
    getLastScan: function () { return readStore(LAST); },
    setLastScan: function (area, action) { writeStore(LAST, { area: area, action: action, ts: Date.now() }); },
    param: function (name) { return new URLSearchParams(location.search).get(name); },
    esc: function (s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    }
  };
})();
