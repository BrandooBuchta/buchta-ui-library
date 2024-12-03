"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
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
var customForm = /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("input", {
  required: true,
  className: "w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500",
  placeholder: "V\xE1\u0161 E-Mail",
  type: "email"
}), /*#__PURE__*/_react["default"].createElement("button", {
  className: "mt-4 w-full bg-pink-500 text-white rounded-md py-2 hover:bg-pink-600 focus:ring-4 focus:ring-pink-500",
  type: "submit"
}, "Odeslat"));
var LeadCapturePage = function LeadCapturePage(_ref) {
  var _ref$flow = _ref.flow,
    flow = _ref$flow === void 0 ? "row" : _ref$flow,
    header = _ref.header,
    title = _ref.title,
    subTitle = _ref.subTitle,
    callToActionPreTitle = _ref.callToActionPreTitle,
    callToActionTitle = _ref.callToActionTitle,
    callToActionSubTitle = _ref.callToActionSubTitle,
    content = _ref.content,
    warningBar = _ref.warningBar,
    references = _ref.references,
    actionButtons = _ref.actionButtons,
    footer = _ref.footer,
    callToAction = _ref.callToAction,
    shouldBeHeaderInContainer = _ref.shouldBeHeaderInContainer;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    email = _useState2[0],
    setEmail = _useState2[1];
  var onSubmit = function onSubmit() {
    // Logic for submitting email, e.g., API call
    console.log("Email submitted: ", email);
  };
  return /*#__PURE__*/_react["default"].createElement("div", null, warningBar, !shouldBeHeaderInContainer && header, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto p-8"
  }, shouldBeHeaderInContainer && header, flow === "col" ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center"
  }, title, subTitle, callToAction, /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-16 flex justify-center flex-col items-center gap-5"
  }, content)) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex my-20"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-1/2 gap-3 flex flex-col p-3"
  }, title, subTitle, callToAction), content), /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    className: "flex flex-col justify-center items-center my-10 p-5 shadow-xl sm:rounded-full rounded-2xl bg-neutral-50"
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, callToActionPreTitle, callToActionTitle, callToActionSubTitle, actionButtons)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
  }, references)), footer);
};
var _default = exports["default"] = LeadCapturePage;