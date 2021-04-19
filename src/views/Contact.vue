<template>
    <section class="contact hero-image" id="contact">
        <div class="image-overlay">
            <div class="section-heading">
                <h1>Contact</h1>
                <h6>Let's work together!</h6>
            </div>

            <div class="map-view">
                <mapbox-gl-map
                    id="map"
                    :options="getMapOptions()"
                    zoom-control
                    @load="onMapLoad"
                    @error="onMapError"
                    @moveend="onMapMoveend"
                />
            </div>

            <div class="contact-form">
                <!-- name field -->
                <b-field
                    class="user-input-wrapper"
                >
                    <b-input
                        class="user-name"
                        v-model="templateParams.name"
                        :lazy="true"
                        placeholder="Name"
                    />
                </b-field>

                <!-- email field -->
                <b-field
                    class="user-input-wrapper"
                >
                    <b-input
                        class="user-email"
                        v-model="templateParams.email"
                        :lazy="true"
                        type="email"
                        placeholder="Email address"
                        
                    />
                </b-field>

                <!-- message field -->
                <b-field
                    class="user-input-wrapper"
                >
                    <b-input
                        class="user-message"
                        v-model="templateParams.message"
                        :lazy="true"
                        type="textarea"
                        placeholder="Message"
                    />
                </b-field>

                <!-- submit button -->
                <div class="has-text-centered">
                    <b-button
                        class="submit-button is-primary is-size-5"
                        :loading="sending"
                        @click="submit"
                    >
                        Submit
                    </b-button>
                </div>
            </div>
        </div>
        <footer 
            v-if="isHome"
            class="copyright"
        >
            <div class="back-top" id="back-top" @click="scrollTop">
                <b-icon
                    icon="chevron-up"
                    size="is-large"
                    class="back-top-icon"
                />
            </div>
            <p class="has-text-weight-semibold">
                Copyright &copy; 2021 Shawn Wang's Portfolio
            </p>
        </footer>
    </section>
</template>

<script>
import emailjs from 'emailjs-com';

import MapboxGlMap from '@/components/Contact/MapboxGLMap.vue';
import saveMapBounds from '@/components/Contact/saveMapBounds.js';
import CustomMarker from '@/assets/logo.png';

export default {
    name: 'Contact',

    components: {
        MapboxGlMap,
    },

    mixins: [
        saveMapBounds,
    ],

    props: {
        isHome: {
            type: Boolean,
            required: false,
            default: false,
        }
    },

    data: () => ({
        // contact map 
        map: null,

        // contact form 
        sending: false,
        templateParams: {
            name: null,
            email: null,
            message: null,
        },
    }),

    methods: {
        /**
         * Builds and returns a mapbox gl map config object
         *
         * @returns {object} - Mapbox GL map options
         */
        getMapOptions() {
            const mapOptions = {
                style: 'mapbox://styles/shawnlcwang/cknigw5vl0i4e17o7kb6gjig2',
                bounds: [[-90, 50], [-70, 40]], // bounds for Toronto
                fitBoundsOptions: {
                    padding: 35,
                },
            };

            // load saved map view
            const savedBounds = this.loadMapBounds();
            if (savedBounds !== null) {
                // bounds will override center/zoom
                mapOptions.bounds = savedBounds;
            }

            return mapOptions;
        },

        /**
         * Add interaction handlers when the map loads
         *
         * @param {MapDataEvent} ev - MapboxDataEvent which was fired
         * @param {mapboxgl.Map} map - Mapbox GL map object
         */
        onMapLoad(ev, map) {
            this.map = map;
            map.loadImage( 
                CustomMarker, 
                (error, image) => {
                    if (error) throw error;
                    map.addImage('custom-marker', image);

                    map.addSource('point-of-interest', {
                        type: 'geojson',
                        data: {
                            type: 'FeatureCollection',
                            features: [
                                {
                                    // coordinates for Toronto
                                    type: 'Feature',
                                    geometry: {
                                        type: 'Point',  
                                        coordinates: [
                                            -79.4163,
                                            43.70011
                                        ]
                                    },
                                },
                            ]
                        },
                    });

                    map.addLayer({
                        id: 'point-of-interest',
                        type: 'symbol',
                        source: 'point-of-interest',
                        layout: {
                            'icon-image': 'custom-marker',
                        }
                    });
                }
            );
        },

        /**
         * Handle map `moveend` events
         *
         * @param {Event}  ev   mapbox-gl moveend event
         * @param {MapboxGLMap} map  mapbox-gl map object
         */
        onMapMoveend(ev, map) {
            // persist map view
            this.saveMapBounds(map);
        },

        /**
         * Pass Mapbox GL errors to global error handler to display a message
         *
         * @param {Event} errorEvent - Mapbox GL error event
         */
        onMapError(errorEvent) {
            this.snackbar('There was a problem loading the map.<br>Please try again in a moment.', 'is-danger');
        },

        /**
         * submit form data to serverless emailer function
         */ 
        async submit() {
            this.sending = true;
            emailjs.send('gmail_shawnlcwang','template_shawnlcwang', this.templateParams, 'user_OLldNum1diAWLP3TYhUXt')
                .then((response) => {
                    // console.log('SUCCESS!', response.status, response.text);
                    this.snackbar('Email sent, thank you!', 'is-success');
                })
                .catch(() => {
                    this.snackbar('Problem sending email, please refresh and try again.', 'is-danger');
                })
                .finally(() => {
                    this.sending = false;
                });
        },

        /**
         * display toast message to the user
         * @param {String} message - text that will be displayed to the user
         * @param {String} type - buefy type string (is-success, is-danger, is-warning, is-info, etc.)
         */
        snackbar(message, type = 'is-success') {
            this.$buefy.snackbar.open({
                duration: 5000,
                message,
                type,
            });
        },

        /**
         * scroll to top coordinates of the document
         */ 
        scrollTop() {
            window
                .scrollTo({
                    top: 0,
                    left: 0, 
                    behavior: 'smooth',
                });
        }
    },
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/appStyles.scss";

section.contact.hero-image {
    background-image: url('~@/assets/backgrounds/contact.jpg');

    .map-view {
        position: relative;
        display: grid;
        grid-template-rows: 40vh;
        grid-template-columns: auto;
        margin: 2rem auto;
    }

    .copyright {
        position: absolute;
        bottom: 0.5rem;
        width: 90%;
        font-size: 0.8rem;
        text-align: center;

        .back-top {
            cursor: pointer;
            position: absolute;
            width: 3rem;
            height: 3rem;
            background-color: #EEEEEE;
            top: -4rem;
            right: 40%;
            border-radius: 100%;
            display: flex;
            animation: pulse 2s infinite;

            .back-top-icon {
                color: #2f383a;
                margin: auto;
            }

            @keyframes pulse{
                0%{
                    box-shadow: 0 0 0 0 rgba(38, 161, 157, 0.99);
                }
                70%{
                    box-shadow: 0 0 0 2rem rgba(144, 12, 63, 0);
                }
                100%{
                    box-shadow: 0 0 0 0 rgba(144, 12, 63, 0);
                }
            }   
        }
    }

    @include tablet {
        .copyright {
            font-size: 1.2rem;

            .back-top {
                width: 5rem;
                height: 5rem;
                top: -4rem;
                right: 1rem;
            }
        }
    }
}
</style>
