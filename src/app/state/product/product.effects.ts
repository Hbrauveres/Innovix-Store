// effects/products.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../../services/product.service';
import { createProduct, creationFailure, creationSuccess, loadProducts, loadProductsFailure, loadProductsSuccess } from './product.actions';
import { exhaustMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ProductsResponse } from '../../../models/responses/products-response.model';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private router: Router
  ) {}

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createProduct),
      exhaustMap(action =>
        this.productService.createProduct(action.product).pipe(
          map(response => { if (response.success) {
            return creationSuccess({ message: "Sucesso" });
          } else {
            return creationFailure({ error: "Falha na criação" });
          }}),
          catchError(error => of(creationFailure({ error: error.message })))
        )
      )
    )
  );

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      exhaustMap(action =>
        this.productService.getProducts().pipe(
          map((response: ProductsResponse) => { 
          if (response.success) {
            return loadProductsSuccess({ products: response.products });
          } else {
            return loadProductsFailure({ error: response.error });
          }}),
          catchError(error => of(loadProductsFailure({ error: error.message })))
        )
      )
    )
  );
}