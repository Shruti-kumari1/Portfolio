document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-bar");
    skillBars.forEach((bar) => {
        const skillValue = bar.getAttribute("data-skill");
        bar.style.setProperty("--skill-value", skillValue + "%");
        bar.style.width = skillValue + "%";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    console.log("Projects section is loaded!");
    // Add interactivity here if needed
});
// Select all links in the home-link section
const socialLinks = document.querySelectorAll(".home-link a");

// Add an event listener to each link
socialLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const platform = link.title; // Get the title of the link (e.g., "LinkedIn", "GitHub")
    console.log(`Redirecting to ${platform}`);
    // Uncomment the next line to add a confirmation prompt:
    // if (!confirm(`Do you want to visit ${platform}?`)) event.preventDefault();
  });
});

