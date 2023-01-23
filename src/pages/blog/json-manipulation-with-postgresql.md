---
layout: ../../layouts/BlogPostLayout.astro
title: "JSON Manipulation with PostgreSQL"
date: 2022-06-17 23:16:31 -0400
categories: postgresql
---

Lately, I have been writing data migrations for work. Our database of choice is
PostgreSQL, which has great JSON column support. I have learned a few queries for
manipulating JSON data and wanted to share there here. Maybe my future self
will rediscover these someday!

Removing a property from a json column is pretty simple, you just need to do:

```sql
UPDATE table_name SET json_column=json_column - 'remove_this_property';
```

This will take an object like `{"keep_me": 1, "remove_this_property": 2}` and update
to be `{"keep_me": 1}`.

Updating a value in an object is also easy:

```sql
UPDATE table_name SET json_column=jsonb_set(
    json_column,
    '{update_property}',
    'new_value',
    true
);
```

The `true` argument tells `jsonb_set` to create `update_property` if it doesn't exist.

You can then combine the last two queries if you need to remove a property from a nested json object:

```sql
UPDATE table_name SET json_column=jsonb_set(
    json_column,
    '{nested_property}',
    (json_column->'nested_property')::jsonb - 'remove_this_property',
    true
);
```

If you need to rename a property in a json object you can combine removing the
old property with setting the new property with the existing value:

```sql
UPDATE table_name SET json_column=(
    json_column - 'old_property' ||
    jsonb_build_object('new_property', json_column->'old_property')
);
```

You can rename a property of a nested object in a similar way to removing a nested property:

```sql
UPDATE table_name SET json_column=jsonb_set(
    nested_json,
    '{nested_property}',
    (
        json_column->'nested_property' - 'old_property' ||
        jsonb_build_object('new_property', json_column->'nested_property'->'old_property'
    )
    true
);
```

And if your json objects are really crazy, you could opt to do a find and replace.
However, this should really only be used as a last resort as it may have unintended consequences!

```sql
UPDATE table_name SET json_column=REPLACE(
    json_column::text,
    'old_data',
    'new_data'
)::jsonb;
```
