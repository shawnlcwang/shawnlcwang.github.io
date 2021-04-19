import debounce from 'lodash.debounce';

/**
* functions for saving and restoring map view in sessionStorage
*/
export default {
    methods: {
        /**
        * save map view to sessionStorage to persist between sessions
        * debounced 750ms
        * @param {MapboxGLMap} map  mapbox-gl map object
         */
        // eslint-disable-next-line prefer-arrow-callback
        saveMapBounds: debounce(async function saveMapBoundsImmediate(map) {
            // save LngLatBounds array as a JSON string
            let mapBounds = map.getBounds().toArray();
            mapBounds = JSON.stringify(mapBounds);
            window.sessionStorage.setItem('mapBounds', mapBounds);
        }, 750),

        /**
         * return saved map view from sessionStorage, or null if none exists
         * @return {Array|null} saved map bounds, or null
         */
        loadMapBounds() {
            const mapBounds = window.sessionStorage.getItem('mapBounds');
            if (mapBounds === null) return null;

            return JSON.parse(mapBounds);
        },
    },
};
