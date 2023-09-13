import Image from 'next/image';
import React from 'react';
import BonusCard from "@/components/pages/bonuses/bonus-card";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';


const ActivityBonusesGrid = () => {

  return (
    <div className="mt-1">
      <p className="text-2xl font-bold">Бонусы за активность</p>
      <div className="grid grid-cols-1 gap-4 mt-10 md:grid-cols-2 xl:grid-cols-3 ">
        <BonusCard
          title="Бонус"
          description="за рубины из чата"
          className=" bg-gradient-to-b from-black to-blue-900"
          contentNode={
            <div className='mt-11'>
              В любой момент в чате может появиться ценный рубин. Кто первый нажмет на него, тому и достанется Бонус!
              <div className='relative'>
                <div className="flex absolute inset-0 bg-gray-500 filter blur">
                
                </div>
                <div className='relative flex column float-none rounded-full'>
                </div>
                <p className='relative'>Модератор</p>
                <p className='relative'>Админ</p>
              </div>
              <div className=' flex justify-center '><Image src="/img/emerald.png" alt="Dice" height={56} width={56}/></div>
              
              <div className='relative mr-10'>
                <Image src="/img/1.png" alt="один" height={36} width={36} className='float-right'  />
                </div>
            </div>
          }
          actionNode={
              <Button className="w-full border-2 border-white text-white  bg-blue-900">Войдите в аккаунт</Button>
          }
        />
        <BonusCard
          title="Бонус"
          description="за активность в чате"
          className="bg-gradient-to-b from-black to-red-700"
          contentNode={
            <>

              Каждые 6 часов в чате начинается раздача рубинов случайный пользователям. Чтобы повысить шанс, будьте активнее и общайтесь!
              <div className='relative pt-8'>
                <div className="flex absolute inset-0">
                
                </div>
                <div className='relative flex column float-none'><div></div></div>
                  <p className='relative'></p>
                  <p className='relative'></p>
              </div>
              <div className='relative  '>
                <Image src="/img/2.png" alt="цифра" height={56} width={56} className='float-right' />
                </div>
            </>
          }
          actionNode={
              <Button className="w-full border-2 border-white text-white bg-red-900 ">Написать сообщение в чат</Button>
          }
        />
        <BonusCard
          title="Бонус"
          description="за реферальную карту"
          className="bg-gradient-to-b from-black to-green-500 "
          contentNode={
              <>
                <ul>
                  <li className="flex items-around">
                      <div className="bg-gray-500 h-8 w-8 text-white rounded-full flex items-center justify-center mr-2">1</div>
                      <span>Ознакомьтесь с реферальной системой</span>
                  </li>
                  <li className="flex items-around">
                      <div className="bg-gray-500 h-8 w-8 text-white rounded-full flex items-center justify-center mr-2">2</div>
                      <span>Пригласите игрока по промокоду</span>
                  </li>
                  <li className='flex items-around'>
                      <div className="bg-gray-500 h-8 w-8 text-white rounded-full flex items-center justify-center mr-2">3</div>
                      <span>Активируйте реферальную карту и получай бонусы</span>
                  </li>
              </ul>
              <div className='relative'>
                <Image src="/img/3.png" alt="цифра" height={56} width={56} className='float-right' />
                </div>
              </>
          }
          actionNode={
              <Button className="w-full bg-green-700 text-white border-2 border-white">Реферальная система</Button>
          }
        />
      </div>
    </div>
  );
};

export default ActivityBonusesGrid;
