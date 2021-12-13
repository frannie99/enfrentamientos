import _ from './node_modules/underscore/underscore';

const equipos = ['R. Madrid', 'Betis', 'Valencia', 'Barcelona'];

/*
R. Madrid vs Betis
Valencia vs Barcelona
*/

const equipos2 = ['R. Madrid', 'Betis', 'Valencia', 'Barcelona', 'Villarreal'];
/*
R. Madrid vs Betis
Valencia vs Barcelona

Villarreal pasa a la siguiente ronda
*/

function getEnfrentamientos(equipos: Array<string>): void {
    var i;
    var cont = 0;
    var j;
    for (let index = 0; index < equipos.length; index++) {
        var equipos3: Array<string> = [].concat(equipos);

        i = Math.floor(Math.random() * equipos.length);
        j = Math.floor(Math.random() * equipos.length);

        var equiposRepetidos: Array<string> = [].concat(equipos);

        if (j != i && cont < 2) {
            console.log(equipos[j] + " vs " + equipos[i]);
            cont++;
            equipos.splice(i, 1);
            equipos.splice(j, 1);
        }

    }

   
}



getEnfrentamientos(equipos);

console.log("---------------------")


