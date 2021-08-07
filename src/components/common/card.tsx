import Image from 'next/image'

type Props = {
  title: string;
  description: string;
  date: Date;
};

const Card = ({ title, description, date }: Props) => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex border border-gray-100 shadow-md rounded-lg">
      {/* TODO: backgroundにimage指定でサムネイル表示 */}
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded text-center overflow-hidden flex items-center" title="Woman holding a mug">
        {/* <Image src="" alt="Vercel Logo" className="rounded mx-auto" width={72} height={16} /> */}
        {/* <img src="https://placehold.jp/150x150.png" alt="" className="rounded mx-auto" /> */}
      </div>
      <div className="bg-white p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-500 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-500 text-base">{description}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-500">投稿日</p>
            <p className="text-gray-500">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;