<template>
    <section class="skills hero-image" id="skills">
        <div class="image-overlay">
            <div class="section-heading">
                <h1>Skills</h1>
                <h6>What value can I bring?</h6>
            </div>
            <div class="skills-content">
                <div class="skills-details">
                    <div class = "skill-item">
                        <div class= "skill-header">
                            <b-icon
                                icon="monitor"
                                size="is-large"
                                class="skill-icon"
                            />
                        </div>
                        <div class="skill-body">
                            <h1 class="has-text-weight-bold">
                                Front-end
                            </h1>
                            <ul class="has-text-weight-semibold">
                                <li>VueJS</li>
                                <li>HTML</li>
                                <li>CSS/SCSS</li>
                                <li>Bulma/Buefy</li>
                                <li>D3/Vega/Highcharts</li>
                            </ul>
                        </div>
                    </div>

                    <div class = "skill-item">
                        <div class= "skill-header">
                            <b-icon
                                icon="server"
                                size="is-large"
                                class="skill-icon"
                            />
                        </div>
                        <div class="skill-body">
                            <h1 class="has-text-weight-bold">
                                Back-end
                            </h1>
                            <ul class="has-text-weight-semibold">
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>JavaScript</li>
                                <li>SQL/PostgreSQL</li>
                                <li>NoSQL/MongoDB</li>
                            </ul>
                        </div>
                    </div>

                    <div class = "skill-item">
                        <div class= "skill-header">
                            <b-icon
                                icon="map-search"
                                size="is-large"
                                class="skill-icon"
                            />
                        </div>
                        <div class="skill-body">
                            <h1 class="has-text-weight-bold">
                                GIS
                            </h1>
                            <ul class="has-text-weight-semibold">
                                <li>ArcGIS Products</li>
                                <li>MapboxJS/Studio</li>
                                <li>LeafletJS</li>
                                <li>TurfJS</li>
                                <li>PostGIS/GDAL</li>
                            </ul>
                        </div>
                    </div>
    
                    <div class = "skill-item">
                        <div class= "skill-header">
                            <b-icon
                                icon="file-code-outline"
                                size="is-large"
                                class="skill-icon"
                            />     
                        </div>
                        <div class="skill-body">
                            <h1 class="has-text-weight-bold">
                                Software Language
                            </h1>
                            <ul class="has-text-weight-semibold">
                                <li>JavaScript</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>SQL</li>
                                <li>Shell Scripting</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <skills-radar-chart 
                    class="skills-chart"
                />
            </div>
        </div>
    </section>
</template>

<script>
import SkillsRadarChart from '@/components/Skills/SkillsRadarChart.vue';

export default {
    name: 'Skills',

    components: {
        SkillsRadarChart,
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/appStyles.scss";

.skills.hero-image {
    background-image: url('~@/assets/backgrounds/skills.jpg');

    .skills-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;


        .skills-details {
            text-align: center;
            word-wrap: break-word;

            .skill-item {
                padding-bottom: 2rem;
                margin-bottom: 2rem;
                border-bottom: 1px solid #2f383a;

                .skill-header {
                    width: 5rem;
                    height: 5rem;
                    border: 3px solid #26a19d;
                    background-color: #fff;
                    margin: 2rem auto;
                    display: flex;
                    transform: rotate(45deg);

                    .skill-icon {
                        color: #26a19d;
                        margin: auto;
                        transform: rotate(-45deg);
                    }
                }

                .skill-body {
                    h1 {
                        font-size: 1.2rem;
                        margin-bottom: 1rem;
                    }

                    li {
                        list-style: none;
                        font-size: 0.8rem;
                        margin-bottom: 0.2rem;
                    }
                }
            }

            .skill-item:last-child {
                padding-bottom: 0;
                margin-bottom: 0;
                border: none;
            }
        }

        .skills-chart {
            width: 100%;
        }
    }

    @include tablet {
        .skills-content {
            flex-direction: row;
            justify-content: flex-start;

            .skills-details {
                width: 40%;

                .skill-item {
                    display: flex;

                    .skill-header {
                        margin: 3rem auto;
                    }

                    .skill-body {
                        width: 60%;

                        h1 {
                            font-size: 1.5rem;
                        }

                        li {
                            font-size: 1.2rem;
                        }
                    }
                }
            }

            .skills-chart {
                width: 60%;
            }
        }
    }
}
</style>