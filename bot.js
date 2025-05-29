const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;


const botSay = (data) => {
    return [
        "Perkenalkan nama saya fauzanbot. siapa nama kamu?",
        `Halo ${data?.nama}, berapa usia kamu?`,
        `Oh ${data?.usia}, hobi kamu apa ya?`,
        `waww sama dong aku juga hobi ${data?.hobi}, btw punya pacar gak?`,
        `ohh ${data?.pacar}, ya udah kalau gitu. udahan yah?`,
    ]
}

pertanyaan.innerHTML = botSay()[0];

let usersData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
    } else if (init === 2) {
        botDelay({ usia: jawaban.value })
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value })
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value })
    } else if (init === 5) {
        finishing()
    }
    else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    console.log({usersData: usersData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init];
    }, 1250);
    usersData.push(jawaban.value)
    jawaban.value = "";
}

function finishing() {
    pertanyaan.innerHTML = `Thank u ya ${usersData[0]} udah main ke fauzanbot 😉, kali-kali kita main ${usersData[2]} bareng ya!`
    jawaban.value = "siap thanks juga!";
}

function botEnd() {
    window.location.reload();
}