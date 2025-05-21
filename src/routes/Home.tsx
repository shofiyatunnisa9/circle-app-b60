import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Heart, ImagePlus, MessageSquareText } from "lucide-react";

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
    <div className=" flex-1 bg-gray-900 p-5 min-h-screen border-gray-700 ">
      <h2 className="text-2xl font-bold text-white">Home</h2>

      {/* Input untuk membuat postingan */}
      <div className=" flex p-2 rounded-lg mt-4 gap-2 ">
        <Avatar>
          <AvatarImage
            className="rounded-full size-9"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Input
          className="w-full  p-3 rounded-lg border-none text-white"
          placeholder="What’s happening?!"
        ></Input>
        <ImagePlus size={45} className="text-green-700" />
        <Button className="mt-1 bg-green-700 text-white px-3 py-1.5 rounded-4xl">
          Post
        </Button>
      </div>

      {/*  Postingan */}
      <div>
        <div className="flex p-4 items-center rounded-lg mt-4 gap-3 text-white">
          <div className="w-10 h-10 rounded-full">
            <Avatar>
              <AvatarImage
                className="rounded-3xl"
                src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex gap-2">
            <p className="font-bold">Indah Paradipta</p>
            <p className=" text-gray-400 ">@indahhnyaa · 2h</p>
          </div>
        </div>
        <p className="text-white ml-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, id.
        </p>
        <div className="flex text-gray-400 ml-5 pt-3 gap-2 items-center ">
          <Heart size={18} />
          <span>34</span>
          <MessageSquareText size={18} />
          <span>20 Replies</span>
        </div>
        {/* 2 */}
        <div className="flex p-4 items-center rounded-lg mt-4 gap-3 text-white">
          <div className="w-10 h-10 rounded-full">
            <Avatar>
              <AvatarImage
                className="rounded-3xl"
                src="https://avatar.iran.liara.run/public/8"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex gap-2">
            <p className="font-bold">Renald Septian</p>
            <p className=" text-gray-400">@Rnlspt2 · 4h</p>
          </div>
        </div>
        <p className="text-white ml-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id
          ab dolorum ullam officia ex.
        </p>
        <div className="flex text-gray-400 ml-5 pt-3 gap-2 items-center ">
          <Heart size={18} />
          <span>55</span>
          <MessageSquareText size={18} />
          <span>31 Replies</span>
        </div>
      </div>

      {posts.map((post, index) => (
        <div key={index} className=" p-4 rounded-lg mt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full">
              <Avatar>
                <AvatarImage
                  className="rounded-3xl"
                  src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-women-cartoon-avatar-in-flat-style-png-image_6110776.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            {/* <div className="w-10 h-10 bg-green-400 rounded-full"></div> */}
            <div className="flex gap-2">
              <p className="font-bold text-white">{post.username}</p>
              <p className="text-gray-400">@{post.handle} · 5h</p>
            </div>
          </div>
          <p className="text-white mt-2">{post.text}</p>
          {post.image && (
            <img src={post.image} className="mt-2 rounded-lg" alt="post" />
          )}
          <div className="flex gap-5 mt-3 text-gray-400  ">
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
