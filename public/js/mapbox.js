export const displayMap = (locations) => {
  mapboxgl.accessToken =
  'pk.eyJ1IjoiY2FydG1hbjc4IiwiYSI6ImNrZXk3azlrczB3dWEydW40OGRoN2Fld2cifQ.JHTSovo9HSXSPUSdHzkZ2g';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/cartman78/ckeya6anv0wa919oybqxq9r07',
    scrollZoom: false
    // center: [-6.245682, 53.698018],
    // zoom: 10
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add maker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    }).setLngLat(loc.coordinates)
      .addTo(map);

      // Add Popup
    new mapboxgl.Popup({
      offset: 30
    })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

     // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds,  {
    padding: {
      top: 200,
      bottom: 150,
      left: 200,
      right: 100
    }
  });

};
