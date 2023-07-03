import type { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

export interface BlogPost extends MarkdownParsedContent {
  date: string;
  published: boolean;
  cover: string;
  tags: string[];
}

export interface Breadcrumb {
  title: string;
  url: string | null;
}
