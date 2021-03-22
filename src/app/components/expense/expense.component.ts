import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Expense } from '../../data-model';
import { ExpenseService } from '../../services/expense/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss'],
})
export class ExpenseComponent implements OnInit {
  title : string = "Expense";
  selectedExpense : Expense;

  expenses$: Observable<Expense>;

  constructor(private fb: FormBuilder, private expenseService:ExpenseService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
  }

  // getExpenses()  {
  //   this.expenses$ = this.expenseService.getExpenses();
  // }

  // searchExpenses(searchTerm){
  //   if(searchTerm){
  //     this.expenses$ = this.expenseService.searchExpenses(searchTerm);
  //   }
  //   else{
  //     this.getExpenses();
  //     //this.expenses$ = new EmptyObservable();
  //   }
  // }

}
