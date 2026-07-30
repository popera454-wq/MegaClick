"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Gamepad2,
  Plus
} from "lucide-react";

import Logo from "./Logo";
import {
  languages,
  translations
} from "@/lib/translations";

import {
  useLanguage
} from "./LanguageProvider";


export default function Navbar(){


const {
  language,
  changeLanguage
}=useLanguage();


const [open,setOpen]=useState(false);



const current =
translations[language] ||
translations.he;



return(

<motion.nav

initial={{
opacity:0,
y:-30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8,
ease:[0.22,1,0.36,1]
}}


className="

fixed

top-5

left-4

right-4

z-50

mx-auto

max-w-[1500px]


min-h-[82px]


rounded-[28px]


border

border-white/15


bg-[#08080c]/75


backdrop-blur-2xl


shadow-[0_25px_80px_rgba(0,0,0,.55)]


flex

items-center

justify-between


px-6


"


>



{/* אור זכוכית */}

<div

className="

absolute

inset-0

rounded-[28px]

bg-gradient-to-r

from-purple-500/10

via-blue-500/10

to-cyan-400/10

pointer-events-none

"

/>





{/* LOGO */}

<div className="
relative
z-10
shrink-0
">

<Logo/>

</div>






{/* MENU */}

<div

className="

hidden

xl:flex

items-center

gap-7

relative

z-10

"

>


{current.menu.map(
(item:string)=>(


<button

key={item}

className="

text-white/75

font-semibold

text-[15px]


hover:text-white


transition

duration-300


relative


group

"

>


{item}


<span

className="

absolute

bottom-[-7px]

right-0

h-[2px]

w-0

bg-gradient-to-r

from-purple-400

to-cyan-400


transition-all

duration-300


group-hover:w-full

"

/>


</button>


))


}


</div>






{/* ACTIONS */}

<div

className="

relative

z-10

flex

items-center

gap-3

"

>





{/* LANGUAGE */}

<div className="relative">


<button

onClick={()=>setOpen(!open)}

className="

flex

items-center

gap-2


px-3

py-2


rounded-full


text-white


font-semibold


hover:bg-white/10


transition

"

>

🌍

<span className="hidden md:block">

{languages.find(
x=>x.code===language
)?.name}

</span>


<ChevronDown size={15}/>


</button>





{open && (

<motion.div

initial={{
opacity:0,
y:-10,
scale:.95
}}

animate={{
opacity:1,
y:0,
scale:1
}}


className="

absolute

top-12

right-0


w-56


max-h-[350px]


overflow-y-auto


rounded-2xl


border

border-white/20


bg-black/90


backdrop-blur-xl


p-2


shadow-2xl

"

>


{languages.map((lang)=>(


<button


key={lang.code}


onClick={()=>{

changeLanguage(lang.code);

setOpen(false);

}}


className="

w-full

text-right


px-4

py-2


rounded-xl


text-white/80


hover:bg-white/10


hover:text-white


transition


"

>

{lang.name}


</button>


))}



</motion.div>

)}


</div>








{/* JOIN */}

<button


className="

hidden

lg:flex


items-center

gap-2


px-5

py-3


rounded-full


border

border-white/20


bg-white/5


text-white


font-semibold



hover:bg-white/15


hover:scale-[1.03]


transition-all


"

>


<Gamepad2 size={18}/>


{current.join}


</button>







{/* CREATE */}

<button


className="


flex


items-center

gap-2


px-5

py-3


rounded-full


bg-gradient-to-r


from-purple-500


via-blue-500


to-cyan-400



text-white


font-extrabold



shadow-[0_0_40px_rgba(139,92,246,.5)]



hover:scale-[1.05]


hover:shadow-[0_0_70px_rgba(34,211,238,.6)]


transition-all


"


>


<Plus size={18}/>


{current.create}


</button>





</div>





</motion.nav>


)

}