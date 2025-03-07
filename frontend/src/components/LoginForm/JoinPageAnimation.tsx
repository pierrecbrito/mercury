const messages: Array<{
    top: number;
    left?: number;
    right?: number;
    image: string;
    profileName: string;
    message: string;
  }> = [
    { top: 150, left: 90, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTiGlASQN2aBayDa3IennhcpPOMJV8tyCcOw&s", profileName: "Claus Maverick", message: "Hello World! I'm loving this awesome app!" },
    { top: 400, left: 170, image: "https://www.chaac.tf.fau.de/files/2021/02/1071625.jpg", profileName: "André Mendes", message: "Amazing platform! Best way to stay connected." },
    { top: 150, right: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSGBappxdh0AMAMRy0mE3Q-Fv73ev0dbmqPyk-Lp97tY7nMjXKyXcqiQ5TNFGTBTZIO4&usqp=CAU", profileName: "Jhon Jovi", message: "Communication has never been this smooth!" },
    { top: 500, right: 180, image: "https://www.komarov.design/content/images/2020/11/image-5.jpeg", profileName: "Albert Messon", message: "Hands down the best messaging app out there!" },
    { top: 500, left: 120, image: "https://img.freepik.com/free-psd/close-up-kid-expression-portrait_23-2150193262.jpg", profileName: "Sara Lima", message: "This app makes my day so much easier!" },
    { top: 300, right: 200, image: "https://pbs.twimg.com/media/DzeLmXPU8AEod4s.jpg", profileName: "Mike Torres", message: "Super fast and reliable platform!" },
    { top: 250, left: 80, image: "https://storage.googleapis.com/support-forums-api/avatar/profile-17631255-8121131857897798990.jpg", profileName: "Julia Hart", message: "I can’t imagine my life without this app!" },
    { top: 450, right: 130, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xW2RFl2QLAchkHyt4DDU5RA5glgOA7sjUw&s", profileName: "Lucas Brown", message: "Messaging perfection achieved!" },
    { top: 100, left: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq5KhDtblEJcS-4ipur0rXSFGWGHDOqiyUaQ&s", profileName: "Emma Stone", message: "Such a cool way to connect with people!" },
    { top: 350, right: 90, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSefBZHTbKuykUCO_CI79wOWHwNr_Sl7Xjb_kE6WI0esGgU6c_DJjMbB6RCfkUCDa1EmQc&usqp=CAU", profileName: "Pedro Silva", message: "This app is a game changer for sure!" },
    { top: 180, left: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1aNjuLfMlu2lUCxIvI0-Er9Gu7ke32AT6Bg&s", profileName: "Anna Lee", message: "Love how simple and effective this is!" },
    { top: 420, right: 160, image: "https://img.freepik.com/free-photo/close-up-dirty-face-homeless-man_23-2148464312.jpg", profileName: "Tom Harris", message: "The ultimate messaging experience!" },
    { top: 130, left: 110, image: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", profileName: "Clara Jones", message: "Wow, this app is absolutely fantastic!" },
    { top: 470, right: 140, image: "https://img.freepik.com/free-photo/young-attractive-man-looking-suprised-isolated-red_155003-11739.jpg?semt=ais_hybrid", profileName: "David Kim", message: "Super intuitive and fun to use!" },
    { top: 220, left: 100, image: "https://i.pinimg.com/280x280_RS/f5/46/7a/f5467a9a66992fa43150607e9a2ca3b1.jpg", profileName: "Sophie Clark", message: "Messaging made easy and enjoyable!" },
    { top: 380, right: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq0f1tSU2b8opZaApGh5tl2FreFb52dyo6Q&s", profileName: "Ryan Patel", message: "This platform is pure gold!" },
    { top: 160, left: 130, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScBncicquBYWyYIjbvckD7f_WZ_YLRn_y5bP_xuJZp4iQ4WVUCFUyTXHKqNksPA1wIUAU&usqp=CAU", profileName: "Lena Ortiz", message: "Best app for staying in touch!" },
    { top: 490, right: 170, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlctbs28wfdqXr1Vq1zJN0Vs9qe3Rvp1aCa2xUjXsRyonnQaX47Uj3TGAOrJhPTpeXRMQ&usqp=CAU", profileName: "James Carter", message: "Incredible design and functionality!" },
    { top: 140, left: 140, image: "https://preview.redd.it/irocbscnw3871.jpg?auto=webp&s=57435fb1b3e386eb436cb0ba2ebf210e2898e083", profileName: "Mia Davis", message: "I’m obsessed with this app!" },
    { top: 410, right: 110, image: "https://t-power89.github.io/images/avatar.jpg", profileName: "Noah Evans", message: "Top-notch communication tool!" },
    { top: 270, left: 160, image: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D", profileName: "Isabella Cruz", message: "So glad I found this platform!" },
    { top: 330, right: 190, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbU43C-YCGp9S5d2uANaHayvgXEPh2403QZbI4Zg4VkNWVwxS1-NEv0k6456H7dnAY5RA&usqp=CAU", profileName: "Ethan Moore", message: "Fast, sleek, and awesome!" },
    { top: 190, left: 90, image: "https://img.freepik.com/free-photo/portrait-smiley-woman_23-2148827181.jpg", profileName: "Olivia White", message: "This app is a total lifesaver!" },
    { top: 460, right: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0AamC2-3-qIIPTnn9bjKPg0R95Z_pXWKlQ&s", profileName: "Liam Hayes", message: "Perfect for all my messaging needs!" },
    { top: 120, left: 180, image: "https://randomuser.me/api/portraits/women/81.jpg", profileName: "Ava King", message: "Highly recommend this to everyone!" },
    { top: 390, right: 100, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQVa_1zpKQFmNErBCHIwdk1Jt54p_oSwNFQ&s", profileName: "Mason Reed", message: "This is the future of messaging!" },
  ];

  export default messages;