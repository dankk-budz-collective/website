import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class PriosService {
	constructor(private http: HttpClient) {
	}

	public getMCPrios(): Observable<any> {
		return this.http.get('https://raw.githubusercontent.com/Cephel/item-prios/master/molten-core.txt', { responseType: 'text' });
	}
}
