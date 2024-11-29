import Link from "next/link";
import Image from "next/image";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        <Title title="Verify your order" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Cart */}
          <div className="flex flex-col mt-5">

            <span className="text-xl">Modify items</span>

            <Link href="/cart" className="underline mb-5">
              Click here to edit your cart
            </Link>


            {/* Cart items */}
            {
              productsInCart.map(product => (
                <div key={product.slug} className="flex mb-5">
                  <Image
                    src={`/products/${product.images[0]}`}
                    width={100}
                    height={100}
                    style={{
                      width: '100px',
                      height: '100px'
                    }}
                    alt={product.title}
                    className="mr-5 rounded"
                  />

                  <div>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <p className="font-bold">Subtotal: ${product.price * 3}</p>
                  </div>
                </div>
              ))
            }
          </div>

          {/* Order summary */}
          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl mb-2">Shipping address</h2>

            <div className="mb-10">
              <p className="text-xl">Pedro Suarez</p>
              <p>123 Union St.</p>
              <p>Center Square</p>
              <p>Southern City</p>
              <p>ZIP: 79563</p>
              <p>Phone: +88 125 658 985</p>
            </div>

            {/* Divider */}

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Order summary</h2>

            <div className="grid grid-cols-2">

              <span>Number of products</span>
              <span className="text-right">3 items</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Sales Tax (15%)</span>
              <span className="text-right">$100</span>

              <span className="text-2xl mt-5">Total:</span>
              <span className="text-2xl mt-5 text-right">$100</span>

            </div>

            <div className="mt-5 mb-2 w-full">

              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                By clicking "Confirm Order", you agree to our <a href="#" className="underline">Terms and Conditions</a> and <a href="#" className="underline">Privacy Policy</a>.
                </span>
              </p>


              <Link
                className="flex btn-primary justify-center"
                href="/orders/123">
                Confirm order
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}