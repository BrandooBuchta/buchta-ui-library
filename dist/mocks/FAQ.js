"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Accordion = _interopRequireDefault(require("../UI/Accordion"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var FAQ = function FAQ() {
  var faqItems = [{
    title: "What is your return policy?",
    content: "You can return any item within 30 days."
  }, {
    title: "How do I track my order?",
    content: "Tracking is available in your account."
  }, {
    title: "Can I purchase items offline?",
    content: "Currently, we operate online only."
  }];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto p-4"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-2xl font-bold mb-6"
  }, "Frequently Asked Questions"), /*#__PURE__*/_react["default"].createElement(_Accordion["default"], {
    items: faqItems
  }));
};
var _default = exports["default"] = FAQ;