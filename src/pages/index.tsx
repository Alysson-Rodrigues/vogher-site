import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>VOGHER.TECH</title>
        <meta name="description" content="There is a new thing coming..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black h-screen w-full flex justify-center items-center p-12">
        <div>
          <img src="/voghe.svg" className="w-[15rem] py-9 -mt-10" />
          <div className='flex  text-4xl'>
            <h2 className="text-white font-base-neue-bold-oblique py-1 ">Wait a little bit!</h2>
            <p className='animate-pulse'>🖐🏻</p>
          </div>
          <p className="text-white font-base-neue-light text-2xl">There will be a beautiful site here... but it's not ready yet</p>
        </div>
      </main>
    </>
  )
}
