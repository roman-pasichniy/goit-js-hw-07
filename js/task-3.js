const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const updateNameOutput = (event) => {
    output.textContent = event.currentTarget.value.trim();

    if (!output.textContent) {
        output.textContent = "Anonymous";
    }
}

input.addEventListener("input", updateNameOutput);