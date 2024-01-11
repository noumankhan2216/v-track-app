import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthOptions, NbAuthService, NbRegisterComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent {

  constructor(
    service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options: NbAuthOptions,
    cd: ChangeDetectorRef,
    router: Router,
    private _auth: AuthService, ) {
    super(service, options, cd, router);
  }

  submit(){
    const body = {
      "firstName": this.user.firstName,
      "lastName": this.user.lastName,
      "password": this.user.password,
      "email": this.user.email
    }
    console.log(body);
    this._auth.register(body).subscribe((res: any) => {
      if(res.msg === 'User registered successfully') {
        this.router.navigate(['auth/login']);
      }
    })
  }

}
