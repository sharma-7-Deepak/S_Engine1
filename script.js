// Function to update the time every second
function updateTime() {
    const timeDisplay = document.getElementById('time');
    setInterval(() => {
        const now = new Date();
        timeDisplay.textContent = now.toString();
    }, 1000);
}

// Update search history display
function updateSearchHistory() {
    const historyList = document.getElementById('search-history-list');
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Clear the current list
    historyList.innerHTML = '';

    // Populate the list with stored history
    searchHistory.forEach((term, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${term}`;
        historyList.appendChild(listItem);
    });
}

// Handle the search action
function handleSearch() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }

    // Get the current search history from localStorage
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

    // Add the new search term to the history
    searchHistory.push(searchTerm);

    // Save the updated search history to localStorage
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

    // Update the displayed search history
    updateSearchHistory();

    // Clear the search input
    searchInput.value = '';
}

// Clear search history
function clearSearchHistory() {
    localStorage.removeItem('searchHistory');
    updateSearchHistory();
}

// Change background color
function changeBackgroundColor() {
    var userColor = prompt('Enter a color (name or hex code):');
    if (userColor !== null && userColor !== '') {
        document.body.style.backgroundColor = userColor;
    }
}

// Attach event listeners to buttons
document.getElementById('search-btn').addEventListener('click', handleSearch);
document.getElementById('clear-history-btn').addEventListener('click', clearSearchHistory);

// Update the search history display when the page loads
updateSearchHistory();

// Update time on page load
updateTime();
