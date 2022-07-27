import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from 'src/app/core/services/jwt.service';
import { UserService } from 'src/app/core/services/user.service';
import { SnackBarUtils } from 'src/assets/SnackBarUtils';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authType: String = '';
  title: String = '';
  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router:Router,
    private userService: UserService,
    private jwtService:JwtService,
    private snackBar: MatSnackBar
  ) {
    this.authForm = this.fb.group({
      'emailId': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.route.url.subscribe(data => {

      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;

      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';

      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('name', new FormControl('',[Validators.required]));
      }
    });
  }

  submitForm() {
    console.log(this.authForm)
    this.userService.attemptAuth(this.authType, this.authForm.value).subscribe(
      (data:any) => { 
        console.log(data)
        if(this.authType==='register'){
          this.snackBar.open((SnackBarUtils.MESSAGE_SIGNUP_SUCCESS),SnackBarUtils.action,{duration:SnackBarUtils.duration,panelClass:SnackBarUtils.SNACKBAR_SUCCESS_CLASSNAME});
          this.router.navigate(['login']);  //onSuccess of Register, navigate to login. [TBD-return jwt from backend and navigate to events]
        }
        else{
          this.router.navigate(['events','myEvents']);
          this.jwtService.setToken(data.token);   
        }
      },
      error => {
        this.snackBar.open((error.error.message || SnackBarUtils.MESSAGE_DEFAULT_ERROR),SnackBarUtils.action,{duration:SnackBarUtils.duration,panelClass:SnackBarUtils.SNACKBAR_ERROR_CLASSNAME});
        console.log(error.error.message)
      }
    )
  }
}
