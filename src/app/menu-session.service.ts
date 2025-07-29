import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
@Injectable({providedIn:'root'})
export class MenuSessionService{
    private hasAccess=false;
    constructor(private router:Router){

    }
    grantMenuAccess(){
        this.hasAccess=true;
        this.router.navigate(['/add-plat']);
    }
    revokeMenuAccess(){
        this.hasAccess=false;
        this.router.navigate(['/sigin']);
    }
    hasMenuAccess():boolean{
        return this.hasAccess;
    }
}