var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];
var myTeam = [
    {
        name: "María",
        availability: new Array(8).fill(true)
    },
    {
        name: "Pedro",
        availability: new Array(8).fill(true)
    },
    {
        name: "Esther",
        availability: new Array(8).fill(true)
    },
    {
        name: "Marcos",
        availability: new Array(8).fill(true)
    },
];

var getRandom = (a, b) => (Math.random() < 0.5 ? a : b);



function DisponibilidadPersonas(equipo) {

    for (var persona of equipo) {
        console.log("Disponibilidad de : " + persona.name)
        for (var i = 0; i < persona.availability.length; i++) {

            disponibilidad = getRandom(true, false)
            persona.availability[i] = disponibilidad
            console.log(`${WORK_HOURS[i]} ${disponibilidad} `)
        }
    }
}

DisponibilidadPersonas(myTeam);


var myArray = new Array(8).fill(true);
function comprobarDisponibilidad(equipo) {

    for (persona of equipo) {
        for (var i = 0; i < persona.availability.length; i++) {
            if (persona.availability[i] === true && myArray[i] === true) {
                myArray[i] = true
                
            }
            else {
                myArray[i] = false;
              
            }
        }
    }
    
    }
comprobarDisponibilidad(myTeam)
function mostrarDisponibilidad(myArray){
    for(var i = 0; i<= myArray.length; i++){
        if(myArray[i] ===true){
            console.log(WORK_HOURS[i] + " hay hueco libre");
        }
        else{
            console.log(WORK_HOURS[i] + " no hay hueco")
        }
    }


}
mostrarDisponibilidad(myArray)





