/* import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SharedService {
    messageSource: BehaviorSubject<string> = new BehaviorSubject('');
    constructor() { }
} */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
    private login$ = new BehaviorSubject<any>({});
    selectedlogin$ = this.login$.asObservable();

    setlogin(login: any) {
        console.log("serlogin")
        this.login$.next(login);
    }
}