let editor;

require.config({
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs"
  }
});

require(["vs/editor/editor.main"], function () {

  editor = monaco.editor.create(document.getElementById("editor"), {
    value: "",
    language: "python",
    theme: "vs-dark",
    automaticLayout: true
  });
  window.editor = editor;
  
  initLesson(); // <- FONTOS: itt hívjuk meg
});

async function initLesson() {
  const lesson = await loadLesson("lesson-01.md");

  document.getElementById("theory").innerHTML = lesson.theory;
  document.getElementById("task").innerHTML = lesson.task;

  editor.setValue(lesson.code);
}

document.getElementById("lesson-title").innerText = lesson.title;