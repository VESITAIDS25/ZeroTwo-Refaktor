import { useState, useEffect } from 'react'
import { getDocs } from 'firebase/firestore';
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { db } from '../config/firebase';
import { collection } from 'firebase/firestore';
import NavBar from '../components/navbar';
import SearchBar from '../components/SearchBar';


export default function MarketPlaceDetails() {
  const [products, setProducts] = useState([]);
  const [searchT, setSearchT] = useState('');

  const moviesCollectionRef = collection(db, "products");

  const getData = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProducts(filteredData);
      console.log(products)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
   <>    
    <NavBar/>
           <section className="py-2 sm:py-12 ">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Find the underrated skills </h2>
      
    <SearchBar/>
			
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			
			{
        products.map((product) => {
          return <article className="flex flex-col shadow-xl hover:scale-105 hover:shadow-xl transition-transform">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 " src={product.image} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline ">{product.title}</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{product.details}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
						<div>
                <h4>{product.createdAt}</h4>
                <h4 className='p-2'>Author : {product.name}</h4>

            </div>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
        })
      }
		</div>
	</div>
</section>
</>
      
   
  )
}