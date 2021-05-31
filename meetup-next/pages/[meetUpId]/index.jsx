import { useRouter } from 'next/router';
import MeetupDetail from '../../components/meetups/MeetupDetail';

export default function MeetupSpecification() {
  const { meetUpId } = useRouter().query;

  return (
    <MeetupDetail
      image="http://s.glbimg.com/jo/g1/f/original/2015/01/30/candelaria-alexandre-macieira.jpg"
      title="Dummy"
      address="Dummy"
      description="Dummyyy"
    />
  );
}
