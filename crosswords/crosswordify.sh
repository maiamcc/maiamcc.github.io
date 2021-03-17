#! /usr/bin/env bash

# Usage: crosswordify.sh my-puzzle.ipuz
#
# Requires
# - squares.io api key in env as SQUARES_IO_API_KEY
# 	- docs: https://gist.github.com/dnr/4550a25c08a084965b755c5cfb0e9f26

curl -H "x-squares-api-key: $SQUARES_IO_API_KEY" -F v=2 -F data='{"reusepid":true}' -F puz=@$1 https://squares.io/api/1/puzzle
echo

# TODO: add ipuz -> puz conversion?
# - kpuz executable in $PATH
# 	- git clone https://github.com/kberg/kpuz
#	- pip install requirements
# 	- symlink the xfer script to /usr/local/bin
