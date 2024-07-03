import { StarField } from '../StarField/StarField';
import { Glow } from '../Glow/Glow';
import Link from 'next/link';
import Image from 'next/image';

function BookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  );
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" />
    </svg>
  );
}

function XIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M9.51762 6.77491L15.3459 0H13.9648L8.90409 5.88256L4.86212 0H0.200195L6.31244 8.89547L0.200195 16H1.58139L6.92562 9.78782L11.1942 16H15.8562L9.51728 6.77491H9.51762ZM7.62588 8.97384L7.00658 8.08805L2.07905 1.03974H4.20049L8.17706 6.72795L8.79636 7.61374L13.9654 15.0075H11.844L7.62588 8.97418V8.97384Z" />
    </svg>
  );
}

export const Hero = () => {
  return (
    <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <Glow />
      <StarField className="absolute lg:left-60 lg:top-5" />
      <StarField className="top-3/4 lg:right-32" />
      <div className="relative flex w-full lg:pointer-events-auto lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6 ">
          <div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20 ">
            <div className="relative">
              <div className="mt-16 md:mt-0">
                <Link href="/">
                  <Image
                    className="h-8 my-8"
                    width={250}
                    height={32}
                    src="/ascendio.png"
                    alt="Ascendio"
                  />
                </Link>
                <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
                  <span className="text-sky-300 italic">Ascend</span> a
                  turborepo project in seconds.
                </h1>
                <p className="mt-4 text-sm/6 text-gray-300">
                  Designed to simplify the initial setup of your turborepo
                  project. Ideal for indie developers or people looking to
                  create a micro SaaS.
                </p>
                <pre className="bg-black/30 p-2 rounded-lg text-white text-sm hidden mt-5">
                  pnpm @ascendio/cli@latest create
                </pre>
                <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
                  <Link
                    target="_blank"
                    href="https://docs.ascendio.dev"
                    className="flex items-center group space-x-2 hover:bg-gray-400/10 rounded-md py-1 px-2"
                  >
                    <BookIcon className="w-4 h-4 text-gray-500 group-hover:text-sky-300" />
                    <small className="text-white">Documentation</small>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://github.com/wendelfreitas"
                    className="flex items-center group space-x-2 hover:bg-gray-400/10 rounded-md py-1 px-2"
                  >
                    <GitHubIcon className="w-4 h-4 text-gray-500 group-hover:text-sky-300" />
                    <small className="text-white">Github</small>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://x.com/wendeltsx"
                    className="flex items-center group space-x-2 hover:bg-gray-400/10 rounded-md py-1 px-2"
                  >
                    <XIcon className="w-3 h-3 text-gray-500 group-hover:text-sky-300" />
                    <small className="text-white">wendeltsx</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6" />
        </div>
      </div>
      <div className="mx-auto items-center flex max-w-2xl lg:max-w-none lg:flex-none ">
        <div className="mb-32 max-w-3xl flex-none sm:max-w-5xl z-10">
          <Image
            alt="Preview ascendio cli"
            src="/preview-ascendio.png"
            width={800}
            height={800}
            className="w-[56rem] mb-10 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
          />
          <div className="h-10 lg:hidden" />
        </div>
      </div>
    </div>
  );
};
