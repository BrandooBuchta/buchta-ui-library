"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SmallProfile = function SmallProfile(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    avatar = _ref.avatar,
    fallback = _ref.fallback,
    icon = _ref.icon;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "h-fit w-fit rounded-full p-1"
  }, typeof avatar === "string" ? /*#__PURE__*/_react["default"].createElement("img", {
    alt: fallback,
    className: "bg-white rounded-full w-[50px] h-[50px] shadow-md",
    src: avatar
  }) : avatar), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col ml-3"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-lg font-bold"
  }, title, " ", icon), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-neutral-600 text-sm"
  }, subtitle)));
};
var _default = exports["default"] = SmallProfile;