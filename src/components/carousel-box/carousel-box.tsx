import { useState } from "react"

export function CarouselBox(){

    const [cardItems] = useState([
    {
      icon: "/icons/water.png",
      title: "Best Quality Water",
      description:
        "Providing water infused with essential minerals and high purity standards.",
    },
    {
      icon: "/icons/pencil.png",
      title: "Custom Designs",
      description:
        "Get fully customized bottle and label designs tailored to your brand.",
    },
    {
      icon: "/icons/bottle.png",
      title: "Premium Bottles",
      description:
        "Durable, safe and stylish bottles made with high-quality materials.",
    },
  ]);
    return(
        <>
            <div className="d-flex justify-content-around " style={{margin:"0px 50px 0 50px"}}>
                {
                    cardItems.map((item,index)=>(
                    <div className="card m-4 shadow">
                      <div className="card-body">
                      <h5 className="card-title">
                        {item.title}
                      </h5>  
                      <p>{item.description}</p>
                    </div>
                    </div>
                    )
                )}
            </div>
        </>
    )
}