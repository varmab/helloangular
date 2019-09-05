import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Book } from "./models/book.interface";

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class BooksLibraryService{
    
    constructor(private http:Http){}
    
    getBooks():Observable<Book[]>{
        return this.http
                    .get('/api/books')
                    .map((response:Response)=>{
                        return response.json();
                    })
    }
}