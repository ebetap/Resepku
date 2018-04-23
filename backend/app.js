const express = require('express');
const app = express();

// enable cors
app.use(function(req,res,next){
	//Website that is allowed to connect
	res.setHeader('Access-Control-Allow-Origin', '*');

	// Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/resep', function(req,res){
	let data1 = {
		title: 'How To Cook Perfect Potatoes',
		author: 'Tanboy Kun',
		ingredients:
		[
			{ing: '2 lb (905 g) yukon gold potato'},
			{ing: '½ cup (120 mL) whole milk'},
			{ing: '½ cup (120 mL) heavy cream'},
			{ing: '8 cloves garlic, crushed'},
			{ing: '½ cup (115 g) unsalted butter, cubed, cold'},
			{ing: '2 teaspoons kosher salt'},
			{ing: 'freshly ground black pepper, to taste'}

		],
		howto:[
			{how: 'On a cutting board, peel the potatoes. Place the potatoes in a large bowl of cold water after peeling to avoid discoloration.'},
			{how: 'Cut the potatoes into 1-inch (2 cm) cubes.'},
			{how: 'Add the potatoes to a large pot and cover with cold water. Bring to a boil over high heat, then reduce the heat to low and simmer for 12 minutes.'},
			{how: 'In a small saucepan, bring the milk, heavy cream, and garlic to a simmer over low heat.'},
			{how: 'Remove the pot from the heat and strain the cream through a fine mesh sieve.'},
			{how: 'Drain the potatoes in a colander and transfer back to the pot.'},
			{how: 'Mash the potatoes with a potato masher, potato ricer, or by pushing through a fine mesh sieve with a spatula.'},
			{how: 'Add the cubed cold butter and salt. Stir to combine.'},
			{how: 'Gradually add the cream mixture to the potatoes, little by little, until fully incorporated.'},
			{how: 'Top with freshly ground black pepper and sprinkle with chives and serve.'},
			{how: 'Enjoy'}
		]
	}

	res.json(data1);
});

app.listen(3000,function(){
	console.log('Server started at port 3000');
});

