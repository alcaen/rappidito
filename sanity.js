import { createClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';
import { SANITY_PROJECT_ID, SANITY_API_KEY } from '@env';

const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  token: SANITY_API_KEY,
  apiVersion: '2023-04-21',
});

const builder = ImageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);

export default sanityClient;
