import Script from 'next/script'

interface ExtendedWindow extends Window {
  ePayco: any; // Puedes ajustar el tipo según la estructura real de ePayco
}

declare const window: ExtendedWindow
export default function EpaycoCheckout() {
  // eslint-disable-next-line no-unused-vars
  var data = {
    //Parametros compra (obligatorio)
    name: 'Multifiltros',
    description: 'Compras multifiltros',
    currency: 'cop',
    amount: '25000',
    tax_base: '0',
    tax: '0',
    country: 'co',
    lang: 'es',
    //Onpage="false" - Standard="true"
    external: 'false',
    confirmation: "https://abogadev.vercel.app/blog",
    response: 'https://abogadev.vercel.app/blog',
  }


  const handleClick = () => {
    // Puedes usar 'handler' aquí
    if (typeof window !== 'undefined') {
      if (window.ePayco) {
        window.ePayco.checkout.configure({
          key: 'ce474a2ce7e3433377591965501ea3c8',
          test: true,
        })
        window.ePayco.checkout.open(data)
      }
    }
  
  }
  return (
    <>
      <form>
        <Script
          type="text/javascript"
          src="https://checkout.epayco.co/checkout.js"
        ></Script>
      </form>
      <div className="App">
        <button
          onClick={handleClick}
          className="text-white text-sm sm:text-2xl not-italic font-bold leading-normal bg-red-custom px-10 py-2 rounded-md mt-8"
        >
          Proceder al pago
        </button>
      </div>
    </>
  )
}
