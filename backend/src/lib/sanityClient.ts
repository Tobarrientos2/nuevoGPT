// Crear y configurar la conexión con Sanity CMS
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your_project_id',
  dataset: 'your_dataset_name',
  useCdn: true,
});

export default client;
