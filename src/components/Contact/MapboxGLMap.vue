<template lang="html">
    <div
        :id="id"
        class="mapbox-gl-map"
    />
</template>

<script>
import mapboxgl from 'mapbox-gl';

import swLogo from '@/assets/logo.png';

export default {
    name: 'MapboxGlMap',

    props: {
        id: {
            type: String,
            default: 'map',
        },

        options: {
            type: Object,
            required: true,
        },

        accessToken: {
            type: String,
            default: 'pk.eyJ1Ijoic2hhd25sY3dhbmciLCJhIjoiY2tuaWUxNnlnMDNueTJvbnY4NWMxZXcxYyJ9.nUkv5RvXi74qcAsBmhvWYQ',
        },

        zoomControl: {
            type: Boolean,
            default: false,
        },

        dragRotate: {
            type: Boolean,
            default: false,
        },

        styleToggle: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            map: null,
        };
    },

    mounted() {
        // initialize MapboxGL map with the given options sent through the prop
        mapboxgl.accessToken = this.accessToken;
        this.map = new mapboxgl.Map({
            container: this.id,
            attributionControl: false,
            minZoom: 0,
            maxZoom: 20,
            ...this.options,
        });

        // add custom attribution control
        this.map.addControl(new mapboxgl.AttributionControl({
            customAttribution: `<a target="_blank" href="https://www.shawnlcwang.com/">
                www.shawnlcwang.com <img style="margin: -3px 0 -3px 2px; width: 15px;" src="${swLogo}">
            </a>`,
        }));

        // add zoom control
        if (this.zoomControl) {
            const options = {
                // hide the compass button if dragRotate is disabled
                showCompass: this.dragRotate,
            };
            this.map.addControl(new mapboxgl.NavigationControl(options), 'bottom-right');
        }

        // disable dragRotate interaction handler
        if (!this.dragRotate) {
            this.map.dragRotate.disable();
            this.map.touchZoomRotate.disableRotation();
        }

        // emit "load" when all downloads are done and the first map render is done
        // (fires once during map lifecycle)
        this.map.on('load', (ev) => this.emitEvent('load', ev));

        // handle error events
        this.map.on('error', (ev) => this.emitEvent('error', ev));

        // emit "idle" when tile loading, animations, and movement are all finished
        // (fires many times during map lifecycle)
        this.map.on('idle', (ev) => this.emitEvent('idle', ev));

        // emit movement and zoom events
        this.map.on('move', (ev) => this.emitEvent('move', ev));
        this.map.on('moveend', (ev) => this.emitEvent('moveend', ev));
        this.map.on('zoom', (ev) => this.emitEvent('zoom', ev));
        this.map.on('zoomend', (ev) => this.emitEvent('zoomend', ev));

        // emit "click" on any map click
        this.map.on('click', (ev) => this.emitEvent('click', ev));

        // emit "render" events
        this.map.on('render', (ev) => this.emitEvent('render', ev));

        // emit "data" on map data event
        this.map.on('data', (ev) => this.emitEvent('data', ev));

        // emit "styledata" on map styledata events
        // this can be used when the style changes
        this.map.on('styledata', (ev) => this.emitEvent('styledata', ev));
    },

    beforeDestroy() {
        if (this.map) {
            // run mapbox method to clean up and release all of the map's resources. Most importantly, this releases
            // the map's webgl context. Most browsers can only render up to 16 webgl contexts, before the first one
            // will be removed.
            this.map.remove();
        }
    },

    methods: {
        /**
         * re-emit mapbox-gl events as vue events
         * including the event and the map object
         * @param  {String}         name event name
         * @param  {mapboxgl.Event} ev   mapbox-gl event object
         */
        emitEvent(name, ev) {
            this.$emit(name, ev, this.map);
        },
    },
};
</script>

<style lang="scss">
// import mapbox gl styles
@import "~mapbox-gl/dist/mapbox-gl.css";

.mapbox-gl-map {
    // default sizing
    width: 100%;
    height: 100%;
}
</style>
