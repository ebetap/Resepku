<template>
	<div class="header">
		<header>
	        <div class="container">
	            <span class="open-slide">
	                <a href="#" v-on:click="openSlideMenu">
	                    <svg width="30" height="30">
	                        <path d="M0,5 29,5" stroke="#fff" stroke-width="2"/>
	                        <path d="M0,14 29,14" stroke="#fff" stroke-width="2"/>
	                        <path d="M0,23 29,23" stroke="#fff" stroke-width="2"/>
	                    </svg>
	                </a>
	            </span>

	            <div id="branding">
	                <h1>Resepku</h1>
	            </div>

	            <nav>
	                <ul>
	                    <li><router-link tag="li" active-class="current" to="/" exact><a>Home</a></router-link></li>
	                    <li><router-link tag="li" active-class="current" to="/recipes"><a>Recipe</a></router-link></li>
						<li><router-link tag="li" active-class="current" to="/todo"><a>Todo</a></router-link></li>
	                </ul>
	            </nav>
	        </div>
	        <!-- SideMenu -->
	        <div id="side-menu" class="side-nav">
	            <div class="nav-container">
	                <a href="#" class="button-close" v-on:click="closeSideMenu">&times;</a>
	                <router-link tag="a" active-class="current" to="/" @click.native="closeSideMenu" exact><a>Home</a></router-link>
	                <router-link tag="a" active-class="current" to="/recipes" @click.native="closeSideMenu"><a>Recipe</a></router-link>
	                <router-link tag="a" active-class="current" to="/todo" @click.native="closeSideMenu"><a>Todo</a></router-link>
	            </div>
	        </div>
	        <!-- EndSideMenu -->
    </header>
    <router-view></router-view>
	</div>
</template>

<script>
	export default{
		name : 'navigation',
		methods:
		{
			openSlideMenu(){
				document.getElementById('side-menu').style.width= '100vw';
			},
			closeSideMenu(){
				document.getElementById('side-menu').style.width= '0';	
			}
		}
	}
</script>

<style>

</style>