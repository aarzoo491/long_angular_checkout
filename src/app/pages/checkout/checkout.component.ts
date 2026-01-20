import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  email: string = '';
  amount: number | null = null;
  loading = false;
  message = '';

  constructor(private http: HttpClient) {}

  submitPayment() {
    if (!this.email || !this.amount) {
      this.message = 'Please enter email and amount';
      return;
    }

    this.loading = true;
    this.message = '';

    this.http.post<any>('/.netlify/functions/pay-now', {
      email: this.email,
      amount: this.amount
    }).subscribe({
      next: (res) => {
        this.message = 'Payment request sent successfully';
        this.loading = false;
      },
      error: (err) => {
        this.message = 'Something went wrong';
        this.loading = false;
      }
    });
  }
}
