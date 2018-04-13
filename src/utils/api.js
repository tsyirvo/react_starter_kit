// @flow
import { Observable } from 'rxjs';

const { API } = process.env;
if (!API) {
  throw new Error('Need api key');
}

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

type ApiFunc = (url: string, body?: Object) => Observable<any>;

const checkStatus = res => {
  if (res.status >= 200 && res.status < 300) {
    return res;
  }
  throw new Error(res.statusText);
};

const parseJSON = res => {
  return res.json();
};

export const getEpic: ApiFunc = url => {
  console.log('api is ', API, url);
  const request = fetch(`${API}${url}`, defaultHeaders)
    .then(res => checkStatus(res))
    .then(data => parseJSON(data));

  return Observable.fromPromise(request).do(data =>
    console.log('Get res', data)
  );
};

export const postEpic: ApiFunc = (url, body) => {
  console.log('Post content', body);

  const request = fetch(`${API}${url}`, {
    ...defaultHeaders,
    method: 'POST',
    body: JSON.stringify(body)
  })
    .then(res => checkStatus(res))
    .then(data => parseJSON(data));

  return Observable.fromPromise(request).do(data =>
    console.log('Post res', data)
  );
};

export const putEpic: ApiFunc = (url, body) => {
  const request = fetch(`${API}${url}`, {
    ...defaultHeaders,
    method: 'PUT',
    body: JSON.stringify(body)
  })
    .then(res => checkStatus(res))
    .then(data => parseJSON(data));

  return Observable.fromPromise(request).do(data =>
    console.log('Put res', data)
  );
};

export const delEpic: ApiFunc = url => {
  const request = fetch(`${API}${url}`, {
    ...defaultHeaders,
    method: 'DELETE'
  })
    .then(res => checkStatus(res))
    .then(checkedRes => parseJSON(checkedRes));

  return Observable.fromPromise(request).do(data =>
    console.log('Del res', data)
  );
};
