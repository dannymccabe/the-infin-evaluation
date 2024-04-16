import { Metadata } from 'next';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import VideoPlaceholder from '@/components/VideoPlaceholder';
import Hero from '@/components/Hero';
import ChooseUs from '@/components/ChooseUs';
import LinkList from '@/components/LinkList';
import BusinessSection from '@/components/BusinessSection';
import DataIndividuals from '@/components/DataIndividuals';
import Fairness from '@/components/Fairness';

// This component renders your homepage.
//
// Use Next's generateMetadata function to render page metadata.
//
// Use the SliceZone to render the content of the page.

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client.getByUID('page', 'home');

  return {
    title: prismic.asText(home.data.title),
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title ?? undefined,
      images: [{ url: home.data.meta_image.url ?? '' }],
    },
  };
}

export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();
  const home = await client.getByUID('page', 'home');

  return (
    <main>
      <Hero />
      {/* <SliceZone slices={home.data.slices} components={components} /> */}
      <VideoPlaceholder />
      <ChooseUs />
      <BusinessSection />
      <DataIndividuals />
      <Fairness />
      <LinkList />
    </main>
  );
}
