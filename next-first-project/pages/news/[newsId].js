import { useRouter } from 'next/router';

export default function newsSpecification() {
  const { newsId } = useRouter().query;

  return <h1>News specification {newsId}</h1>;
}
