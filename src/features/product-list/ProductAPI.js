// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:8080/products")
    const data = await responce.json()
    resolve({ data })
  }
  );
}

export function fetchProductsByFilter(filter, sort, pagination) {
  let queryString = '';
  for (let key in filter) {
    const categoryValue = filter[key];
    if (categoryValue.length) {
      const lastValue = categoryValue[categoryValue.length - 1]
      queryString += `${key}=${lastValue}&`;
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:3000/products?" + queryString);
    const data = await responce.json()
    const totalPage = await responce.headers.get('X-Total-Count')
    resolve({ data: { products: data, totalPage: +totalPage } })
  }
  );
}

export function fetchCategory() {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:3000/category")
    const data = await responce.json()
    resolve({ data })
  }
  );
}
export function fetchBrands() {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:3000/brands")
    const data = await responce.json()
    resolve({ data })
  }
  );
}