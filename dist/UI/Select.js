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
// Import framer-motion

var Select = function Select(_ref) {
  var options = _ref.options,
    label = _ref.label,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    helperText = _ref.helperText,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error,
    _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? "bordered" : _ref$variant,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#006fee" : _ref$color,
    _ref$inputSize = _ref.inputSize,
    inputSize = _ref$inputSize === void 0 ? "md" : _ref$inputSize,
    _ref$radius = _ref.radius,
    radius = _ref$radius === void 0 ? "md" : _ref$radius,
    className = _ref.className,
    style = _ref.style,
    placeholder = _ref.placeholder,
    onChange = _ref.onChange;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedValues = _useState2[0],
    setSelectedValues = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isOpen = _useState4[0],
    setIsOpen = _useState4[1];
  var dropdownRef = (0, _react.useRef)(null);

  // Toggle dropdown
  var toggleDropdown = function toggleDropdown() {
    return setIsOpen(function (prev) {
      return !prev;
    });
  };

  // Handle selection of an option
  var handleSelectOption = function handleSelectOption(value) {
    var updatedValues = [];
    if (multiple) {
      if (selectedValues.includes(value)) {
        updatedValues = selectedValues.filter(function (item) {
          return item !== value;
        });
      } else {
        updatedValues = [].concat(_toConsumableArray(selectedValues), [value]);
      }
      setSelectedValues(updatedValues);
      onChange && onChange(options.filter(function (opt) {
        return updatedValues.includes(opt.value);
      })); // Emitovat pole options
      setIsOpen(false);
    } else {
      updatedValues = [value];
      setSelectedValues(updatedValues);
      onChange && onChange(options.find(function (opt) {
        return opt.value === value;
      })); // Emitovat jednu option
      setIsOpen(true);
    }
  };
  var isSelected = function isSelected(value) {
    return selectedValues.includes(value);
  };
  var sizing = function sizing() {
    switch (inputSize) {
      case "xs":
        return "px-2 py-1 text-xs";
      case "sm":
        return "px-3 py-2 text-sm";
      case "md":
        return "px-4 py-2 text-md";
      case "lg":
        return "px-5 py-3 text-lg";
      case "xl":
        return "px-6 py-3 text-xl";
      default:
        return "";
    }
  };
  var variantStyles = function variantStyles() {
    switch (variant) {
      case "bordered":
        return "border-[1.35px] ".concat(error ? "border-red-500" : "border-gray-300", " focus:border-").concat(color, " focus:ring-").concat(color);
      case "underlined":
        return "border-b-[1.35px] rounded-none ".concat(error ? "border-red-500" : "border-gray-300", " focus:border-").concat(color, " focus:ring-").concat(color);
      case "filled":
        return "".concat(error ? "bg-red-50" : "bg-gray-100", " focus:bg-white border-none");
      default:
        return "";
    }
  };

  // Click outside logic
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Animace
  var dropdownVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative flex flex-col ".concat(className)
  }, label && /*#__PURE__*/_react["default"].createElement("label", {
    className: "mb-1 ml-2 text-sm font-semibold ".concat(error ? "text-red-500" : "text-gray-700")
  }, label), /*#__PURE__*/_react["default"].createElement("div", {
    ref: dropdownRef,
    className: "relative w-full cursor-pointer rounded-".concat(radius, " ").concat(variantStyles(), " ").concat(sizing()),
    style: style,
    onClick: toggleDropdown
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between pl-2 pr-2"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-".concat(error ? "red-500" : "gray-700")
  }, selectedValues.length > 0 ? selectedValues.map(function (val) {
    var _options$find;
    return (_options$find = options.find(function (opt) {
      return opt.value === val;
    })) === null || _options$find === void 0 ? void 0 : _options$find.label;
  }).join(", ") : placeholder), /*#__PURE__*/_react["default"].createElement("i", {
    className: "mdi mdi-chevron-".concat(isOpen ? "up" : "down", " text-").concat(error ? "red" : "gray", "-900")
  })), /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    animate: isOpen ? "open" : "closed",
    className: "absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md mt-[15px] overflow-hidden",
    initial: "closed",
    variants: dropdownVariants
  }, options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: option.value,
      className: "p-2 hover:bg-gray-200 cursor-pointer ".concat(isSelected(option.value) ? "bg-blue-100" : ""),
      onClick: function onClick() {
        return handleSelectOption(option.value);
      }
    }, option.label);
  }))), !error && helperText && /*#__PURE__*/_react["default"].createElement("span", {
    className: "mt-1 ml-2 text-xs text-gray-500"
  }, helperText));
};
var _default = exports["default"] = Select;