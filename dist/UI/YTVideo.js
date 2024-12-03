"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var YTVideo = function YTVideo(_ref) {
  var src = _ref.src;
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full w-[320px] sm:w-[480px] md:w-[480px] lg:w-[500px] xl:w-[600px] 2xl:w-[800px] aspect-video shadow-xl rounded-lg mt-8"
  }, /*#__PURE__*/React.createElement("iframe", {
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;",
    className: "w-full h-full shadow-xl rounded-lg",
    id: "youtube-player",
    referrerPolicy: "strict-origin-when-cross-origin",
    src: src,
    title: "YouTube video player"
  }));
};
var _default = exports["default"] = YTVideo;