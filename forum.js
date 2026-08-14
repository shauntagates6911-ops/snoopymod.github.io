// SnoopyMod Forums.js
// LocalStorage-based forum system

// Load existing threads or create empty array
let threads = JSON.parse(localStorage.getItem("snoopy_forums_threads")) || [];

// Save threads to LocalStorage
function saveThreads() {
  localStorage.setItem("snoopy_forums_threads", JSON.stringify(threads));
}

// Create a new thread
function createThread(title, content, author) {
  const cleanTitle = censorText(title);
  const cleanContent = censorText(content);

  const newThread = {
    id: Date.now(),
    title: cleanTitle,
    content: cleanContent,
    author: author || "Anonymous",
    created: new Date().toLocaleString()
  };

  threads.unshift(newThread);
  saveThreads();
  renderThreads();
}

// Render all threads to the page
function renderThreads() {
  const container = document.getElementById("threadsContainer");
  container.innerHTML = "";

  threads.forEach(thread => {
    const div = document.createElement("div");
    div.className = "thread";

    div.innerHTML = `
      <h3>${thread.title}</h3>
      <p>${thread.content}</p>
      <span class="meta">Posted by ${thread.author} • ${thread.created}</span>
    `;

    container.appendChild(div);
  });
}

// Handle new thread creation UI
function setupCreatePostButton() {
  const btn = document.getElementById("createPostBtn");

  btn.onclick = () => {
    const title = prompt("Thread Title:");
    const content = prompt("Thread Content:");

    if (!title || !content) return;

    const user = getCurrentUser(); // from account.js
    const author = user ? user.username : "Guest";

    createThread(title, content, author);
  };
}

// Initialize forum page
window.onload = () => {
  renderThreads();
  setupCreatePostButton();
};
