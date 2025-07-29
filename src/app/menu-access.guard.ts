import { Injectable } from "@angular/core";
import { CanActivate,Router } from "@angular/router";
import { MenuSessionService } from "./menu-session.service";
@Injectable({providedIn:'root'})
export class MenuAccessGuard implements CanActivate{
    constructor(
        private menuSession:MenuSessionService,
        private router:Router
    ){}
    canActivate():boolean{
        if(this.menuSession.hasMenuAccess()){
            return true;
        }
        this.router.navigate(['./sigin']);
        return false;
    }
}