import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class DatabaseService {

    constructor(private http: Http) {

    }

    saveData(data) {
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('https://akash-learning-ng.firebaseio.com/data.json', data,
            {headers: headers});
    }

    getData() {
        return this.http.get('https://akash-learning-ng.firebaseio.com/data.json');
    }

}
