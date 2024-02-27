const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

function highlightText(text, query) {
    const regex = new RegExp(query, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
}

function renderTable(books, query = '') {
    const tablebody = document.getElementById("html-data-table").getElementsByTagName('tbody')[0];
    tablebody.innerHTML = ''; 
    
    books.forEach(book => {
        if (query && !Object.values(book).some(value => String(value).toLowerCase().includes(query.toLowerCase()))) {
            return; 
        }

        const row = tablebody.insertRow();

        const idCell = row.insertCell();
        idCell.textContent = book.id;

        const titleCell = row.insertCell();
        titleCell.innerHTML = highlightText(book.title, query);

        const authorCell = row.insertCell();
        authorCell.innerHTML = highlightText(book.author, query);

        const yearCell = row.insertCell();
        yearCell.textContent = book.year;
    });
}

function table() {
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener('input', function() {
        renderTable(books, this.value);
    });

    renderTable(books); 
}

table();