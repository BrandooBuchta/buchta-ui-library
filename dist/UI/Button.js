"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _framerMotion = require("framer-motion");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Button = function Button(_ref) {
  var children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "md" : _ref$size,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "shadow" : _ref$variant,
    onClick = _ref.onClick,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "primary" : _ref$color,
    _ref$radius = _ref.radius,
    radius = _ref$radius === void 0 ? "lg" : _ref$radius,
    className = _ref.className,
    endContent = _ref.endContent,
    startContent = _ref.startContent,
    customStyle = _ref.style,
    ariaLabel = _ref["aria-label"],
    _ref$isIconOnly = _ref.isIconOnly,
    isIconOnly = _ref$isIconOnly === void 0 ? false : _ref$isIconOnly,
    _ref$isDisabled = _ref.isDisabled,
    isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    rippleArray = _useState2[0],
    setRippleArray = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isHovered = _useState4[0],
    setIsHovered = _useState4[1];
  var buttonRef = (0, _react.useRef)(null);
  var resolveColor = function resolveColor() {
    switch (color) {
      case "primary":
        return "bg-primary text-white hover:bg-primary-dark";
      case "secondary":
        return "bg-secondary text-white hover:bg-secondary-dark";
      default:
        return "text-white hover:opacity-[0.9]";
    }
  };
  var variantStyles = (0, _react.useMemo)(function () {
    var resolvedColorClass = resolveColor();
    switch (variant) {
      case "shadow":
        return {
          className: "shadow-2xl hover:shadow-lg ".concat(resolvedColorClass)
        };
      case "solid":
        return {
          className: "hover:opacity-[0.9] ".concat(resolvedColorClass)
        };
      case "bordered":
        return {
          className: "border-2 font-semibold hover:bg-opacity-[0.1] ".concat(resolvedColorClass)
        };
      case "text":
        return {
          className: "hover:bg-opacity-[0.1] ".concat(resolvedColorClass)
        };
      case "tonal":
        return {
          className: "bg-opacity-[0.5] ".concat(resolvedColorClass)
        };
      default:
        return {
          className: ""
        };
    }
  }, [variant, color]);
  var buttonStyles = (0, _react.useMemo)(function () {
    if (isIconOnly) {
      return {
        className: "w-[40px] h-[40px] flex items-center justify-center"
      };
    }
    switch (size) {
      case "xs":
        return {
          className: "px-[15px] py-[7.5px] text-xs h-fit"
        };
      case "sm":
        return {
          className: "px-[20px] py-[8px] text-sm h-fit"
        };
      case "md":
        return {
          className: "px-[25px] py-[8px] text-md h-fit"
        };
      case "lg":
        return {
          className: "px-[25px] py-[8px] text-lg h-fit"
        };
      case "xl":
        return {
          className: "px-[25px] py-[10px] text-xl h-fit"
        };
      default:
        return {
          className: ""
        };
    }
  }, [size, isIconOnly]);
  var createRipple = function createRipple(event) {
    var button = event.currentTarget;
    var rect = button.getBoundingClientRect();
    var size = Math.max(button.clientWidth, button.clientHeight);
    var x = event.clientX - rect.left - size / 2;
    var y = event.clientY - rect.top - size / 2;
    var newRipple = {
      x: x,
      y: y,
      size: size
    };
    setRippleArray(function (prev) {
      return [].concat(_toConsumableArray(prev), [newRipple]);
    });
    setTimeout(function () {
      setRippleArray(function (prev) {
        return prev.slice(1);
      });
    }, 500);
  };
  var handleClick = function handleClick(event) {
    createRipple(event);
    if (onClick) onClick(event);
  };
  return /*#__PURE__*/_react["default"].createElement("button", {
    ref: buttonRef,
    "aria-label": ariaLabel || "Button",
    className: "\n        font-semibold\n        ".concat(className, "\n        ").concat(variantStyles.className, "\n        ").concat(buttonStyles.className, "\n        rounded-").concat(radius, "\n        relative\n        transition-all\n        overflow-hidden\n      "),
    disabled: isDisabled,
    style: _objectSpread({}, customStyle),
    onClick: handleClick,
    onMouseEnter: function onMouseEnter() {
      return setIsHovered(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setIsHovered(false);
    }
  }, rippleArray.map(function (ripple, index) {
    return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
      key: index,
      animate: {
        opacity: 0,
        scale: 2
      },
      className: "absolute bg-white opacity-50 rounded-full",
      initial: {
        top: ripple.y,
        left: ripple.x,
        width: ripple.size,
        height: ripple.size,
        opacity: 0.6,
        scale: 0
      },
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    });
  }), isIconOnly ? children : /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-2"
  }, [startContent, children, endContent]));
};
var _default = exports["default"] = Button;