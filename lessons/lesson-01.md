# Lesson 1: Hello Python

## THEORY
Python uses print() to show output.

## TASK
Print your name.

## STARTER CODE
```python
print("Hello")

---

# 🧠 3. LESSON PARSER (upgrade)

## 📄 `/app/lesson-loader.js`

```javascript id="lesson5"
async function loadLesson(file) {
  const res = await fetch(`../lessons/${file}`);
  const md = await res.text();

  return parseLesson(md);
}