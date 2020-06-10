var editor = Split(["#left", "#right"], {
  sizes: [33.3, 66.7],
  minSize: 100,
});
// editor.setSizes([50, 50]);
// editor.collapse(0);

Split(["#top-left", "#bottom-left"], {
  direction: "vertical",
  sizes: [33, 33, 33],
  minSize: 20,
});
