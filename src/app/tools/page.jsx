
import News from "../components/newsletter";

const Tools = () => {

    return (
        <>
        <div class="relative mx-auto bg-white bg-opacity-20 bg-cover bg-center md:max-w-screen-lg mt-24">
                        <img class="absolute h-full w-full object-cover" src="https://mohammed.sirv.com/blog-post-1/hunter-harritt-Ype9sdOPdYc-unsplash.jpg" />
                        <div class="text-white lg:w-1/2">
                            <div class="bg-blue-600 bg-opacity-95 p-5 opacity-90 backdrop-blur-lg lg:p-12">
                                <p class="mb-4 font-serif font-light">Image Generatio, Text Generation and more in one tool</p>
                                <h2 class="font-serif text-4xl font-bold">The Smart SaaS that will make your life easier</h2>
                                <a href="#" class="mt-6 inline-block rounded-xl border-2 px-10 py-3 font-semibold border-white hover:bg-white hover:text-blue-600"> Try it for free </a>
                            </div>
                        </div>
                </div>
                <div className="mt-24">
                <News />
            </div>
        </>
                

    )
}

export default Tools;