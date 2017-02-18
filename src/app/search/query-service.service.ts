import { Injectable } from '@angular/core';

import { SearchParams } from 'elasticsearch';

@Injectable()
export class QueryServiceService {

  constructor() {

  }

  query: SearchParams = {
    "index": "posts",
    "from": 0,
    "size": 10,
    "body": {
      "query": {
        "filtered": {
          "query": {
            "match": {
              "_all": ""
            }
          }
        }
      },
      "aggs": this.aggregate,
      "highlight": this.highlight,
    }
  };

  getQuery = (query = "", start = 0, size = 10) => {
    // TODO - Inject params to query.
  }

  aggregate = {
    "priority": {
      "terms": {
        "field": "priority.raw",
        "size": 5
      }
    },
    "cause_code": {
      "terms": {
        "field": "cause_code.raw",
        "size": 5
      }
    },
    "customer_name": {
      "terms": {
        "field": "customer_name.raw",
        "size": 5
      }
    },
    "is_hot": {
      "terms": {
        "field": "is_hot.raw",
        "size": 5
      }
    },
    "category": {
      "terms": {
        "field": "category.raw",
        "size": 5
      }
    },
    "node": {
      "terms": {
        "field": "node.raw",
        "size": 5
      }
    },
    "site": {
      "terms": {
        "field": "site.raw",
        "size": 5
      }
    },
    "open_date": {
      "terms": {
        "field": "open_date.raw",
        "size": 5
      }
    },
    "type": {
      "terms": {
        "field": "type.raw",
        "size": 5
      }
    }
  };

  highlight = {
    "fields": {
      "_all": {

      }
    },
    "pre_tags": [
      "<b>"
    ],
    "post_tags": [
      "</b>"
    ]
  };
}
