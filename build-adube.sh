#!/bin/bash

# This script runs the sencha build command to merge all JavaScript
# files as a single app-all.js file.
#
# Tested under adube's file system, but if you need to run it, you only
# need to set the proper -a parameter to the "sencha create jsb" command.

# cd to script directory
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR"/htdocs"

sencha create jsb -a http://127.0.0.1/proj/mrb/mrbportail/htdocs/simple-dev.html -p app.jsb3
sencha build -d . -p app.jsb3

cd ..