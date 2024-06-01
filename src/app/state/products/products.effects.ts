import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../../../services/product.service";
import { loadProducts, loadProductsSuccess, loadProductsFail } from "./products.actions";
import { catchError, exhaustMap, from, map, of } from "rxjs";

@Injectable()
export class ProductsEffects{
  constructor(private action$: Actions, private service: ProductService){

  }

  _loadProducts = createEffect(() =>
    this.action$.pipe(
      ofType(loadProducts),
      exhaustMap((action) => {
        return from(this.service.getProducts()).pipe(
          map((data)=>{
            return loadProductsSuccess({products:data})
          }),
          catchError((_err)=>of(loadProductsFail({errorMessage:_err.message})))
        )
      })
    )
  )
}
