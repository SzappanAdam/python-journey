let editor;

require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.44.0/min/vs" }});

require(["vs/editor/editor.main"], function () {

  const defaultCode = loadLesson("lesson-01");

  editor = monaco.editor.create(document.getElementById("editor"), {
    value: defaultCode,
    language: "python",
    theme: "vs-dark",
    automaticLayout: true
  });

});

async function initLesson() {
  const lesson = await loadLesson("lesson-01.md");

  document.getElementById("theory").innerHTML = lesson.theory;
  document.getElementById("task").innerHTML = lesson.task;

  editor.setValue(lesson.code);
}