import { SearchParams } from "next/dist/server/request/search-params";

export interface IProps {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<SearchParams>;
}
