import Image from "next/image"

const Allposts = ({title, description, url}) => {
    const imgLoad = 'https://devscove-backend-0fdec5ed1fa3.herokuapp.com'+ url

    return (
        <div className="flex space-x-7">
            <Image src={imgLoad}
                    width={200}
                    height={200}
            />
            <div className="flex flex-col justify-center space-y-6">
                <h1 className="font-bold text-3xl font-mont">{title}</h1>
                <h2 className="text-lg text-gray-700 font-hind">{description}</h2>
            </div>
        </div>
    )
}

export default Allposts