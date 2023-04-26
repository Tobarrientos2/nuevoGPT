// src/pages/api/[resource]/update.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '../../../lib/sanityClient';

interface NextApiRequestWithMethod extends NextApiRequest {
  method?: string;
}

interface Resource {
  _type: string;
  // Definir las propiedades del recurso aquí
}

export default async function handler(
  req: NextApiRequestWithMethod,
  res: NextApiResponse
) {
  if (req.method !== 'PUT') {
    res.setHeader('Allow', 'PUT');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const resourceId = req.query.id as string;
  const updatedResource: Partial<Resource> = JSON.parse(req.body);

  try {
    await sanityClient
      .patch(resourceId)
      .set(updatedResource)
      .commit();
    res.status(200).json({ message: 'Recurso actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el recurso' });
  }
}
