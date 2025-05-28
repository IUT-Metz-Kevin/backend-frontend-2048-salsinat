import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Securité lié à la politique CORS
  // TriggerWarning: Par défaut acceptera toutes requêtes faites par un nom de domaine différent
  // Il faudra bien entendu filtrer ça à quelques domaines spécifiques dans le cas où votre API n'est consommé par quelques apps web clientes connues
  app.enableCors();

  await app.listen(3000);
}
bootstrap();
