export default function Question() {
  return (
    <>
      <section class="text-gray-100 py-12 min-h-screen">
        <div class="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
            <details>
              <summary class="py-2 outline-none cursor-pointer focus:underline">
                What technologies and programming languages do you specialize
                in?
              </summary>
              <div class="px-4 pb-4">
                <p>
                  {" "}
                  I specialize in HTML, CSS, JavaScript, React, Next.js,
                  TypeScript, and Tailwind CSS. I also have experience with
                  APIs, Git/GitHub, and backend technologies like Node.js and
                  Express.
                </p>
              </div>
            </details>
            <details>
              <summary class="py-2 outline-none cursor-pointer focus:underline">
                Do you build websites from scratch or customize existing ones?
              </summary>
              <div class="px-4 pb-4">
                <p>
                  {" "}
                  I can do both! I build fully customized websites from scratch,
                  and I can also improve or modify existing websites based on
                  your needs.
                </p>
              </div>
            </details>
            <details>
              <summary class="py-2 outline-none cursor-pointer focus:underline">
                Can you develop both front-end and back-end applications?
              </summary>
              <div class="px-4 pb-4">
                <p>
                  Yes! My primary focus is front-end development, but I also
                  have experience with back-end technologies like Node.js,
                  Express, and MongoDB for full-stack projects.
                </p>
              </div>
            </details>
            <details>
              <summary class="py-2 outline-none cursor-pointer focus:underline">
                Do you offer UI/UX design services along with development?
              </summary>
              <div class="px-4 pb-4">
                <p>
                  While I primarily focus on development, I can create modern
                  and responsive UI designs using Tailwind CSS and CSS
                  animations. For advanced UI/UX designs, I collaborate with
                  designers.
                </p>
              </div>
            </details>
            <details>
              <summary class="py-2 outline-none cursor-pointer focus:underline">
                What is your typical workflow when developing a website?
              </summary>
              <div class="px-4 pb-4">
                <p>
                  My process includes: Understanding your requirements (via a
                  call or document) Creating a wireframe or basic design
                  Developing the website with clean, maintainable code Testing
                  and making necessary improvements Deploying the website and
                  providing support
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
