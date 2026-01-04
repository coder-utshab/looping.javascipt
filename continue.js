// continue--> skip rest of the code for this itearation
//break --> i am done with this loop.loop end.

for (let i = 1; i < 10; i++) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}

//PS C:\Users\Utshab Ghosh\Documents\GitHub\looping.javascipt> node continue.js
// 2
// 4
// 6
// 8
