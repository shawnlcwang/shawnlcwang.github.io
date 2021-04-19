<template>
    <div id="app">
        <side-bar-navigation
            v-if="true" 
            id="main-menu"
            :items="items" 
        />
        <router-view class="page" />
    </div>
</template>

<script>
import SideBarNavigation from "@/components/SideBarNavigation.vue";

export default {
    name: "App",

    components: {
        SideBarNavigation,
    }, 

    data: () => ({
        items: [ 
            {
                link: 'about',
                title: 'About',
            },
            {
                link: 'skills',
                title: 'Skills',
            },
            {
                link: 'work',
                title: 'Work',
            },
            {
                link: 'projects',
                title: 'Projects',
            },
            {
                link: 'contact',
                title: 'Contact',
            },
        ],
    }),
};
</script>

<style lang="scss">
// import global styles (Bulma, Buefy, etc.)
@import "~@/assets/styles/appStyles.scss";
// * { border: 0.1px solid green; }
#app {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-height: 100vh;

    #main-menu {
        width: $main-nav-width;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 3; // above map & controls
    }

    // page styles
    .page {
        width: $content-width;
        margin-left: $side-spacing;
        min-height: 100vh;
    }

    section {
        min-height: 90vh;
        padding: 6rem 1rem;
        z-index: 2; // place on top of OverlayItem

        // page image background
        &.hero-image {
            background-position: center;
            background-size: cover;
            object-fit: cover;
        }
        
        // page semi transparent white overlay box
        .image-overlay {
            margin: 2rem auto; // center the div horizontally but give it margin on top and bottom
            background-color: rgba(255, 255, 255, 0.9);
            color: #000;
            padding: 2.5rem;

            .section-heading {
                text-align: center;
                margin-top: 1rem;
                margin-bottom: 3rem;

                h1 {
                    color: #26a19d;
                    font-size: 2rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    position: relative;
                    margin-bottom: 1rem;
                }
                
                h1::before,
                h1::after {
                    content: '';
                    position: absolute;
                    bottom: -0.6rem;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #2f383a;
                }
                
                h1::before {
                    width: 15rem;
                    height: 3px;
                    border-radius: 0.8rem;
                }
                
                h1::after {
                    width: 1rem;
                    height: 1rem;
                    border-radius: 100%;
                    bottom: -1rem;
                }
                
                h6 {
                    font-size: 1rem;
                    font-weight: 300;
                }
            }
        }
    }
    
    @include tablet {
        section {
            padding: 9rem 3rem;

            .image-overlay {
                .section-heading {
                    h1 {
                        font-size: 3rem;
                    }

                    h6 {
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
}
</style>
