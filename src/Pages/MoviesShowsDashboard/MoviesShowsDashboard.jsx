import { Carousel } from "../../Components/Carousel/Carousel";


export default function Component() {
  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <section className="mb-12 md:mb-16">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl font-bold md:text-3xl">Movies</h2>
            <a href="#" className="text-primary hover:underline">
              See all
            </a>
          </div>
         <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
            <Carousel/>
         </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Movie 1"
                  width={300}
                  height={170}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Movie 1</h3>
                  <p className="text-sm text-muted-foreground">A brief description of the movie.</p>
                </div>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Movie 2"
                  width={300}
                  height={170}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Movie 2</h3>
                  <p className="text-sm text-muted-foreground">A brief description of the movie.</p>
                </div>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Movie 3"
                  width={300}
                  height={170}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Movie 3</h3>
                  <p className="text-sm text-muted-foreground">A brief description of the movie.</p>
                </div>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Movie 4"
                  width={300}
                  height={170}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Movie 4</h3>
                  <p className="text-sm text-muted-foreground">A brief description of the movie.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl font-bold md:text-3xl">Shows</h2>
            <a href="#" className="text-primary hover:underline">
              See all
            </a>
          </div>
         <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory"> 
<Carousel/>
         </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Show 1"
                  width={300}
                  height={170}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Show 1</h3>
                  <p className="text-sm text-muted-foreground">A brief description of the show.</p>
                </div>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Show 2"
                  width={300}
                  height={170}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Show 2</h3>
                  <p className="text-sm text-muted-foreground">A brief description of the show.</p>
                </div>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Show 3"
                  width={300}
                  height={170}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Show 3</h3>
                  <p className="text-sm text-muted-foreground">A brief description of the show.</p>
                </div>
              </a>
            </div>
            <div className="rounded-lg overflow-hidden">
              <a href="#" className="block">
                <img
                  src="/placeholder.svg"
                  alt="Show 4"
                  width={300}
                  height={170}
                  className="w-full h-48 object-cover"
                  style={{ aspectRatio: "300/170", objectFit: "cover" }}
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">Show 4</h3>
                  <p className="text-sm text-muted-foreground">A brief description of the show.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}