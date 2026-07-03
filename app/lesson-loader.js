async function loadLesson(file) {
  const res = await fetch(`../lessons/${file}`);
  const md = await res.text();

  const lesson = parseLesson(md);

  document.getElementById("lesson-title").innerText = lesson.title;
  document.getElementById("lesson-content").innerHTML = lesson.html;

  return lesson.code;
}

function parseLesson(md) {
  const theory = extractSection(md, "THEORY");
  const task = extractSection(md, "TASK");
  const code = extractCode(md);

  return {
    theory,
    task,
    code
  };
}

function extractSection(md, section) {
  const regex = new RegExp(`## ${section}([\\s\\S]*?)(##|$)`);
  const match = md.match(regex);
  return match ? match[1].trim() : "";
}

function extractCode(md) {
  const match = md.match(/```python([\s\S]*?)```/);
  return match ? match[1].trim() : "";
}