<template>
    <div class="banner">

        <div class="container">
            <div class="bannew__content">
                <h1 class="bannew__title" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500">Hello There! <span>I'm Leo</span></h1>
                <p class="bannew__subtitle" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1200">Web Developer</p>
                <span class="funfact" data-aos="fade-up" data-aos-duration="3000" data-aos-delay="1800">
                    Tip: Throwing your computer against the wall, oddly enough, doesn't help fix bugs.
                </span>
            </div>
        </div>



    </div>
</template>

<script setup>

</script>

<style scoped lang="scss">

    .banner{
        height: 100vh;
        min-height: 60vh;
    
        .container{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            text-align: center;

            h1{
                color: #fff;
                font-size: 1.5rem;
                font-weight: 600;
                margin-bottom: 1rem;
                span{
                    display: block;
                }
            }
        
            p{
                color: #fff;
                font-size: 0.9rem;
                font-weight: 600;
                margin-bottom: 1rem;
            }
            
            .funfact{
                display: block;
                color: #fff;
                font-size: 0.7rem;
                font-weight: 600;
                margin-bottom: 1rem;
            }

        }

        

    }

    @media screen and (min-width: 768px) {
        
        .banner{
            .container{
                h1{
                    font-size: 4rem;
                    span{
                        display: inline-block;
                    }
                }

                p{
                    font-size: 2rem;
                }
                
            }
        }

    }

</style>