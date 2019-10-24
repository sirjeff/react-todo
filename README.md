# ToDo App in React
A basic and useable 'to do' list as a demo for React.
This app uses React as the base for interaction and dynamic rendering.
The code script uses a connection to an online DB hosted by OMI. This is very limited and most likely be down a few times a day (due to hosting and bandwidth costs). It has limits on views , updates, and concurunt connections. Also note that it's the same DB the demo uses:

[Online usable Demo](https://omi.nz/react_todo/)
(please do not make more than 5 changes (just enough to see how it works) else it'll get an attitude)

I will look at writting up the requirements for DB usage at some point.

## Technologies
- react-app 0.1.0
- create-react-app 1.5.2
- npm 6.10.2
- Bootstrap 4.1.1
- Axios 0.19.0

## Requirements
- npm (for dev server and to compile code)
- web server (if going external)
- Modern browser

## Browser Compatibility
This app was tested and developed whilst using Vivaldi 2.9
- Chromium based browsers (Opera, Chrome, Vivaldi) should all work
- IE 11 and under, does not work
- FireFox 71+ is good, however there's a current issue with the drag'n'drop
- Otter browsers ... Useless :(
- Opera 12.18 , dang! No go.

## DB Storage
External proxy DB via OMI, built in Perl and uses Perl DBI to access MySQL
Access is granted via this app.

## Instalation / Setup
1. Download the code as a zip then unzip it.
2. Open you terminal or command prompt.
3. CD to the unzipped directory (it should be called 'react-todo')
4. Execute: `>npm install` (downloads and installs approx. 250MB of modules)
5. Wait a few days ..... (or throw your dial-up modem away, get onto broadband and wait only 10 minutes lol) 
6. Once it's all done test it by running: > `npm start`
7. Change the code to use your DB of choice (hope to have some instructions for this soon)

## Future plans
- show image while dragging
- fix drag'n'drop for FireFox
- user login to save own lists etc
- add groups or categories (shopping-list, today, camping-trip)


