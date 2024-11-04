import { Component, OnInit } from '@angular/core';
import { loginAction } from '../../data-access/+state/login/login.actions';
import { Store } from '@ngrx/store';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { selectAccessToken } from '../../data-access/+state/login/login.selectors';
import { Router } from '@angular/router';
import { DefaultLoginState } from '../../data-access/+state/login/login.reducer';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  standalone: true,
})
export class LoginComponent implements OnInit {
  username = new FormControl('');
  password = new FormControl('');

  constructor(
    private store: Store<{ login: DefaultLoginState }>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store.select(selectAccessToken).subscribe((token) => {
      if (token && token.length > 0) {
        this.router
          .navigate(['dashboard'])
          .then(() => {
            console.log('Navigation effectuée');
          })
          .catch((err) => {
            console.error('Erreur de navigation:', err);
          });
      }
    });
  }

  login() {
    this.store.dispatch(
      loginAction({
        username: this.username.value ?? '',
        password: this.password.value ?? '',
      })
    );
  }
}
