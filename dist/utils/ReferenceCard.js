"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _SmallProfile = _interopRequireDefault(require("./SmallProfile"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var ReferenceCard = function ReferenceCard(_ref) {
  var reference = _ref.reference;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rounded-xl shadow-xl p-5 w-full"
  }, /*#__PURE__*/_react["default"].createElement(_SmallProfile["default"], {
    avatar: reference.avatar,
    fallback: reference.author[0],
    icon: /*#__PURE__*/_react["default"].createElement("i", {
      className: "mdi ".concat(reference.icon, " text-sky-600")
    }),
    subtitle: reference.author,
    title: reference.company
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "mt-3 text-left"
  }, reference.text));
};
var _default = exports["default"] = ReferenceCard;