import Image from "next/image";
import News from "../components/newsletter";

const About = () => {

    return (
        <>
        <div className="flex flex-col items-center"> 
            <div className="flex items-center space-x-4 mt-28">
                <Image className="w-36 h-36 rounded-full" src="https://mohammed.sirv.com/blog-post-1/IMG-0671.PNG" height={200} width={200} alt="" />
                <div className="font-medium dark:text-white">
                    <div>Jese Leos</div>
                    <div className="text-lg font-mont text-gray-500 dark:text-gray-700">Mohammed Bouaziz. <br/> <p className="italic text-sm">Phd in Computer Science and Software engineer.</p> </div>
                </div>

            </div>
            <article className="font-mont text-md text-gray-700 text-justify mt-10 p-10 bg-gray-100 rounded-lg">
                        Hello there! <br/> 
                        I'm a passionate software engineer based in the beautiful city of Paris. <br/> 
                        <br/>
                        With a strong foundation in Artificial Intelligence and deep learning, I hold a Ph.D. in this exciting field.<br/> 
                        <br/>
                        Over the years, I've had the privilege of working with major international clients such as Coca-Cola, Shell, The Moroccan Ministry of Education, and Veolia, 
                        delivering innovative software solutions and contributing to their success.<br/>
                        <br/>

                        Being deeply enamored with technology since a young age, I've been tinkering with computers since the age of 14.<br/>
                        <br/>
                        This innate curiosity led me to dive headfirst into the world of AI, where I've not only worked on cutting-edge 
                        projects but have also given back to the community through numerous open-source initiatives in AI.<br/>
                        <br/>
                        As a part-time instructor, writer, and speaker, I find immense joy in sharing my knowledge and experiences with others. <br/>
                        <br/>
                        Mentoring is one of my passions, 
                        and I've had the privilege of guiding and supporting hundreds of students and teams over the past seven years in three different languages. 
                        Witnessing their growth and accomplishments is truly rewarding.<br/>
                        <br/>
                        Beyond the realms of technology, I have diverse interests that keep me grounded and balanced. <br/>
                        <br/>
                        I love exploring literature and find solace in the world of words. <br/>
                        Additionally, my dedication to maintaining a healthy lifestyle fuels my enthusiasm for fitness, boxing, and Brazilian Jiu-Jitsu (BJJ).<br/>
                        <br/>
                        With a global outlook, my experiences with international clients and collaborations have taught me the value of cultural diversity and open-mindedness. 
                        Embracing different perspectives has enriched both my personal and professional life.<br/>
                        <br/>
                        I firmly believe that technology has the power to revolutionize the world positively, 
                        and I'm continuously on the lookout for opportunities to contribute to meaningful and impactful projects. <br/>
                        As I continue to grow in my career, I'm eager to face new challenges, expand my horizons, and make a difference in the ever-evolving landscape of technology.<br/>
                        <br/>
                        If you share a passion for technology, literature, or just want to connect, I'm always open to new collaborations and conversations.<br/> 
                        Let's explore the possibilities together!<br/>
                    </article>
        </div>
        <div className="mt-24">
        <News />
    </div>
        </>
        
    )
}

export default About;