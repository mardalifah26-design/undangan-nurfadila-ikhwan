// ==============================
// NAMA TAMU OTOMATIS
// ==============================

const urlParams = new URLSearchParams(window.location.search);

const nama = urlParams.get("to");

if(nama){

    document.getElementById("namaTamu").innerHTML =
    decodeURIComponent(nama);

}


// ==============================
// COUNTDOWN PERNIKAHAN
// ==============================

const tanggalPernikahan = new Date(
"July 16, 2026 10:00:00"
).getTime();



function countdown(){

    const sekarang = new Date().getTime();


    const jarak =
    tanggalPernikahan - sekarang;


    if(jarak < 0){

        return;

    }


    const hari =
    Math.floor(
    jarak/(1000*60*60*24)
    );


    const jam =
    Math.floor(
    (jarak%(1000*60*60*24))/
    (1000*60*60)
    );


    const menit =
    Math.floor(
    (jarak%(1000*60*60))/
    (1000*60)
    );


    const detik =
    Math.floor(
    (jarak%(1000*60))/1000
    );


    const elemen =
    document.getElementById("countdown");


    if(elemen){

        elemen.innerHTML =
        hari+" Hari "+
        jam+" Jam "+
        menit+" Menit "+
        detik+" Detik";

    }

}



setInterval(countdown,1000);

countdown();


// ==============================
// EFEK BUKA HALAMAN
// ==============================


window.addEventListener(
"load",
()=>{

document.body.style.opacity="1";

}
);
