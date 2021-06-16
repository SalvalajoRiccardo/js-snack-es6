const garage = [
    {
        nome : 'cross',
        peso : 10
    },
    {
        nome : 'mountain-bike',
        peso : 12
    },
    {
        nome : 'graziella',
        peso : 38
    }
];

let pesoMin = garage[0];

for (let i = 1; i < garage.length; i++) {
    if (garage[i].peso < pesoMin.peso) {
        pesoMin = garage[i];
    }
}

const { nome, peso } = pesoMin;
console.log(
`
nome bici: ${nome}
peso bici: ${peso}
`
);