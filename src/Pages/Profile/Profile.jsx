import profilegirl4 from '../../assets/images/Profile/girl4.jpeg'
import thumbnail from '../../assets/images/thumbnail.webp'
import thumbnail2 from '../../assets/images/tumbnail2.webp'
import thumbnail3 from '../../assets/images/thumbnail3.webp'
import thumbnail4 from '../../assets/images/thumbnail4.webp'
// import { Progress } from "@/components/ui/progress"
import '../../Styles/Global.css'

export default function Profile() {
  return (
    <div className="w-full mx-auto py-8 px-4 md:px-6 dotBackground">
      <div className="grid gap-8">
        <div className="bg-[#45444451] rounded-lg p-6 backdrop-blur-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img className=' w-full h-full' src={profilegirl4} alt="Avatar" />
              </div>
              {/* <Avatar className="w-12 h-12">
                <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar> */}
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold">Parminder Singh</h2>
                <div className="flex items-center gap-2">
                  <div className="px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                    Pro
                  </div>
                  <div className="text-muted-foreground text-sm">Parminder@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="text-muted-foreground text-sm">Admin</div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Current Watching Videos</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-[#45444451]  rounded-lg overflow-hidden">
              <img
                src={thumbnail}
                width={300}
                height={200}
                alt="Video Thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <div className="font-medium line-clamp-2">Introducing the Vercel Frontend Cloud</div>
                <div className="flex items-center gap-2 mt-2">
                  {/* <Progress value={75} className="flex-1" /> */}
                  <div className="text-sm text-muted-foreground">75%</div>
                </div>
              </div>
            </div>
            <div className="bg-[#45444451]  rounded-lg overflow-hidden">
              <img
                src={thumbnail2}
                width={300}
                height={200}
                alt="Video Thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <div className="font-medium line-clamp-2">Building a Headless CMS with Next.js 13</div>
                <div className="flex items-center gap-2 mt-2">
                  {/* <Progress value={50} className="flex-1" /> */}
                  <div className="text-sm text-muted-foreground">50%</div>
                </div>
              </div>
            </div>
            <div className="bg-[#45444451] rounded-lg overflow-hidden">
              <img
                src={thumbnail3}
                width={300}
                height={200}
                alt="Video Thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <div className="font-medium line-clamp-2">Mastering Serverless with Vercel Functions</div>
                <div className="flex items-center gap-2 mt-2">
                  {/* <Progress value={90} className="flex-1" /> */}
                  <div className="text-sm text-muted-foreground">90%</div>
                </div>
              </div>
            </div>
            <div className="bg-[#45444451] rounded-lg overflow-hidden">
              <img
                src={thumbnail4}
                width={300}
                height={200}
                alt="Video Thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <div className="font-medium line-clamp-2">Optimizing Web Performance with Next.js</div>
                <div className="flex items-center gap-2 mt-2">
                  {/* <Progress value={30} className="flex-1" /> */}
                  <div className="text-sm text-muted-foreground">30%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Video Wishlist</h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="bg-[#45444451] rounded-lg overflow-hidden">
              <img
               src={thumbnail}
                width={300}
                height={200}
                alt="Video Thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <div className="font-medium line-clamp-2">Introducing the Vercel Frontend Cloud</div>
              </div>
            </div>
            <div className="bg-[#45444451] rounded-lg overflow-hidden">
              <img
               src={thumbnail2}
                width={300}
                height={200}
                alt="Video Thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <div className="font-medium line-clamp-2">Building a Headless CMS with Next.js 13</div>
              </div>
            </div>
            <div className="bg-[#45444451] rounded-lg overflow-hidden">
              <img
                src={thumbnail3}
                width={300}
                height={200}
                alt="Video Thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <div className="font-medium line-clamp-2">Mastering Serverless with Vercel Functions</div>
              </div>
            </div>
            <div className="bg-[#45444451] rounded-lg overflow-hidden">
              <img
                src={thumbnail4}
                width={300}
                height={200}
                alt="Video Thumbnail"
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <div className="font-medium line-clamp-2">Optimizing Web Performance with Next.js</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}