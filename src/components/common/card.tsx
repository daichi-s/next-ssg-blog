import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  date: Date;
  thumbnail: string
};

const Card = ({ title, description, date, thumbnail }: Props) => {
  // 指定なしの場合、「no image」の画像を表示
  const thumbnailPath = thumbnail === '' ? '/image/no_image.png' : `/image/${thumbnail}`;

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex border border-gray-100 shadow-md rounded-lg">
      <div className="h-48 lg:h-auto lg:w-80 flex-none bg-cover rounded text-center overflow-hidden flex items-center">
        <div className="mx-auto">
          <Image src={thumbnailPath} alt="thumbnail" className="rounded" width={288} height={162} />
        </div>
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
};

export default Card;