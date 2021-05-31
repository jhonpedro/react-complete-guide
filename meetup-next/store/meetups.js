import { createContext, useContext, useState } from 'react';
import initial_value from './initial-value';

const MeetupContext = createContext({
  addMeetup: (newMeetup) => {},
  getMeetups: () => {},
  getByMeetupId: (id) => {},
});

const MeetupProvider = ({ children }) => {
  const [meetups, setMeetups] = useState(initial_value);

  const addMeetup = (newMeetup) => {
    setMeetups((prevState) => [...prevState, newMeetup]);
  };

  const getMeetups = () => {
    return meetups;
  };

  const getByMeetupId = (id) => {
    return meetups.find((meetup) => meetup.id === id);
  };

  return (
    <MeetupContext.Provider
      value={{
        addMeetup,
        getMeetups,
        getByMeetupId,
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
