import classes from './MeetupDetail.module.css';

export default function MeetupDetails({ image, title, address, description }) {
  return (
    <div className={classes['meetup-detail-box']}>
      <div className={classes['image-container']}>
        <img src={image} alt={title} />
      </div>
      <div className={classes['title-and-address']}>
        <strong>{title}</strong>
        <span>{address}</span>
      </div>
      <p>{description}</p>
    </div>
  );
}
