// test/unit/[resource].test.ts
import createHandler from '../../backend/src/pages/api/[resource]/create';

import { Resource } from '../../backend/src/pages/api/[resource]/create';

describe('create', () => {
  it('should create a new resource and return a status code of 201', async () => {
    const mockResource: Resource = {
      // Proporcione los valores de las propiedades del recurso aquí
      _type: "exampleType", 
    };

    // Mock de la función 'create' de Sanity
    const mockSanityCreate = jest.fn().mockResolvedValue(mockResource);
    jest.mock('../../src/lib/sanityClient', () => ({
      create: mockSanityCreate,
    }));

    const req = {
      method: 'POST',
      body: JSON.stringify(mockResource),
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createHandler(req as any, res as any);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockResource);
    expect(mockSanityCreate).toHaveBeenCalledWith(mockResource);
  });
});
