import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import BtnSb from "./components/BtnSb";
const Btns = [
  {
    id: 1,
    title: "most popular",
    content: "some content",
  },
  {
    id: 2,
    title: "most recent",
    content: "some content",
  },
  {
    id: 3,
    title: "most recent",
    content: "some content",
  },
];
const Posts = [
  {
    id: 1,
    title: "Getting Started with React",
    content: "Today I learned about React hooks and how they simplify state management in functional components. useState and useEffect are particularly powerful!",
    user: "react_dev",
    date: "2023-05-15"
  },
  {
    id: 2,
    title: "Tailwind CSS Tips",
    content: "Just discovered how to create responsive layouts with Tailwind's grid system. The @apply directive is also great for reusing styles!",
    user: "css_wizard",
    date: "2023-05-10"
  },
  {
    id: 3,
    title: "Vite vs Create-React-App",
    content: "After switching to Vite, my development builds are 10x faster. The hot module replacement is incredibly smooth compared to CRA.",
    user: "build_optimizer",
    date: "2023-05-05"
  }
];const BtnsLoop = Btns.map((btn) => (
  <BtnSb 
    key={btn.id}
    title={btn.title} 
    content={btn.content}
    className="bg-gradient-to-r from-cyan-800 to-blue-400 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-300 hover:bg-gradient-to-r hover:from-cyan-900 hover:to-blue-500"
  />
));
const PostsLoop = Posts.map((post) => {
  return (
    <Post
      key={post.id}
      postTitle={post.title}
      postContent={post.content}
      user={post.user}
    />
  );
});
const App = () => {
  return (
    <>
      <Header />
      <div className="flex  bg-zinc- items-start">
        <Sidebar>{BtnsLoop}</Sidebar>
        <div className="flex flex-col items-center justify-center w-full">
          {Sidebar.children = PostsLoop}
        </div>
      </div>
    </>
  );
}
export default App;
