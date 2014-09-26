(function(window, google) {
  'use strict';

  var Placard = {};

  Placard.Map = function(el, config) {
    this.el = el;
    this.config = config;
    this._map = this._createMap();
  };

  Placard.Map.prototype._createMap = function() {
    return new google.maps.Map(document.getElementById(this.el), this.config);
  };

  Placard.Map.prototype.addPoint = function(point) {
    var newPoint = new Placard.Point(point, this);
    newPoint.addToMap(this);

    return this;
  };

  Placard.Point = function(point) {
    this.lat = point.lat;
    this.lng = point.lng;
  };

  Placard.Point.prototype.addToMap = function(map) {
    new google.maps.Marker({
      position: new google.maps.LatLng(this.lat, this.lng),
      map: map._map
    });

    return this;
  };

  window.Placard = Placard;
})(window, google);
