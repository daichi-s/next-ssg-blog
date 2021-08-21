import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="pb-5">
        <div className="mb-5">
          <Link href="/"><a>HOME</a></Link>
          <span className="mx-3">|</span>
          <Link href="/policy"><a>プライバシーポリシー</a></Link>
          <span className="mx-3">|</span>
          <Link href="/term"><a>免責事項</a></Link>
        </div>
        <div className="mb-5">
          © 2021 {process.env.BLOG_TITLE}
        </div>
      </div>
    </footer>
  );
};

export default Footer;