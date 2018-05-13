<template>
	<div class="recipedetails">
    	<section id="details">
            <div class="container">
               <div class="box-details box-details-title">
                    <keep-alive>
                        <h1 class="title-details">{{resep.title}}</h1>
                    </keep-alive> 
                   <div class="author">
                       <keep-alive>
                           <h3>by {{resep.author}}</h3>
                       </keep-alive>
                   </div>
               </div>

               <div class="box-details box-details-image">
                   <img src="../assets/resep/148653.jpg" alt="Details Image">
               </div>
            </div>    
        </section>

        <section id="bahan-cara">
            <div class="container">
                <div class="bahan">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                    </div>

                    <ul>
                        <li v-for='ingredient in resep.ingredients'>{{ingredient.ing}}</li>
                    </ul>
                </div>
                <div class="cara">
                    <div class="howto">
                        <h3>How To</h3>
                    </div>

                    <ol class="langkah">
                        <li v-for='how in resep.howto'>{{how.how}}</li>
                    </ol>
                </div>
            </div>
        </section>
		<futer></futer>
	</div>
</template>

<script>
	import Futer from './Futer'
	export default{
		name : 'recipedetails',
		components:{
			Futer
		},
        data(){
            return{
                resep : []
            }
        },
        methods:{
            fetchResep(){
                try{
                    fetch('https://api-resepku-id.herokuapp.com/resep')
                    .then(resp => resp.json())
                    .then((resp) => {
                        this.resep = resp;
                    })
                }catch(err){
                    console.log(err);
                }
            }
        },
        created : function(){
            this.fetchResep();
        }
	}
</script>

<style scoped>
	@media screen and(max-width: 767px){
        .langkah{
            padding: 0;
            text-align: justify;
        }
    }
</style>
