import React from "react";
import useSWR from "swr";
import Error from "next/error";
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';

export default function ArtworkCardDetail({ objectID }){

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`, fetcher);

  if (error) {
    return <Error statusCode={404} />;
  }

  if (!data) {
    return null;
  }

  const {
    primaryImage,
    medium,
    artistDisplayName,
    creditLine,
    dimensions,
    artistWikidata_URL,
  } = data;

  const imageUrl = primaryImage;
  const artworkMedium = medium || 'N/A';
  const artistName = artistDisplayName || 'N/A';
  const credit = creditLine || 'N/A';
  const artworkDimensions = dimensions || 'N/A';

  return (
    <Card style={{ width: '18rem' }}>
      {imageUrl && <Card.Img src={imageUrl} alt={artistName} />}
      <Card.Body>
        <Card.Text>
          Medium: {artworkMedium}<br /><br />
          Artist: {artistName}<br />
          Credit Line: {credit}<br />
          Dimensions: {artworkDimensions}<br />
          {artistWikidata_URL && (
            <a href={artistWikidata_URL} target="_blank" rel="noreferrer">wiki</a>
          )}
        </Card.Text>
        <Link href={`/artwork/${objectID}`} passHref>
          <Button variant="primary">{objectID}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
