import React from "react";

export const Contact = () => (
  <div class="h-screen w-6xl mx-auto flex flex-col justify-center items-center">
    <div class="max-w-lg bg-white shadow-md rounded-lg overflow-hidden mx-auto">
      <div class="py-4 px-8 mt-3">
        <div class="flex flex-col mb-8">
          <h2 class="text-gray-700 font-semibold text-2xl tracking-wide mb-2">
            Why you should donate?
          </h2>
          <p class="text-gray-500 text-base">
            With your donation we can reach great lenghts! We can achieve
            amazing things. We're a small team.
          </p>
        </div>
        <div class="bg-gray-100 rounded-lg">
          <div class="py-4 px-4">
            <div class="flex flex-col">
              <h4 class="text-lg font-semibold mb-3">
                We're currently working on
              </h4>
              <div class="flex flex-col text-sm text-gray-500">
                <span class="mb-1">The next cryptocurrency</span>
                <span class="mb-1">Amazing software!</span>
                <span class="mb-1">Blockchain technology</span>
              </div>
            </div>
          </div>
        </div>
        <div class="py-4">
          <a
            href="#"
            class="block tracking-widest uppercase text-center shadow bg-indigo-600 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
          >
            Go donate
          </a>
        </div>
      </div>
    </div>
  </div>
);
