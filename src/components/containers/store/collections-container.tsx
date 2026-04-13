import CollectionItem from "#/components/base/common/collection-item";
import { useCartStore } from "#/lib/store/cart-store";
import { gridCellBorderClasses } from "#/lib/utils";
import {mockProducts as products, type Product} from '@/data/products';


export default function CollectionsContainer() {
  const column2 = 2;
  const column3 = 3;
  const {addItem} = useCartStore()

  const handleAddToCart = (product: Product) => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price.current,
      image: product.images[0].url,
      quantity: 1,
      maxQuantity: product.stock.quantity,
    })
  }

  return (
    <div className="grid @4xl:grid-cols-2 @6xl:grid-cols-3 grid-cols-1">
      {products.slice(0, 6).map((p, index) => (
        <CollectionItem
        key={p.id}
        image={p.images[0].url}
        title={p.name}
        category={p.category.name}
        fit="Regular"
        price={`$${p.price.current}`}
        className={gridCellBorderClasses(index, column2, column3, true)}
        onAddToCart={() => handleAddToCart(p)}/>
      ))}
    </div>
  )
}

