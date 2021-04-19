<template>
  <div class="splash hero">
        <video
            class="splash-video"
            muted
            loop
            autoplay
            playsinline
        >
            <source
                src="../../static/heroVideo/hero.mp4"
                type="video/mp4"
            >
            <source
                src="../../static/heroVideo/hero.webm"
                type="video/webm"
            >
        </video>
        <div class="splash-overlay is-hidden-mobile">
            <overlay-item>
                <template v-slot:header>
                    Shawn Wang 
                </template>
                <template v-slot:subheader>
                    Full Stack Developer (Software Engineer)
                </template>
                <template v-slot:body>
                    Specialization: Geospatial Developer 
                </template>
            </overlay-item>
        </div>
        <div class="splash-overlay is-hidden-tablet">
            <overlay-item
                isMobile
            >
                <template v-slot:header>
                    Shawn Wang 
                </template>
                <template v-slot:subheader>
                    Full Stack Developer (Software Engineer)
                </template>
                <template v-slot:body>
                    Specialization: Geospatial Developer 
                </template>
            </overlay-item>
        </div>
        <b-icon
            icon="chevron-double-down"
            class="more-content-arrow"
        />
        <about-page />
        <skills-page />
        <section-spacer />
        <work-page />
        <section-spacer />
        <projects-page />
        <section-spacer />
        <contact-page 
            :is-home="true"
        />
  </div>
</template>

<script>
import OverlayItem from '@/components/Home/OverlayItem.vue';
import SectionSpacer from '@/components/Home/SectionSpacer.vue';
import AboutPage from '@/views/About.vue';
import ContactPage from '@/views/Contact.vue';
import ProjectsPage from '@/views/Projects.vue';
import SkillsPage from '@/views/Skills.vue';
import WorkPage from '@/views/Work.vue';

export default {
    name: 'Home',

    components: {
        AboutPage,
        ContactPage,
        OverlayItem,
        ProjectsPage,
        SectionSpacer,
        SkillsPage,
        WorkPage,
    },
}
</script>

<style lang="scss">
@import "~@/assets/styles/appStyles.scss";

.splash.hero {
    position: relative;

    .splash-video {
        background: url("../../static/heroVideo/heroPoster.jpg");
        background-size: cover;
        object-fit: cover;
        z-index: -100;
        height: calc(100vh); // Header height
    }

    .splash-overlay {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        display: flex;
    }

    .icon.more-content-arrow {
        display: none;
    }

    @include tablet {
        .icon.more-content-arrow {
            display: inherit;
            position: absolute;
            color: #fff;
            left: calc(50vw - 7rem);
            top: calc(100vh - 5rem);
            border: 1px solid #fff;
            border-radius: 2em;
            padding: 1.25em;
        }
    }
}
</style>