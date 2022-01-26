
   
  const cviSidebar = [
    { text: "cvi", link: "/cvi/" },
    { text: "brief", link: "/cvi/brief" },
    { text: "moodboard", link: "/cvi/moodboard" },
]
const logiSidebar = [
    { text: "logi", link: "/logi/" },
    { text: "Fonditöötlus", link: "/logi/01_fontedit" }
]

module.exports = {
    title: "Blog 1",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about/" },
            { text: "Log", link: "/logi/" },
            { text: "CVI", link: "/cvi/" },
        ],
        sidebar:
        {
            "/cvi/": cviSidebar,
            "/cvi/brief": cviSidebar,
            "/logi/": logiSidebar,
            "/logi/01_fontedit": logiSidebar,
        },
    }
};