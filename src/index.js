import Split from "split.js";

const editor = Split(["#left", "#right"], {
  sizes: [33.3, 66.7],
  minSize: 100,
});
// editor.setSizes([50, 50]);
// editor.collapse(0);

Split(["#top-left", "#bottom-left"], {
  direction: "vertical",
  sizes: [50, 50],
  minSize: 100,
});

//icons8 credit
console.log("Vector from icons8", "https://icons8.com");
console.log("Vector from icons8", "https://icons8.com");
console.log("Vector from icons8", "https://icons8.com");
