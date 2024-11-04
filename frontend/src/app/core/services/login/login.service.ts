import { HttpClient } from '@angular/common/http';
import {
  LoginRequest,
  LoginResponse,
} from '../../../shared/interfaces/login.interfaces';
import { environment } from '../../../environments/env';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  login(loginRequest: LoginRequest) {
    return this.http.post<LoginResponse>(
      `${environment.baseUrl}/auth/login`,
      loginRequest
    );
  }
}
