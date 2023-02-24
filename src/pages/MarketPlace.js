import { useState, useEffect } from 'react'
import { getDocs } from 'firebase/firestore';
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { db } from '../config/firebase';
import { collection } from 'firebase/firestore';
import NavBar from '../components/navbar';


export default function MarketPlaceDetails() {
  const [products, setProducts] = useState([]);
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
           <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="space-y-2 text-center">
			<h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
			<p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
		</div>
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			
			{
        products.map((product) => {
          return <article className="flex flex-col shadow-xl hover:scale-105 hover:shadow-xl transition-transform dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={product.image} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{product.title}</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{product.details}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
						<span>{products.createdAt}</span>
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