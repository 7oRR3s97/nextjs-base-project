// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const getData = async (req: NextApiRequest, res: NextApiResponse) => {
  const examples = await axios.get('');
  res.status(200).json(examples);
};

export default getData;
