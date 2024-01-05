#!/bin/bash

directory="./src/content/blog"

for file in "$directory"/*; do
  if [ -f "$file" ]; then
    echo "$file"
    node scripts/suggest-related.js "$file"
    echo ""
  fi
done
