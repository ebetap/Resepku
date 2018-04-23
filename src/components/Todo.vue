<template>
	<div class="todo">
		<div class="container">
			<ul>
				<li>Crawling data from tasty.co and save it into database</li>
				<li>Create RESTful API using express.js</li>
				<li>fetch data into web design</li>
				<li>Deploy</li>
				<li>One More!! Pelajari Web Socket</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'todo'
	}
</script>

<style scoped>
	li{
		text-align: center;
		list-style-type: asterisks !important;
		font-size: 2em;
		font-weight: bold;
	}

	ul{
		padding-top: 70px;
		width: 100%;
	}
</style>