import { Component, NgZone } from '@angular/core';
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

  constructor(
    private http: HttpClient,
    private zone: NgZone   // 👈 IMPORTANT
  ) {}

  submitPayment(btn: HTMLButtonElement) {
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
        // ✅ FORCE UI RESET (PROD SAFE)
        this.loading = false;
        btn.disabled = false;
        this.message = 'Payment request sent successfully';
        },
        error: () => {
        this.loading = false;
        btn.disabled = false;
        this.message = 'Something went wrong';
        }
    });
    }

}
