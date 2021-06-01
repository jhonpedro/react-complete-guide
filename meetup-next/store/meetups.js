import { createContext, useContext, useState } from 'react';

const MeetupContext = createContext({
  setMeetups: (meetups) => {},
  addMeetup: (newMeetup) => {},
  getMeetups: () => {},
  getByMeetupId: (id) => {},
});

const MeetupProvider = ({ children, meetups: initial_value }) => {
  const [meetups, setMeetups] = useState(initial_value);

  const addMeetup = (newMeetup) => {
    setMeetups((prevState) => [...prevState, newMeetup]);
  };

  const getMeetups = () => {
    return meetups;
  };

  const getByMeetupId = (id) => {
    console.log(meetups, id);
    return meetups.find((meetup) => meetup._id === id);
  };

  return (
    <MeetupContext.Provider
      value={{
        addMeetup,
        getMeetups,
        getByMeetupId,
        setMeetups,
      }}
    >
      {children}
    </MeetupContext.Provider>
  );
};

const useMeetups = () => {
  const ctx = useContext(MeetupContext);

  if (!ctx) {
    throw new Error('Must be inside a meetup provider!!!');
  }

  return ctx;
};

export { useMeetups };
export default MeetupProvider;
