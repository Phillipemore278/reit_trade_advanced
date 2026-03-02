document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("sidebarToggle");
    const sidebar = document.querySelector(".sidebar");
    const backdrop = document.querySelector(".sidebar-backdrop");

    function closeSidebar() {
        sidebar.classList.remove("show");
    }

    if (toggleBtn) {
        toggleBtn.addEventListener("click", function () {
            sidebar.classList.toggle("show");
        });
    }

    if (backdrop) {
        backdrop.addEventListener("click", closeSidebar);
    }

    // Close on link click (mobile)
    document.querySelectorAll(".sidebar .nav-link").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 992) {
                closeSidebar();
            }
        });
    });

    // chartjs
    // ===== PORTFOLIO SNAPSHOT CHART =====
    const portfolioCanvas = document.getElementById("portfolioChart");
    const portfolioLabelsEl = document.getElementById("snapshot-labels");
    const portfolioValuesEl = document.getElementById("snapshot-values");
    console.log("Portfolio labels element:", document.getElementById("portfolio-labels"));

    if (portfolioCanvas && portfolioLabelsEl && portfolioValuesEl) {
        const labels = JSON.parse(portfolioLabelsEl.textContent);
        const values = JSON.parse(portfolioValuesEl.textContent);

        new Chart(portfolioCanvas, {
            type: "line",
            data: {
                labels: labels,
                datasets: [{
                    label: "Portfolio Value",
                    data: values,
                    borderColor: getComputedStyle(document.documentElement)
                        .getPropertyValue("--color-primary"),
                    backgroundColor: "transparent",
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        ticks: {
                            callback: value => "$" + value.toLocaleString()
                        },
                        grid: {
                            color: "rgba(0,0,0,0.05)"
                        }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // ===== ALLOCATION CHART =====
    const allocationCanvas = document.getElementById("allocationChart");
    const allocationLabelsEl = document.getElementById("allocation-labels");
    const allocationValuesEl = document.getElementById("allocation-values");

    if (allocationCanvas && allocationLabelsEl && allocationValuesEl) {
        const labels = JSON.parse(allocationLabelsEl.textContent);
        const values = JSON.parse(allocationValuesEl.textContent);

        new Chart(allocationCanvas, {
            type: "doughnut",
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: [
                        getComputedStyle(document.documentElement)
                            .getPropertyValue("--color-primary"),
                        getComputedStyle(document.documentElement)
                            .getPropertyValue("--color-success"),
                        getComputedStyle(document.documentElement)
                            .getPropertyValue("--color-warning")
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                cutout: "65%"
            }
        });
    }



    const reitCtx = document.getElementById("reitPriceChart");

    if (reitCtx) {
        new Chart(reitCtx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                datasets: [{
                    label: "Price",
                    data: [78.5, 80.2, 81.0, 82.3, 81.8, 83.5, 82.5],
                    borderColor: getComputedStyle(document.documentElement)
                        .getPropertyValue("--color-primary"),
                    backgroundColor: "transparent",
                    tension: 0.4,
                    borderWidth: 2,
                    pointRadius: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        ticks: {
                            callback: value => "$" + value.toLocaleString()
                        },
                        grid: { color: "rgba(0,0,0,0.05)" }
                    },
                    x: { grid: { display: false } }
                }
            }
        });
    }


    const stockCtx = document.getElementById("stockPriceChart");

    if (stockCtx) {
        new Chart(stockCtx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                datasets: [{
                    label: "Price",
                    data: [150, 155, 162, 165, 168, 170, 172.5],
                    borderColor: getComputedStyle(document.documentElement)
                        .getPropertyValue("--color-primary"),
                    backgroundColor: "transparent",
                    tension: 0.3,
                    borderWidth: 2,
                    pointRadius: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        ticks: {
                            callback: value => "$" + value.toLocaleString()
                        },
                        grid: { color: "rgba(0,0,0,0.05)" }
                    },
                    x: { grid: { display: false } }
                }
            }
        });
    }



});



