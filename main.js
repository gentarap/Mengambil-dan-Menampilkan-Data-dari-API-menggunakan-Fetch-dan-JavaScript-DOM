const postContainer = document.getElementById("postContainer");
const loadingText = document.getElementById("loading");

function loadPosts() {
  // Tampilkan teks loading
  loadingText.style.display = "block";
  postContainer.innerHTML = "";

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Gagal mengambil data.");
      }
      return response.json();
    })
    .then((posts) => {
      loadingText.style.display = "none";
      posts.forEach((post) => {
        const postEl = document.createElement("div");
        postEl.classList.add("post");

        postEl.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        `;

        postContainer.appendChild(postEl);
      });
    })
    .catch((error) => {
      loadingText.innerText = "Gagal memuat data.";
      console.error("Error:", error);
    });
}

// Panggil saat halaman pertama kali dimuat
document.addEventListener("DOMContentLoaded", loadPosts);
