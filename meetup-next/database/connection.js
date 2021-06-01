import { MongoClient } from 'mongodb';

const connection = async () => {
  const con = await MongoClient.connect(process.env.MONGODB_CON, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  return [con.db(), con];
};

export default connection;
