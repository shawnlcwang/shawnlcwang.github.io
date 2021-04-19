<template>
    <section class="about" id="about">
        <div class="about-img is-hidden-tablet">
            <img 
                src="@/assets/shawn-wang.png"
                alt="Profile image of Shawn Wang"
                title="Shawn Wang" />
        </div>
        <div class="about-content">
            <div class="about-heading">
                <h1 class="is-uppercase has-text-weight-bold">About</h1>
                <h6 class="is-uppercase has-text-weight-bold">Myself</h6>
            </div>
            <div class="about-body">
                <h1 class="is-italic mb-5">Greetings!</h1>
                <p class="mb-5"> 
                    My name is <em>Shawn</em>. I'm a passionate software engineer who is naturally drawn to the spatial context of web development and data. I endeavour my journey in pursuing spatial web applications.
                    Here are some of my considerable qualities:
                </p>
                <ul>
                    <li> BSc in <strong>Computer Science</strong>, Software Engineering Specialization (<strong>University of Victoria</strong>, CA) </li>
                    <li> BEnv in <strong>Geomatics</strong>, Geography Honours (<strong>University of Waterloo</strong>, CA) </li>
                    <li> Commit to delivering optimized and reusable software code within specifications</li>
                    <li> Motivated to self-learn/unlearn on evolving tech languages/frameworks</li>
                    <li> Strive to communicate effectively and to be reliable and flexible for collaborations</li>
                </ul>
            </div>
        </div>
        <div class="about-img is-hidden-mobile">
            <img src="@/assets/shawn-wang.png"
                alt="Profile image of Shawn Wang"
                title="Shawn Wang" />
        </div>
    </section>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style lang="scss">
@import "~@/assets/styles/appStyles.scss";

.about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #1d1d1d;
    color: #fff;

    .about-img {
        width: 75%;
        height: 75%;
        margin: 2rem auto;
    }

    .about-content {
        .about-heading{
            text-align: center;
            line-height: 0;
            margin-top: 3rem;
            margin-bottom: 3rem;
            color: #26a19d;

            h1 {
                font-size: 4rem;
                opacity: 0.3;
            }

            h6 {
                font-size: 2rem;
                opacity: 0.9;
            }
        }

        .about-body {
            font-size: 0.8rem;

            .tab {
                display: inline-block;
                margin-left: 40px;        
            }

            h1 {
                font-size: 1.5rem;
            }

            li {
                list-style: disc;
                margin: 0 0 0.5rem 1.2rem;
            }

            em {
                color: #08fdd8;
            }

            strong {
                color: #26a19d;
            }
        }
    }
}

@include tablet {
    .about {
        flex-direction: row;
        align-items: center;

        .about-img {
            width: 100%;
            height: 100%;
            margin: auto 0 auto 2rem;
        }

        .about-content {
            max-width: 60%;

            .about-heading{
                margin-top: 6rem;
                margin-bottom: 6rem;

                h1 {
                    font-size: 9rem;
                }

                h6 {
                    font-size: 3rem;
                }
            }

            .about-body {
                font-size: 1.2rem;

                h1 {
                    font-size: 3rem;
                }

                li {
                    margin: 0 0 0.75rem 6rem;
                }
            }
        }
    }
}
</style>