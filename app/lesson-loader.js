async function loadLesson(file) {
  const res = await fetch(`../lessons/${file}`);
  const md = await res.text();

  const lesson = parseLesson(md);

  document.getElementById("lesson-title").innerText = lesson.title;
  document.getElementById("lesson-content").innerHTML = lesson.html;

  return lesson.code;
}

function parseLesson(md) {
  const titleMatch = md.match(/# (.*)/);
  const codeMatch = md.match(/```python([\s\S]*?)```/);

  const title = titleMatch ? titleMatch[1] : "Lesson";
  const code = codeMatch ? codeMatch[1].trim() : "";

  // remove code blocks for HTML content
  let html = md
    .replace(/```python[\s\S]*?```/g, "")
    .replace(/# (.*)/, "<h2>$1</h2>")
    .replace(/\n/g, "<br>");

  return {
    title,
    code,
    html
  };
}