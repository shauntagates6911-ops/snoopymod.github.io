document.getElementById("costumesTab").onclick = () => {
  document.querySelectorAll(".editor-screen").forEach(s => s.style.display = "none");
  document.getElementById("costumes-screen").style.display = "block";
};
#costumes-screen {
  background: #1b1b30;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.costume-toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.costume-btn {
  background: #9D4BFF;
  border: none;
  padding: 10px 15px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

.costume-btn:hover {
  background: #B56CFF;
}

.costume-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.costume-item {
  background: #141424;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #9D4BFF;
}
document.getElementById("extensionsTab").onclick = () => {
  document.querySelectorAll(".editor-screen").forEach(s => s.style.display = "none");
  document.getElementById("extensions-screen").style.display = "block";
};
#extensions-screen {
  background: #1b1b30;
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.extensions-category {
  margin-bottom: 25px;
}

.extensions-category h3 {
  color: #C45CFF;
  margin-bottom: 10px;
}

.extension-item {
  background: #141424;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #9D4BFF;
  margin-bottom: 8px;
  cursor: pointer;
}

.extension-item:hover {
  background: #9D4BFF;
}
