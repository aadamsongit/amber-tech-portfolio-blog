import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      width={900} // adjust width as needed
      height={400} // adjust height for aspect ratio
      className={cn(
        "rounded-xl shadow-md object-cover transition-transform duration-300",
        {
          "hover:scale-105": slug, // subtle zoom on hover if clickable
        }
      )}
      priority // ensures hero images load fast
    />
  );

  return (
    <div className="sm:mx-0 my-6">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
