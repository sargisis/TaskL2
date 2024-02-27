const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
    
];
  

function table() {
    const tablebody = document.getElementById("html_data_table");

    products.forEach( product  => {
        const row = tablebody.insertRow();

        const idCell = row.insertCell();
        idCell.textContent = product.id;

        const nameId = row.insertCell();
        nameId.textContent = product.name;

        const categoryId = row.insertCell();
        categoryId.textContent = product.category;

        const priceId = row.insertCell();
        priceId.textContent = product.price;

        const tagsId = row.insertCell();
        tagsId.textContent = product.tags;

    });
}
table();