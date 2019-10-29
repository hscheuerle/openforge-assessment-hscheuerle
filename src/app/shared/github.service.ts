import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as parseLinkHeader from 'parse-link-header';
import { map } from 'rxjs/operators';
import { UserBasic } from '../actions/github.actions';

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
        Accept: 'application/vnd.github.v3.text-match+json',
        'Content-Type': 'application/json',
        Authorization: `token ${this.devToken}`,
      },
      observe: 'response',
    };
  }

  requestUsers(sinceId: string) {
    return this.http.get<UserBasic[]>('https://api.github.com/users', {
      headers: this.options.headers,
      observe: this.options.observe,
      params: {
        since: sinceId
      }
    }).pipe(
      map((res: HttpResponse<UserBasic[]>) => {
        const linkHeader = res.headers.get('Link');
        const links = parseLinkHeader(linkHeader);
        const { since } = links.next;
        return { users: res.body, since };
      })
    );
  }

  searchUser(input) {
    return this.http.get('https://api.github.com/search/users', {
      headers: this.options.headers,
      params: {
        q: `${input}+type:user`
      }
    });
  }

  getUser(username) {
    return this.http.get(`https://api.github.com/users/${username}`, {
      headers: this.options.headers,
    });
  }
}

