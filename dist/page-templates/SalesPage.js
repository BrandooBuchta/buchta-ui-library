"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SalesPage = function SalesPage(_ref) {
  var _ref$flow = _ref.flow,
    flow = _ref$flow === void 0 ? "row" : _ref$flow,
    header = _ref.header,
    title = _ref.title,
    subTitle = _ref.subTitle,
    landingButtons = _ref.landingButtons,
    videoButtons = _ref.videoButtons,
    storyButtons = _ref.storyButtons,
    referenceButtons = _ref.referenceButtons,
    content = _ref.content,
    story = _ref.story,
    warningBar = _ref.warningBar,
    references = _ref.references,
    promise = _ref.promise,
    guarantee = _ref.guarantee,
    actionButtons = _ref.actionButtons,
    footer = _ref.footer,
    fomo = _ref.fomo,
    callToAction = _ref.callToAction,
    shouldBeHeaderInContainer = _ref.shouldBeHeaderInContainer;
  return /*#__PURE__*/_react["default"].createElement("div", null, warningBar, !shouldBeHeaderInContainer && header, /*#__PURE__*/_react["default"].createElement("div", {
    className: "container mx-auto p-8"
  }, shouldBeHeaderInContainer && header, flow === "col" ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center"
  }, title, subTitle, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-2 justify-center"
  }, landingButtons), /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-16 flex justify-center flex-col items-center gap-5"
  }, content, videoButtons)) : /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex my-20"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-1/2 gap-3 flex flex-col p-3"
  }, title, subTitle, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-2 justify-center"
  }, landingButtons)), content), /*#__PURE__*/_react["default"].createElement("div", null, story), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center gap-2"
  }, storyButtons), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5"
  }, references), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center"
  }, referenceButtons), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center my-16 gap-3"
  }, promise, guarantee), /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-10"
  }, fomo), callToAction, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-center gap-2"
  }, actionButtons)), footer);
};
var _default = exports["default"] = SalesPage;