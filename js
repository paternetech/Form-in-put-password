const labels = document.queryselectorAll(".form-control label");
labels.forEach((label) => {
    labels.innerHTML = label.innerText
    .split("")
    .map(
        (letter,idx) =>
        `<span style="transition-delay: ${idx*50}ms">${letter}</span>`
    )
    .join("");
});
