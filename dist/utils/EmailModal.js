"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var EmailModal = function EmailModal() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    email = _useState4[0],
    setEmail = _useState4[1];
  var onSubmit = function onSubmit() {
    // Logic for submitting email, e.g., API call
    console.log("Email submitted: ", email);
    setIsOpen(false); // Close the modal after submission
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-pink-500 text-white rounded-full px-6 py-2 mt-4",
    onClick: function onClick() {
      return setIsOpen(true);
    }
  }, "Otev\u0159\xEDt Email Modal"), isOpen && /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 flex items-center justify-center z-50"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "absolute inset-0 bg-black opacity-50",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-white rounded-lg p-6 w-full max-w-4xl z-10"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "absolute top-2 right-2 text-gray-600 hover:text-gray-900",
    onClick: function onClick() {
      return setIsOpen(false);
    }
  }, "\u2715"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
    alt: "Uk\xE1zka Brandoo",
    className: "w-64",
    src: "/brandoo-preview.webp"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col text-left"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-2xl font-bold text-black mt-4"
  }, "Bu\u010Fte u toho jako prvn\xED!"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-xl text-gray-700 mt-2"
  }, "Zadejte va\u0161\xED skute\u010Dnou emailovou adresu a my se v\xE1m na n\xED ozveme jako prvn\xEDmu a\u017E Brandoo bude p\u0159ipraven\xE9!"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col w-full mt-6"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    className: "border-2 border-gray-300 rounded-full px-4 py-2 w-full",
    placeholder: "V\xE1\u0161 E-Mail",
    type: "email",
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return setEmail(value);
    }
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "bg-pink-500 text-white rounded-full px-6 py-2 mt-4",
    onClick: onSubmit
  }, "Chci u toho b\xFDt jako prvn\xED!"))))));
};
var _default = exports["default"] = EmailModal;