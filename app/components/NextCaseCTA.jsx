import Link from "next/link";

export default function NextCaseCTA({
  title,
  description,
  href,
  buttonText = "View Case Study"
}) {
  return (
    <div className="mb-24 bg-fuchsia-800 w-full border border-stone-200 rounded-2xl p-10">
      <div className="flex flex-col md:flex-row w-full gap-8">

        {/* Left Side */}
        <div className="md:w-1/3 w-full">
          <div className="text-3xl text-stone-100">
            {"Want to keep exploring?"}
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          
          <div>
            <div className="text-xl text-stone-100">
              {title}
            </div>

            <div className="text-sm text-stone-200 pt-2 max-w-xl">
              {description}
            </div>
          </div>

          <div>
            <Link href={href}>
              <button className="mt-4 px-6 py-3 rounded-xl border border-stone-300 text-sm font-medium text-stone-100 hover:border-fuchsia-500 hover:bg-fuchsia-100 hover:text-fuchsia-800 transition-all duration-300">
                {buttonText} →
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
