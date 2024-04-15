'use client';

interface ProductProps {
  params: {
    data: string[];
  };
}

export default function Product({ params }: ProductProps) {
  const [productId, size, color] = params.data;
  console.log(params.data);
  return (
    <>
      <h1>Product</h1>
      <p>ID: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>
      <button onClick={() => console.log('Adicionou ao carrinho')}>
        Adicionar ao carrinho
      </button>
    </>
  );
}
