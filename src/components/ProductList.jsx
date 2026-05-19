import ProductCard from "./ProductCard"

const products = [
    { 
        id:1, 
        name: "Laptop", 
        price: 800,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    { 
        id:2, 
        name: "Phone", 
        price: 500,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    { 
        id:3, 
        name: "HeadPhones", 
        price: 100,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },
    { 
        id:4, 
        name: "Keyboard", 
        price: 70,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    },
    { 
        id:5, 
        name: "Mouse", 
        price: 250,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },
    { 
        id:6, 
        name: "Powerbank", 
        price: 950,
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5"
    },
]

export default function ProductList(){
    return (
      <div className="row">
        {products.map((p) => (
            <div key={p.id} className="col-md-3 mb-4">
                <ProductCard product={p} />
            </div>
        ))}
        
      </div>
    )
}