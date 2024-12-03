"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Footer = function Footer(_ref) {
  var sections = _ref.sections,
    companyName = _ref.companyName;
  return /*#__PURE__*/_react["default"].createElement("footer", {
    className: "bg-stone-800 text-white py-8 mt-16"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto px-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
  }, sections.map(function (section, sectionIndex) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: sectionIndex
    }, /*#__PURE__*/_react["default"].createElement("h2", {
      className: "text-xl font-bold mb-4"
    }, section.title), /*#__PURE__*/_react["default"].createElement("ul", {
      className: "".concat(section.orientation === "vertical" ? "flex-col" : "flex gap-3")
    }, section.sections.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement("li", {
        key: index,
        className: "mb-2 flex items-center gap-2"
      }, item.href ? /*#__PURE__*/_react["default"].createElement("a", {
        className: "hover:underline text-default-200",
        href: item.href,
        rel: "noopener noreferrer",
        target: "_blank"
      }, item.value || item.key) : /*#__PURE__*/_react["default"].createElement("button", {
        className: "text-default-200",
        onClick: item.fn
      }, /*#__PURE__*/_react["default"].createElement("b", null, item.key, item.key && item.value && ": "), " ", item.value), item.icon);
    })));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border-t border-gray-700 mt-8 pt-4 text-center"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "\xA9 ", new Date().getFullYear(), " ", companyName, ". V\u0161echna pr\xE1va vyhrazena."))));
};
var _default = exports["default"] = Footer;