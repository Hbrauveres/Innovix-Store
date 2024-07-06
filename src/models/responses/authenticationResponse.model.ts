import { Customer } from '../customer.model';

export interface AuthenticationResponse {
  success: boolean;
  customer: Customer | null;
  errorMessage: string;
}
