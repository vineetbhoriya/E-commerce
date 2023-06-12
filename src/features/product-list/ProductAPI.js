// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:3000/products")
    const data = await responce.json()
    resolve({ data })
  }
  );
}

export function fetchProductsByFilter(filter) {
  let queryString= '';
  for(let key in filter){
    queryString += `${key}=${filter[key]}&`; 
  }
  console.log("q",queryString);
  return new Promise(async (resolve) => {
    const responce = await fetch("http://localhost:3000/products?"+queryString);
    const data = await responce.json()
    console.log(data);
    resolve({ data })
    
  }
  );
}
