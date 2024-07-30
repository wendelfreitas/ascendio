'use client';

import { Button } from '@ascendio/ui';
import { useTheme } from '@ascendio/hooks';
import Image from 'next/image';

export default function Example() {
  const { theme, toggle } = useTheme();
  return (
    <section className="grid h-screen place-items-center">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-black dark:from-white to-gray-500 dark:to-gray-50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="text-center">
        {theme === 'dark' ? (
          <Image
            className="h-64 mx-auto mb-16 hidden dark:block"
            src="/white-rocket.png"
            alt="Ascendio White Rocket"
            width={225}
            height={256}
          />
        ) : (
          <Image
            className="h-64 mx-auto mb-16 block dark:hidden"
            src="/black-rocket.png"
            alt="Ascendio Black Rocket"
            width={225}
            height={256}
          />
        )}

        <a
          href="https://docs.ascendio.dev"
          target="__blank"
          className="mx-auto"
        >
          <span className="sr-only">Ascendio</span>

          {theme === 'dark' ? (
            <Image
              className="h-8 my-8 mx-auto hidden dark:block"
              src="/white-logo.png"
              width={250}
              height={100}
              alt="Ascendio"
            />
          ) : (
            <Image
              className="h-8 my-8 mx-auto block dark:hidden"
              src="/black-logo.png"
              width={250}
              height={100}
              alt="Ascendio"
            />
          )}
        </a>

        <small className="dark:text-gray-300">
          Ascend a turborepo project in seconds
        </small>
        <p className="mt-6 text-sm leading-6 text-gray-600 dark:text-gray-100">
          It's an automatic, simple and beautiful boilerplate configurator.{' '}
          <br />
          Designed to simplify the initial setup of your turborepo project.{' '}
          <br /> Ideal for indie developers or people looking to create a Micro
          SaaS.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            onClick={toggle}
            className="rounded-full bg-black hover:bg-gray-800 border-black ring-black dark:bg-white dark:hover:opacity-90 dark:border-white dark:ring-white dark:text-black"
          >
            Change Theme
          </Button>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-45rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-black dark:from-white to-gray-500 dark:to-gray-50 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </section>
  );
}
