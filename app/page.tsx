import { Container } from '@/components/shared/container';
import { Filters } from '@/components/shared/filters';
import { Title } from '@/components/shared/title';
import { TopBar } from '@/components/shared/top-bar';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />

      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          {/* {Фильтрация} */}
          <div className='w-[250px]'>
            <Filters />
          </div>

          {/* {Список товаров} */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList
                title='Пиццы'
                items={[
                  {
                    id: 1,
                    name: 'Чиназес',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чиназес',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чиназес',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чиназес',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Чиназес',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title='Комбо'
                items={[
                  {
                    id: 6,
                    name: 'Чиназес',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Чиназес',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Чиназес',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: 'Чиназес',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: 'Чиназес',
                    imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EF6B5F4825323087AB73CD527FC965.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
