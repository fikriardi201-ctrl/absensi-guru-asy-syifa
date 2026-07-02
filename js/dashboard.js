const nama = localStorage.getItem("nama");
const jabatan = localStorage.getItem("jabatan");

if (!nama) {
    window.location.href = "index.html";
}

document.getElementById("nama").innerHTML = nama;
document.getElementById("jabatan").innerHTML = jabatan;

async function absen() {

    const status = document.getElementById("status");
    status.innerHTML = "Mengirim absensi...";

    try {

        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                action:"absen",
                nama:nama,
                jabatan:jabatan
            })
        });

        const hasil = await response.json();

        status.innerHTML = hasil.pesan;

    } catch (e) {

        status.innerHTML = "Gagal terhubung ke server.";

    }

}

function logout(){

    localStorage.clear();

    window.location.href="index.html";

}
