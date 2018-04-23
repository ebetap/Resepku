<template>
  <div class="home">
  	<section id="showcase">
        <div class="container">
        </div>
    </section>

   	<section id="newsletter">
        <div class="container">
            <h1>Subscribe To Our Newsletter</h1>
            <form>
                <input type="email" placeholder="Enter Email">
                <button type="submit" class="button1">Subscribe</button>
            </form>
        </div>
    </section>

    <section id="boxs">
        <div class="container">
            <h3 class="recent">RECENT RECIPE</h3>
            <div class="box">
                <router-link to="/recipes/details">
                    <div class="card">
                        <div class="card-thumb">
                            <img src="../assets/resep/148653.jpg" alt="Thumb Image">
                        </div>

                        <div class="label">
                            Potatoes
                        </div>

                        <div class="card-date">
                            <span class="card-date-day">12</span>
                            <span class="card-date-month">Apr</span>
                        </div>

                        <div class="name">
                            <h3>How to Cook Potatoes</h3>
                        </div>
                    </div>
                </router-link>
            </div>

            <div class="box">
                <a href="details2.html">
                    <div class="card">
                        <div class="card-thumb">
                            <img src="../assets/resep/Cut2.jpg" alt="Thumb Image">
                        </div>

                        <div class="label">
                            Fillet
                        </div>

                        <div class="card-date">
                            <span class="card-date-day">8</span>
                            <span class="card-date-month">May</span>
                        </div>

                        <div class="name">
                            <h3>How to Cook Fillet Mignon</h3>
                        </div>
                    </div>
                </a>
            </div>

            <div class="box">
                <a href="#">
                    <div class="card">
                        <div class="card-thumb">
                            <img src="../assets/resep/Thuhjjmbd.jpg" alt="Thumb Image">
                        </div>

                        <div class="label">
                            Banana
                        </div>

                        <div class="card-date">
                            <span class="card-date-day">8</span>
                            <span class="card-date-month">May</span>
                        </div>

                        <div class="name">
                            <h3>Banana Bread On A Stick</h3>
                        </div>
                    </div>
                </a>
            </div>

            <div class="box">
                <a href="#">
                    <div class="card">
                        <div class="card-thumb">
                            <img src="../assets/resep/FB.jpg" alt="Thumb Image">
                        </div>

                        <div class="label">
                            Sushi
                        </div>

                        <div class="card-date">
                            <span class="card-date-day">12</span>
                            <span class="card-date-month">Apr</span>
                        </div>

                        <div class="name">
                            <h3>Flower Sushi Roll</h3>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section id="boxs">
        <div class="container">
            <div class="box">
                <a href="#">
                    <div class="card">
                        <div class="card-thumb">
                            <img src="../assets/resep/BFV20013_NutellaPacocaIceCream-Thumb.jpg" alt="Thumb Image">
                        </div>

                        <div class="label">
                            Ice Cream
                        </div>

                        <div class="card-date">
                            <span class="card-date-day">12</span>
                            <span class="card-date-month">Apr</span>
                        </div>

                        <div class="name">
                            <h3>Nutela Pacoca Ice Cream</h3>
                        </div>
                    </div>
                </a>
            </div>

            <div class="box">
                <a href="#">
                    <div class="card">
                        <div class="card-thumb">
                            <img src="../assets/resep/148264.jpg" alt="Thumb Image">
                        </div>

                        <div class="label">
                            Bacon
                        </div>

                        <div class="card-date">
                            <span class="card-date-day">12</span>
                            <span class="card-date-month">Apr</span>
                        </div>

                        <div class="name">
                            <h3>Bacon-Wrapped Parmesan</h3>
                        </div>
                    </div>
                </a>
            </div>

            <div class="box">
                <a href="#">
                    <div class="card">
                        <div class="card-thumb">
                            <img src="../assets/resep/BFV40010_QuinoaPizza_FB_Cut6.jpg" alt="Thumb Image">
                        </div>

                        <div class="label">
                            Pizza
                        </div>

                        <div class="card-date">
                            <span class="card-date-day">12</span>
                            <span class="card-date-month">Apr</span>
                        </div>

                        <div class="name">
                            <h3>Sheet Pan Quinoa Pizza</h3>
                        </div>
                    </div>
                </a>
            </div>

            <div class="box">
                <a href="#">
                    <div class="card">
                        <div class="card-thumb">
                            <img src="../assets/resep/148000.jpg" alt="Thumb Image">
                        </div>

                        <div class="label">
                            Tart
                        </div>

                        <div class="card-date">
                            <span class="card-date-day">12</span>
                            <span class="card-date-month">Apr</span>
                        </div>

                        <div class="name">
                            <h3>Upside-Down Banana Tart</h3>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <div class="more">
        <div class="container">
            <a href="recipe.html"><button class="button1">Show More</button></a>
        </div>
    </div>

    <futer></futer>
    <router-view></router-view>
  </div>
</template>

<script>
import Futer from './Futer'
export default {
  name: 'home',
  components:{
  	Futer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
