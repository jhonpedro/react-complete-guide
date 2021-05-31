import { Fragment } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <Fragment>
      <h1>Main Page</h1>
      <ul>
        <li>
          <Link href="/news/something-in-news">Something in news</Link>
        </li>
        <li>
          <Link href="/news/another-thing-in-news">Another thing in news</Link>
        </li>
      </ul>
    </Fragment>
  );
}
