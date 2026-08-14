// SnoopyMod Extensions.js
// Cosmic Extension Loader System

// Master extension registry
const SnoopyExtensions = {
  list: [],

  register(ext) {
    this.list.push(ext);
    console.log(`🪐 Loaded extension: ${ext.id}`);
  },

  getAllBlocks() {
    let all = [];
    this.list.forEach(ext => {
      all = all.concat(ext.blocks);
    });
    return all;
  }
};

// -------------------------------
// Scratch‑Inspired Extensions
// -------------------------------

SnoopyExtensions.register({
  id: "scratchMotion",
  name: "Motion Tools",
  color: "#4A9FFF",
  blocks: [
    { name: "moveForward", text: "move forward (steps)" },
    { name: "turnAngle", text: "turn (degrees)" },
    { name: "goToXY", text: "go to x: y:" }
  ]
});

SnoopyExtensions.register({
  id: "scratchLooks",
  name: "Looks Tools",
  color: "#A86CFF",
  blocks: [
    { name: "sayBubble", text: "say (message)" },
    { name: "setColor", text: "set color (value)" }
  ]
});

// -------------------------------
// Advanced SnoopyMod Extensions
// -------------------------------

SnoopyExtensions.register({
  id: "cosmicWarp",
  name: "Cosmic Warp Engine",
  color: "#C45CFF",
  blocks: [
    { name: "warpIntensity", text: "warp intensity (level)" },
    { name: "warpPulse", text: "warp pulse (amount)" }
  ]
});

SnoopyExtensions.register({
  id: "phaseShift",
  name: "PhaseShift Corruption Tools",
  color: "#7A00FF",
  blocks: [
    { name: "phaseShift", text: "phase shift (level)" },
    { name: "corruptSprite", text: "corrupt sprite (amount)" }
  ]
});

// -------------------------------
// Utility / Other Tools Extensions
// -------------------------------

SnoopyExtensions.register({
  id: "spriteTools",
  name: "Sprite Tools",
  color: "#00C2A8",
  blocks: [
    { name: "cloneSprite", text: "clone sprite" },
    { name: "deleteSprite", text: "delete sprite" }
  ]
});

SnoopyExtensions.register({
  id: "audioTools",
  name: "Audio Tools",
  color: "#00C2A8",
  blocks: [
    { name: "playSoundPitch", text: "play sound (pitch)" },
    { name: "stopAllSounds", text: "stop all sounds" }
  ]
});

// -------------------------------
// Inject Extensions Into Editor
// -------------------------------

function loadExtensionsIntoEditor() {
  const extBlocks = SnoopyExtensions.getAllBlocks();
  const container = document.getElementById("extensions-screen");

  const blockArea = document.createElement("div");
  blockArea.className = "extension-block-area";

  extBlocks.forEach(b => {
    const el = document.createElement("div");
    el.className = "extension-block";
    el.style.background = "#9D4BFF";
    el.textContent = b.text;

    blockArea.appendChild(el);
  });

  container.appendChild(blockArea);
}

// Initialize
window.addEventListener("DOMContentLoaded", loadExtensionsIntoEditor);
