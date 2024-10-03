import React from 'react';
import logoImg from '../../assets/images/logo.png';

export default function FooterSection() {
  return (
    <>

<footer class="bg-[#49454F] ">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="lg:flex lg:items-start lg:gap-8">
      <div class="h-24 w-24 bg-cover  bg-center " style={{ backgroundImage: `url(${logoImg})` }}>
        
      </div>

      <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
        <div class="col-span-2">
          <div>
            <h2 class="text-2xl font-bold  text-white">Get the latest movie cinema!</h2>

            <p class="mt-4 text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam
              molestias.
            </p>
          </div>
        </div>

        <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
          <form class="w-full">
            <label for="UserEmail" class="sr-only"> Email </label>

            <div
              class="border bg-white border-white p-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
            >
              <input
                type="text"
                id="UserEmail"
                placeholder="your message.... "
                class="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm"
              />

              <button
                class="mt-1 w-full bg-[#ff1919] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-[#ff3e41] sm:mt-0 sm:w-auto sm:shrink-0"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium  text-white">Services</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" class="text-white transition hover:opacity-75"> 1on1 Coaching </a>
            </li>

            <li>
              <a href="#" class="text-white transition hover:opacity-75"> Company Review </a>
            </li>

          
          </ul>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-white">Company</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" class="text-white transition hover:opacity-75"> About </a>
            </li>

            <li>
              <a href="#" class="text-white transition hover:opacity-75"> Meet the Team </a>
            </li>

          </ul>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-white">Helpful Links</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" class="text-white transition hover:opacity-75"> Contact </a>
            </li>

            <li>
              <a href="#" class="text-white transition hover:opacity-75"> FAQs </a>
            </li>

           
          </ul>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-white">Legal</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" class="text-white transition hover:opacity-75"> Accessibility </a>
            </li>

            <li>
              <a href="#" class="text-white transition hover:opacity-75"> Returns Policy </a>
            </li>

          </ul>
        </div>

        <div class="col-span-2 sm:col-span-1">
          <p class="font-medium text-white">Downloads</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" class="text-white transition hover:opacity-75"> Marketing Calendar </a>
            </li>

            <li>
              <a href="#" class="text-white transition hover:opacity-75"> SEO Infographics </a>
            </li>
          </ul>
        </div>

      
      </div>
    </div>

    <div class="mt-8 border-t border-gray-100 pt-8">
      <div class="sm:flex sm:justify-between">
        <p class="text-xs text-white ">&copy; 2024. CineManager. All rights reserved.</p>

      
      </div>
    </div>
  </div>
</footer>
    </>
  )
}
