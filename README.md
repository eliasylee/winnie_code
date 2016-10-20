# WinnieLabs Code Sample

This repo contains a sample web application.

## Live Site

[Live]: https://eliasylee.github.io/winnie_code/

## Features and Implementation

### Overall

The code sample is light-weight as it is served in the front-end only without a server in the back-end. Besides a single HTML file and a single CSS file, there are the necessary React and Redux files.

### Geolocation

Browser geolocation is used to allow Google Maps to display at the user's location. Due to Chrome's settings, which views non-HTTPS and non-localhost sources as insecure and disallows location tracking, the code sample cannot be run in the Chrome browser.

### FourSquare API

FourSquare's API is sent an AJAX request for venues local to the user's location. Each venue is represented as a Google Maps marker, which redirects to another page containing info about the venue. Information served on the redirected page is also obtained through FourSquare's venue API.
