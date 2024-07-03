import { Intro } from '@/components/Intro';
import { StarField } from '@/components/StarField';
import { Glow } from './Glow';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="relative w-full flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <Glow />
      <StarField className="w-full lg:left-60 lg:top-10" />
      <StarField className="right-32 w-full -bottom-28" />
      <div className="relative flex w-full lg:pointer-events-auto lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
            <div className="relative">
              <Intro />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6" />
        </div>
      </div>
      <div className="mx-auto flex max-w-2xl items-center lg:max-w-none lg:flex-none">
        <div className="z-10 max-w-3xl flex-none sm:max-w-5xl">
          <Image
            alt="Preview ascendio cli"
            src="/preview-ascendio.png"
            width={1840}
            height={1600}
            className="mb-10 w-[56rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
          />
        </div>
      </div>
    </div>
  );
};
