import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = SanityClient({
  projectId: process.env.REACT_APP_ID,
  dataset: "production",
  apiVersion: "2022-08-29",
  useCdn: true,
  token: process.env.REACT_APP_TOKEN,
});

const imageUrl = ImageUrlBuilder(client);

export const urlFor = (source) => imageUrl.image(source);
