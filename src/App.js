import './App.css';
import img from './img/banner.jpg'; 
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import './remixicon/fonts/remixicon.css'
import React, { useState, useEffect, useRef , setStatus } from 'react'

function App() {
  const data = useRef([])
  const imgs = useRef([img1,img2,img3])
  const deleteBlog = (e) => {
    const id = e.target.getAttribute("name")
    const i = e.target.getAttribute("index")
    fetch('https://jsonplaceholder.typicode.com/posts/'+id, { method: 'DELETE' });
    data.current = data.current.splice(0,i)
    alert("Blog Deleted")
  }
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((res) => {
      data.current = res.slice(0, 3)
      console.log(data.current);
    })
  }, [])
  return (
    <div className="App">
      {/* -----------------------menu----------------------- */}
      <div className="p-3 border-b-4 border-orange-400">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 w-full">
            <div className="text-orange-400 font-bold">HomeDepot.com</div>
            <div className="flex-grow">
              <div className="flex divide-x font-bold text-md text-orange-400 divide-orange-400 w-full justify-end">
                <a href='/' className="px-3 flex gap-2">
                  <div className="">
                    <i className="ri-user-fill relative" style={{'top':'2px'}}></i>
                  </div>
                  <div className="capitalize">our contributors</div>
                </a>
                <a href='/' className="px-3 flex gap-2">
                  <div className="">
                    <i className="ri-add-fill relative" style={{'top':'2px'}}></i>
                  </div>
                  <div className="capitalize">become a contributor</div>
                </a>
                <a href='/' className="px-3 flex gap-2">
                  <div className="">
                    <i className="ri-share-fill relative" style={{'top':'2px'}}></i>
                  </div>
                  <div className="capitalize">become a contributor</div>
                  <div className="">
                    <i className="ri-arrow-down-s-fill relative" style={{'top':'2px'}}></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------- submenu ----------------------------------- */}
      <div className="p-3 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 w-full">
            <div className="text-2xl font-bold capitalize">
              the home depot blog
            </div>
            <div className="flex-grow">
              <div className="flex items-center divide-x font-bold text-md text-orange-400 divide-orange-400 w-full justify-end">
                <div className="flex gap-3">
                  <a href='/' className="px-3 flex gap-2">
                    <div className="capitalize">kitchen ideas</div>
                  </a>
                  <a href='/' className="px-3 flex gap-2">
                    <div className="capitalize">style challenges</div>
                    <div className="">
                      <i className="ri-arrow-down-s-fill relative" style={{'top':'2px'}}></i>
                    </div>
                  </a>
                  <a href='/' className="px-3 flex gap-2">
                    <div className="capitalize">room ideas</div>
                    <div className="">
                      <i className="ri-arrow-down-s-fill relative" style={{'top':'2px'}}></i>
                    </div>
                  </a>
                </div>
                <div className="flex gap-4 pl-5">
                  <div className="bg-gray-100 h-8 w-72 flex justify-center rounded-md">
                    <input type={'text'} className="bg-transparent w-full p-2 focus:outline-none focus:ring-0" />
                  </div>
                  <div className="w-8 h-8 flex justify-center items-center rounded-full border-2 border-orange-400 text-orange-400">
                    <i className="ri-search-line" style={{ 'top':'1px'}}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------- page banner -------------------------------- */}

      <div className="">
      <div className="max-w-7xl relative mx-auto h-[500px]" style={{
        'backgroundImage': `url(${img})`,
        'backgroundSize': 'cover',
        'backgroundPosition': 'center',
        'backgroundRepeat': 'no-repeat',
      }}>
        <div className="text-left space-y-3 text-white px-16 pt-16">
          <div className="">
            <div className="uppercase relative top-3 text-3xl font-bold">
              welcome to
            </div>
            <div className="uppercase text-5xl font-extrabold">
              the home depot blog
            </div>
          </div>
          <div className="">
            <p className="max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto beatae dolorem, accusantium nemo similique ad harum, eligendi magnam!
            </p>
          </div>
          <div className="">
            <div className="uppercase text-sm text-white font-bold py-3 w-44 cursor-pointer hover:bg-orange-400 text-center bg-orange-500 rounded-sm">get inspired</div>
          </div>
        </div>
        <div className="absolute w-full px-8 -bottom-48 grid grid-cols-3 gap-5">
          {data.current.map((item, i) => {
            return <div className="bg-white p-3 h-80">
              <div className="h-full w-full" style={{
                'backgroundImage': `url(${imgs.current[i]})`,
                'backgroundSize': 'cover',
                'backgroundPosition': 'center',
                'backgroundRepeat': 'no-repeat',
              }}>
                <div className="bg-gradient-to-b text-white text-left relative from-transparent via-transparent w-full h-full to-black">
                  <div name={item.id} index={i} onClick={deleteBlog} className="absolute group right-2 top-2">
                    <div className="text-white text-xs w-20 hidden group-hover:block relative top-1 right-5 rounded-lg bg-orange-300 p-1 font-bold">
                      delete post
                    </div>
                    <div className="w-8 h-8 rounded-full absolute top-0 right-0 cursor-pointer flex justify-center items-center bg-orange-400" style={{ 'z-index':'9999' }}>
                      <i className="ri-delete-bin-6-line" style={{ 'top':'1px'}}></i>
                    </div>
                  </div>
                  <div className="absolute bottom-0 p-3 text-lg font-bold">
                    {item.title}
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
