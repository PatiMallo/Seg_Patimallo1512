export const fetchProducts = async () => {
    const response = await fetch('/src/data/products.json');
    const data = await response.json();
    return data;
};
