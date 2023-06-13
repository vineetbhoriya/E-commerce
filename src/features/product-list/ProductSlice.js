import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts,fetchProductsByFilter,fetchCategory,fetchBrands } from './ProductAPI';

const initialState = {
  products: [],
  status: 'idle',
  totalPage:0,
  brands:[],
  category:[],
};

export const fetchAllProductsAsync = createAsyncThunk('product/fetchAllProducts',
  async () => {
    const response = await fetchAllProducts();
    return response.data;
  }
);
export const fetchBrandsAsyc = createAsyncThunk('product/fetchBrands',
  async () => {
    const response = await fetchBrands();
    return response.data;
  }
);
export const fetchCategoryAsync = createAsyncThunk('product/fetchCategory',
  async () => {
    const response = await fetchCategory();
    return response.data;
  }
);

export const fetchProductsByFilterAsync = createAsyncThunk('product/fetchProductsByFilter',
  async ({filter,sort,pagination}) => {
    const response = await fetchProductsByFilter(filter,sort,pagination);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchCategoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategoryAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchBrandsAsyc.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrandsAsyc.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      })
      .addCase(fetchProductsByFilterAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByFilterAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      });
  },
});

export const { increment } = productSlice.actions;
export const selectAllProducts = (state) => state.product.products;
export const selectBrands = (state) => state.product.brands;
export const selectCategory = (state) => state.product.category;
export const selectTotalItems = (state) => state.product.totalPage;
export default productSlice.reducer;
