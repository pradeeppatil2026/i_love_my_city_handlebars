exports.home = function(req, res){

	res.render('home', {
		headline:'We believe that every site has something say..!!',
		title:'Home'
	});
}

exports.city = function(req, res){
	
	
	var cityName = req.params.city;
	
	console.log('Param:'+cityName);
	var title, heading;
	var imageArray = [1,2,3,4];
	
	if(cityName === 'berlin'){
		
		title = 'Berline';
		heading = "Berline: Where love is in air";
	}else if(cityName === 'paris'){
		
		title = 'Paris';
		heading = "Paris: Good talker are only only found in Paris";
	}else if(cityName === 'madrid'){
		
		title = 'Madrid';
		heading = "Madrid: Buzz, Beautiful architecture and Football";
	}else if(cityName === 'landon'){
		
		title = 'Landon';
		heading = "Landon: Sparkling, Still, Food, Gorgeous";
	}else if(cityName === 'newyork'){
		
		title = 'New York';
		heading = "New York: Come to New York to become someone";
		imageArray.push(5);
		imageArray.push(6);
		
		
	}
		
	res.render('city', {
		title: title,
		headline:heading,
		city: cityName,
		imageArray:imageArray
	});
}