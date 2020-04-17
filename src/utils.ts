import http from 'http';
const request = require('request');
// export const getContents = (url:string) => {
//     new Promise((resolve,reject : any) => {
//         http.get(url, (res:any) => {
//             console.log('coming url:', url);
//             console.log('res from getContent:', res);
//             const contentType = res.headers['content-type'];
//             return resolve(res);
//         });
//     })
// }
export const getContents = (url:string) => new Promise((resolve, reject) => {
    request.get(url, (error: any, response: any, body : any) => {
      if (error) return resolve("Error loading " + url + ": " + error.message);
        console.log('get contents response', response);
        console.log('get contents body', body);
      return resolve(body);
    });
  });