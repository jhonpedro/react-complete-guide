import MeetupList from '../components/meetups/MeetupList';
import { useMeetups } from '../store/meetups';
import { useEffect } from 'react';

export default function MainPage() {
  const { getMeetups } = useMeetups();
  const meetups = getMeetups();

  return <MeetupList meetups={meetups} />;
}
