// import { Button } from "@/components/ui/button";
// import { LogOut } from "lucide-react";
// const imageAvatar = [
//   {
//     title: "Logout",
//     url: "/login",
//     icon: LogOut,
//   },
// ];
// function Home() {
//   return (
//     <div className="flex-1 bg-gray-900 p-5 h-screen">
//       <h2 className="text-2xl text-white font-bold">Home</h2>
//       <div className="mt-4 p-4 rounded-lg">
//         <textarea
//           className="flex text-white w-full p-2 rounded-lg"
//           placeholder="What’s happening?!"
//         >
//           <Button className="items-center basis-128 bg-green-500 m-5 p-3 w-50 rounded-3xl">
//             Post
//           </Button>
//         </textarea>
//       </div>

//       {/*  Post */}
//       <div className="mt-4 p-4 rounded-lg">
//         <p className="text-white        w-8 h-8 bg-green-400 rounded-full">
//           Indah Pita Karya
//         </p>
//       </div>
//       <div className="mt-4 p-4 rounded-lg">
//         <p className="text-gray-300">
//           @user456: Postingan kedua dengan tampilan yang menarik.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Home;
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Heart, MessageSquareText } from "lucide-react";

function Home() {
  const posts = [
    {
      username: "Indah Pra Karya",
      handle: "indahpra",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      likes: 36,
      replies: 38,
      avatar:
        "https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg",
    },
    {
      username: "Mona",
      handle: "monamariza",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      likes: 25,
      replies: 181,
    },
    {
      username: "Compounding Quality",
      handle: "Compounding",
      text: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum(The Extremes of Good and Evil) by Cicero",
      likes: 380,
      replies: 192,
      image:
        "https://www.diykamera.com/wp-content/uploads/2017/07/cara-memotret-pemandangan.jpg",
    },
  ];

  return (
    <div className="flex-1 bg-gray-900 p-5 h-screen overflow-auto">
      <h2 className="text-2xl font-bold text-white">Home</h2>

      {/* Input untuk membuat postingan */}
      <div className=" flex p-2 rounded-lg mt-4">
        <textarea
          className="w-full  p-2 rounded-lg text-white"
          placeholder="What’s happening?!"
        ></textarea>
        <Button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg">
          Post
        </Button>
      </div>

      {/*  Postingan */}
      {posts.map((post, index) => (
        <div key={index} className=" p-4 rounded-lg mt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full">
              <Avatar>
                <AvatarImage
                  className="rounded-3xl"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            {/* <div className="w-10 h-10 bg-green-400 rounded-full"></div> */}
            <div>
              <p className="font-bold text-white">{post.username}</p>
              <p className="text-gray-400">@{post.handle}</p>
            </div>
          </div>
          <p className="text-white mt-2">{post.text}</p>
          {post.image && (
            <img src={post.image} className="mt-2 rounded-lg" alt="post" />
          )}
          <div className="flex gap-5 mt-3 text-gray-400">
            <div className="flex items-center gap-1">
              <Heart size={18} />
              <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquareText size={18} />
              <span>{post.replies} Replies</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
