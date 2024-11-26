import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleRight, FaReact, FaLaptop, FaHeart, FaPlane } from "react-icons/fa";

const NewPost = () => {
  const posts = [
    {
      id: '1',
      title: 'MakeUp Website',
      date: 'Nov 17, 2024',
      excerpt:
        "MakeUp Website - This project is all about creating a stunning makeup website, showcasing beauty products, tutorials, and more. Discover the world of makeup with style and elegance.",
      image: '/images/makeup.jpg',
    },
    {
      id: '2',
      title: 'Car Website',
      date: 'Nov 18, 2024',
      excerpt:
        'Car Website - A platform designed for car enthusiasts and buyers, offering information about car models, reviews, and deals. The Car Website lets you explore various car options at your convenience.',
      image: '/images/car.jpg',
    },
    {
      id: '3',
      title: 'Food Hub Website',
      date: 'Nov 19, 2024',
      excerpt:
        'Food Hub Website - Dive into the world of gourmet food and recipes with our Food Hub. From cooking tutorials to food reviews, this website will satisfy your culinary curiosity.',
      image: '/images/d.png',
    },
    {
      id: '4',
      title: 'Resume Builder Website',
      date: 'Nov 20, 2024',
      excerpt:
        'Resume Builder Website - Create professional resumes in minutes with this easy-to-use platform. The Resume Builder Website helps you craft a standout resume and land your dream job.',
      image: '/images/r.jpg',
    },
    {
      id: '5',
      title: 'Nextjs 15 Blog website',
      date: 'Nov 21, 2024',
      excerpt:
        'Nextjs 15 Blog Website - Explore the latest features of Next.js 15 with this blog website. Learn tips, tricks, and best practices to build efficient and scalable web applications.',
      image: '/images/n.png',
    },
    {
      id: '6',
      title: 'Portfolio Website',
      date: 'Nov 22, 2024',
      excerpt:
        'Portfolio Website - Showcase your work and accomplishments with this personalized portfolio website. Whether you are a designer, developer, or photographer, your portfolio will leave a lasting impression.',
      image: '/images/sakeena.jpg',
    },
  ];

  return (
    <div id="posts" className="relative bg-gray-900 text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section id="home">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Latest Posts</h2>

          {/* Buttons for the new sections */}
          <div className="mt-12 flex justify-center space-x-4 flex-wrap">
            <Link
              href="/technology"
              className="flex items-center px-4 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 space-x-2"
            >
              <FaLaptop className="text-lg" />
              <span>Technology</span>
            </Link>
            <Link
              href="/lifestyle"
              className="flex items-center px-4 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300 space-x-2"
            >
              <FaHeart className="text-lg" />
              <span>Lifestyle</span>
            </Link>
            <Link
              href="/traveling"
              className="flex items-center px-4 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 space-x-2"
            >
              <FaPlane className="text-lg" />
              <span>Traveling</span>
            </Link>
          </div>

          {/* Post Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.id}`}
                className="bg-gradient-to-br from-gray-800 via-gray-700 to-black border-2 border-white text-white p-6 shadow-xl rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 hover:border-gray-600"
              >
                <div className="mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-md"
                  />
                </div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-yellow-500 mb-4">{post.date}</p>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center space-x-2 text-yellow-400 font-semibold transition duration-300">
                  <p>Read More</p>
                  <FaArrowCircleRight className="text-xl" />
                  <FaReact className="text-blue-400 text-xl" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default NewPost;
