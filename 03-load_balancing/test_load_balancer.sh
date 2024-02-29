#!/bin/bash

# number of requests
REQUEST=10

# load balncer URL
URL="http://localhost:3000"

# send requests
for ((i=1; i<=$REQUEST; i++)); do
  curl $URL &
  echo
done