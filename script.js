// Simple products data - you can replace with Google Sheets later
const products = [
    {
        name: "Barcelona Jersey 2024",
        price: "$12",
        image: "https://images.unsplash.com/photo-1600674845588-70ceb83b8ecf?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        category: "Jerseys"
    },
    {
        name: "Soccer Cleats", 
        price: "$99",
        image: "https://images.unsplash.com/photo-1579758682664-5b1e5a5e3d2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        category: "Shoes"
    }
];

// Display products
function displayProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" style="width:100%; height:200px; object-fit:cover; border-radius:5px;">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p><small>${product.category}</small></p>
            <button onclick="contactUs('${product.name}')" style="background:#FF8C00; color:white; border:none; padding:10px; width:100%; border-radius:5px; margin-top:10px; cursor:pointer;">
                Contact to Order
            </button>
        </div>
    `).join('');
}

// Simple contact function
function contactUs(productName) {
    const message = `Hi, I want to order: ${productName}`;
    const phone = "855123456789"; // Your phone number
    window.open(`https://t.me/share/url?url=&text=${encodeURIComponent(message)}`, '_blank');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', displayProducts);