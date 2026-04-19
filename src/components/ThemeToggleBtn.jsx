// import React, { useEffect } from 'react'
// import assets from '../assets/assets'

// const ThemeToggleBtn = ({theme,setTheme}) => {
//     // useEffect(()=>{
//     //     const preferDarkMode= window.
//     //     matchMedia('(prefers-color-scheme: dark)').matches;
//     //     setTheme( (theme || preferDarkMode) ? 'dark' : 'light' )
//     // },[])
//     useEffect(() => {
//   const savedTheme = localStorage.getItem('theme')
//   const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

//   if (savedTheme) {
//     setTheme(savedTheme)
//   } else {
//     setTheme(preferDarkMode ? 'dark' : 'light')
//   }
// }, [])
//     useEffect(()=>{
//         if(theme ==='dark'){
//             document.documentElement.classList.add('dark')
//             console.log("theme")
//             console.log(document.documentElement.classList)
//         } else{
//             document.documentElement.classList.remove('dark')

//         }
//         localStorage.setItem('theme',theme)

//     },[theme])
//   return (
//     <>
//     {/* <button>
//         {theme ==='dark'? (
//             <img src={assets.sun_icon}
//             onClick={()=>setTheme('light')}
//             className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt=''/>
//         )
//         :(
//             <img src={assets.moon_icon}
//             onClick={()=>setTheme('dark')}
//             className='size-8.5 p-1.5 border border-gray-500 rounded-full'
//             alt=''/>
//         )
//         }
//     </button> */}
//     <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
//   <img
//     src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
//     className="size-8.5 p-1.5 border border-gray-500 rounded-full"
//     alt=""
//   />
// </button>
//     </>
//   )
// }

// export default ThemeToggleBtn

import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme) {
      setTheme(savedTheme)
    } else {
      setTheme(preferDarkMode ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <img
        src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
        className="size-8.5 p-1.5 border border-gray-500 rounded-full"
        alt=""
      />
    </button>
  )
}

export default ThemeToggleBtn