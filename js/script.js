// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
  menu.classList.toggle("flex-col");
  menu.classList.toggle("absolute");
  menu.classList.toggle("top-16");
  menu.classList.toggle("right-4");
  menu.classList.toggle("bg-white");
  menu.classList.toggle("p-4");
  menu.classList.toggle("shadow-lg");
  menu.classList.toggle("rounded-lg");
});

// Close menu when link clicked (mobile)
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      menu.classList.add("hidden");
      menu.className = "hidden";
    }
  });
});

// Attach click event to skill cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".skill-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const skill = card.dataset.skill;
      toggleSkill(skill);
    });
  });
});

function toggleSkill(skill) {
  const skillsData = {
    python: [
      "Pandas for data manipulation",
      "Matplotlib & Seaborn for visualization",
      "Exploratory Data Analysis (EDA)",
      "Data cleaning & preprocessing",
      "Jupyter Notebook workflows"
    ],
    excel: [
      "VLOOKUP, XLOOKUP, HLOOKUP",
      "Pivot Tables & Pivot Charts",
      "Advanced formulas & functions",
      "Data cleaning & formatting",
      "Feature engineering in Excel"
    ],
    sql: [
      "SELECT, WHERE, GROUP BY",
      "Joins (INNER, LEFT, RIGHT)",
      "Subqueries & aggregations",
      "Filtering & sorting data"
    ],
    powerbi: [
      "Interactive dashboard creation",
      "Data modeling & relationships",
      "DAX basics (measures & calculated columns)",
      "KPI and performance tracking"
    ]
  };

  const allCards = document.querySelectorAll(".skill-card");

  allCards.forEach(card => {
    const infoBox = card.querySelector(".skill-info");
    const list = infoBox.querySelector("ul");

    // CLICKED CARD
    if (card.dataset.skill === skill) {
      // If already open → close it
      if (!infoBox.classList.contains("hidden")) {
        infoBox.classList.add("hidden");
        card.classList.remove("ring-2", "ring-blue-500", "scale-105");
        return;
      }

      // Otherwise open it
      list.innerHTML = "";
      if (!skillsData[skill]) return;
      skillsData[skill].forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
        li.className = "opacity-0 translate-y-2 transition-all duration-300";
        list.appendChild(li);

        setTimeout(() => {
          li.classList.remove("opacity-0", "translate-y-2");
        }, index * 100);
      });

      infoBox.classList.remove("hidden");
      card.classList.add("ring-2", "ring-blue-500", "scale-105");
    } else {
      // Close other cards
      infoBox.classList.add("hidden");
      card.classList.remove("ring-2", "ring-blue-500", "scale-105");
    }
  });
}
const burger = document.getElementById("burger");
const navMenu = document.getElementById("navMenu");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// close menu when clicking a link (mobile UX)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("show");
    }
  });
});