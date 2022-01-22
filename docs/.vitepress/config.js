const primarySidebar = [
    {text: "cvi", link:"/cvi/"}, 
    {text:"brief", link:"/cvi/brief"},
    {text:"moodboard", link:"/cvi/moodboard"},

]


module.exports = {
    title: "Blog 1",
    themeConfig: {
        nav: [
            { text:"Home", link:"/" },
            { text:"About", link:"/about/" },
            { text: "CVI", link: "/cvi/" },
        ],
        sidebar: {
            "/cvi/":primarySidebar,
            "/cvi/brief":primarySidebar,
        }
      }
  };

