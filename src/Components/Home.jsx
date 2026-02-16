// import React from 'react'
// import Sidebar from "./Sidebar.jsx"
// import Video from "./Video.jsx"
// import { useAuth } from '../context/AuthProvider.jsx'

// const Home = () => {
//     const {data} = useAuth()
//     console.log(data);
    
//   return (
//     <div className='flex mt-20'>
//         <Sidebar />
//        <div className='h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden '>
//          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-5'>
//            {
//             data.map((item)=>{
//                 if(item.type!=="video") return false;
//                  return <Video key={item.id} video={item?.video} />
                
//             })
//            }
//         </div>
//        </div>
//     </div>
//   )
// }

// export default Home
import React from 'react'
import Sidebar from "./Sidebar.jsx"
import Video from "./Video.jsx"
import { useAuth } from '../context/AuthProvider.jsx'
import ListItems from './ListItems.jsx'

const Home = () => {
  const { data, loading } = useAuth()
  console.log(data);

  return (
    <div className='flex mt-20'>
      <Sidebar />

      <div className='h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden'>
        <ListItems />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5'>

          {
           !loading && data
              ?.filter((item) => item.type === "video")
              .map((item) => (
                <Video
                  key={item?.video?.videoId}
                  video={item?.video}
                />
              ))
          }

        </div>
      </div>
    </div>
  )
}

export default Home
