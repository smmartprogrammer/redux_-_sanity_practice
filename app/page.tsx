import Image from 'next/image'
import Counter from './component/Counter'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'
import { Image as IImage } from 'sanity'

export const getProductData = async () => {
  const res = await client.fetch(`*[_type== 'product' ]{title, category, gender, price,_id, image}`)
  return res
}

interface IProduct {
  title: string,
  _id: string,
  category: string,
  gender: string,
  price: number,
  image: IImage,
}

export default async function Home() {

  const data: IProduct[] = await getProductData()



  return (
    <main className="flex min-h-screen justify-center flex-col p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <Counter />
        {data.map((item) => (
          <div className=''>
            <Image src={urlForImage(item.image).url()} width={200} height={200} alt='productimage' />
          </div>
        ))}

      </div>
    </main >
  )
}
