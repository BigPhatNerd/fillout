# Project for Developer Position with Fillout

![Fillout Logo](https://www.fillout.com/_next/static/media/logo.c5a9e1d4.png)

**Goal:** Create filterable endpoint based on API data returned from existing `GET /v1/api/forms/{formId}/submissions` endpoint.

**Hosting:** Project is hosted on Render

**Technologies Used:**

Node.js

![Node](https://nodejs.org/static/images/logo.svg)



Axios

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3920uN6pjSj4Dpv7kAOfWKQj_77-KuO30d4TFOIycNvxd9pPt9D9RC-AFMRd7P53bCg&usqp=CAU" width="100">




Ejs

<img src="https://profoundjs.com/thumbnail/profound-logic/deploying-stateful-ejs-apps.png" width="100">




Express

<img src="https://expressjs.com/images/express-facebook-share.png" width="100">






**Hosted URL:** https://fillout-8r47.onrender.com and Page Not Found

Example queries endpoints and queries:

API Calls:

[No matches](https://fillout-8r47.onrender.com/cLZojxk94ous/filteredResponses?filters=%5B%7B%22id%22%3A%22nameId%22,%22condition%22%3A%22does_not_equal%22,%22value%22%3A%22Tommy%22%7D%5D) 

**query params**: 
filter : [{"id":"nameId","condition":"does_not_equal","value":"Tommy"}]




[Equals](https://fillout-8r47.onrender.com/cLZojxk94ous/filteredResponses?filters=%5B%20%20%7B%20%20%20%20%22id%22%3A%20%22bE2Bo4cGUv49cjnqZ4UnkW%22,%20%20%20%20%22condition%22%3A%20%22equals%22,%20%20%20%20%22value%22%3A%20%22Johnny%22%20%20%7D%5D)

**query params**: 
filters: [{"id": "bE2Bo4cGUv49cjnqZ4UnkW", "condition": "equals","value": "Johnny"}]




[Does Not Equal](https://fillout-8r47.onrender.com/cLZojxk94ous/filteredResponses?filters=%5B%20%20%7B%20%20%20%20%22id%22%3A%20%22bE2Bo4cGUv49cjnqZ4UnkW%22,%20%20%20%20%22condition%22%3A%20%22does_not_equal%22,%20%20%20%20%22value%22%3A%20%22Johnny%22%20%20%7D%5D)

**query params**: 
filters: [{ "id": "bE2Bo4cGUv49cjnqZ4UnkW", "condition": "does_not_equal", "value": "Johnny"}]




[Greater Than](https://fillout-8r47.onrender.com/cLZojxk94ous/filteredResponses?filters=%5B%20%20%7B%20%20%20%20%22id%22%3A%20%22fFnyxwWa3KV6nBdfBDCHEA%22,%20%20%20%20%22condition%22%3A%20%22greater_than%22,%20%20%20%20%22value%22%3A%205%20%20%7D%5D)

**query params**: 
filters: [{ "id": "fFnyxwWa3KV6nBdfBDCHEA","condition": "greater_than", "value": 5}]




[Less Than](https://fillout-8r47.onrender.com/cLZojxk94ous/filteredResponses?filters=%5B%20%20%7B%20%20%20%20%22id%22%3A%20%22fFnyxwWa3KV6nBdfBDCHEA%22,%20%20%20%20%22condition%22%3A%20%22less_than%22,%20%20%20%20%22value%22%3A%2010%20%20%7D%5D)

filters: [{ "id": "fFnyxwWa3KV6nBdfBDCHEA","condition": "less_than","value": 10}]





[Less Than With Pagination](https://fillout-8r47.onrender.com/cLZojxk94ous/filteredResponses?filters=%5B%20%20%7B%20%20%20%20%22id%22%3A%20%22fFnyxwWa3KV6nBdfBDCHEA%22,%20%20%20%20%22condition%22%3A%20%22less_than%22,%20%20%20%20%22value%22%3A%2010%20%20%7D%5D&page=2&pageSize=5)

**query params**: 
filters: [{ "id": "fFnyxwWa3KV6nBdfBDCHEA","condition": "less_than","value": 10  }]
page: 2
pageSize: 5


[Multiple Conditions](https://fillout-8r47.onrender.com/cLZojxk94ous/filteredResponses?filters=%5B%20%20%7B%20%20%20%20%22id%22%3A%20%22bE2Bo4cGUv49cjnqZ4UnkW%22,%20%20%20%20%22condition%22%3A%20%22equals%22,%20%20%20%20%22value%22%3A%20%22Johnny%22%20%20%7D,%20%20%7B%20%20%20%20%22id%22%3A%20%22fFnyxwWa3KV6nBdfBDCHEA%22,%20%20%20%20%22condition%22%3A%20%22greater_than%22,%20%20%20%20%22value%22%3A%205%20%20%7D%5D)

filters: [{"id": "bE2Bo4cGUv49cjnqZ4UnkW","condition": "equals","value": "Johnny"}, { "id": "fFnyxwWa3KV6nBdfBDCHEA", "condition": "greater_than", "value": 5}]






