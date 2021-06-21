import { Observable } from "rxjs";
import { fromFetch } from 'rxjs/fetch';
import { switchMap } from 'rxjs/operators';

export class UserService {
    public static getUsers<T>(url: string): Observable<T>
    {
        return fromFetch(url).pipe(
            switchMap(response => {
                if (!response.ok)
                    throw new Error(response.statusText);
                return response.json();
            })
        );
    }
}