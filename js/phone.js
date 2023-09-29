function searchProducts(searchText) {

    const products = [
      { title: 'phone 1', description: 'description phone 1' },
      { title: 'phone 2', description: 'description phone 2' },
      { title: 'phone 3', description: 'description phone 3' },
    ];
    
    const matchedProducts = [];
  
    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      const title = product.title;
  
      if (title.includes(searchText)) {
        matchedProducts.push(product);
      }
    }
  
  
    return matchedProducts;
  }
  
  
  console.log(searchProducts('search'));