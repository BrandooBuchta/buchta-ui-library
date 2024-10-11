"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _Button = _interopRequireDefault(require("../UI/Button"));
var _Card = _interopRequireDefault(require("../UI/Card"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CookiesBar = function CookiesBar(_ref) {
  var title = _ref.title,
    content = _ref.content;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    showBanner = _useState2[0],
    setShowBanner = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showDetails = _useState4[0],
    setShowDetails = _useState4[1];
  (0, _react.useEffect)(function () {
    var hasConsent = localStorage.getItem("cookiesConsent");
    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);
  var handleConsent = function handleConsent(consent) {
    localStorage.setItem("cookiesConsent", consent ? "true" : "false");
    setShowBanner(false);
  };
  if (!showBanner) return null;
  return /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    className: "fixed bottom-0 left-0 w-full md:left-[50%] md:translate-x-[-50%] mb-10 max-w-full md:max-w-[1000px] mx-auto bg-white text-white p-5 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center z-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-bold text-default-800 text-lg md:text-2xl"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "mdi mdi-cookie mr-1"
  }), title || "Tento web používá cookies, souhlasíte s používáním cookies?"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "text-sm text-blue-500 ".concat(!showDetails && "mb-3 md:mb-5"),
    onClick: function onClick() {
      return setShowDetails(!showDetails);
    }
  }, showDetails ? "Skrýt podrobnosti" : "Zobrazit podrobnosti"), showDetails && /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-2 text-default-600 mb-3 md:mb-5"
  }, content || /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Tento web pou\u017E\xEDv\xE1 cookies pro sledov\xE1n\xED konverzn\xEDho pom\u011Bru a zlep\u0161ov\xE1n\xED slu\u017Eeb. Pou\u017E\xEDv\xE1me analytick\xFD n\xE1stroj", " ", /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "https://www.brandoo.cz",
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement("b", null, "Brandoo")), ", kter\xFD n\xE1m pom\xE1h\xE1 m\u011B\u0159it, zda jste na na\u0161em webu poprv\xE9, a d\xEDky tomu optimalizujeme na\u0161i nab\xEDdku. Cookies n\xE1m tak\xE9 pom\xE1haj\xED l\xE9pe porozum\u011Bt n\xE1v\u0161t\u011Bvnosti a analyzovat interakce na webu.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col md:flex-row justify-between items-start md:items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-2 mb-3 md:mb-0"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: "bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded",
    onClick: function onClick() {
      return handleConsent(true);
    }
  }, "P\u0159ijmout"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: "bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded",
    color: "red",
    variant: "tonal",
    onClick: function onClick() {
      return handleConsent(false);
    }
  }, "Odm\xEDtnout")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-default-500 mr-2"
  }, "Powered by"), /*#__PURE__*/_react["default"].createElement(_link["default"], {
    href: "https://www.brandoo.cz",
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "brandoo-logo",
    className: "w-[60px] md:w-[80px] mt-1",
    src: "https://www.brandoo.cz/brandoo-logo-light.svg"
  }))))));
};
var _default = exports["default"] = CookiesBar;