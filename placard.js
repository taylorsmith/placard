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
    this.info = point.info;
    this.window = this._createWindow();
  };

  Placard.Point.prototype.addToMap = function(map) {
    var self = this;

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(this.lat, this.lng),
      map: map._map
    });

    if (this.info) {
      google.maps.event.addListener(marker, 'click', function() {
        self.window._infoWindow.open(map._map, marker);
      });
    }

    return this;
  };

  Placard.Point.prototype._createWindow = function() {
    if (this.info) {
      return new Placard.Window(this.info);
    }
  };

  Placard.Window = function(info) {
    this.title = info.title;
    this.text = info.text;
    this._infoWindow = this.createInfoWindow();
  };

  Placard.Window.prototype.createInfoWindow = function() {
    return new google.maps.InfoWindow({
      content: '<div id="content">' +
                 '<h1>' + this.title  + '</h1>' +
                 '<p>' + this.text + '</p>' +
               '</div>'
    });
  };

  window.Placard = Placard;
})(window, google);
