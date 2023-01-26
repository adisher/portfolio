import Image from 'next/image'
import { get } from '@vercel/edge-config';
import { redirect } from 'next/navigation';
// import data from '../data.json'

export const dynamic = 'force-dynamic',
  runtime = 'edge';

function LinkedinIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 256 256"
    >
      <g transform="">
        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}>
          <g transform="scale(5.12,5.12)">
            <path d="M8,3.00977c-3.47,0 -5.99023,2.07945 -5.99023,4.93945c0,2.87 2.58023,5.04102 5.99023,5.04102c3.47,0 5.99023,-2.11961 5.99023,-5.09961c-0.16,-2.87 -2.63023,-4.88086 -5.99023,-4.88086zM3,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h10c0.55,0 1,-0.45 1,-1v-29c0,-0.55 -0.45,-1 -1,-1zM18,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h9c0.552,0 1,-0.448 1,-1v-15v-0.25v-0.25c0,-2.37 1.82062,-4.30047 4.14063,-4.48047c0.12,-0.02 0.23938,-0.01953 0.35938,-0.01953c0.12,0 0.23938,-0.00047 0.35938,0.01953c2.32,0.18 4.14063,2.11047 4.14063,4.48047v15.5c0,0.552 0.448,1 1,1h9c0.55,0 1,-0.45 1,-1v-17c0,-6.47 -3.47094,-13 -11.21094,-13c-3.52,0 -6.17906,1.36023 -7.78906,2.49023v-1.49023c0,-0.55 -0.45,-1 -1,-1z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="50" height="50"
      viewBox="0,0,256,256"
      style={{fill:"#000000;"}}>
      <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: 'normal'}}>
        <g transform="scale(5.12,5.12)">
          <path d="M24.40039,9c-6.35291,0 -12.5585,0.49125 -16.10156,1.2207l-0.02148,0.00391l-0.01953,0.00586c-2.28468,0.57117 -4.05738,2.15111 -4.43945,4.2832v0.00195c-0.41628,2.18606 -0.81836,5.82744 -0.81836,10.48438c0,4.94188 0.50092,8.39357 1.01953,10.58594c0.38082,2.12603 2.13692,3.82543 4.48437,4.29492h0.00195h0.00391c3.71677,0.72271 9.73647,1.21875 15.99023,1.21875c6.25376,0 12.37162,-0.49538 16.0918,-1.21875l0.02539,-0.00391l0.02539,-0.00586c2.28914,-0.57229 4.06404,-2.15846 4.44141,-4.29687l0.00195,-0.01172l0.00195,-0.00977c0.40147,-2.60952 0.91027,-6.1672 1.01172,-10.63086v-0.00977v-0.01172c0,-3.67203 -0.40792,-7.23036 -1.01562,-10.57422c-0.38398,-2.17587 -2.2424,-3.71737 -4.42969,-4.29297l-0.05273,-0.01367l-0.05664,-0.00976c-3.46991,-0.51013 -9.39478,-1.00977 -16.14453,-1.00977zM24.40039,11c6.61041,0 12.43297,0.49552 15.77344,0.98242c1.59405,0.43047 2.72696,1.47623 2.94141,2.69141v0.00195v0.00391c0.59085,3.24966 0.9832,6.68468 0.98438,10.20508c-0.0989,4.32442 -0.58845,7.75867 -0.98633,10.3457c-0.22344,1.25523 -1.2431,2.26164 -2.94141,2.69141c-3.48443,0.67388 -9.54224,1.17773 -15.67187,1.17773c-6.14537,0 -12.12398,-0.50449 -15.60742,-1.18164h-0.00195c-1.64406,-0.33129 -2.68276,-1.42495 -2.90625,-2.69141l-0.00391,-0.0293l-0.00781,-0.0293c-0.47846,-2.00953 -0.97266,-5.336 -0.97266,-10.16797c0,-4.54203 0.39958,-8.09926 0.7832,-10.11328v-0.00586l0.00195,-0.00781c0.222,-1.25794 1.24328,-2.26743 2.94531,-2.69727c3.26261,-0.66838 9.43645,-1.17578 15.66992,-1.17578zM19,16.9668v1.73242v14.33398l13.89844,-8.0332zM21,20.43359l7.90234,4.56641l-7.90234,4.56641z">
            </path>
            </g>
            </g>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)">
        <path
          d="M21.479 4.937c.015.209.015.418.015.628 0 6.424-4.917 13.832-13.906 13.832v-.004a13.89 13.89 0 0 1-7.491-2.18 9.847 9.847 0 0 0 7.233-2.015 4.89 4.89 0 0 1-4.566-3.375c.732.14 1.487.112 2.206-.084a4.868 4.868 0 0 1-3.92-4.764v-.062c.68.376 1.44.585 2.218.608a4.851 4.851 0 0 1-1.513-6.49 13.896 13.896 0 0 0 10.073 5.078 4.848 4.848 0 0 1 1.414-4.644 4.911 4.911 0 0 1 6.914.21A9.84 9.84 0 0 0 23.26.496a4.884 4.884 0 0 1-2.149 2.69 9.76 9.76 0 0 0 2.807-.766 9.898 9.898 0 0 1-2.439 2.518Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v19.636H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_9914_10)">
        <path
          d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9914_10">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

interface Data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Social[];
}

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
}

export default async function Home() {
  const data: Data | undefined = await get('portfolio');

  if (!data) {
    // not working yet https://github.com/vercel/next.js/issues/44232
    redirect('https://linktr.ee/selenagomez');
  }
  return (
    <>
      <div className="flex items-center flex-col mx-auto w-full justify-center mt-16 px-8">
        <Image
          priority
          className="rounded-full"
          alt={data.name}
          src={data.avatar}
          width={96}
          height={96}
        />
        <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
        <div className="flex items-center gap-4 mt-8 text-white">
          {data.socials.map((social) => (
            <a
              aria-label={`${social.title} link`}
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.href.includes('twitter') ? (
                <TwitterIcon />
              ) : social.href.includes('github') ? (
                <GitHubIcon />
              ) : social.href.includes('linkedin') ? (
                <LinkedinIcon />
              ) : social.href.includes('youtube') ? (
                <YoutubeIcon />
              ) : null}
            </a>
          ))}
        </div>
        <div className="flex items-center text-white my-5">
          <p>Built with ❤️ in Next.js</p>
        </div>
      </div>
    </>
  )
}
