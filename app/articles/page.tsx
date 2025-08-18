import { Button } from "@/components/ui/button"
import { BackToHome } from "@/components/back-to-home"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute top-6 left-6 z-50">
        <BackToHome />
      </div>
      {/* Decorative blog post cards - left side */}
      <div className="absolute left-4 top-20 space-y-4 hidden lg:block">
        <div className="w-48 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 shadow-sm">
          <div className="w-full h-3 bg-blue-300 rounded mb-2"></div>
          <div className="w-3/4 h-2 bg-blue-200 rounded mb-1"></div>
          <div className="w-1/2 h-2 bg-blue-200 rounded"></div>
        </div>
        <div className="w-44 h-28 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 shadow-sm">
          <div className="w-full h-3 bg-purple-300 rounded mb-2"></div>
          <div className="w-2/3 h-2 bg-purple-200 rounded mb-1"></div>
          <div className="w-1/3 h-2 bg-purple-200 rounded"></div>
        </div>
        <div className="w-40 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-3 shadow-sm">
          <div className="w-full h-3 bg-green-300 rounded mb-2"></div>
          <div className="w-3/4 h-2 bg-green-200 rounded"></div>
        </div>
      </div>

      {/* Decorative blog post cards - right side */}
      <div className="absolute right-4 top-32 space-y-4 hidden lg:block">
        <div className="w-52 h-36 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-4 shadow-sm">
          <div className="w-full h-3 bg-orange-300 rounded mb-2"></div>
          <div className="w-4/5 h-2 bg-orange-200 rounded mb-1"></div>
          <div className="w-3/5 h-2 bg-orange-200 rounded"></div>
        </div>
        <div className="w-46 h-30 bg-gradient-to-br from-teal-100 to-teal-200 rounded-lg p-4 shadow-sm">
          <div className="w-full h-3 bg-teal-300 rounded mb-2"></div>
          <div className="w-2/3 h-2 bg-teal-200 rounded mb-1"></div>
          <div className="w-1/2 h-2 bg-teal-200 rounded"></div>
        </div>
        <div className="w-48 h-32 bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-4 shadow-sm">
          <div className="w-full h-3 bg-pink-300 rounded mb-2"></div>
          <div className="w-3/4 h-2 bg-pink-200 rounded mb-1"></div>
          <div className="w-1/3 h-2 bg-pink-200 rounded"></div>
        </div>
      </div>

      {/* Additional decorative elements - bottom corners */}
      <div className="absolute left-8 bottom-20 w-36 h-24 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg p-3 shadow-sm hidden md:block">
        <div className="w-full h-2 bg-indigo-300 rounded mb-2"></div>
        <div className="w-2/3 h-2 bg-indigo-200 rounded"></div>
      </div>

      <div className="absolute right-8 bottom-16 w-40 h-28 bg-gradient-to-br from-rose-100 to-rose-200 rounded-lg p-3 shadow-sm hidden md:block">
        <div className="w-full h-3 bg-rose-300 rounded mb-2"></div>
        <div className="w-3/4 h-2 bg-rose-200 rounded mb-1"></div>
        <div className="w-1/2 h-2 bg-rose-200 rounded"></div>
      </div>

      {/* Main hero content */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span className="text-foreground">Discover The World's</span>
          <br />
          <span className="text-blue-600">Best Stories</span>
          <br />
          <span className="text-foreground">Right Here</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed">
          A comprehensive platform where writers and readers connect through compelling narratives, from discovering
          fresh perspectives to sharing your own voice with the world
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            Start Reading
          </Button>
          <Button variant="ghost" size="lg" className="text-blue-600 hover:text-blue-700 px-8 py-3 text-lg">
            Write Your Story
          </Button>
        </div>
      </div>

      <section className="py-20 px-4 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Resources for <span className="text-blue-600">Product Success</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Essential guides and insights for developers and project owners to launch their products successfully
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Blog post 1 */}
            <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/developer-mvp-coding.png"
                  alt="Developer working on MVP development"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                    Development
                  </span>
                  <span className="text-gray-400 text-sm">5 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  From Idea to MVP: A Developer's Complete Guide
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Learn the essential steps to transform your product idea into a minimum viable product that users will
                  love.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 15, 2024</span>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                    Read More →
                  </Button>
                </div>
              </div>
            </article>

            {/* Blog post 2 */}
            <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/product-launch-checklist-strategy.png"
                  alt="Product launch strategy and planning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                    Strategy
                  </span>
                  <span className="text-gray-400 text-sm">8 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  Product Launch Checklist: 50 Things You Can't Forget
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  A comprehensive checklist covering everything from pre-launch preparation to post-launch optimization.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 12, 2024</span>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                    Read More →
                  </Button>
                </div>
              </div>
            </article>

            {/* Blog post 3 */}
            <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/user-growth-community.png"
                  alt="User growth and marketing strategies"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">
                    Marketing
                  </span>
                  <span className="text-gray-400 text-sm">6 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  Building Your First User Base: Growth Strategies That Work
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Proven tactics to acquire your first 1000 users without breaking the bank or burning out.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 10, 2024</span>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                    Read More →
                  </Button>
                </div>
              </div>
            </article>

            {/* Blog post 4 */}
            <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/app-performance-optimization.png"
                  alt="App performance and scaling optimization"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-700 text-xs font-medium px-2 py-1 rounded-full">
                    Technical
                  </span>
                  <span className="text-gray-400 text-sm">10 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  Scaling Your App: When and How to Optimize Performance
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Critical performance bottlenecks to watch for and proven solutions to keep your app running smoothly.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 8, 2024</span>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                    Read More →
                  </Button>
                </div>
              </div>
            </article>

            {/* Blog post 5 */}
            <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/startup-funding-venture-capital.png"
                  alt="Startup funding and investment strategies"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-teal-100 text-teal-700 text-xs font-medium px-2 py-1 rounded-full">Business</span>
                  <span className="text-gray-400 text-sm">7 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  Funding Your Startup: A Guide to Investment Options
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Navigate the funding landscape from bootstrapping to venture capital with confidence and clarity.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 5, 2024</span>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                    Read More →
                  </Button>
                </div>
              </div>
            </article>

            {/* Blog post 6 */}
            <article className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src="/ux-ui-conversion.png"
                  alt="User experience design and conversion optimization"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-pink-100 text-pink-700 text-xs font-medium px-2 py-1 rounded-full">Design</span>
                  <span className="text-gray-400 text-sm">4 min read</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  User Experience That Converts: Design Principles That Matter
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Essential UX principles that turn visitors into customers and create products people actually want to
                  use.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Dec 3, 2024</span>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                    Read More →
                  </Button>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              View All Resources
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
