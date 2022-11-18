

mapboxgl.accessToken = 'pk.eyJ1IjoiaWxpeWFzbzc3IiwiYSI6ImNsYWxhaG01YjAzbnY0MXRhbTdsMDlkbTkifQ.KRCQOPjEkNduPODxAEnhtQ';
        
        navigator.geolocation.watchPosition(successLocation, errorLocation, {enableHighAccuracy:true})
        const coorData = [];

        function successLocation(position){
            console.log(position);
            setupMap([position.coords.longitude, position.coords.latitude])
            //coorData.push([position.coords.longitude, position.coords.latitude])
        }

        function setupMap(center){
            const map = new mapboxgl.Map({               
                container: 'map', // container ID
                style: 'mapbox://styles/mapbox/streets-v11', // style URL
                center: center,   //actual live coordinates
                zoom: 14
        });

        map.on('load', () => {
            console.log('[[[[[[[[[[[');
            map.addSource('route', {
            'type': 'geojson',
            'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
            'type': 'LineString',
            'coordinates': center,     //actual live coordinates
            }
            }
            });
            map.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
            'line-join': 'round',
            'line-cap': 'round'
            },
            'paint': {
            'line-color': '#888',
            'line-width': 8
            }
            });
        });

        
        

     
          
          
          
          //******************************** */



        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav);


        var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
          
          });
          
          map.addControl(directions, 'top-left');

          console.log('*************');
          console.log(directions);
          console.log('<>><><><><><<<><>');

          sendLocation(center);


          

            
        }

        async function sendLocation(location){
            console.log('inside send locaiton');
            console.log(typeof(location));
            //let response = await 
          //  console.log(location);

           /* let cordi = {
                locations: location
            }*/

            //console.log(cordi);

            let response = await axios.post(`http://localhost:7000/location/addlocations/${location}`);
            console.log(response);

        }

        function errorLocation(){
            console.log('Something went wrong');
            setupMap([-2.24, 53.48])
        }

       

       

