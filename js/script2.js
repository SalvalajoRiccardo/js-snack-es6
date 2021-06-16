const squadre = [
    {
        nome : 'juventus',
        punti : 0,
        falli : 0
    },
    {
        nome : 'milan',
        punti : 0,
        falli : 0
    },
    {
        nome : 'inter',
        punti : 0,
        falli : 0
    }
]

  

for (let i = 0; i < squadre.length; i++) {
    const randomNum = () => Math.floor(Math.random() * 10)
    squadre[i].punti = randomNum();
    squadre[i].falli = randomNum();
}

console.log(squadre);

const sqFalli = [];
for (let i = 0; i < squadre.length; i++) {
    const { nome, falli } = squadre[i];
    sqFalli.push(nome, falli);
}
console.log(sqFalli);