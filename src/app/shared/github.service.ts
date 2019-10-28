import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as parseLinkHeader from 'parse-link-header';
import { map } from 'rxjs/operators';

// TODO: move devtoken to provider

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  devToken: string;
  options;

  constructor(private http: HttpClient) {
    this.devToken = environment.devToken;
    this.options = {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        Authorization: `token ${this.devToken}`,
      },
      observe: 'response',
    };
  }

  requestUsers(sinceId: string) {
    return this.http.get('https://api.github.com/users', {
      headers: this.options.headers,
      observe: this.options.observe,
      params: {
        since: sinceId
      }
    }).pipe(
      map((res: HttpResponse<any>) => {
        const linkHeader = res.headers.get('Link');
        const links = parseLinkHeader(linkHeader);
        const { since } = links.next;
        console.log(res.body);
        return { users: res.body, since };
      })
    );
  }
}

