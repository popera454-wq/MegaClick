import Navbar from "@/components/Navbar";


export default function Home() {

  return (

    <main>

      <Navbar />


      <section
        className="
        min-h-screen

        flex
        items-center
        justify-center

        "
      >

        <h1
          className="
          text-7xl
          font-black

          bg-gradient-to-r
          from-purple-400
          via-blue-400
          to-cyan-300

          bg-clip-text
          text-transparent
          "
        >
          MegaClick
        </h1>


      </section>


    </main>

  );
}