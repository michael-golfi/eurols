import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Client, SearchResponse, SearchParams, SearchTemplateParams } from 'elasticsearch';

export declare type SearchResults = SearchResult[];

export interface SearchResult {
  title: string;
  description: string;
}

@Injectable()
export class SearchService {
  private baseUrl: string = "localhost:9200";
  private logLevel: string = "trace";
  private client: Client;

  constructor(private jsonp: Jsonp) {
    this.client = new Client({
      host: this.baseUrl,
      log: this.logLevel
    });
  }

  searchElastic(query: SearchParams): Observable<SearchResponse<any>> {
    let resp: PromiseLike<SearchResponse<any>> = this.client.search(query);
    return Observable.from(resp);
  }

  /**
   * Search and return results
   */
  search(term: string) {
    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    // TODO: Add error handling
    return this.jsonp
      .get(wikiUrl, { search: params })
      .map(response => <string[]>response.json()[1]);
  }
}