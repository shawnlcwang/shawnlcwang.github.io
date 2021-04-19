<template>
    <section class="projects hero-image" id="projects">
        <div class="image-overlay">
            <div class="section-heading">
                <h1>Portfolio</h1>
                <h6>View my recent work:</h6>
            </div>

            <div class="projects-content">
                <div class="project-item">
                    <img 
                        class="project-image"
                        src="@/assets/images/floodsafe-demo.jpg"
                        alt="An image of frontend REST API geospaital applcation"
                        aria-hidden="true"
                    />
                    <div class="project-details">
                        <h6 class="has-text-weight-semibold">Web GIS: Frontend Vue.js Rest API</h6>
                        <h1 class="has-text-weight-bold">FloodSafe Map Application</h1>
                        <p>
                            <ul>
                                <li>Solo-developed a front-end web GIS map pilot application by utilizing Vue.js and Mapbox frameworks to implement separated client-server REST API architecture with API endpoints for stateless interaction and data transfer.</li>
                                <li>Utilized: Vue.js, Bulma, Buefy, HTML, CSS/SCSS, JavaScript, Mapbox, Leaflet, Turf, PostgreSQL</li>
                            </ul>
                        </p>
                        <a href="https://floodsafe.foundryspatial.com/" class="details-link">View Details</a>
                    </div>
                </div>

                <div class="project-item">
                    <img 
                        class="project-image is-hidden-tablet"
                        src="@/assets/images/ownagon-demo.jpg"
                        alt="An image of backend MVC server shop application"
                        aria-hidden="true"
                    />
                    <div class="project-details">
                        <h6 class="has-text-weight-semibold">Web Server: Backend Node.js MVC</h6>
                        <h1 class="has-text-weight-bold">Ownagon Shop Application</h1>
                        <p>
                            <ul>
                                <li>Built a back-end shop web server by using Node.js and Express.js frameworks to implement traditional Model-View-Controller (MVC) architecture including routes, controllers, models, database, views, sessions and cookies.</li>
                                <li>Utilized: Node.js, Express.js, JavaScript, EJS, MongoDB, SendGrid, Stripe, Heroku</li>
                            </ul>
                        </p>
                        <a href="https://www.ownagon.com/" class="details-link">View Details</a>
                    </div>
                    <img 
                        class="project-image is-hidden-mobile"
                        src="@/assets/images/ownagon-demo.jpg"
                        alt="An image of backend MVC server shop application"
                        aria-hidden="true"
                    />
                </div>

                <div class="project-item">
                    <img 
                        class="project-image"
                        src="@/assets/images/toronto-2016.png"
                        alt="An image of Metro Toronto Residential Suitability Classification by Census Subdivision."
                        aria-hidden="true"
                    />
                    <div class="project-details">
                        <h6 class="has-text-weight-semibold">Geospatial Data Mining</h6>
                        <h1 class="has-text-weight-bold">Metro Toronto Socio-economic Residential Suitability Classification</h1>
                        <p>
                            <ul>
                                <li>Developed Metro Toronto spatial database on socio-economic characteristics such as income, family composition, mother tongue using ArcGIS and Jupyter Notebook.</li>
                                <li>Predict the likely suitable larger census subdivision for residences to live based on the smaller census tracts socio-economic characteristics using various classification methods including decision tree, naïve Bayes, perceptron, logistics model and ensemble method.</li>
                            </ul>
                        </p>
                        <a href="https://github.com/shawnlcwang/ML_TorontoSocioeconomicClassification" class="details-link">View Details</a>
                    </div>

                </div>

                <div class="project-item">
                    <img 
                        class="project-image is-hidden-tablet"
                        src="@/assets/images/vancouver-sori-2006.jpg"
                        alt="An image of Metro Vanoucver Social Resileince Score by Census Tracts."
                        aria-hidden="true"
                    />                    
                    <div class="project-details">
                        <h6 class="has-text-weight-semibold">Geospatial Analysis</h6>
                        <h1 class="has-text-weight-bold">Metro Vancouver Socio-economic Resilience Cluster Analysis</h1>
                        <p>
                            <ul>
                                <li>Developed a Metro Vancouver social resilience spatial database for the Coastal City At Risk (CCAR) initiative on adaptation to climate change.</li>
                                <li>Analyzed low social resilience spatial hot spots for Metro Vancouver in both scales of dissemination area (DA) and census tract (CT) by applying Principal Component Analysis (PCA)
                                and Social Vulnerability Index (SoVI) methodology.</li>
                            </ul>
                        </p>
                        <a href="https://github.com/shawnlcwang/GIS_VancouverSocioeconomicResilienceClusterAnalysis" class="details-link">View Details</a>
                    </div>
                    <img 
                        class="project-image is-hidden-mobile"
                        src="@/assets/images/vancouver-sori-2006.jpg"
                        alt="An image of Metro Vanoucver Social Resileince Score by Census Tracts."
                        aria-hidden="true"
                    />       
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Projects',
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/appStyles.scss";

.projects.hero-image {
    background-image: url('~@/assets/backgrounds/projects.jpg');

    .projects-content {
        .project-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding-bottom: 2rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid #2f383a;

            .project-image {
                width: 100%;
                height: 100%;
                margin-left: auto;
                margin-right: auto;
            }

            .project-details {
                h1 {
                    font-size: 1rem;
                    margin-bottom: 1rem;
                }

                h6 {
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    opacity: 0.75;
                    margin: 0.5rem 0;
                }

                li {
                    list-style: disc;
                    font-size: 0.6rem;
                    margin-bottom: 1rem;
                }

                .details-link {
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    color: #26a19d;
                    transition: color 650ms;
                }

                .details-link:hover{
                    color:  #08fdd8;
                }
            }
        }

        .project-item:last-child {
            padding-bottom: 0;
            margin-bottom: 0;
            border: none;
        }

        @include tablet {
            .project-item { 
                flex-direction: row;

                .project-image {
                    width: 45%;
                    height: 45%;
                    padding: 1rem;
                }
                
                .project-details {
                    margin-left: 3rem;

                    h1 {
                        font-size: 1.5rem;
                    }

                    h6 {
                        font-size: 1.2rem;
                    }

                    li {
                        font-size: 1.2rem;
                    }

                    .details-link {
                        font-size: 1rem;
                    }
                }
            }
        }
    }
}
</style>