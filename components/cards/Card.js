import Image from "next/image"
import Link from "next/link"
import moment from "moment"
import "moment/locale/tr"

export default function Card(props) {
  return (
        <div className="w-full flex flex-col justify-between p-4 border-gray-100 border-2 rounded bg-white">
          <div>
            <div className="relative overflow-hidden">
              <Image src={props.image} layout={props.layout} width={props.width} height={props.height} priority="true" className="hover:scale-125 transition-all cursor-pointer" />
              <span className="absolute left-2 top-2 leading-8 bg-great-blue-500 rounded px-4 text-md text-white">{formatDate(props.label)}</span>
            </div>
            <p className="sm:text-sm md:text-3xl sm:pt-4 sm:pb-4 md:pt-6 text-great-blue-900">{props.title}</p>
          </div>
          <div>
            <div className="sm:text-x md:text-lg m-0 text-great-blue-500" dangerouslySetInnerHTML={{ __html: props.detail }}></div>
            <Link href="/"><a className="leading-10 text-white bg-gray-400 hover:bg-gray-600 pr-2 pl-2 mt-4 rounded block text-center text-lg">{props.url}</a></Link>
          </div>
        </div>
  )
}

moment.locale();

const formatDate = (value) => {
  return moment(value).format('LL');
}