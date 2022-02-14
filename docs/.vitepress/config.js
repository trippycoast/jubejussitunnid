
   
  const cviSidebar = [
    { text: "cvi", link: "/cvi/" },
    { text: "brief", link: "/cvi/brief" },
    { text: "moodboard", link: "/cvi/moodboard" },
]
const logiSidebar = [
    { text: "logi", link: "/logi/" },
    { text: "Fonditöötlus", link: "/logi/01_fontedit" },
    { text: "Ruudust tähed, nimest märk", link: "/logi/02_ruudud_mark" },
    { text: "Logo visandamine ", link: "/logi/03_apple_logo" },
    { text: "Referentsi töö 1", link: "/logi/04_refer1" },
]

module.exports = {
    title: "Blog 1",
    base:"/docweb1/",
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
            "/logi/02_ruudud_mark": logiSidebar,
            "/logi/03_apple_logo": logiSidebar,
            "/logi/04_refer1": logiSidebar,
        },
    }
};