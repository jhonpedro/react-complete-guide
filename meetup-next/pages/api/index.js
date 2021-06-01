import connection from '../../database/connection';

async function handler(req, res) {
  const [db, client] = await connection();

  const meetups = db.collection('meetups');

  const meetupsList = await meetups.find({}).toArray();
  client.close();

  return res.json({ data: await meetupsList });
}

export default handler;
