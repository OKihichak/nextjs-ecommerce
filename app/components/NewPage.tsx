"use client";

import Image from "next/image";
import { simplifiedProduct } from "../interface";
import { client } from "../lib/sanity";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Ban, FanIcon } from "lucide-react";

async function getData(category: string) {
  let query;
  if (category.toLowerCase() === "all") {
    // Query for all products if the category is "all"
    query = `*[_type == "product"] {
            _id,
            "imageUrl": images[0].asset->url,
            price,
            name,
            "slug": slug.current,
            "categoryName": category -> name
        }`;
  } else {
    // Query for a specific category
    query = `*[_type == "product" && category->name == "${category}"] {
            _id,
            "imageUrl": images[0].asset->url,
            price,
            name,
            "slug": slug.current,
            "categoryName": category -> name
        }`;
  }

  const data = await client.fetch(query);
  return data;
}

async function searchProducts(queryString: string) {
  // GROQ query for searching products by name
  const searchQuery = `*[_type == "product" && name match "${queryString}*"] {
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category -> name
  }`;

  const data = await client.fetch(searchQuery);
  return data;
}

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const [searchString, setSearchString] = useState("");
  const [data, setData] = useState<simplifiedProduct[]>([]);

  useEffect(() => {
    // Fetch category data initially
    const fetchData = async () => {
      const products = await getData(params.category);
      setData(products);
    };

    fetchData();
  }, [params.category]);

  const handleSearch = async () => {
    if (searchString.trim() === "") {
      // Reload category data if search input is cleared
      const products = await getData(params.category);
      setData(products);
    } else {
      // Fetch search results
      const searchResults = await searchProducts(searchString);
      setData(searchResults);
    }
  };

  return (
    <div className="bg-whit">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for {params.category}
          </h2>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:border-primary"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-primary text-white rounded-lg"
            >
              Search
            </button>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.length > 0 ? (
            data.map((product) => (
              <div key={product._id} className="group relative">
                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.imageUrl}
                    alt="Product Image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-small text-gray-700">
                      <Link href={`/product/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.categoryName}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center mt-32 mx-auto ">
              <div>
                <Ban className="text-red-600 w-16 h-16 mx-auto my-6" />
                <h2 className="md:text-2xl text-base text-gray-900 font-semibold">
                  Something went wrong...
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
