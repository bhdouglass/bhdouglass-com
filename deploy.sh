#!/bin/bash

set -x
set -e

npm run build
surge ./build/ --domain https://bhdouglass.com
