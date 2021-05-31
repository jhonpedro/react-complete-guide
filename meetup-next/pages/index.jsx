import MeetupList from '../components/meetups/MeetupList';
import { useMeetups } from '../store/meetups';

export default function MainPage() {
  const { getMeetups } = useMeetups();
  const meetupsList = getMeetups();

  return <MeetupList meetups={meetupsList} />;
}
