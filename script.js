document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var searchQuery = document.getElementById('searchInput').value;
    var encodedSearchQuery = encodeURIComponent(searchQuery);
    var searchUrl = 'https://www.google.com/search?q=' + encodedSearchQuery;
    window.location.href = searchUrl;
});
