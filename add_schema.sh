#!/bin/bash

# Find all blog post files except the main blog page
find app/blog -name "page.tsx" -not -path "*/blog/page.tsx" | while read file; do
  echo "Processing: $file"
  
  # Extract slug from path
  slug=$(echo "$file" | sed 's|app/blog/||' | sed 's|/page.tsx||')
  
  # Check if schema already exists
  if grep -q "articleSchema\|@type.*Article" "$file"; then
    echo "  Schema already exists, skipping"
    continue
  fi
  
  # Extract title and description
  title=$(grep -A5 'export const metadata' "$file" | grep 'title:' | sed 's/.*title: *"\([^"]*\)".*/\1/')
  desc=$(grep -A10 'export const metadata' "$file" | grep 'description:' | sed 's/.*description: *"\([^"]*\)".*/\1/')
  
  # Add schema after metadata export
  awk -v title="$title" -v desc="$desc" -v slug="$slug" '
  /^export default function/ {
    print "const articleSchema = {"
    print "  \"@context\": \"https://schema.org\","
    print "  \"@type\": \"Article\","
    print "  \"headline\": \"" title "\","
    print "  \"description\": \"" desc "\","
    print "  \"author\": {"
    print "    \"@type\": \"Organization\","
    print "    \"name\": \"Hirelytica\""
    print "  },"
    print "  \"publisher\": {"
    print "    \"@type\": \"Organization\","
    print "    \"name\": \"Hirelytica\""
    print "  },"
    print "  \"url\": \"https://hirelytica.com/blog/" slug "\""
    print "};"
    print ""
  }
  {print}
  ' "$file" > "${file}.tmp" && mv "${file}.tmp" "$file"
  
  echo "  Added schema to $file"
done
