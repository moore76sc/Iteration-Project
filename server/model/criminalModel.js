const { Pool } = require('pg');

const PG_URI =
  // 'postgres://lsadgyvw:D_fApPpqxnALjomma5fsWXUao9QdWQA7@castor.db.elephantsql.com/lsadgyvw';
  'postgres://xludzhxe:tIkJyUNf6RMOyTU1LcryaNIwwOBrDm-v@castor.db.elephantsql.com/xludzhxe';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

//use command on a separate terminal to Query and look at db
const connectionCommand =
  // 'psql -d postgres://lsadgyvw:D_fApPpqxnALjomma5fsWXUao9QdWQA7@castor.db.elephantsql.com/lsadgyvw';
'psql -d postgres://xludzhxe:tIkJyUNf6RMOyTU1LcryaNIwwOBrDm-v@castor.db.elephantsql.com/xludzhxe';
