import connection from '../../database/connection';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, image, address, description } = req.body;

    if (!title || !image || !address || !description) {
      return res.status(400).json({ message: 'missing arguments' });
    }

    const [db, client] = await connection();
    const meetups = db.collection('meetups');

    const result = await meetups.insertOne({
      title,
      image,
      address,
      description,
    });

    client.close();

    return res.json(result.ops[0]);
  }
}

export default handler;
