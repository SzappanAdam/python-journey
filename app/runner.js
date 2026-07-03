let inputResolver = null;
let inputQueue = [];
let printInitialized = false;

function setupInput(pyodide) {
  pyodide.globals.set("input", function(promptText) {
    return new Promise((resolve) => {
      inputQueue.push(resolve);

      const inputBox = document.getElementById("inputBox");
      const inputPrompt = document.getElementById("inputPrompt");

      inputPrompt.innerText = promptText;
      inputBox.style.display = "block";
      inputBox.focus();
    });
  });
}

function setupPrint(pyodide) {
  if (printInitialized) return;

  pyodide.runPython(`
import sys

class Console:
    def write(self, text):
        from js import addOutput
        addOutput(text)

    def flush(self):
        pass

sys.stdout = Console()
  `);

  printInitialized = true;
}

function submitInput() {
  const inputBox = document.getElementById("inputBox");
  const value = inputBox.value;

  inputBox.value = "";
  inputBox.style.display = "none";

  const resolve = inputQueue.shift();

  if (resolve) {
    resolve(value);
  }
}

function resetOutput() {
  document.getElementById("output").innerText = "";
}

resetOutput();

async function runCode() {
  console.log("RUN CLICKED");

  const pyodide = await pyodideReady;

  if (!window.editor) {
    console.error("Editor not ready yet");
    return;
  }

  const code = window.editor.getValue();

  resetOutput();

  setupInput(pyodide);
  setupPrint(pyodide);

  try {
    await pyodide.runPythonAsync(code);
  } catch (err) {
    document.getElementById("output").innerText = err;
  }
}