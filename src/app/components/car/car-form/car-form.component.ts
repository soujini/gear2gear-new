import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Car, Make, Model, Variant, VehicleType, FuelType, TransmissionType, Insurance, Color, Client, Expense } from '../../../data-model';
import { CarService } from '../../../services/car/car.service';
import { MakeService } from '../../../services/make/make.service';
import { ModelService } from '../../../services/model/model.service';
import { VariantService } from '../../../services/variant/variant.service';
import { VehicleTypeService } from '../../../services/vehicle-type/vehicle-type.service';
import { FuelTypeService } from '../../../services/fuel-type/fuel-type.service';
import { TransmissionTypeService } from '../../../services/transmission-type/transmission-type.service';
import { InsuranceService } from '../../../services/insurance/insurance.service';
import { ColorService } from '../../../services/color/color.service';
import { ClientService } from '../../../services/client/client.service';
import { ExpenseService } from '../../../services/expense/expense.service';
import { TransactionTypeService } from '../../../services/transaction-type/transaction-type.service';
import { TransactionDetailsService } from '../../../services/transaction-details/transaction-details.service';
import { UploadFileService } from '../../../services/upload-file/upload-file.service';
import { NgxImageCompressService } from 'ngx-image-compress';
import {debounceTime} from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss'],
})
export class CarFormComponent implements OnInit {
  title: string = "Create Car";
  module: string = "car";
  mode: string = "discard";
  message: string = "";
  message_error: string = "";
  message_td: string = "";
  message_td_success: string = "";
  carForm: FormGroup;
  soldDetailsForm: FormGroup;
  private sub;
  private sub1;
  private sub2;
  // selectedFiles: FileList;
  public selectedFiles: File[] = [];
  images: any = [];

  selectedCar_Id: any;
  submitted = false;
  sold: boolean = false;
  refreshTD: boolean = false;
  inProcess: boolean = false;
  results$: Observable<Car>;
  makes$: Observable<Make>;
  models$: Observable<Model>;
  variants$: Observable<Variant>;
  vehicleTypes$: Observable<VehicleType>;
  fuelTypes$: Observable<FuelType>;
  transmissionTypes$: Observable<TransmissionType>;
  insurances$: Observable<Insurance>;
  colors$: Observable<Color>;
  clients$: Observable<Client>;
  expenses$: Observable<Expense>;
  investors$: Observable<Client>;
  transactionTypes$: Observable<any>;
  total_money_received: number;
  total_money_invested: number;
  tdCount: number;
  imgResultAfterCompress = [];
  imgResultBeforeCompress: string;
  public imageFile: File;
  routeParamsSubscription:Subscription;
  transactionDetails$:Observable<any>;
  transactionDetailProfitandLoss=[];
  total_cost_car:number=0;
  total_credits:string;
  total_debits:string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private carService: CarService,
    private makeService: MakeService,
    private modelService: ModelService,
    private variantService: VariantService,
    private vehicleTypeService: VehicleTypeService,
    private fuelTypeService: FuelTypeService,
    private transmissionTypeService: TransmissionTypeService,
    private insuranceService: InsuranceService,
    private colorService: ColorService,
    private clientService: ClientService,
    private expenseService: ExpenseService,
    private transactionTypeService: TransactionTypeService,
    private transactionDetailsService: TransactionDetailsService,
    private changeDetectorRef: ChangeDetectorRef,
    private uploadFileService: UploadFileService,
    private imageCompress: NgxImageCompressService,
  ) {
    this.createForm();
    this.createSoldDetailsForm();

    this.routeParamsSubscription = this.route.paramMap.subscribe(params => {
      this.carService.selectedCarId.next(parseInt(params.get('id')));
        this.getCarById(parseInt(params.get('id')));
    });

    this.sub = this.carService.selectedCarId
    .subscribe(
      res => {
        if (res != 0) {
          this.selectedCar_Id = res;

          if (this.carService.selectedMode == "Edit") {
            setTimeout(_ => { this.changeDetectorRef.detectChanges() }, 0);
            this.title = "Edit Car"
            this.mode = "delete";
            this.getCarById(res);
            this.carService.transactionDetail.next("true");
          }
        }
      });

      this.sub1 = this.carService.refreshCar
      .subscribe(
        res => {
          if (this.selectedCar_Id > 0) {
            console.log("get car by id  refreshing car after sell", this.selectedCar_Id);
            this.getCarById(this.selectedCar_Id);
          }
        },
        err => {

        }
      );
      this.sub2 = this.transactionDetailsService.refreshTD.subscribe(value =>{
        console.log("refreshing td => get tran details by id   ",this.carService.selectedCarId.getValue());
        this.getTransactionDetailsById(this.carService.selectedCarId.getValue());
      });
    }

    createForm() {
      this.carForm = this.fb.group({
        car_id: [],
        make: ['', [Validators.required]],
        model: ['', [Validators.required]],
        description: [],
        variant: ['', [Validators.required]],//required
        vehicle_type: ['', [Validators.required]],//required
        fuel_type: ['', [Validators.required]],//required
        transmission_type: ['', [Validators.required]],//required
        insurance: [],
        exterior_color: ['', [Validators.required]],
        interior_color: [],
        fuel_economy: [],
        mileage: [null, [Validators.required]],
        make_year: ['', [Validators.required]],//required
        owners: ['', [Validators.required]],
        purchase_price: [null, [Validators.required]],//required
        purchased_from: [null, [Validators.required]],//required
        purchased_on: [null, [Validators.required]],//required
        make_month: [],
        insurance_year: [],
        is_accidental: [],
        is_flooded: [],
        is_sold: [false],
        license_plate: ['', [Validators.required]],
        sold_to: [],//required if sold
        sold_on: [],//required if sold
        selling_price: [], //required if sold
        is_parkandsell: [false],
        is_partnercar: [false],
      });
    }

    createSoldDetailsForm() {
      this.soldDetailsForm = this.fb.group({
        car_id: [],
        sold_to: ['', [Validators.required]],//required if sold
        sold_on: ['', [Validators.required]],//required if sold
        selling_price: ['', [Validators.required]], //required if sold//{value:'', disabled:true}
      })
    }
    upload() {
      this.uploadFileService.uploadfile(this.imageFile, this.selectedCar_Id);
    }

    selectFile(event) {
      this.images = [];
      if (event.target.files && event.target.files[0]) {
        var length = event.target.files.length;
        for (let i = 0; i < event.target.files.length; i++) {
          this.selectedFiles.push(event.target.files[i]);
          var _filename = "imageCar" + Date.now();
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.images.push(event.target.result);//base64???
            this.compressFile(event.target.result, _filename);
          }
          reader.readAsDataURL(event.target.files[i]);
        }
      }
    }
    compressFile(base64URL, filename) {
      var orientation = -1;
      this.imgResultBeforeCompress = base64URL;
      console.warn('Size in bytes was:', this.imageCompress.byteCount(base64URL));
      this.imageCompress.compressFile(base64URL, orientation, 50, 50).then(
        result => {
          this.imgResultAfterCompress.push(result);
          console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
          this.imageFile = this.dataURLtoFile(result, filename);
        });
      }
      dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
      }

      onSubmit() {
        this.submitted = true;
        if (this.carForm.valid) {
          if (this.carService.selectedMode == 'Create') {
            this.getAvailablePoolBalanceAsOfPurchaseDate();
          }
          else if (this.carService.selectedMode == 'Edit') {
            this.updateCar();
          }
        }
      }

      is_sold() {
        if (this.carForm.controls.is_sold.value == false) {
          console.log("Delete Transaction Details");
          this.carService.sold.next(false);
        }
      }

      getCarById(car_id: number) {
        this.carService.getCarById(car_id)
        .subscribe(
          res => {
            this.carService.sold.next(null);
            this.patchForm(res[0]);

            if (res[0].is_parkandsell == true) {
              this.carForm.get('purchased_on').clearValidators();
              this.carForm.get('purchased_on').updateValueAndValidity({ emitEvent: false, onlySelf: true });

              this.carForm.get('purchased_from').clearValidators();
              this.carForm.get('purchased_from').updateValueAndValidity({ emitEvent: false, onlySelf: true });

              this.carForm.get('purchase_price').clearValidators();
              this.carForm.get('purchase_price').updateValueAndValidity({ emitEvent: false, onlySelf: true });
            }

            if (res[0].is_sold == true) {
              this.carForm.disable();
              this.soldDetailsForm.disable();
              // this.carForm.get('purchase_price').disable();
              // this.carForm.get('purchased_on').disable();
              // this.carForm.get('purchased_from').disable();
            }
            else {
              this.carForm.enable();
              this.carForm.get('purchase_price').enable();
              this.carForm.get('purchased_on').enable();
              this.carForm.get('purchased_from').enable();
            }


            this.soldDetailsForm.patchValue({
              car_id: res[0].car_id,
              sold_to: res[0].sold_to,
              sold_on: res[0].sold_on,
              selling_price: res[0].selling_price,

            });
            if (res[0].sold_to != null) {
              this.inProcess = true;
            }
            else {
              this.inProcess = false;
            }
          },
          err => {
            window.scrollTo(0, 0);
            this.message_error = err;
            setTimeout(() => {
              this.message_error = "";
            }, 5000);
            console.log(err);
          }
        );
      }

      getTransactionDetailsBySoldTranType(car_id: any) {
        this.transactionDetailsService.getTransactionDetailsBySoldTranType(car_id)
        .subscribe
        (
          res => {
            this.total_money_received = parseInt(res[0].total_money_received);
          },
          err => {
            console.log(err);
          });
        }
        getTransactionDetailsByPurchaseTranType(car_id: any) {
          this.transactionDetailsService.getTransactionDetailsByPurchaseTranType(car_id)
          .subscribe(
            res => {
              this.total_money_invested = parseInt(res[0].total_money_invested);
            },
            err => {
              console.log(err);
            });
          }

          patchForm(res) {
            this.carForm.patchValue(res);
          }
          getAvailablePoolBalanceAsOfPurchaseDate(){
            var fDate;
            if(this.carForm.get('purchased_on').value && (this.carForm.get('purchased_on').value.indexOf('T') != -1)){
              var formattedDate = this.carForm.get('purchased_on').value.split('T');
              fDate=formattedDate[0].toString();
            }
            else{
              var formattedDate = this.carForm.get('purchased_on').value;
              fDate=formattedDate.toString();
            }

            var debit = 0;
            var total_debits = 0;
            this.transactionDetailsService.getAvailablePoolBalanceAsOfPurchaseDate(fDate)
            .subscribe(
              res => {
                debit = parseInt(this.carForm.get('purchased_on').value.toString().replace( /,/g, "" ));
                console.log("available balance ",res[0].available_balance);
                if(parseInt(res[0].available_balance) < debit)
                {
                  window.scrollTo(0, 0);
                  this.message_error="Insufficient funds in the Gear2Gear Pool - Balance is "+parseInt(res[0].available_balance);
                  // this.opMessage.emit("Insufficient funds in the Gear2Gear Pool - Balance is "+parseInt(res[0].available_balance));

                  setTimeout(() => {
                    // this.opMessage.emit("");
                    this.message_error="";
                  },5000);

                }
                else{
                  this.createCar();
                }
              },
              err => {
                console.log(err);
              },
              () =>{

              }
            );
          }

          createCar() {

            this.carForm.patchValue({
              total_cost: this.carForm.controls.purchase_price.value,
            });
            this.carService.createCar(this.carForm.value)
            .subscribe(
              res => {
                this.autoCreatePurchaseTransactionDetail(res.car_id);
                // this.selectCar(res.car_id);
              },
              err => {
                window.scrollTo(0, 0);
                this.message_error = err;
                setTimeout(() => {
                  this.message_error = "";
                }, 5000);
                console.log(err);
              }
            );
          }

          autoCreateSoldTransactionDetail(){
            var soldTranDetailObj={
              transaction_details_id:0,
              date: this.carForm.get('sold_on').value,
              transaction_type_id:13,
              transaction_type_mode:'credit',
              car_id:this.carForm.get('car_id').value,
              investor_id: null,
              expense_id:null,
              description:"Auto created sold transaction",
              credit:this.carForm.get('selling_price').value,
              debit:null,
              percentage:null
            };
            this.transactionDetailsService.createTransactionDetails(soldTranDetailObj)
            .subscribe(
              res => {
                this.autoCreateTransactionMinusProfits();
                // window.scrollTo(0, 0);
                // this.message = "Sold Transaction Created successfully.";
                // setTimeout(() => {
                //   this.message = "";
                // }, 5000);

                // this.carForm.reset();
                // this.router.navigate(['/car/list']);
                // this.carService.refreshList.next(true);

              },err=>{
                console.log(err);
              },
              () =>{

              });
          }
          autoCreateTransactionMinusProfits(){
            const Profit = parseInt(this.carForm.get('selling_price').value.toString().replace( /,/g, "" )) - this.total_cost_car;

            console.log(this.carForm.get('selling_price').value.toString().replace( /,/g, "" ));
            console.log(this.total_debits);
            alert(this.total_debits);
            var soldTranDetailObj={
              transaction_details_id:0,
              date: this.carForm.get('sold_on').value,
              transaction_type_id:14,
              transaction_type_mode:'debit',
              car_id:this.carForm.get('car_id').value,
              investor_id: null,
              expense_id:null,
              description:"Auto created distributed profits",
              credit:null,
              debit:Profit,
              percentage:null
            };
            this.transactionDetailsService.createTransactionDetails(soldTranDetailObj)
            .subscribe(
              res => {
                this.autoCreateProfitAndLossTransactions();
                // window.scrollTo(0, 0);
                // this.message = "Sold Transaction Created successfully.";
                // setTimeout(() => {
                //   this.message = "";
                // }, 5000);

                // this.carForm.reset();
                // this.router.navigate(['/car/list']);
                // this.carService.refreshList.next(true);

              },err=>{
                console.log(err);
              },
              () =>{

              });
          }

          autoCreateProfitAndLossTransactions(){
            //Calculate Profit
            const Profit = parseInt(this.carForm.get('selling_price').value.toString().replace( /,/g, "" )) - this.total_cost_car;

            //Split Owner Percent and Investors Percent
            const OwnersAmount = 60/100 * Profit;

            //const InvestorsAmount = 40/100 * Profit;
            const InvestorsAmount = Profit - OwnersAmount;

            this.transactionDetailsService.GetInvestorsInvestmentAndPercentDetailsByPurchaseDate(this.carForm.get('purchased_on').value, this.carForm.get('sold_on').value).subscribe(res=>{
              var today = new Date();
              var dd = today.getDate();
              var mm = today.getMonth()+1;
              var yyyy = today.getFullYear();

              if(dd.toString().length == 1){
                var a = "0"+dd.toString();
                dd=parseInt(a);
              }
              if(mm.toString().length == 1){
                var a = "0"+mm.toString();
                mm=parseInt(a, 10)
              }

              this.transactionDetailProfitandLoss=[];
              res.forEach(investor=>{
                var debit =0;
                var credit=0;
                var transaction_type_id=0;
                var transaction_type_mode="";
                var investor_percent = investor.investor_percent;
                // let profitAmount = parseFloat(investor_percent /100) * InvestorsAmount;
                var profitAmount = ((investor_percent /100.00) * InvestorsAmount).toString();
                var description="";

                if(parseFloat(profitAmount) > 0){ //Profit
                  credit = parseFloat(profitAmount);
                  transaction_type_id = 3; //Profit
                  transaction_type_mode = 'credit';
                  description="Profit Earned";
                }
                else{
                  debit = parseFloat(profitAmount);
                  var removeNegativeSign = profitAmount.toString().replace(/-/g, '');
                  debit = parseInt(removeNegativeSign);
                  transaction_type_id = 4; //Loss
                  transaction_type_mode = 'debit';
                  description="Loss Incurred";
                }

                //Patch transaction detail values
                var obj ={
                  investor_id : investor.investor_id,
                  transaction_type_id: transaction_type_id,
                  transaction_type_mode:transaction_type_mode,
                  car_id: this.carForm.get('car_id').value,
                  credit: credit,
                  debit: debit,
                  description:description,
                  // date:yyyy+"-0"+mm+"-"+dd,
                  date:this.carForm.get('sold_on').value,
                  percentage:investor_percent,
                };

                //Add individual to array and bulk send to create P&L details
                //this.transactionDetailsForm.updateValueAndValidity({emitEvent:false, onlySelf:true});
                this.transactionDetailProfitandLoss.push(obj);
              });//End of Investors Foreach

              //CREATE OWNER PROFIT TRANSACTION DETAILS
              var debit =0;
              var credit=0;
              var transaction_type_id=0;
              var transaction_type_mode="";
              let profitAmount = OwnersAmount;
              var description="";

              if(profitAmount > 0){ //Profit
                credit = profitAmount;
                transaction_type_id = 3; //Profit
                transaction_type_mode = 'credit';
                description="Owner Profit Earned";
              }
              else{
                debit = profitAmount;
                var removeNegativeSign = profitAmount.toString().replace(/-/g, '');
                debit = parseInt(removeNegativeSign);
                transaction_type_id = 4; //Loss
                transaction_type_mode = 'debit';
                description="Owner Loss Incurred";
              }

              // this.transactionDetailsForm.patchValue({
              //   investor_id : 1,
              //   transaction_type_id: transaction_type_id,
              //   transaction_type_mode:transaction_type_mode,
              //   car_id: this.carForm.get('car_id').value,
              //   credit: credit,
              //   debit: debit,
              //   description:description,
              //   date:this.carForm.get('sold_on').value,
              //   percentage:null,
              // });
              var profitAndLossTransactionsObj ={
                investor_id : 1,
                transaction_type_id: transaction_type_id,
                transaction_type_mode:transaction_type_mode,
                car_id: this.carForm.get('car_id').value,
                credit: credit,
                debit: debit,
                description:description,
                date:this.carForm.get('sold_on').value,
                percentage:null
              }

              this.transactionDetailProfitandLoss.push(profitAndLossTransactionsObj);
              console.log("P&L details ",this.transactionDetailProfitandLoss);
              // Create P&L Transaction Detail for all investors and Update Car with IS_Sold = true
              this.transactionDetailsService.createTransactionDetailsProfitAndLoss(this.transactionDetailProfitandLoss)
              .pipe(debounceTime(1000),
              distinctUntilChanged())
              .subscribe(
                res => {
                  // this.carService.refreshCar.next(true);
                  this.transactionDetailsService.refreshTD.next(true);
                },
                err=>{
                  console.log("createTransactionDetailsProfitAndLoss ", err);
                }
              ); //End of createTransactionDetailsProfitAndLoss

            },//End of response GetInvestorsInvestmentAndPercentDetails
            err=>{
              console.log("GetInvestorsInvestmentAndPercentDetails =>",err)
            });//End of GetInvestorsInvestmentAndPercentDetails


            // else if(value == false){ //If sold is false delete p&l tran details and update car is sold=false
            //   this.deleteProfitOrLossTransactionDetails();
            // }
          }

          deleteProfitOrLossTransactionDetails(){
            this.transactionDetailsService.deleteProfitOrLossTransactionDetails(this.carService.selectedCarId.getValue())
            .subscribe(
              res => {
                this.transactionDetailsService.refreshTD.next(true);
                this.carService.refreshCar.next(true);
              },
              err =>{

              });
            }

            autoCreatePurchaseTransactionDetail(car_id){
              var purchaseTranDetailObj={
                transaction_details_id:0,
                date: this.carForm.get('purchased_on').value,
                transaction_type_id:12,
                transaction_type_mode:'debit',
                car_id:car_id,
                investor_id: null,
                expense_id:null,
                description:"Auto created purchase transaction",
                credit:null,
                debit:this.carForm.get('purchase_price').value,
                percentage:null
              };
              this.transactionDetailsService.createTransactionDetails(purchaseTranDetailObj)
              .subscribe(
                res => {
                  window.scrollTo(0, 0);
                  this.message = "Created successfully.";
                  setTimeout(() => {
                    this.message = "";
                  }, 5000);

                  this.carForm.reset();
                  this.router.navigate(['/car/list']);
                  // this.carService.refreshList.next(true);

                },err=>{
                  console.log(err);
                },
                () =>{

                });
              }

              updateCar() {
                //Checking to see if cost price has changed and deleting any purchase transactions
                let formControls = this.carForm.controls;
                if (formControls.purchase_price.dirty) {
                  this.transactionDetailsService.deleteTransactionDetailsByTransactionType(12).subscribe(
                    res => {
                      this.transactionDetailsService.refreshTD.next(true);
                      console.log("Successfully deleted");
                    },
                    err => {
                      console.log("Delete Transaction Details", err);
                    }
                  );
                }

                this.carService.updateCar(this.carForm.value)
                .subscribe(
                  res => {
                    window.scrollTo(0, 0);
                    this.message = "Updated successfully.";
                    setTimeout(() => {
                      this.message = "";
                    }, 5000);
                    this.carService.refreshList.next(true);
                  },
                  err => {
                    window.scrollTo(0, 0);
                    this.message_error = err;
                    setTimeout(() => {
                      this.message_error = "";
                    }, 5000);
                    console.log(err);
                  }
                );
              }
               getTransactionDetailsById(car_id:any, mode?:any){
                //this.transactionDetailsForm.reset();
                this.transactionDetails$ = this.transactionDetailsService.getTransactionDetailsById(car_id);
                let total_debits="0.00";
                let total_credits="0.00";

                this.transactionDetails$.subscribe(res=>{
                  this.total_cost_car=0;
                  this.total_money_received=0;
                  this.total_money_invested=0;
                  // this.tdCount.emit(res.length);
                  res.forEach(val=>{

                    if(val.is_void != true){
                      if(val.transaction_type_mode == "credit")
                      {
                        total_credits= (parseFloat(total_credits) +parseFloat(val.credit)).toString();
                      }
                      else if(val.transaction_type_mode == "debit"){
                        total_debits = (parseFloat(total_debits) + parseFloat(val.debit)).toString();
                        this.total_cost_car = this.total_cost_car + parseFloat(val.debit);
                      }

                      if(val.transaction_type_id == 13){
                        this.total_money_received=this.total_money_received + parseFloat(val.credit);
                      }
                      if(val.transaction_type_id == 12){
                        this.total_money_invested=this.total_money_invested + parseFloat(val.debit);
                      }

                      this.total_credits = this.formatCurrencyByVal(total_credits);
                      this.total_debits = this.formatCurrencyByVal(total_debits);

                    }
                  });
                  if(mode == "sold"){
                  this.autoCreateSoldTransactionDetail();
                }
                },
                err=>{
                  console.log(err);
                });
              }
               updateCar2() {

                //Update car with Sold details
                this.carForm.patchValue({
                  car_id: this.selectedCar_Id,
                  sold_to: this.soldDetailsForm.get('sold_to').value,
                  sold_on: this.soldDetailsForm.get('sold_on').value,
                  selling_price: this.soldDetailsForm.get('selling_price').value,
                  is_sold:true
                });

                this.carService.updateCar(this.carForm.value)
                .subscribe(
                  res => {
                    this.inProcess = true;
                     this.getTransactionDetailsById(this.carService.selectedCarId.getValue(),"sold");

                    // this.selectCar(res.car_id);
                  },
                  err => {
                    window.scrollTo(0, 0);
                    this.message_error = err;
                    setTimeout(() => {
                      this.message_error = "";
                    }, 5000);
                    console.log(err);
                  }
                );
              }

              deleteCar(event) {
                if (this.selectedCar_Id) {
                  this.carService.deleteCar(this.selectedCar_Id).subscribe(
                    res => {
                      // this.carService.refreshList.next(true);
                      // this.router.navigate(['/car/list']);
                      this.deleteTransactionDetailsByCarId();
                      console.log("Delete Car : ", res);
                    },
                    err => {
                      console.log(err);
                    }
                  );
                }
                else {
                  this.carForm.reset();
                }
              }
              deleteTransactionDetailsByCarId(){
                if (this.selectedCar_Id) {
                  this.transactionDetailsService.deleteTransactionDetailsByCarId(this.selectedCar_Id).subscribe(
                    res => {
                      this.carService.refreshList.next(true);
                      this.router.navigate(['/car/list']);
                      console.log("Delete TransactionDetails Car : ", res);
                    },
                    err => {
                      console.log(err);
                    }
                  );
                }
                else {
                  this.carForm.reset();
                }
              }
              // selectCar(car_id: number) {
              //   this.carService.selectedMode = 'Edit';
              //   this.router.navigate(['/car/edit/' + car_id]);
              //   setTimeout(() => {
              //     this.carService.selectedCarId.next(car_id);
              //   }, 100);
              // }
              getMakes() {
                this.makes$ = this.makeService.getMakes();
              }
              getModels() {
                this.models$ = this.modelService.getModels();
              }
              getVariants() {
                this.variants$ = this.variantService.getVariants();
              }
              getVehicleTypes() {
                this.vehicleTypes$ = this.vehicleTypeService.getVehicleTypes();
              }
              getFuelTypes() {
                this.fuelTypes$ = this.fuelTypeService.getFuelTypes();
              }
              getTransmissionTypes() {
                this.transmissionTypes$ = this.transmissionTypeService.getTransmissionTypes();
              }
              getInsurances() {
                this.insurances$ = this.insuranceService.getInsurances();
              }
              getColors() {
                this.colors$ = this.colorService.getColors();
              }
              getClients() {
                this.clients$ = this.clientService.getClients();
              }
              getExpenses() {
                this.expenses$ = this.expenseService.getExpenses();
              }
              // getInvestors()  {
              //   this.investors$ = this.clientService.getInvestors();
              // }
              getTransactionTypes() {
                this.transactionTypes$ = this.transactionTypeService.getTransactionTypes();
              }


              formatCurrency1(control) {
                //  var val = this.carForm.controls.expenses.value;
                var val = control.value;
                let x = val.replace(/,/g, "");
                var lastThree = x.substring(x.length - 3);
                var otherNumbers = x.substring(0, x.length - 3);
                if (otherNumbers != '')
                lastThree = ',' + lastThree;
                var res = otherNumbers(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
                control.setValue(res);
              }

              formatCurrency(control) {
                var val = control.value;
                var isValid = /^[0-9,.]*$/.test(val);
                if (isValid == true) {
                  let x = val.toString().replace(/,/g, "");
                  var afterPoint = '';
                  if (x.indexOf('.') > 0)
                  afterPoint = x.substring(x.indexOf('.'), x.length);
                  x = Math.floor(x);
                  x = x.toString();
                  var lastThree = x.substring(x.length - 3);
                  var otherNumbers = x.substring(0, x.length - 3);
                  if (otherNumbers != '')
                  lastThree = ',' + lastThree;
                  var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
                  control.setValue(res);
                }
                else {
                  control.setValue("");
                }
              }

              ProcessSale() {
                // Updates Buyer details and sets inProcess =true
                this.updateCar2();
                // this.transactionDetailsService.getTransactionDetailsByPurchaseTranType(this.selectedCar_Id)
                // .subscribe
                // (
                //   res=>{
                //     this.total_money_invested=parseInt(res[0].total_money_invested);
                //     if(this.total_money_invested < parseInt(this.carForm.get('purchase_price').value.toString().replace( /,/g, "" )))
                //     {
                //       //Message - Please input all tran details iwht option sold to enable
                //       this.message_td = "Please enter transactions with type 'Purchase' to match the Cost Price";
                //       setTimeout(() => {
                //         this.message_td ="";
                //       },5000);
                //     }
                //     else{
                //       console.log("updating car with sold data");
                //       this.updateCar2();
                //     }
                //   },
                //   err=>{
                //     console.log(err);
                //   });
              }

              //on check of isParnandSell
              IsParkAndSell() {
                if (this.carForm.get('is_parkandsell').value == true) {
                  //  if expenses exist and u change to park and sell…set a message saying delete transaction details before changing to park and sell
                  if (this.tdCount > 0) {
                    this.carForm.patchValue({
                      'is_parkandsell': false,
                    });

                    this.message_error = "Please delete the transaction details before changing it to 'Park and Sell'";
                    setTimeout(() => {
                      this.message_error = "";
                    }, 5000);
                  }

                  else {
                    //Disabled partner car
                    this.carForm.patchValue({
                      'is_partnercar': false,
                    });

                    this.carForm.get('purchased_on').clearValidators();
                    // this.carForm.get('purchased_on').disable();
                    this.carForm.get('purchased_on').updateValueAndValidity({ emitEvent: false, onlySelf: true });

                    this.carForm.get('purchased_from').clearValidators();
                    this.carForm.get('purchased_from').updateValueAndValidity({ emitEvent: false, onlySelf: true });

                    this.carForm.get('purchase_price').clearValidators();
                    this.carForm.get('purchase_price').updateValueAndValidity({ emitEvent: false, onlySelf: true });

                    this.carService.updateCar(this.carForm.value);//saving is_parkandsell without saving button
                  }
                }
                else {

                  //enable partner car

                  // this.carForm.get('purchased_on').enable();
                  this.carForm.get('purchased_on').setValidators(Validators.required);
                  this.carForm.get('purchased_on').updateValueAndValidity({ emitEvent: false, onlySelf: true });

                  this.carForm.get('purchased_from').setValidators(Validators.required);
                  this.carForm.get('purchased_from').updateValueAndValidity({ emitEvent: false, onlySelf: true });

                  this.carForm.get('purchase_price').setValidators(Validators.required);
                  this.carForm.get('purchase_price').updateValueAndValidity({ emitEvent: false, onlySelf: true });
                }

              }

              ParkAndSell() {
                this.carForm.patchValue({
                  is_sold: true
                });

                this.carService.updateCar(this.carForm.value)
                .subscribe(
                  res => {
                    this.message_td_success = "Car sold successfully";
                    setTimeout(() => {
                      this.message_td_success = "";
                    }, 5000);
                  },
                  err => {
                    console.log(err);
                  }
                );
              }

              // Sell() {
              //
              //   this.transactionDetailsService.getTransactionDetailsByPurchaseTranType(this.selectedCar_Id)
              //   .subscribe
              //   (
              //     res => {
              //       this.total_money_invested = parseInt(res[0].total_money_invested);
              //       if (this.total_money_invested < parseInt(this.carForm.get('purchase_price').value.toString().replace(/,/g, ""))) {
              //         //Message - Please input all tran details iwht option sold to enable
              //         this.message_td = "Please enter transactions with type 'Purchase' to match the Cost Price of Rs. " + this.carForm.get('purchase_price').value;
              //         setTimeout(() => {
              //           this.message_td = "";
              //         }, 5000);
              //       }
              //       else {
              //         this.bla();
              //       }
              //     },
              //     err => {
              //       console.log(err);
              //     });
              //   }

              // bla() {
              //   //Check if sold tran types is less than SP
              //   this.transactionDetailsService.getTransactionDetailsBySoldTranType(this.selectedCar_Id)
              //   .subscribe
              //   (
              //     res => {
              //       this.total_money_received = parseInt(res[0].total_money_received);
              //       console.log(this.total_money_received);
              //       if (this.total_money_received < parseInt(this.carForm.get('selling_price').value.toString().replace(/,/g, ""))) {
              //         //Message - Please input all tran details iwht option sold to enable
              //         this.message_td = "Please enter transactions with type 'Sold' to match the Selling Price of Rs." + this.carForm.get('selling_price').value;
              //         setTimeout(() => {
              //           this.message_td = "";
              //         }, 5000);
              //       }
              //       else {
              //         //Ready to Create p&L Transactions
              //         this.carService.sold.next(true);
              //         //Process P&L Transactions and mark is_sold = true
              //       }
              //     },
              //     err => {
              //       console.log(err);
              //     });
              //   }

              getTDCount(event) {
                this.tdCount = parseInt(event);
              }

              setMessage(event) {

                this.carForm.patchValue({
                  'is_sold': false,
                });
                window.scrollTo(0, 0);
                this.message_td = event;

              }

              ngOnInit() {
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 500);
                // this.createForm();
                this.getMakes();
                this.getModels();
                this.getVariants();
                this.getVehicleTypes();
                this.getFuelTypes();
                this.getTransmissionTypes();
                this.getInsurances();
                this.getColors();
                this.getClients();
                this.getExpenses();
                // this.getInvestors();
                this.getTransactionTypes();

              }
              ngOnDestroy() {
                this.sub.unsubscribe();
                this.sub1.unsubscribe();
                this.sub2.unsubscribe();
              }
              formatCurrencyByVal(val){
                let val1 = ''+val;
                let x = val1.replace( /,/g, "" );
                var afterPoint = '';
                if(x.indexOf('.') > 0)
                afterPoint = x.substring(x.indexOf('.'),x.length);
                x = Math.floor(parseInt(x)).toString();
                var lastThree = x.substring(x.length-3);
                var otherNumbers = x.substring(0,x.length-3);
                if(otherNumbers != '')
                lastThree = ',' + lastThree;
                var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;
                return res;
              }
            }
