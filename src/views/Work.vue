<template>
    <section class="work hero-image" id="work">
        <div class="image-overlay">
            <div class="section-heading">
                <h1>Experience</h1>
                <h6>My past and current jobs</h6>
            </div>
            <div class="work-content">
                <ul class="timeline">
                    <li class="date" data-date="05/2020 - Present">
                        <div class="work-header">
                            <img
                                src="@/assets/logos/foundry-spatial-logo.svg"
                                alt="Foundry Spatial logo"
                                aria-hidden="true"
                                class="work-logo is-hidden-mobile"
                            >
                            <div class="work-title">
                                <h1 class="has-text-weight-semibold">Foundry Spatial Ltd.</h1>
                                <h6 class="has-text-weight-bold is-italic"> Full Stack Web Developer</h6>
                            </div>
                        </div>
                        <p>
                            <ul class="work-details">
                                <li>Developed and maintained flagship ‘BC Water Tools’ that are deployed across 1.5 million km² of Western Canada to provide web map-based solutions in terms of environmental data acquisition, analytics and reporting for water management.</li>
                                <li>Collaborated in other geospatial solutions such as Environment Canada ‘EOLakeWatch’ to build algal bloom monitoring tools for major Canadian lakes.</li>
                                <li>Construct pilot project database through data collection and implementation of ETL pipeline using UNIX, GDAL, QGIS, Mapbox Studio, PostgreSQL and PostGIS.</li>
                                <li>Design and develop Restful API web applications through JavaScript frontend and backend frameworks and libraries including Node.js, Vue.js, HTML, CSS/SCSS, Bulma.js, D3.js, Vega.js, Mapbox.js, Leaflet.js and PostgreSQL.</li>
                            </ul>
                        </p>
                    </li>
                    <li class="date" data-date="09/2017 - 08/2018">
                        <div class="work-header">
                            <img
                                src="@/assets/logos/hydro-one-logo.png"
                                alt="Foundry Spatial logo"
                                aria-hidden="true"
                                class="work-logo is-hidden-mobile"
                            >
                            <div class="work-title">
                                <h1 class="has-text-weight-semibold">Hydro One Ltd.</h1>
                                <h6 class="has-text-weight-bold is-italic"> GIS Software Technician</h6>
                            </div>
                        </div>
                        <p>
                            <ul class="work-details">
                                <li>Developed Java OOD monitor program to evaluate Barrie Division team members’ monthly performance on GIS design edits and automated assessment notification workflow to boost team output.</li>
                                <li>Built Python ETL pipeline scripts using ArcGIS API to filter ArcFM design edits and prioritize team workflow focus.</li>
                                <li>Collaborated with Toronto headquarter GIS team on establishing map data standards and updating the Autodesk Vault from legacy SAP storage.</li>
                            </ul>
                        </p>
                    </li>
                    <li class="date" data-date="05/2015 - 08/2016">
                        <div class="work-header">
                            <img
                                src="@/assets/logos/university-waterloo-logo.png"
                                alt="Foundry Spatial logo"
                                aria-hidden="true"
                                class="work-logo is-hidden-mobile"
                            >
                            <div class="work-title">
                                <h1 class="has-text-weight-semibold">University of Waterloo & Partners for Action (P4A) Research Network</h1>
                                <h6 class="has-text-weight-bold is-italic"> GIS Research Analyst & Teaching Assistant </h6>
                            </div>
                        </div>
                        <p>
                            <ul class="work-details">
                                <li>Simulated Waterloo Region’s physical flood extent & depth scenarios using HEC-HMS/RAS and ArcGIS to contribute to property flood insurance protection.</li>
                                <li>Designed and implemented 1 national & 8 regional stakeholders’ network maps.</li>
                                <li>Developed Python program to build Metro Vancouver social resilience spatial database for Coastal City At Risk (CCAR) initiative on adaption to climate change.</li>
                                <li>Analyzed low social resilience hot spots for Metro Vancouver in census tract by applying spatial statistics including principal component and cluster analysis.</li>
                                <li>Trained undergraduates to Geographic Information System (GIS) and coordinated the first joint international field course between geography departments of Waterloo and Nanjing Universities for Yellow Mt.’s trail database development.</li>
                            </ul>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Work',
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/appStyles.scss";

.work.hero-image {
    background-image: url('~@/assets/backgrounds/work.jpg');

    .work-content {
        .timeline {
            position: relative;
            padding: 1rem;
            margin: 0 auto;
            background-color: rgba(0, 0, 0, 0.1);
            border-left: 4px solid #26a19d;
            border-radius: .8rem;
            list-style: none;
            text-align: left;
            width: 100%;

            .date {
                position: relative;
                margin-left: 1rem;
                margin-bottom: 2rem;
                border-bottom: 1px solid #fff;

                .work-header {
                    display: flex;

                    .work-logo {
                        margin: auto 2rem;
                        height: 10%;
                        width: 10%;
                    }

                    .work-title {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;

                        h1 {
                            font-size: 1rem;
                            margin-bottom: 0.5rem;
                        }

                        h6 {
                            font-size: 0.8rem;
                            margin-bottom: 1rem;
                            opacity: 0.75;
                        }
                    }
                }

                .work-details li {
                    list-style: disc;
                    font-size: 0.6rem;
                    margin-bottom: 1rem;
                }
            }

            .date:last-of-type {
                margin-bottom: 0;
                border: none;
            }

            .date::before,
            .date::after {
                display: block;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
            
            .date::before {
                content: attr(data-date);
                left: -10rem;
                transform: rotate(-90deg);
                transform-origin: 70% -100%;
                font-size: 0.8rem;
                font-weight: 600;
            }

            .date::after {
                content: '';
                box-shadow: 0 0 0 4px #26a19d;
                border-radius: 100%;
                left: -2.7rem;
                height: 1rem;
                width: 1rem;
                background-color: #fff;
            }
        }

        @include tablet {
            .timeline {
                margin: 0 auto 0 10rem; 
                width: 75%;

                .date {
                    margin-left: 3rem;

                    .work-header {
                        .work-logo {
                            margin: auto 1rem;
                            height: 20%;
                            width: 20%;
                        }

                        .work-title {
                            margin-left: 1rem;

                            h1 {
                                font-size: 1.2rem;
                            }

                            h6 {
                                font-size: 1rem;
                            }
                        }
                    }
                
                    .work-details li {
                        font-size: 1rem;
                    }
                }

                .date::before {
                    left: -15rem;
                    top: 45%;
                    transform: rotate(0deg);
                    transform-origin: 20% 40%;
                    font-size: 1.2rem;
                }

                .date::after {
                    left: -4.7rem;
                }
            }
        }
    }
}
</style>