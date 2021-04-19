<template>
<div
    @mouseover="toggleTextDesktop(true)"
    @mouseleave="toggleTextDesktop(false)"
    @click="toggleTextMobile()"
    class="overlay-item"    
>
    <div class="item-card">
        <h1 class="title has-text-white">
            <slot name="header" />
        </h1>
        <p class="text">
            <slot name="subheader" />
        </p>
        <hr>
        <transition
            name="fade-slide-up"
        >
            <p class="text" v-show="showText">
                <slot name="body" />
            </p>
        </transition>
    </div>
</div>

</template>

<script>
export default {
    name: 'OverlayItem',
 
    props: {
        isMobile: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    data: () => ({
        showText: false,
    }),

    methods: {
        /**
         * toggle the text if we're on mobile, this is to avoid a trinary op
         */
        toggleTextMobile() {
            if (this.isMobile) {
                this.showText = !this.showText;
            }
        },
        /**
         * toggle the text to a value if we're on desktop, this is to avoid *two* trinary ops
         */
        toggleTextDesktop(show) {
            if (!this.isMobile) {
                this.showText = show;
            }
        },
    },
}
</script>

<style lang="scss">
@import "~@/assets/styles/appStyles.scss";

.overlay-item {
    color: 	#fff;
    padding: 3.75rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: calc(100vh);

    .item-card {
        display: flex;
        flex-direction: column;
        background-color: rgba(0, 0, 0, 0.25);
        padding: 1.25rem;

        h1.title {
            font-size: 2.5rem;
        }

        p.text {
            font-size: 1rem;
            line-height: 1.2rem;
            transition: all 1s;
        }

        hr {
            color: 	#fff;
            height: 2px;
            width: 40px;
        }

        .fade-slide-up-enter-to,
        .fade-slide-up-leave {
            max-height: 1000px;
            opacity: 1;
        }

        .fade-slide-up-enter,
        .fade-slide-up-leave-to {
            max-height: 0;
            opacity: 0;
        }
    }
}
@include tablet {
    .overlay-item {
        width: 65%;

        .item-card {
            h1.title {
                font-size: 5rem;
            }
            p.text {
                font-size: 1.25rem;
                line-height: 1.875rem;
            }
        }
    }
}
</style>