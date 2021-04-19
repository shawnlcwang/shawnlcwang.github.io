<template>
    <div class="section-spacer no-background-section">
        <div class="side-icon">
            <p>scroll down</p>
            <b-icon
                icon="arrow-down"
                class="is-hidden-mobile"
            />
        </div>
        <b-icon
            icon="chevron-double-down"
            class="content-arrow"
        />
        <div class="side-icon">
            <p>scroll down</p>
            <b-icon
                icon="arrow-down"
                class="is-hidden-mobile"
            />
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'SectionSpacer', 
}
</script>

<style lang="scss">
@import "~@/assets/styles/appStyles.scss";

.section-spacer.no-background-section {
    background: #1d1d1d;
    color: #fff;
    min-height: 12vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .side-icon  {
        display: flex;
        flex-direction: column;
        align-items:  center;

        p {
            font-size: 0.6rem;
            transform: rotate(90deg);
        }
    }

    @include tablet {
        .side-icon {
            p {
                font-size: 1rem;
                margin: 1rem 0;
            }

            .icon {
                margin-top: 1rem;
            }
        }
    }

    .icon.content-arrow {
        border: 1px solid #fff;
        border-radius: 2em;
        padding: 1.25em;
    }
}
</style>