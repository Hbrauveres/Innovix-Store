import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsModel } from "../../../models/product.model";

const getProductsState = createFeatureSelector<ProductsModel>('products');

export const getProductsList = createSelector(getProductsState, (state)=>{
  return state.products;
})