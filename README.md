# PhoneGap-Babel-React-Webpack-OnsenUI-FontAwesome

Goal is to make a boilerplate for the following tech:

- Apache Cordova - *to compile to iOS and Android Apps*
- Adobe PhoneGap - *some juicy Cordova tools*
- React - *DOM ninja*
- React Hotloading - *No more F5*
- Babel - *for sexy JS*
- Webpack - *Pack it up*
- OnsenUI - *CSS framework native iOS/Android*
- FontAwesome - *good old icons*

# This repo is not ready, yet
Things to do:
- Make sure latest versions are used with NPM - any tool to check latest version and update?
- Use ESlint, havent tried
- Add missing modules to package.json
- Clean up webpack config
- Remove a lot of junk like other icons, themes and modules
- OnsenUI Form icons are messed up, maybe include more icon sets?
- Add a Editor config
- Find out how I can reduce size, because it needs to be compiled by PhoneGap, so exclude (which) node_modules?

# Start application
Run via the CLI
```
npm install
npm run start
```
Find out which modules are missing... Then a couple more:
```
npm install missing-module
```
Then a couple more tries at:
```
npm run start
```
Then open the browser at something like:
```
http://localhost:80800
```
