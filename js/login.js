async function login() {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const status = document.getElementById("status");
  status.innerHTML = "Sedang login...";

  try {

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action: "login",
        username: username,
        password: password
      })
    });

    const hasil = await response.json();

    if (hasil.status) {

      localStorage.setItem("nama", hasil.nama);
      localStorage.setItem("jabatan", hasil.jabatan);

      window.location.href = "dashboard.html";

    } else {

      status.innerHTML = "Username atau Password salah.";

    }

  } catch (err) {

    status.innerHTML = "Tidak dapat terhubung ke server.";

  }

}
