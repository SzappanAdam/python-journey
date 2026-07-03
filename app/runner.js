let pyodideReady = loadPyodide();

let inputResolver = null;

// INPUT override
function setupInput(pyodide) {
  pyodide.globals.set("input", function(promptText) {
    return new Promise((resolve) => {
      inputResolver = resolve;

      const inputBox = document.getElementById("inputBox");
      const inputPrompt = document.getElementById("inputPrompt");

      inputPrompt.innerText = promptText;
      inputBox.style.display = "block";
      inputBox.focus();
    });
  });
}

function submitInput() {
  const inputBox = document.getElementById("inputBox");
  const value = inputBox.value;

  inputBox.value = "";
  inputBox.style.display = "none";

  if (inputResolver) {
    inputResolver(value);
    inputResolver = null;
  }
}

function setupPrint(pyodide) {
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
}

window.addOutput = function(text) {
  const output = document.getElementById("output");
  output.innerText += text;
};

async function runCode() {
  const pyodide = await pyodideReady;

  document.getElementById("output").innerText = "";

  setupInput(pyodide);
  setupPrint(pyodide);

  const code = editor.getValue();

  try {
    await pyodide.runPythonAsync(code);
  } catch (err) {
    document.getElementById("output").innerText = err;
  }
}