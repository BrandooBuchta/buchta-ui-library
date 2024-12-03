"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _jsCookie = _interopRequireDefault(require("js-cookie"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ExitPopup = function ExitPopup(_ref) {
  var title = _ref.title,
    subTitle = _ref.subTitle,
    image = _ref.image,
    form = _ref.form;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  var popupRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var hasSeenPopup = _jsCookie["default"].get("hasSeenPopup");
    if (!hasSeenPopup) {
      var handleExitIntent = function handleExitIntent(event) {
        if (event.clientY < 5) {
          setIsVisible(true);
          _jsCookie["default"].set("hasSeenPopup", "true", {
            expires: 7
          });
        }
      };
      document.addEventListener("mousemove", handleExitIntent);
      return function () {
        document.removeEventListener("mousemove", handleExitIntent);
      };
    }
  }, []);

  // Handle clicking outside of the popup
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);
  if (!isVisible) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: popupRef,
    className: "bg-white rounded-3xl shadow-2xl max-w-4xl mx-auto flex relative"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700",
    onClick: function onClick() {
      return setIsVisible(false);
    }
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    className: "w-6 h-6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 18L18 6M6 6l12 12",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-2/3 p-8"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-3xl font-extrabold text-center mb-4 text-gray-800"
  }, title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-lg text-center mb-6 text-gray-600"
  }, subTitle), form), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-1/3 rounded-r-3xl bg-cover bg-center",
    style: {
      backgroundImage: "url(".concat(image, ")")
    }
  })));
};
var _default = exports["default"] = ExitPopup;