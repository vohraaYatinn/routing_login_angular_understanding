import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    if (this.auth.isLogin()){
      this.router.navigate(['/admin/home'])
    }
  }
  loginForm = new FormGroup({
    email:new FormControl(""),
    password:new FormControl("")
  })
  OnSubmit(): void{
    if (this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe((res)=>{this.router.navigate(["admin"])},(err:Error)=>alert("login failed"));
    }
  }
}
