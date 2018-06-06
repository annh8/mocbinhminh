// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000',
  firebase: {
    apiKey: 'AIzaSyDuxlFZxhJHvuONSgEuipKL8pKyp0fKIgw',
    authDomain: 'mocbinhminh-adf00.firebaseapp.com',
    databaseURL: 'https://mocbinhminh-adf00.firebaseio.com',
    projectId: 'mocbinhminh-adf00',
    storageBucket: 'mocbinhminh-adf00.appspot.com',
    messagingSenderId: '487410623024'
  }
};
