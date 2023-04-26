// src/pages/api/[resource]/delete.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '../../../lib/sanityClient';

interface NextApiRequestWithMethod extends NextApiRequest {
  method?: string;
}

export default async function handler(
  req: NextApiRequestWithMethod,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    res.setHeader('Allow', 'DELETE');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const resourceId = req.query.id as string;

  try {
    await sanityClient.delete(resourceId);
    res.status(200).json({ message: 'Recurso eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el recurso' });
  }
}