<template>
    <nav class="main-menu">
        <router-link 
            tag="div"
            to="/"
        >
            <img
                src="@/assets/logo.png"
                alt="Shawn Wang Portfolio Logo"
                aria-hidden="true"
                class="home-link"
            >
        </router-link>

        <div class="spacer" />

        <div class="menu-wrapper">
            <div
                v-for="item in items"
                :key="item.title"
                class="menu-nav"
            >
                <router-link
                    class="nav-link has-cursor-pointer"
                    tag="div"
                    :to="item.link"
                >
                    {{item.title}}
                </router-link>
            </div>
        </div>

        <div class="spacer">
            <div class="social-media">
                <a href="https://www.linkedin.com/in/shawn-wang-48801066/" class="icon-link"> 
                    <b-icon 
                        icon="linkedin" 
                        class="social-media-icon"
                    />
                </a>
                <a href="https://github.com/shawnlcwang?tab=repositories" class="icon-link">
                    <b-icon 
                        icon="github" 
                        class="social-media-icon"
                    />
                </a>
                <a href="https://twitter.com/shawnlcwang" class="icon-link">
                    <b-icon 
                        icon="twitter" 
                        class="social-media-icon"
                    />
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'SideBarNavigation',

    props: {
        // list of items shown in the nav
        items: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style lang="scss">
@import "~@/assets/styles/appStyles.scss";

nav.main-menu {
    background: #181818;
    color: #909096;
    display: flex;
    flex-direction: column;
    align-items: center;   
    height: 100vh;

    img.home-link {
        cursor: pointer;
    }

    .menu-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;   
        width: 100%;
        border-top: 1px solid #282828;

        .menu-nav {
            display: flex;
            justify-content: center;
            width: 100%;
            border-bottom: 1px solid #282828;

            .nav-link {
                cursor: pointer;
                display: flex;
                justify-content: center;
                width: 100%;
                padding: 0.1rem;
                font-size: 0.6rem;

                &:hover {
                    color: #08fdd8;
                }

                &.router-link-exact-active {
                    color: #26A19D;
                }
            }

            @include tablet {
                .nav-link {
                    padding: 0.5rem;
                    font-size: 1.2rem;
                }
            }
        }
    }

    .spacer {
        flex: 1 1;
        min-height: 1em;
        border-bottom: 1px solid #282828;

        .social-media {
            margin-top: 5rem;
            display: flex;
            flex-direction: column;

                .social-media-icon {
                    color: #909096;
                    height: 0.5rem;
                    width: 0.5rem;
                    margin-bottom: 1.5rem;

                    &:hover {
                        color: #08fdd8;
                    }
                }
        }

        @include tablet {
            .social-media {
                flex-direction: row;

                .social-media-icon {
                    height: 1.5rem;
                    width: 1.5rem;
                    margin: 0.2rem;
                }
            }
        }
    }
}
</style>