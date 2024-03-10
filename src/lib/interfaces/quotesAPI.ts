export interface IQuoteResponse {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export const sampleQuoteResponse: IQuoteResponse = {
  _id: "tShZNRagRX",
  content:
    "This is why I loved technology: if you used it right, it could give you power and privacy.",
  author: "Cory Doctorow",
  tags: ["Technology"],
  authorSlug: "cory-doctorow",
  length: 90,
  dateAdded: "2020-12-06",
  dateModified: "2023-04-14",
};
