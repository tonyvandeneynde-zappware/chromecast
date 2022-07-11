function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import clpp from 'clpp'
var instance;

var CastlabsPlayer = /*#__PURE__*/_createClass(function CastlabsPlayer() {
  var _this = this;

  _classCallCheck(this, CastlabsPlayer);

  _defineProperty(this, "init", function () {
    console.log('constructor CLPP:');
    _this.player = new clpp.Player('castPlayer', {
      license: '<your_license_key>'
    });
    console.log('player:', _this.player);
    clpp.cast.Receiver.getInstance().init(_this.player);
    clpp.cast.Receiver.getInstance().start();
  });

  this.init();

  if (!instance) {
    instance = this;
  }

  return instance; // singleton
});

export default new CastlabsPlayer();