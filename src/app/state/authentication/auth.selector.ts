import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Customer } from '../../../models/customer.model';

const getCustomerState = createFeatureSelector<Customer>('customer');

export const getCustomerData = createSelector(getCustomerState, (state) => {
  return state;
});
