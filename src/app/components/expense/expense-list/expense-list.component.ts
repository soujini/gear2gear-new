import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';

import { Expense } from '../../../data-model';
import { ExpenseService } from '../../../services/expense/expense.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss'],
})
export class ExpenseListComponent implements OnInit {
  @Input()
  expenses$: Observable<Expense>;

  @Output()
  searchTerm = new EventEmitter();

  selectedExpenseId:number;

  constructor(private expenseService:ExpenseService, private router:Router, private route:ActivatedRoute) {
    this.expenseService.selectedExpenseId.subscribe(res=>{
      this.selectedExpenseId=res;
    },err=>{

    });
  }

  ngOnInit() {
    this.getExpenses();
    this.expenseService.refreshList.subscribe(
      res=>{
          this.getExpenses();
      },
      err => {
        console.log(err);
      }
    );
    // this.router.navigate(['/expense/add']);
  }

  // searchExpenses(search: string){
  //   this.searchTerm.emit(search);
  // }
  getExpenses()  {
    this.expenses$ = this.expenseService.getExpenses();
  }

  searchExpenses(searchTerm){
    if(searchTerm){
      this.expenses$ = this.expenseService.searchExpenses(searchTerm);
    }
    else{
      this.getExpenses();
      //this.expenses$ = new EmptyObservable();
    }
  }

  //On Click of the Add Button
  createExpense(mode:any){
    this.selectedExpenseId=0;
    this.expenseService.selectedMode = mode;
    this.router.navigate(['/expense/add']);
  }

  //On Click of the Edit Button
  selectExpense(expense_id:number, mode:any){
    this.selectedExpenseId=expense_id;
    this.expenseService.selectedMode = mode;
    this.router.navigate(['/expense/edit']);
    setTimeout(() => {
      this.expenseService.selectedExpenseId.next(expense_id);
    }, 100);
  }

}
