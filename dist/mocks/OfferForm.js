"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TextInput = _interopRequireDefault(require("@/components/UI/TextInput"));
var _Button = _interopRequireDefault(require("@/components/UI/Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OfferForm = function OfferForm() {
  var _useState = (0, _react.useState)({
      email: "",
      jmenoAPrijmeni: "",
      telefonniCislo: "",
      sluzby: [],
      privacyPolicy: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    options = _useState4[0],
    setOptions = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    errors = _useState6[0],
    setErrors = _useState6[1];

  // Fetching available service options (mocked)
  (0, _react.useEffect)(function () {
    var fetchedOptions = [{
      label: "Služba 1",
      value: "service1"
    }, {
      label: "Služba 2",
      value: "service2"
    }];
    setOptions(fetchedOptions);
  }, []);

  // Handle input changes
  var handleChange = function handleChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value,
      type = _e$target.type,
      checked = _e$target.checked;
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, type === "checkbox" ? checked : value));
    });
  };

  // Handle multiple select changes
  var handleSelectChange = function handleSelectChange(selectedOptions) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        sluzby: selectedOptions // Update selected services
      });
    });
  };

  // Validation logic
  var validate = function validate() {
    var newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.jmenoAPrijmeni) newErrors.jmenoAPrijmeni = "Name is required";
    if (!formData.telefonniCislo) newErrors.telefonniCislo = "Phone number is required";
    if (formData.sluzby.length === 0) newErrors.sluzby = "Please select at least one service";
    if (!formData.privacyPolicy) newErrors.privacyPolicy = "You must agree to the terms";
    return newErrors;
  };

  // Handle form submission
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
    } else {
      setErrors(validationErrors);
    }
  };
  return /*#__PURE__*/_react["default"].createElement("form", {
    className: "flex flex-col gap-4 w-1/2 mx-auto",
    onSubmit: handleSubmit
  }, /*#__PURE__*/_react["default"].createElement(_TextInput["default"], {
    color: "#006fee",
    error: !!errors.email,
    helperText: errors.email,
    inputSize: "md",
    label: "Email",
    name: "email",
    radius: "md",
    value: formData.email,
    variant: "bordered",
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement(_TextInput["default"], {
    color: "#006fee",
    error: !!errors.jmenoAPrijmeni,
    helperText: errors.jmenoAPrijmeni,
    inputSize: "md",
    label: "Jm\xE9no a p\u0159\xEDjmen\xED",
    name: "jmenoAPrijmeni",
    radius: "md",
    value: formData.jmenoAPrijmeni,
    variant: "bordered",
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement(_TextInput["default"], {
    color: "#006fee",
    error: !!errors.telefonniCislo,
    helperText: errors.telefonniCislo,
    inputSize: "md",
    label: "Telefonn\xED \u010D\xEDslo",
    name: "telefonniCislo",
    radius: "md",
    value: formData.telefonniCislo,
    variant: "bordered",
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("label", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    checked: formData.privacyPolicy,
    className: "border border-gray-300 p-2 rounded",
    name: "privacyPolicy",
    type: "checkbox",
    onChange: handleChange
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Souhlas\xEDm se zpracov\xE1n\xEDm osobn\xEDch \xFAdaj\u016F")), errors.privacyPolicy && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-red-500"
  }, errors.privacyPolicy), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "#ff4081",
    radius: "lg",
    size: "md",
    variant: "solid"
  }, "Zajist\u011Bte si svoji exkluzivn\xED nab\xEDdku"));
};
var _default = exports["default"] = OfferForm;