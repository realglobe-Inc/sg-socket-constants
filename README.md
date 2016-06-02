sg-socket-constants
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sg-socket-constants
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-socket-constants
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-socket-constants.svg?style=flat
[bd_license_url]: https://github.com/realglobe-Inc/sg-socket-constants/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sg-socket-constants
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sg-socket-constants.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sg-socket-constants.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sg-socket-constants
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sg-socket-constants.svg
[bd_npm_url]: http://www.npmjs.org/package/sg-socket-constants
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-socket-constants.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Constants variables for socket

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>
Installation
-----

```bash
$ npm install sg-socket-constants --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>
Usage
---------

```javascript
'use strict'

const {
  LockingEvents
} = require('sg-socket-constants')

const sgSocketClient = require('sg-socket-client')

let socket = sgSocketClient('http://localhost:8004')
socket.emit(LockingEvents.LOCK, {
  name: 'resource01',
  by: 'me'
})

```


<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/03.Values.md.hbs" Start -->

<a name="section-doc-guides-03-values-md"></a>
Values
------

##### AcknowledgeStatus

| Key | Value |
| --- | ---- |
| OK | sg:acknowledge:ok |
| NG | sg:acknowledge:ng |


##### GreetingEvents

| Key | Value |
| --- | ---- |
| HI | sg:greet:hi |
| BYE | sg:greet:bye |


##### LockingEvents

| Key | Value |
| --- | ---- |
| ALLOC | sg:lock:alloc |
| RELEASE | sg:lock:release |
| LOCK | sg:lock:lock |
| UNLOCK | sg:lock:unlock |


##### PubsubEvents

| Key | Value |
| --- | ---- |
| RAISE | sg:pubsub:raise |
| SHUT | sg:pubsub:shut |
| PUBLISH | sg:pubsub:publish |
| COUNT | sg:pubsub:count |
| SUBSCRIBE | sg:pubsub:subscribe |
| UNSUBSCRIBE | sg:pubsub:unsubscribe |
| READY | sg:pubsub:ready |
| RECEIVE | sg:pubsub:receive |
| GONE | sg:pubsub:gone |


##### RemoteEvents

| Key | Value |
| --- | ---- |
| INTERFACE | sg:remote:interface |
| JOIN | sg:remote.join |
| LEAVE | sg:remote.leave |
| ACTION | sg:remote.action |


##### ReservedEvents

| Key | Value |
| --- | ---- |
| CONNECTION | connection |
| CONNECT | connect |
| RECONNECT | reconnect |
| CONNECT_ERROR | connect_error |
| CONNECT_TIMEOUT | connect_timeout |
| DISCONNECT | disconnect |
| ERROR | error |




<!-- Section from "doc/guides/03.Values.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sg-socket-constants/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------


<!-- Links End -->
