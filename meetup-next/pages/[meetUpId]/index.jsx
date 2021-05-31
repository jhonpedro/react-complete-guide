import { useRouter } from 'next/router';

export default function MeetupSpecification() {
  const { meetUpId } = useRouter().query;

  return <h1>Especific MeetUp: {meetUpId}</h1>;
}
