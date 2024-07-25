import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomService } from '../../services/custom.service';
import { HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  username:string
  password:string
re=["admin","customer"]
  role: any;

  constructor(private fb: FormBuilder,private customserv:CustomService,private route:Router) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role:['',[Validators.required]]
    }, );
  }

  //passwordMatchValidator(form: FormGroup) {
   // return form.get('password').value === form.get('confirmPassword').value ? null : { mismatch: true };
  //}

  onSubmit() {
     
      // Handle registration
      let data = {
        id:0,
        password:this.password,
        username:this.username,
        role:this.role
        
        
      }
      
      
      console.log(data);
      this.customserv.addUser(this.registerForm.value).subscribe(Response=>console.log(Response),
          error=>console.log(error))
      console.log(this.registerForm.value);
      alert("User Registered")
      this.route.navigate(['/login'])
    }
  
}