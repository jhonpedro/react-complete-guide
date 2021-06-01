import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useMeetups } from '../../store/meetups';

export default function NewMeetUp() {
  const { addMeetup } = useMeetups();

  const addNewMeetupHandler = async (newMeetup) => {
    const response = await fetch('http://localhost:3000/api/newMeetup', {
      method: 'POST',
      body: JSON.stringify(newMeetup),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    addMeetup(data.data);
  };

  return <NewMeetupForm onAddMeetup={addNewMeetupHandler} />;
}
