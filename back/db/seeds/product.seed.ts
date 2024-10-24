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
      {
        productName: 'Suco de Laranja 1L',
        unitPriceCents: 350,
        description: 'Suco de laranja natural',
        stockQuantity: 400,
      },
      {
        productName: 'Leite Integral 1L',
        unitPriceCents: 300,
        description: 'Leite integral fresco',
        stockQuantity: 800,
      },
      {
        productName: 'Biscoito Recheado 200g',
        unitPriceCents: 450,
        description: 'Biscoito recheado de chocolate',
        stockQuantity: 700,
      },
      {
        productName: 'Pão Francês Unidade',
        unitPriceCents: 100,
        description: 'Pão francês fresco',
        stockQuantity: 1200,
      },
      {
        productName: 'Iogurte Natural 170g',
        unitPriceCents: 200,
        description: 'Iogurte natural sem adição de açúcar',
        stockQuantity: 500,
      },
      {
        productName: 'Manteiga 200g',
        unitPriceCents: 600,
        description: 'Manteiga com sal',
        stockQuantity: 300,
      },
      {
        productName: 'Açúcar Cristal 1kg',
        unitPriceCents: 400,
        description: 'Açúcar cristal para uso culinário',
        stockQuantity: 900,
      },
      {
        productName: 'Arroz 5kg',
        unitPriceCents: 5000,
        description: 'Arroz branco de grão longo',
        stockQuantity: 250,
      },
      {
        productName: 'Feijão Preto 1kg',
        unitPriceCents: 700,
        description: 'Feijão preto selecionado',
        stockQuantity: 600,
      },
      {
        productName: 'Batata Palha 100g',
        unitPriceCents: 250,
        description: 'Batata palha crocante',
        stockQuantity: 800,
      },
      {
        productName: 'Macarrão Penne 500g',
        unitPriceCents: 300,
        description: 'Macarrão penne para receitas diversas',
        stockQuantity: 700,
      },
    ];
    
    await productRepository.save(products);
    await ds.destroy();
  }
}

new ProductSeed().run();
