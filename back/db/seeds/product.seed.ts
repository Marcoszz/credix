import dataSource from 'db/data-source';
import { Product } from 'db/entities/product.entity';
import { DataSource } from 'typeorm';

export class ProductSeed {
  public async run(): Promise<void> {
    const ds = new DataSource({...dataSource.options, entities: ['db/entities/*.entity{.ts,.js}']})

    await ds.initialize();

    const productRepository = ds.getRepository(Product);

    const products = [
      {
        productName: 'Cerveja Skol 350ml',
        unitPriceCents: 250,
        description: 'Cerveja leve e refrescante',
        stockQuantity: 500,
      },
      {
        productName: 'Refrigerante Coca-Cola 2L',
        unitPriceCents: 700,
        description: 'Refrigerante de cola',
        stockQuantity: 300,
      },
      {
        productName: 'Água Mineral 500ml',
        unitPriceCents: 150,
        description: 'Água mineral sem gás',
        stockQuantity: 1000,
      },
      {
        productName: 'Café Torrado 1kg',
        unitPriceCents: 1500,
        description: 'Café torrado em grãos',
        stockQuantity: 200,
      },
      {
        productName: 'Chocolate ao Leite 100g',
        unitPriceCents: 500,
        description: 'Chocolate ao leite tradicional',
        stockQuantity: 600,
      },
    ];

    await productRepository.save(products);
    await ds.destroy();
  }
}

new ProductSeed().run();
