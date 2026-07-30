"use client";


import Image from "next/image";
import {useLanguage} from "./LanguageProvider";
import {languages} from "@/lib/translations";


export default function Logo(){


const {language}=useLanguage();


const current =
languages.find(
x=>x.code===language
);



return(

<div className="
flex
items-center
gap-3
">


<Image

src="/images/megaclick-logo.png"

alt="MegaClick"

width={200}

height={200}

className="
w-[52px]
h-[52px]
object-contain
"

/>



<div className="
flex
flex-col
leading-none
">


<span className="
text-[26px]
font-black

bg-gradient-to-r
from-purple-400
via-blue-400
to-cyan-300

bg-clip-text
text-transparent
">

MegaClick

</span>


<span className="
text-[10px]
mt-1
text-white/50
tracking-wider
">

{current?.tagline}

</span>


</div>


</div>

)

}