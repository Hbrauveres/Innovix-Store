// import { createReducer, on } from "@ngrx/store"
// import { productState } from "./products.state"
// import { loadProductsFail, loadProductsSuccess } from "./products.actions"

// const _ProductReducer = createReducer(productState,
//   on(loadProductsSuccess, (state,action)=>{
//     return{
//       ...state,
//       products:action.products,
//       errorMessage: ''
//     }
//   }),
//   on(loadProductsFail, (state,action)=>{
//     return{
//       ...state,
//       products:[],
//       errorMessage: action.errorMessage
//     }
//   })
// )

// export function ProductsReducer(state: any, action: any){
//   return _ProductReducer(state,action)
// }