declare module "*.module.css";

interface Quote {
  quote: string
  author: string
  tags: string[]
}

interface QuoteList {
  [key: number]: Quote
}
