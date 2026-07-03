async function loadLesson(file) {
  const res = await fetch(`../lessons/${file}`);
  const md = await res.text();

  return parseLesson(md);
}

function parseLesson(md) {
  return {
    title: extractTitle(md),
    theory: extractSection(md, "THEORY"),
    task: extractSection(md, "TASK"),
    code: extractCode(md)
  };
}

function extractTitle(md) {
  const match = md.match(/# (.*)/);
  return match ? match[1].trim() : "Lesson";
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
