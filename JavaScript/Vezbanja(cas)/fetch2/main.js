const link = "https://fakestoreapi.com/products";

const Load = () =>
  new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", link);
    xhttp.send();
    xhttp.onload = function () {
      resolve(JSON.parse(this.responseText));
    };
    xhttp.onerror = () => {
      reject(this);
    };
  });

const loadProducts = async () => {
  const response = await Load();
  const newArr = response.map((article) => {
    return `<div>${article.title}</div>`;
  });
  newArr.forEach((item) => {
    document.getElementById("container").innerHTML += item;
  });
};

loadProducts();
