const sampleProducts = [
 { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
 { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
 { id: 3, name: 'Shirt', category: 'Apparel', price: 50 },
 { id: 4, name: 'Shoes', category: 'Apparel', price: 80 },
 { id: 5, name: 'Watch', category: 'Accessories', price: 200 },
];

function getProductsByCategory(products, category) {
 /**
  * TODO:
  * Gunakan metode array immutable untuk mengembalikan array produk yang termasuk dalam kategori yang diberikan.
  */
 const filteredProducts = products.filter(product => product.category === category);
 return filteredProducts;
}

function findProductById(products, id) {
 /**
  * TODO:
  * Gunakan metode array immutable untuk mengembalikan produk dengan ID yang cocok.
  */
 const product = products.find(product => product.id === id);
 return product;
}

function calculateTotalPrice(products) {
 /**
  * TODO:
  * Gunakan metode array immutable untuk menghitung total harga semua produk.
  */
 const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
 return totalPrice;
}

function applyDiscount(products, discount) {
 /**
  * TODO:
  * Gunakan metode array immutable untuk mengembalikan array baru,
  * di mana setiap produk memiliki harga yang sudah dikurangi dengan diskon yang diberikan.
  */
  const productsWithDiscount = products.map(product => ({ ...product, price: product.price * (1 - discount / 100) }));
  return productsWithDiscount;
}

console.log(getProductsByCategory(sampleProducts, 'Electronics')); // Should return products with id 1 and 2
console.log(calculateTotalPrice(sampleProducts)); // Should return 1830
console.log(applyDiscount(sampleProducts, 10)); // Should return products with prices reduced by 10%
console.log(findProductById(sampleProducts, 3)); // Should return the product with id 3
