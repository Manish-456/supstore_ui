import React from "react";
import Card from '../Card/Card'
import './Lists.scss'
const Lists = () => {
  const data = [

    {
      id: 7,
      title: "White Gold Plated Princess",
      oldprice: 9.99,
      newPrice : 20.05,
      
      description:
        "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
      category: "jewelery",
      image2 : "https://images.unsplash.com/photo-1611153730462-e84a16b8c6e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2FuZGlza3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 3, count: 400 },
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      oldprice: 10.99,
      newPrice : 20.4,
      image2 : "https://images.unsplash.com/photo-1667902687222-1b6e158e58ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8R29sZCUyMFBsYXRlZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      description:
        "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 1.9, count: 100 },
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      oldprice: 64,
      newPrice : 50.39,
      isNew : true,
      description:
        "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
       image2 : "https://images.unsplash.com/photo-1551818014-7c8ace9c1b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8VVNCJTIwMy4wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      rating: { rate: 3.3, count: 203 },
    },
    {
      id: 10,
      title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      image2 : "https://media.istockphoto.com/id/1083769600/photo/black-computer-cable-sata-6gbs-isolated-on-white-background-closeup-top-view.jpg?b=1&s=170667a&w=0&k=20&c=pfNzPivA1aW5RgFqXIYBMFHMG4eeyGTLLrCDz3QnYzo=",
      oldprice: 109,
      newPrice : 100,
      isNew : true,

      description:
        "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
      category: "electronics",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 470 },
    },
  ];
  return <div className="Lists">
   {data?.map((item) => {
    return <Card key={item.id} item={item} />
   })}
  </div>;
};

export default Lists;
