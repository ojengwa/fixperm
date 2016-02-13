# fixperm
A command-line utility for fixing app permissions

[![npm version](https://badge.fury.io/js/fixperm.svg)](https://badge.fury.io/js/fixperm) [![Build Status](https://travis-ci.org/ojengwa/fixperm.svg?branch=master)](https://travis-ci.org/ojengwa/fixperm) [![Coverage Status](https://coveralls.io/repos/github/ojengwa/fixperm/badge.svg?branch=master)](https://coveralls.io/github/ojengwa/fixperm?branch=master) [![Build status](https://ci.appveyor.com/api/projects/status/5vkkhb1097fmenk4?svg=true)](https://ci.appveyor.com/project/ojengwa/fixperm)

## overview

fixperm is a small command-line utility for fixing app permissions. fixperm attempts to guess who the current logging user is if the optional `-u` or `--user` flag is not set.


## quick start

    $ sudo fixperm <app-name>
    $ fixperm -h


## install from npm

    npm install fixperm -g


## install on windows

`fixperm` is not currently compartible with Windows based systems.


## install from source

    git clone https://github.com/ojengwa/fixperm.git
    npm install
    npm link

## unit & integration tests

    cd fixperm
    npm test


## license

The MIT License (MIT)

Copyright (c) 2016 Ojengwa Bernard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

