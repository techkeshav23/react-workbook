// function sum (a, b) {
//     return a + b;
// }

async function getData() {
        const response = await fetch('https://fakestoreapi.com/products/');
        const resdata = await response.json();
        return resdata;
    }
    module.exports = getData;     