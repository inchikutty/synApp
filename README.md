# SynApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.
Data is entered using App's front-end while backend listens to create, update and delete events to repost data to external apps.
## An hourly task scheduler runs in the backend to repost events to external app databases
* Read more about Backend is at https://github.com/inchikutty/synDB/blob/master/readme.MD
## Deployment

App is running at http://pulsd-inchikutty.com.s3-website-us-west-2.amazonaws.com

## Assumptions

* Only unique events are entered by user
* All events entered are done without info errors
* External apps have provided data store APIS for the syndicator.
