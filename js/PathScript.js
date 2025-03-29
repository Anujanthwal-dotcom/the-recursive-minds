function toggleCard(id) {
    let content = document.getElementById("content-" + id);
    let arrow = document.getElementById("arrow-" + id);

    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.classList.remove("rotate");
    } else {
        content.style.display = "block";
        arrow.classList.add("rotate");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const contentButtons = document.querySelectorAll(".arrow"); // Select all buttons with the class "arrow"

    contentButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent.trim() === "Expand") {
                button.textContent = "Collapse";
            } else {
                button.textContent = "Expand";
            }
        });
    });
});