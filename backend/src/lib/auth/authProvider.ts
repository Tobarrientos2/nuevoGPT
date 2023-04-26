// src/lib/auth/authProvider.ts
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingHttpHeaders } from 'http';

// Reemplazar 'User' con la interfaz del usuario específico
interface User {
  // Definir las propiedades del usuario aquí
}

// Función para verificar el token JWT y adjuntar el usuario al objeto 'req'
export async function authenticate(
    req: NextApiRequest, // Usar NextApiRequest en lugar de AuthenticatedRequest
    res: NextApiResponse,
    next: () => void
  ) {
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      res.status(401).json({ error: 'Acceso no autorizado' });
      return;
    }
  
    try {
      const decoded = jwt.verify(token, 'your_jwt_secret') as User;
      req['user'] = decoded; // Asignar la propiedad 'user' usando la asignación de índice
      next();
    } catch (error) {
      res.status(403).json({ error: 'Token inválido' });
    }
  }