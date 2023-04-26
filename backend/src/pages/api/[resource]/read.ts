// src/pages/api/[resource]/read.ts
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
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const resourceId = req.query.id as string;

  try {
    if (resourceId) {
      // Obtener un recurso específico
      const resource = await sanityClient.fetch<Resource>(
        `*[_id == $id][0]`,
        { id: resourceId }
      );
      res.status(200).json(resource);
    } else {
      // Obtener la lista de recursos
      const resources = await sanityClient.fetch<Resource[]>(`*[_type == 'resource']`);
      res.status(200).json(resources);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el recurso(s)' });
  }
}
