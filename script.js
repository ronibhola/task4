document.addEventListener("DOMContentLoaded", () => {
    const trendingMovies = [
        { title: "Movie 1", image: "images/movie1.jpg" },
        { title: "Movie 2", image: "images/movie2.jpg" },
        // Add more movies here
    ];

    const trendingSeries = [
        { title: "Series 1", image: "images/series1.jpg" },
        { title: "Series 2", image: "images/series2.jpg" },
        // Add more series here
    ];

    const recommendedContent = [
        { title: "Recommended 1", image: "images/recommended1.jpg" },
        { title: "Recommended 2", image: "images/recommended2.jpg" },
        // Add more recommended content here
    ];

    function renderContent(contentArray, containerId) {
        const container = document.getElementById(containerId);
        contentArray.forEach(content => {
            const contentItem = document.createElement("div");
            contentItem.className = "content-item";
            contentItem.innerHTML = `
                <img src="${content.image}" alt="${content.title}">
                <h3>${content.title}</h3>
            `;
            contentItem.addEventListener("click", () => {
                localStorage.setItem("selectedContent", JSON.stringify(content));
                window.location.href = "content.html";
            });
            container.appendChild(contentItem);
        });
    }

    renderContent(trendingMovies, "trendingMovies");
    renderContent(trendingSeries, "trendingSeries");
    renderContent(recommendedContent, "recommendedContent");

    const searchBox = document.getElementById("searchBox");
    searchBox.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase();
        const allContentItems = document.querySelectorAll(".content-item");
        allContentItems.forEach(item => {
            const title = item.querySelector("h3").textContent.toLowerCase();
            item.style.display = title.includes(query) ? "" : "none";
        });
    });

    const selectedContent = JSON.parse(localStorage.getItem("selectedContent"));
    if (selectedContent) {
        const contentDetails = document.getElementById("contentDetails");
        if (contentDetails) {
            contentDetails.innerHTML = `
                <img src="${selectedContent.image}" alt="${selectedContent.title}">
                <h2>${selectedContent.title}</h2>
                <p>Details about ${selectedContent.title}...</p>
            `;
        }
    }
});
