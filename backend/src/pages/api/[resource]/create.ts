// src/pages/api/[resource]/create.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '../../../lib/sanityClient';
import exp = require('constants');

interface NextApiRequestWithMethod extends NextApiRequest {
  method?: string;
}

export interface Resource {
  _type: string;
  // Definir las propiedades del recurso aquí
}

export default async function handler(
  req: NextApiRequestWithMethod,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const newResource: Resource = JSON.parse(req.body);

  try {
    const createdResource = await sanityClient.create(newResource);
    res.status(201).json(createdResource);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el recurso' });
  }
}

