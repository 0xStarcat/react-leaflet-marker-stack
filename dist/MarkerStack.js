'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkerStack = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _leaflet = require('leaflet');

var _leaflet2 = _interopRequireDefault(_leaflet);

var _reactLeaflet = require('react-leaflet');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./lib/L.Icon.Chip.js');

var _LMarker = require('./lib/L.Marker.Stack');

var _LMarker2 = _interopRequireDefault(_LMarker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Converts leaflet-marker-stack to a React Component
var MarkerStack = exports.MarkerStack = function (_Marker) {
  _inherits(MarkerStack, _Marker);

  function MarkerStack() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MarkerStack);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MarkerStack.__proto__ || Object.getPrototypeOf(MarkerStack)).call.apply(_ref, [this].concat(args))), _this), _this.addMarkerStack = function () {
      _this.marker.addMarkerStack();
    }, _this.removeMarkerStack = function () {
      _this.marker.removeMarkerStack();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MarkerStack, [{
    key: 'createLeafletElement',
    value: function createLeafletElement(props) {
      var position = props.position,
          otherProps = _objectWithoutProperties(props, ['position']);

      var map = this.context.map;


      var icons = props.icons.map(function (icon) {
        return _leaflet2.default.icon.chip(icon); // Extended L.DivIcon from ./lib/L.Icon.Chip
      });

      this.marker = new _leaflet2.default.Marker.Stack(position, _extends({}, otherProps, {
        icons: icons
      })).addTo(map);

      return this.marker;
    }
  }, {
    key: 'updateLeafletElement',
    value: function updateLeafletElement(fromProps, toProps) {
      var map = this.context.map;


      this.marker.removeFrom(map); // Resets
      this.createLeafletElement(toProps); // To redraw MarkerStack
    }
  }]);

  return MarkerStack;
}(_reactLeaflet.Marker);

MarkerStack.propTypes = {
  position: _propTypes2.default.object,
  icons: _propTypes2.default.array
};

exports.default = MarkerStack;