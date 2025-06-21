"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* Aside & Navbar: dropdowns */

Array.from(document.getElementsByClassName('dropdown')).forEach(function (elA) {
  elA.addEventListener('click', function (e) {
    if (e.currentTarget.classList.contains('navbar-item')) {
      e.currentTarget.classList.toggle('active');
    } else {
      var dropdownIcon = e.currentTarget.getElementsByClassName('mdi')[1];
      e.currentTarget.parentNode.classList.toggle('active');
      dropdownIcon.classList.toggle('mdi-plus');
      dropdownIcon.classList.toggle('mdi-minus');
    }
  });
});

/* Aside Mobile toggle */

Array.from(document.getElementsByClassName('mobile-aside-button')).forEach(function (el) {
  el.addEventListener('click', function (e) {
    var dropdownIcon = e.currentTarget.getElementsByClassName('icon')[0].getElementsByClassName('mdi')[0];
    document.documentElement.classList.toggle('aside-mobile-expanded');
    dropdownIcon.classList.toggle('mdi-forwardburger');
    dropdownIcon.classList.toggle('mdi-backburger');
  });
});

/* NavBar menu mobile toggle */

Array.from(document.getElementsByClassName('--jb-navbar-menu-toggle')).forEach(function (el) {
  el.addEventListener('click', function (e) {
    var dropdownIcon = e.currentTarget.getElementsByClassName('icon')[0].getElementsByClassName('mdi')[0];
    document.getElementById(e.currentTarget.getAttribute('data-target')).classList.toggle('active');
    dropdownIcon.classList.toggle('mdi-dots-vertical');
    dropdownIcon.classList.toggle('mdi-close');
  });
});

/* Modal: open */
document.addEventListener('click', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
    var btn, modalId, modal, closeBtn, _modal, deleteBtn;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          btn = e.target.closest('.--jb-modal');
          if (btn) {
            modalId = btn.getAttribute('data-target');
            modal = document.getElementById(modalId);
            if (modal) {
              modal.classList.add('active');
              document.documentElement.classList.add('clipped');
            }
          }

          /* Modal: close */
          closeBtn = e.target.closest('.--jb-modal-close');
          if (closeBtn) {
            _modal = closeBtn.closest('.modal');
            if (_modal) {
              _modal.classList.remove('active');
              document.documentElement.classList.remove('clipped');
            }
          }
          deleteBtn = e.target.closest('.button.red.--jb-modal[data-id]');
          if (deleteBtn) {
            barangIdToDelete = deleteBtn.getAttribute('data-id');
          }
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

// Button delete
function deleteBarang() {
  return _deleteBarang.apply(this, arguments);
} // fungsi fetch data barang halaman dashboard
function _deleteBarang() {
  _deleteBarang = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (barangIdToDelete) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", alert("ID barang tidak ditemukan"));
        case 2:
          _context2.prev = 2;
          _context2.next = 5;
          return fetch("".concat(API_URL, "/barang/").concat(barangIdToDelete), {
            method: 'DELETE',
            credentials: 'include'
          });
        case 5:
          barangIdToDelete = null;
          alert("Data Barang Berhasil di Hapus");
          window.location.reload();
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](2);
          console.error(_context2.t0);
          alert("Gagal menghapus data");
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 10]]);
  }));
  return _deleteBarang.apply(this, arguments);
}
var barangData = [];
var currentPage = 1;
var itemsPerPage = 5;
function fetchBarang() {
  return _fetchBarang.apply(this, arguments);
} //Fungsi submit edit data  barang
function _fetchBarang() {
  _fetchBarang = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var res, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetch("".concat(API_URL, "/barang/new"), {
            method: "GET",
            credentials: "include"
          });
        case 3:
          res = _context3.sent;
          _context3.next = 6;
          return res.json();
        case 6:
          data = _context3.sent;
          if (Array.isArray(data)) {
            _context3.next = 9;
            break;
          }
          throw new Error('Data barang tidak valid');
        case 9:
          barangData = data;
          renderBarangPage(currentPage);
          renderPagination();
          _context3.next = 17;
          break;
        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.error('Gagal memuat data: ' + _context3.t0.message);
        case 17:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 14]]);
  }));
  return _fetchBarang.apply(this, arguments);
}
function submitEditBarang() {
  return _submitEditBarang.apply(this, arguments);
}
function _submitEditBarang() {
  _submitEditBarang = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var id, data, res, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = document.getElementById('edit-id').value;
          if (id) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", alert("ID barang tidak valid."));
        case 3:
          data = {
            nama: document.getElementById('edit-nama').value,
            deskripsi: document.getElementById('edit-deskripsi').value,
            stok: Number(document.getElementById('edit-stok').value),
            harga: Number(document.getElementById('edit-harga').value),
            kategori: document.getElementById('edit-kategori').value,
            gambar: document.getElementById('edit-gambar').value
          };
          _context4.prev = 4;
          _context4.next = 7;
          return fetch("".concat(API_URL, "/barang/edit/").concat(id), {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
          });
        case 7:
          res = _context4.sent;
          _context4.next = 10;
          return res.json();
        case 10:
          result = _context4.sent;
          if (res.ok) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", alert(result.message || 'Gagal mengedit barang.'));
        case 13:
          alert("Data Barang Berhasil di Ubah");
          window.location.reload();
          _context4.next = 21;
          break;
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](4);
          console.error(_context4.t0);
          alert("Gagal menyimpan perubahan.");
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[4, 17]]);
  }));
  return _submitEditBarang.apply(this, arguments);
}
function renderBarangPage(page) {
  var tbody = document.getElementById('barang-table-body');
  tbody.innerHTML = '';
  var start = (page - 1) * itemsPerPage;
  var end = start + itemsPerPage;
  var pageData = barangData.slice(start, end);
  pageData.forEach(function (item) {
    var row = document.createElement('tr');
    row.innerHTML = "\n        <td data-label=\"Id\">\n          ".concat(item.id, "\n        </td>\n        <td data-label=\"Nama\">").concat(item.nama, "</td>\n        <td data-label=\"Stok\">").concat(item.stok, "</td>\n        <td data-label=\"Harga\">Rp").concat(Number(item.harga).toLocaleString(), "</td>\n        <td data-label=\"Kategori\">").concat(item.kategori || '-', "</td>\n        <td data-label=\"Created\">\n          <small class=\"text-gray-500\">").concat(new Date(item.created_at).toLocaleDateString(), "</small>\n        </td>\n        <td data-label=\"gambar\">\n            <a href=\"").concat(item.gambar || '-', "\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-blue-600 underline\">Lihat</a>\n          </td>\n      ");
    tbody.appendChild(row);
  });
  document.getElementById('page-info').textContent = "Page ".concat(page, " of ").concat(Math.ceil(barangData.length / itemsPerPage));
}
function renderPagination() {
  var container = document.getElementById('pagination-buttons');
  container.innerHTML = '';
  var totalPages = Math.ceil(barangData.length / itemsPerPage);
  var _loop = function _loop(i) {
    var btn = document.createElement('button');
    btn.textContent = i;
    btn.className = "button ".concat(i === currentPage ? 'active' : '');
    btn.onclick = function () {
      currentPage = i;
      renderBarangPage(i);
      renderPagination();
    };
    container.appendChild(btn);
  };
  for (var i = 1; i <= totalPages; i++) {
    _loop(i);
  }
}