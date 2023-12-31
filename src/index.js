import React from "react";
import ReactDOM  from "react-dom";
import Card from "./Cards";
import Sdata from "./Sdata";
import "./index.css";

ReactDOM.render(
<>
<h1 className="heading-style">List of 5 Netflix Series</h1>
<Card className="card-style"
sname={Sdata[0].sname}
imgsrc={Sdata[0].imgsrc}
title={Sdata[0].title}
link={Sdata[0].link}
/>

<Card className="card-style"
sname={Sdata[1].sname}
imgsrc={Sdata[1].imgsrc}
title={Sdata[1].title}
link={Sdata[1].link}
/>

<Card className="card-style"
sname={Sdata[2].sname}
imgsrc={Sdata[2].imgsrc}
title={Sdata[2].title}
link={Sdata[2].link}
/>

<Card className="card-style"
sname={Sdata[3].sname}
imgsrc={Sdata[3].imgsrc}
title={Sdata[3].title}
link={Sdata[3].link}
/>

<Card className="card-style"
sname={Sdata[4].sname}
imgsrc={Sdata[4].imgsrc}
title={Sdata[4].title}
link={Sdata[4].link}
/>
</>,document.getElementById("root")
);