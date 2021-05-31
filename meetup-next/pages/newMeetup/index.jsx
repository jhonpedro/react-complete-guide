import NewMeetupForm from '../../components/meetups/NewMeetupForm';

export default function NewMeetUp() {
  const addNewMeetupHandler = (newMeetup) => {
    console.log(newMeetup);
  };

  return <NewMeetupForm onAddMeetup={addNewMeetupHandler} />;
}
