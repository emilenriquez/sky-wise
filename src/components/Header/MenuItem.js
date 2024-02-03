import Link from "next/link";

export default function MenuItem({title, link, Icon}) {
  return (
    <div className="hover:text-teal-600">
      <Link href={link} className="flex ">
        <Icon className="lg:hidden text-2xl" />
        {/* TODO: active state using class "rounded-md bg-gray-900" */}
        <h2 className="hidden sm:inline sm:ml-2  px-3 py-2 text-sm font-medium text-white">
          {title}
        </h2>
      </Link>
    </div>
  )
}
