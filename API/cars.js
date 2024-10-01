'use strict'


let apiURL="https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json";//url

fetch(apiURL)
.then(response=>
    {
        return response.json();}
).then(data=>{
   let result=data.Results;
   let grid = document.getElementById('vehicleGrid');
   result.forEach(vehicle => {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = `${vehicle.MakeName}<br> ${vehicle.VehicleTypeName}`;
    grid.appendChild(item);
});
   
    
})