var hotelIds = []
gethotelids = hotelid();
function hotelid() {
  itinLength = document.getElementsByClassName('listing easyClear').length;
  for (var i = 0; i < itinLength; i++) {
  	otaLength = document.getElementsByClassName('listing easyClear')[i].getElementsByClassName('no_cpu').length;
  	console.log(otaLength);
  	for(var j=0; j< otaLength; j++){
  		if(document.getElementsByClassName('listing easyClear')[i].getElementsByClassName('no_cpu')[j].getElementsByClassName('provider').length > 0){
  			otaName = document.getElementsByClassName('listing easyClear')[i].getElementsByClassName('no_cpu')[j].getElementsByClassName('provider')[0].textContent;
  			if(otaName.test(/Exp/g)){
  				city = document.getElementsByClassName('listing easyClear')[i].getAttribute('data-locationid');
  				price = document.getElementsByClassName('listing easyClear')[i].getElementsByClassName('no_cpu')[j].getAttribute('data-pernight');
          hotelname = document.getElementsByClassName('listing easyClear')[i].getElementsByClassName('photo_image')[0].getAttribute('alt');
    			hotelIds.push({city: parseInt(city), price:parseInt(price), hotelname: hotelname});
          console.log(hotelIds[i]);
			}
  		}
  		if(document.getElementsByClassName('listing easyClear')[i].getElementsByClassName('no_cpu')[j].getElementsByClassName('vendor').length > 0){
  			otaName = document.getElementsByClassName('listing easyClear')[i].getElementsByClassName('no_cpu')[j].getElementsByClassName('vendor')[0].textContent;
  			if(otaName.test(/Exp/g)){
  				console.log(otaName);
  				city = document.getElementsByClassName('listing easyClear')[i].getAttribute('data-locationid');
  				price = document.getElementsByClassName('listing easyClear')[i].getElementsByClassName('no_cpu')[j].getAttribute('data-pernight');
          hotelname = document.getElementsByClassName('listing easyClear')[i].getElementsByClassName('photo_image')[0].getAttribute('alt');
    			hotelIds.push({city: parseInt(city), price: parseInt(price), hotelname: hotelname});
          console.log(hotelIds[i]);
			}
  		}
  	}
  }
  return hotelIds;
}