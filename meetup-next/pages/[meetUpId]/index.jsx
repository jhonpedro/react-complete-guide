import { useRouter } from 'next/router';
import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import { useMeetups } from '../../store/meetups';

export default function MeetupSpecification() {
  const { meetUpId } = useRouter().query;
  const { getByMeetupId } = useMeetups();
  const meetup = getByMeetupId(meetUpId);

  return (
    <Fragment>
      {!meetup ? (
        <p>Carregando...</p>
      ) : (
        <MeetupDetail
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      )}
    </Fragment>
  );
}
