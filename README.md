# Placard.js

A dead simple interface for creating Google Maps with multiple points.

## Usage

Begin by including the Maps API and Placard JavaScript files:

```html
<script src="//maps.googleapis.com/maps/api/js?key=API_KEY"></script>
<script src="placard.js"></script>
```

Create an object containing the points you want to add to your map. The only
required properties are `lat` and `lng`. Use [latlng.me](http://latlng.me/) if
you need help.

```javascript
var locations = [
  {
    lat: 39.73703,
    lng: -104.97280
  },
  {
    lat: 39.76463,
    lng: -105.00401
  },
  {
    lat: 39.75046,
    lng: -104.99954
  },
  {
    lat: 39.74414,
    lng: -104.98984
  },
  {
    lat: 39.76112,
    lng: -104.98172
  }
];
```

Next, create a new map using `Placard.Map`:

```javascript
var map = new Placard.Map('canvas', {
  center: {
    lat: 39.73932,
    lng: -104.98480
  },
  zoom: 13
});
```

Finally, add your locations to the map:

```javascript
locations.forEach(function(location) {
  map.addPoint(location);
});
```

## API

### Placard.Map

#### Constructor

Creates a new instance of Placard.Map and returns itself.

```javascript
var map = new Placard.Map(el, config);
```

##### Parameters

Name   | Type                                           | Description
------ | ---------------------------------------------- | --------------------------------------
el     | String                                         | The ID of the HTML element for the map
config | [google.maps.MapOptions](http://goo.gl/Y7D6Wz) | The settings used to configure the map

#### addPoint

Adds a point to the map and returns the map.

```javascript
map.addPoint(point);
```

##### Parameters

Name  | Type   | Description
----- | ------ | ----------------------------------------------------
point | Object | An object containing both `lat` and `lng` properties

### Placard.Point

#### Constructor

Creates a new instance of Placard.Point and returns itself.

```javascript
var point = new Placard.Point(point);
```

##### Parameters

Name  | Type   | Description
----- | ------ | ----------------------------------------------------
point | Object | An object containing both `lat` and `lng` properties

#### addToMap

Adds the point to a map and returns the point.

```javascript
point.addToMap(map);
```

##### Parameters

Name | Type        | Description
---- | ----------- | -----------------------------------------
map  | Placard.Map | The map that the point should be added to
