---
title: First Post
excerpt: Lorem Ipsum is simply dummy text.
tags: ['first', 'ya last']
date: 2020-01-05
---
import TestComponent from '@/components/TestComponent.vue'

## Some Title

Is this working?

## Frontmatter Title: {{ $frontmatter.title }}
> Frontmatter Excerpt: {{ $frontmatter.excerpt }}

<hr>

Below is a Vue Component from `@/components/TestComponent.vue`:

<test-component />
