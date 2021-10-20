import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
      
    <div>
      <section class="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex">
        
          <div className="bg-white rounded-lg mx-auto p-8 flex flex-col w-1/2 mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
              Sign-up
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Here you can sign-up for our website
            </p>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Username
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="Password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            
            
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Register
            </button>
            <p class="text-xs text-gray-500 mt-3">Thanks for Sending.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
