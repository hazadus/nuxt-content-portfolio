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

interface MastoTag {
  url: string;
  title: string;
}

interface MastoLinkCard {
  url: string;
  title: string;
  description: string;
  provider_name: string;
  image: string | null; // image URL
}

interface MastoAccount {
  display_name: string;
  url: string;
  avatar: string;
  followers_count: number;
  following_count: number;
  statuses_count: number;
}

interface MastoMediaAttachment {
  id: string;
  type: string;
  url: string;
  preview_url: string;
  description: string;
}

export interface MastoToot {
  id: string;
  created_at: Date;
  url: string;
  replies_count: number;
  reblogs_count: number;
  favourites_count: number;
  content: string; // contains HTML!
  reblog: MastoToot | null;
  account: MastoAccount;
  media_attachments: MastoMediaAttachment[];
  tags: MastoTag[];
  card: MastoLinkCard | null;
}
