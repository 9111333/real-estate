import HomeP from "./Pages/HomeP/HomeP"
import SaleP from "./Pages/SaleP/SaleP"
import RentP from "./Pages/RentP/RentP"
import AboutP from "./Pages/AboutP/AboutP"
import ContactP from "./Pages/ContactP/ContactP"
import ProductsP from "./Pages/ProductsP/ProductsP"
import MenuGsap from "./Components/MenuGsap/MenuGsap"

const routes = [
    {path: '/' , element: <HomeP/>},
    {path: '/sale' , element: <SaleP/>},
    {path: '/Rent' , element: <RentP/>},
    {path: '/About' , element: <AboutP/>},
    {path: '/Contact' , element: <ContactP/>},
    {path: '/Products' , element: <ProductsP/>},
    {path: '/gsap1' , element: <MenuGsap image1="../../public/images/s1.jpg" image2="../../public/images/l1.jpg" image3="../../public/images/k1.jpg"/>},
    {path: '/gsap2' , element: <MenuGsap image1="../../public/images/s2.jpg" image2="../../public/images/l2.jpg" image3="../../public/images/k2.jpg"/>},
    {path: '/gsap3' , element: <MenuGsap image1="../../public/images/s3.jpg" image2="../../public/images/l3.jpg" image3="../../public/images/k3.jpg"/>},
    {path: '/gsap4' , element: <MenuGsap image1="../../public/images/s4.jpg" image2="../../public/images/l4.jpg" image3="../../public/images/k4.jpg"/>},
    {path: '/gsap5' , element: <MenuGsap image1="../../public/images/s5.jpg" image2="../../public/images/l5.jpg" image3="../../public/images/k5.jpg"/>},
    {path: '/gsap6' , element: <MenuGsap image1="../../public/images/s6.jpg" image2="../../public/images/l6.jpg" image3="../../public/images/k6.jpg"/>},
    {path: '/gsap7' , element: <MenuGsap image1="../../public/images/s7.jpg" image2="../../public/images/l7.jpg" image3="../../public/images/k7.jpg"/>},
    {path: '/gsap8' , element: <MenuGsap image1="../../public/images/s8.jpg" image2="../../public/images/l8.jpg" image3="../../public/images/k8.jpg"/>},
    {path: '/gsap9' , element: <MenuGsap image1="../../public/images/s9.jpg" image2="../../public/images/l9.jpg" image3="../../public/images/k9.jpg"/>},
    {path: '/gsap10' , element: <MenuGsap image1="../../public/images/s10.jpg" image2="../../public/images/l10.jpg" image3="../../public/images/k10.jpg"/>},
    {path: '/gsap11' , element: <MenuGsap image1="../../public/images/s11.jpg" image2="../../public/images/l11.jpg" image3="../../public/images/k11.jpg"/>},
    {path: '/gsap12' , element: <MenuGsap image1="../../public/images/s12.jpg" image2="../../public/images/l12.jpg" image3="../../public/images/k12.jpg"/>},
    {path: '/gsap13' , element: <MenuGsap image1="../../public/images/s13.jpg" image2="../../public/images/l13.jpg" image3="../../public/images/k13.jpg"/>},
    {path: '/gsap14' , element: <MenuGsap image1="../../public/images/s14.jpg" image2="../../public/images/l14.jpg" image3="../../public/images/k14.jpg"/>},
    {path: '/gsap15' , element: <MenuGsap image1="../../public/images/s15.jpg" image2="../../public/images/l15.jpg" image3="../../public/images/k15.jpg"/>},
]

export default routes

