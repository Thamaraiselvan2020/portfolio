var e1=document.createElement("div");
e1.setAttribute("class","resume_container");
document.body.append(e1);

var e1style=document.querySelector(".resume_container");
e1style.style.width="1000px";
e1style.style.height="1350px";
e1style.style.margin="0 auto";
e1style.style.marginTop="-5px";
e1style.style.backgroundColor="cyan";
e1style.style.position="relative";
e1style.style.display="block";

var e2 = document.createElement("div");
e2.setAttribute("class","resume_top");
e1.appendChild(e2);

var e2style = document.querySelector(".resume_top");
e2style.style.backgroundColor = "gray";
e2style.style.width = "100%";
e2style.style.height = "197px";
e2style.style.position="relative";
e2style.style.marginTop="0px";

var e3 = document.createElement("div");
e3.setAttribute("class","candidate_photo");
e2.appendChild(e3);

var e3style=document.querySelector(".candidate_photo");
e3style.style.position="relative";
e3style.style.width="160px";
e3style.style.height="150px";
e3style.style.overflow="hidden";
e3style.style.marginLeft = "420px";
e3style.style.marginRight = "420px";
e3style.style.marginTop="2px";
e3style.style.borderRadius = "100%";
e3style.style.borderColor= "orangered";
e3style.style.borderStyle="dotted";
e3style.style.borderWidth="5px";

var e4=document.createElement("img");
e4.setAttribute("class","candidate_photo img");
e4.setAttribute("src","https://media-exp1.licdn.com/dms/image/C5603AQFr2RIxBvxzeA/profile-displayphoto-shrink_200_200/0?e=1599696000&v=beta&t=qpIOLKb69m1hnDIkZZqBRNgDtGVracPGN6TiYsZd2R0");
e3.appendChild(e4);

var e4style=document.querySelector(".candidate_photo img");
e4style.style.width="100%";
e4style.style.height="100%";
e4style.style.display="block";

var e5=document.createElement("div");
e5.setAttribute("class","top_inner");
e2.appendChild(e5);

var e5style=document.querySelector(".top_inner");
e5style.style.position="realtive";
e5style.style.width="100%";
e5style.style.height="10px";
e5style.style.marginTop="-10px";
e5style.style.backgroundColor="lavender";

var e6=document.createElement("div");
e6.setAttribute("class","candidate_name");
e6.innerHTML="Thamaraiselvan B"
e2.appendChild(e6);

var e6style=document.querySelector(".candidate_name");
e6style.style.position="relative";
e6style.style.width="250px";
e6style.style.textAlign="center";
e6style.style.fontSize="200%";
e6style.style.marginLeft="auto";
e6style.style.marginRight="auto";
e6style.style.marginTop="-25px";
e6style.style.color="lavender";
e6style.style.backgroundColor="orangered";

var e7=document.createElement("div");
e7.setAttribute("class","candidate_address");
e7.innerHTML="5/6 GROUND FLOOR | VIJAYA HOME | BABY NAGAR | VELACHERY | CHENNAI - 600042."
e2.appendChild(e7);

var e7style=document.querySelector(".candidate_address");
e7style.style.position="relative";
e7style.style.textAlign="center";
e7style.style.marginTop="4px";
e7style.style.width="100%";
e7style.style.fontSize="100%";
e7style.style.marginLeft="auto";
e7style.style.marginRight="auto";
e7style.style.height="10%";
e7style.style.backgroundColor="lavender";

var e8=document.createElement("div");
e8.setAttribute("class","resume_left");
e1.appendChild(e8);

var e8style=document.querySelector(".resume_left");
e8style.style.position="absolute";
e8style.style.width="500px";
e8style.style.height="1153px";
e8style.style.left="auto";
e8style.style.backgroundColor="gray";

var e9=document.createElement("div");
e9.setAttribute("class","resume_left_inner1");
e8.appendChild(e9);

var e9style=document.querySelector(".resume_left_inner1");
e9style.style.width="500px";
e9style.style.height="153px";

var e10=document.createElement("div");
e10.setAttribute("class","icon1");
e9.appendChild(e10);

var e10style=document.querySelector(".icon1");
e10style.style.width="32px";
e10style.style.height="32px";
e10style.style.backgroundColor="#fff"
e10style.style.borderRadius="100%";
e10style.style.color="#0bb5f4";
e10style.style.paddingLeft="13px";
e10style.style.paddingTop="10px";
e10style.style.fontSize="20px";
e10style.style.marginLeft="10px";
e10style.style.top="10px";
e10style.style.position="relative";

var e11=document.createElement("i");
e11.setAttribute("class","fa fa-user");
e10.appendChild(e11);

var e12=document.createElement("div");
e12.setAttribute("class","resume_profile");
e12.innerHTML="Profile";
e9.appendChild(e12);

var e12style=document.querySelector(".resume_profile");
e12style.style.width="100%";
e12style.style.height="20px";
e12style.style.color="#b1eaff";
e12style.style.paddingLeft="60px";
e12style.style.marginTop="-37px";
e12style.style.fontSize="40px";
e12style.style.fontWeight="500";
e12style.style.position="relative";

var e13=document.createElement("div");
e13.setAttribute("class","resume_objective");
e13.innerHTML="To enhance my professional skills in a dynamic workplace, where my talents are appreciated and to reach the height of success along with the organization.";
e9.appendChild(e13);

var e13style=document.querySelector(".resume_objective");
e13style.style.marginTop="15px";
e13style.style.padding="10px";
e13style.style.fontSize="20px";
e13style.style.fontWeight="100";
e13style.style.color="ghostwhite";
e13style.style.fontDisplay="inherit";
e13style.style.position="relative";

var e14=document.createElement("div");
e14.setAttribute("class","resume_left_inner2");
e8.appendChild(e14);

var e14style=document.querySelector(".resume_left_inner2");
e14style.style.width="500px";
e14style.style.height="370px";

var e15=document.createElement("div");
e15.setAttribute("class","icon2");
e14.appendChild(e15);

var e15style=document.querySelector(".icon2");
e15style.style.width="32px";
e15style.style.height="32px";
e15style.style.backgroundColor="#fff"
e15style.style.borderRadius="100%";
e15style.style.color="#0bb5f4";
e15style.style.paddingLeft="13px";
e15style.style.paddingRight="3px";
e15style.style.paddingTop="12px";
e15style.style.fontSize="20px";
e15style.style.marginLeft="10px";
e15style.style.top="10px";
e15style.style.position="relative";

var e16=document.createElement("i");
e16.setAttribute("class","fas fa-code");
e15.appendChild(e16);

var e17=document.createElement("div");
e17.setAttribute("class","resume_skills");
e17.innerHTML="Skills";
e14.appendChild(e17);

var e17style=document.querySelector(".resume_skills");
e17style.style.position="relative";
e17style.style.height="20px";
e17style.style.width="20px";
e17style.style.color="#b1eaff";
e17style.style.paddingLeft="62px";
e17style.style.marginTop="-37px";
e17style.style.fontSize="40px";
e17style.style.fontWeight="500";
e17style.style.display="inherit";

var e18=document.createElement("div");
e18.setAttribute("class","skill_type1");
e18.innerHTML="Technical Skills";
e14.appendChild(e18);

var e18style=document.querySelector(".skill_type1");
e18style.style.marginTop="1px";
e18style.style.padding="10px";
e18style.style.fontSize="25px";
e18style.style.color="#b1eaff";
e18style.style.fontWeight="500";
e18style.style.textAlign="center";
e18style.style.position="relative";

var e19=document.createElement("ul");
e14.appendChild(e19);

var e20=document.createElement("li");
e20.setAttribute("class","li1");
e19.appendChild(e20);

var e20style=document.querySelector(".li1");
e20style.style.color="gray";
e20style.style.justifyContent="space-between";

var e21=document.createElement("div");
e21.setAttribute("class","skill_name1");
e21.innerHTML="HTML";
e20.appendChild(e21);

var e21style=document.querySelector(".skill_name1");
e21style.style.width="50%";
e21style.style.marginTop="2px";
e21style.style.color="lavender";
e21style.style.position="relative";

var e22=document.createElement("div");
e22.setAttribute("class","skill_progress1");
e20.appendChild(e22);

var e22style=document.querySelector(".skill_progress1");
e22style.style.width="45%";
e22style.style.height="10px";
e22style.style.background="#009fd9";
e22style.style.marginTop="-15px";
e22style.style.marginLeft="auto";
e22style.style.marginRight="100px";
e22style.style.position="relative";

var e23=document.createElement("span");
e23.setAttribute("class","progress1");
e22.appendChild(e23);

var e23style=document.querySelector(".progress1");
e23style.style.position="absolute";
e23style.style.top="0px";
e23style.style.left="0px";
e23style.style.height="100%";
e23style.style.width="80%";
e23style.style.background="#fff";

var e24=document.createElement("div");
e24.setAttribute("class","skill_percent1");
e24.innerHTML="80%";
e20.appendChild(e24);

var e24style=document.querySelector(".skill_percent1");
e24style.style.position="relative";
e24style.style.width="100%";
e24style.style.paddingLeft="80%";
e24style.style.marginTop="-13px";
e24style.style.color="lavender";

var e25=document.createElement("div");
e25.setAttribute("class","skill_name2");
e25.innerHTML="CSS";
e20.appendChild(e25);

var e25style=document.querySelector(".skill_name2");
e25style.style.width="50%";
e25style.style.marginTop="2px";
e25style.style.color="lavender";
e25style.style.position="relative";

var e26=document.createElement("div");
e26.setAttribute("class","skill_progress2");
e20.appendChild(e26);

var e26style=document.querySelector(".skill_progress2");
e26style.style.width="45%";
e26style.style.height="10px";
e26style.style.background="#009fd9";
e26style.style.marginTop="-15px";
e26style.style.marginLeft="auto";
e26style.style.marginRight="100px";
e26style.style.position="relative";

var e27=document.createElement("span");
e27.setAttribute("class","progress2");
e26.appendChild(e27);

var e27style=document.querySelector(".progress2");
e27style.style.position="absolute";
e27style.style.top="0px";
e27style.style.left="0px";
e27style.style.height="100%";
e27style.style.width="70%";
e27style.style.background="#fff";

var e28=document.createElement("div");
e28.setAttribute("class","skill_percent2");
e28.innerHTML="70%";
e20.appendChild(e28);

var e28style=document.querySelector(".skill_percent2");
e28style.style.position="relative";
e28style.style.width="100%";
e28style.style.paddingLeft="80%";
e28style.style.marginTop="-13px";
e28style.style.color="lavender";

var e29=document.createElement("div");
e29.setAttribute("class","skill_name3");
e29.innerHTML="Javascript";
e20.appendChild(e29);

var e29style=document.querySelector(".skill_name3");
e29style.style.width="50%";
e29style.style.marginTop="2px";
e29style.style.color="lavender";
e29style.style.position="relative";

var e30=document.createElement("div");
e30.setAttribute("class","skill_progress3");
e20.appendChild(e30);

var e30style=document.querySelector(".skill_progress3");
e30style.style.width="45%";
e30style.style.height="10px";
e30style.style.background="#009fd9";
e30style.style.marginTop="-15px";
e30style.style.marginLeft="auto";
e30style.style.marginRight="100px";
e30style.style.position="relative";

var e31=document.createElement("span");
e31.setAttribute("class","progress3");
e30.appendChild(e31);

var e31style=document.querySelector(".progress3");
e31style.style.position="absolute";
e31style.style.top="0px";
e31style.style.left="0px";
e31style.style.height="100%";
e31style.style.width="75%";
e31style.style.background="#fff";

var e32=document.createElement("div");
e32.setAttribute("class","skill_percent3");
e32.innerHTML="75%";
e20.appendChild(e32);

var e32style=document.querySelector(".skill_percent3");
e32style.style.position="relative";
e32style.style.width="100%";
e32style.style.paddingLeft="80%";
e32style.style.marginTop="-13px";
e32style.style.color="lavender";

var e33=document.createElement("div");
e33.setAttribute("class","skill_name4");
e33.innerHTML="Angular JS";
e20.appendChild(e33);

var e33style=document.querySelector(".skill_name4");
e33style.style.width="50%";
e33style.style.marginTop="2px";
e33style.style.color="lavender";
e33style.style.position="relative";

var e34=document.createElement("div");
e34.setAttribute("class","skill_progress4");
e20.appendChild(e34);

var e34style=document.querySelector(".skill_progress4");
e34style.style.width="45%";
e34style.style.height="10px";
e34style.style.background="#009fd9";
e34style.style.marginTop="-15px";
e34style.style.marginLeft="auto";
e34style.style.marginRight="100px";
e34style.style.position="relative";

var e35=document.createElement("span");
e35.setAttribute("class","progress4");
e34.appendChild(e35);

var e35style=document.querySelector(".progress4");
e35style.style.position="absolute";
e35style.style.top="0px";
e35style.style.left="0px";
e35style.style.height="100%";
e35style.style.width="60%";
e35style.style.background="#fff";

var e36=document.createElement("div");
e36.setAttribute("class","skill_percent4");
e36.innerHTML="60%";
e20.appendChild(e36);

var e36style=document.querySelector(".skill_percent4");
e36style.style.position="relative";
e36style.style.width="100%";
e36style.style.paddingLeft="80%";
e36style.style.marginTop="-13px";
e36style.style.color="lavender";
///////////////////////////////////////

var e37=document.createElement("div");
e37.setAttribute("class","skill_type2");
e37.innerHTML="Additional Skills";
e14.appendChild(e37);

var e37style=document.querySelector(".skill_type2");
e37style.style.marginTop="1px";
e37style.style.padding="10px";
e37style.style.fontSize="25px";
e37style.style.color="#b1eaff";
e37style.style.fontWeight="500";
e37style.style.textAlign="center";
e37style.style.position="relative";

var e38=document.createElement("ul");
e14.appendChild(e38);

var e39=document.createElement("li");
e39.setAttribute("class","li2");
e38.appendChild(e39);

var e39style=document.querySelector(".li2");
e39style.style.color="gray";
e39style.style.justifyContent="space-between";


var e40=document.createElement("div");
e40.setAttribute("class","skill_name5");
e40.innerHTML="Project Management";
e39.appendChild(e40);

var e40style=document.querySelector(".skill_name5");
e40style.style.width="50%";
e40style.style.marginTop="2px";
e40style.style.color="lavender";
e40style.style.position="relative";

var e41=document.createElement("div");
e41.setAttribute("class","skill_progress5");
e39.appendChild(e41);

var e41style=document.querySelector(".skill_progress5");
e41style.style.width="45%";
e41style.style.height="10px";
e41style.style.background="#009fd9";
e41style.style.marginTop="-15px";
e41style.style.marginLeft="auto";
e41style.style.marginRight="100px";
e41style.style.position="relative";

var e42=document.createElement("span");
e42.setAttribute("class","progress5");
e41.appendChild(e42);

var e42style=document.querySelector(".progress5");
e42style.style.position="absolute";
e42style.style.top="0px";
e42style.style.left="0px";
e42style.style.height="100%";
e42style.style.width="60%";
e42style.style.background="#fff";

var e43=document.createElement("div");
e43.setAttribute("class","skill_percent5");
e43.innerHTML="60%";
e39.appendChild(e43);

var e43style=document.querySelector(".skill_percent5");
e43style.style.position="relative";
e43style.style.width="100%";
e43style.style.paddingLeft="80%";
e43style.style.marginTop="-13px";
e43style.style.color="lavender";

///////////////////////////////////////////

var e44=document.createElement("div");
e44.setAttribute("class","skill_name6");
e44.innerHTML="Recruitment";
e39.appendChild(e44);

var e44style=document.querySelector(".skill_name6");
e44style.style.width="50%";
e44style.style.marginTop="2px";
e44style.style.color="lavender";
e44style.style.position="relative";

var e45=document.createElement("div");
e45.setAttribute("class","skill_progress6");
e39.appendChild(e45);

var e45style=document.querySelector(".skill_progress6");
e45style.style.width="45%";
e45style.style.height="10px";
e45style.style.background="#009fd9";
e45style.style.marginTop="-15px";
e45style.style.marginLeft="auto";
e45style.style.marginRight="100px";
e45style.style.position="relative";

var e46=document.createElement("span");
e46.setAttribute("class","progress6");
e45.appendChild(e46);

var e46style=document.querySelector(".progress6");
e46style.style.position="absolute";
e46style.style.top="0px";
e46style.style.left="0px";
e46style.style.height="100%";
e46style.style.width="85%";
e46style.style.background="#fff";

var e47=document.createElement("div");
e47.setAttribute("class","skill_percent6");
e47.innerHTML="85%";
e39.appendChild(e47);

var e47style=document.querySelector(".skill_percent6");
e47style.style.position="relative";
e47style.style.width="100%";
e47style.style.paddingLeft="80%";
e47style.style.marginTop="-13px";
e47style.style.color="lavender";


var e48=document.createElement("div");
e48.setAttribute("class","skill_name7");
e48.innerHTML="Business Development";
e39.appendChild(e48);

var e48style=document.querySelector(".skill_name7");
e48style.style.width="50%";
e48style.style.marginTop="2px";
e48style.style.color="lavender";
e48style.style.position="relative";

var e49=document.createElement("div");
e49.setAttribute("class","skill_progress7");
e39.appendChild(e49);

var e49style=document.querySelector(".skill_progress7");
e49style.style.width="45%";
e49style.style.height="10px";
e49style.style.background="#009fd9";
e49style.style.marginTop="-15px";
e49style.style.marginLeft="auto";
e49style.style.marginRight="100px";
e49style.style.position="relative";

var e50=document.createElement("span");
e50.setAttribute("class","progress7");
e49.appendChild(e50);

var e50style=document.querySelector(".progress7");
e50style.style.position="absolute";
e50style.style.top="0px";
e50style.style.left="0px";
e50style.style.height="100%";
e50style.style.width="95%";
e50style.style.background="#fff";

var e51=document.createElement("div");
e51.setAttribute("class","skill_percent7");
e51.innerHTML="95%";
e39.appendChild(e51);

var e51style=document.querySelector(".skill_percent7");
e51style.style.position="relative";
e51style.style.width="100%";
e51style.style.paddingLeft="80%";
e51style.style.marginTop="-13px";
e51style.style.color="lavender";

var e52=document.createElement("div");
e52.setAttribute("class","skill_name8");
e52.innerHTML="Editing";
e39.appendChild(e52);

var e52style=document.querySelector(".skill_name8");
e52style.style.width="50%";
e52style.style.marginTop="2px";
e52style.style.color="lavender";
e52style.style.position="relative";

var e53=document.createElement("div");
e53.setAttribute("class","skill_progress8");
e39.appendChild(e53);

var e53style=document.querySelector(".skill_progress8");
e53style.style.width="45%";
e53style.style.height="10px";
e53style.style.background="#009fd9";
e53style.style.marginTop="-15px";
e53style.style.marginLeft="auto";
e53style.style.marginRight="100px";
e53style.style.position="relative";

var e54=document.createElement("span");
e54.setAttribute("class","progress8");
e53.appendChild(e54);

var e54style=document.querySelector(".progress8");
e54style.style.position="absolute";
e54style.style.top="0px";
e54style.style.left="0px";
e54style.style.height="100%";
e54style.style.width="50%";
e54style.style.background="#fff";

var e55=document.createElement("div");
e55.setAttribute("class","skill_percent8");
e55.innerHTML="50%";
e39.appendChild(e55);

var e55style=document.querySelector(".skill_percent8");
e55style.style.position="relative";
e55style.style.width="100%";
e55style.style.paddingLeft="80%";
e55style.style.marginTop="-13px";
e55style.style.color="lavender";

var e56=document.createElement("div");
e56.setAttribute("class","resume_left_inner3");
e8.appendChild(e56);

var e56style=document.querySelector(".resume_left_inner3");
e56style.style.width="100%";
e56style.style.height="230px";

var e57=document.createElement("div");
e57.setAttribute("class","icon3");
e14.appendChild(e57);

var e57style=document.querySelector(".icon3");
e57style.style.width="33px";
e57style.style.height="33px";
e57style.style.backgroundColor="#fff"
e57style.style.borderRadius="100%";
e57style.style.color="#0bb5f4";
e57style.style.paddingLeft="13px";
e57style.style.paddingTop="10px";
e57style.style.top="30px";
e57style.style.left="10px"
e57style.style.fontSize="20px";
e57style.style.position="relative";

var e58=document.createElement("i");
e58.setAttribute("class","fas fa-certificate");
e57.appendChild(e58);


var e59=document.createElement("div");
e59.setAttribute("class","certification");
e59.innerHTML="Certification";
e56.appendChild(e59);

var e59style=document.querySelector(".certification");
e59style.style.position="relative";
e59style.style.height="30px";
e59style.style.width="60%";
e59style.style.color="#b1eaff";
e59style.style.paddingLeft="60px";
e59style.style.paddingTop="7px";
e59style.style.fontSize="40px";
e59style.style.fontWeight="500";
e59style.style.display="inherit";

var e60=document.createElement("ul");
e56.appendChild(e60);

var e61=document.createElement("li");
e61.setAttribute("class","li3");
e60.appendChild(e61);

var e61style=document.querySelector(".li3");
e61style.style.color="gray";
e61style.style.justifyContent="space-between";

var e62=document.createElement("div");
e62.setAttribute("class","icon4");
e61.appendChild(e62);

var e62style=document.querySelector(".icon4");
e62style.style.width="45px";
e62style.style.height="40px";
e62style.style.backgroundColor="#fff"
e62style.style.borderRadius="100%";
e62style.style.color="#0bb5f4";
e62style.style.paddingLeft="22px";
e62style.style.paddingTop="10px";
e62style.style.fontSize="25px";
e62style.style.top="10px";
e62style.style.position="relative";

var e63=document.createElement("i");
e63.setAttribute("class","fab fa-java");
e62.appendChild(e63);

var e64=document.createElement("div");
e64.setAttribute("class","certificate1");
e64.innerHTML="Java";
e61.appendChild(e64);

var e64style=document.querySelector(".certificate1");
e64style.style.fontWeight="500px";
e64style.style.fontSize="25px";
e64style.style.paddingLeft="80px";
e64style.style.marginTop="-25px";
e64style.style.color="ghostwhite";
e64style.style.position="relative";

/////////////////////////////////////////////////

var e65=document.createElement("div");
e65.setAttribute("class","icon5");
e61.appendChild(e65);

var e65style=document.querySelector(".icon5");
e65style.style.width="45px";
e65style.style.height="40px";
e65style.style.backgroundColor="#fff"
e65style.style.borderRadius="100%";
e65style.style.color="#0bb5f4";
e65style.style.paddingLeft="22px";
e65style.style.paddingTop="11px";
e65style.style.fontSize="25px";
e65style.style.top="10px";
e65style.style.position="relative";

var e66=document.createElement("i");
e66.setAttribute("class","fab fa-react");
e65.appendChild(e66);

var e67=document.createElement("div");
e67.setAttribute("class","certificate2");
e67.innerHTML="FullStack";
e61.appendChild(e67);

var e67style=document.querySelector(".certificate2");
e67style.style.fontWeight="500px";
e67style.style.fontSize="25px";
e67style.style.paddingLeft="80px";
e67style.style.marginTop="-30px";
e67style.style.color="ghostwhite";
e67style.style.position="relative";

///////////////////////////////////////////////

var e68=document.createElement("div");
e68.setAttribute("class","icon6");
e61.appendChild(e68);

var e68style=document.querySelector(".icon6");
e68style.style.width="45px";
e68style.style.height="40px";
e68style.style.backgroundColor="#fff"
e68style.style.borderRadius="100%";
e68style.style.color="#0bb5f4";
e68style.style.paddingLeft="22px";
e68style.style.paddingTop="11px";
e68style.style.fontSize="25px";
e68style.style.top="15px";
e68style.style.position="relative";

var e69=document.createElement("i");
e69.setAttribute("class","fas fa-microchip");
e68.appendChild(e69);

var e69=document.createElement("div");
e69.setAttribute("class","certificate3");
e69.innerHTML="Embedded";
e61.appendChild(e69);

var e69style=document.querySelector(".certificate3");
e69style.style.fontWeight="500px";
e69style.style.fontSize="25px";
e69style.style.paddingLeft="80px";
e69style.style.marginTop="-30px";
e69style.style.color="ghostwhite";
e69style.style.position="relative";

/////////////////////////////////////////////////////////////////

var e70=document.createElement("div");
e70.setAttribute("class","resume_left_inner4");
e8.appendChild(e70);

var e70style=document.querySelector(".resume_left_inner4");
e70style.style.width="100%";
e70style.style.height="160px";
e70style.style.paddingTop="10px";
e70style.style.position="relative";

var e71=document.createElement("div");
e71.setAttribute("class","leisure");
e71.innerHTML="Leisure";
e70.appendChild(e71);

var e71style=document.querySelector(".leisure");
e71style.style.paddingLeft="10px";
e71style.style.marginTop="-10px";
e71style.style.color="#b1eaff";
e71style.style.fontSize="40px";
e71style.style.fontWeight="500";
e71style.style.fontDisplay="inherit";
e71style.style.position="relative";

var e72=document.createElement("ul");
e70.appendChild(e72);

var e73=document.createElement("li");
e73.setAttribute("class","li4");
e73.innerHTML="Learning New Technology";
e70.appendChild(e73);

var e73style=document.querySelector(".li4");
e73style.style.color="lavender";
e73style.style.justifyContent="space-between";
e73style.style.paddingLeft="30px";
e73style.style.fontSize="20px";
e73style.style.fontWeight="200";
e73style.style.position="relative";

var e74=document.createElement("li");
e74.setAttribute("class","li5");
e74.innerHTML="Keen to playing cricket";
e70.appendChild(e74);

var e74style=document.querySelector(".li5");
e74style.style.color="lavender";
e74style.style.justifyContent="space-between";
e74style.style.paddingLeft="30px";
e74style.style.fontSize="20px";
e74style.style.fontWeight="200";
e74style.style.position="relative";

////////////////////////////////////////////////////

var e75=document.createElement("div");
e75.setAttribute("class","resume_left_inner5");
e8.appendChild(e75);

var e75style=document.querySelector(".resume_left_inner5");
e75style.style.width="100%";
e75style.style.height="220px";
e75style.style.paddingTop="10px";
e75style.style.position="relative";

var e76=document.createElement("div");
e76.setAttribute("class","social");
e76.innerHTML="Social";
e75.appendChild(e76);

var e76style=document.querySelector(".social");
e76style.style.paddingLeft="10px";
e76style.style.marginTop="-10px";
e76style.style.color="#b1eaff";
e76style.style.fontSize="40px";
e76style.style.fontWeight="500";
e76style.style.fontDisplay="inherit";
e76style.style.position="relative";

var e77=document.createElement("ul");
e75.appendChild(e77);

var e78=document.createElement("li");
e78.setAttribute("class","li6");
e77.appendChild(e78);

var e78style=document.querySelector(".li6");
e78style.style.color="gray";
e78style.style.justifyContent="space-between";

var e79=document.createElement("div");
e79.setAttribute("class","icon7");
e78.appendChild(e79);

var e79style=document.querySelector(".icon7");
e79style.style.width="45px";
e79style.style.height="40px";
e79style.style.backgroundColor="#fff"
e79style.style.borderRadius="100%";
e79style.style.color="#0bb5f4";
e79style.style.paddingLeft="22px";
e79style.style.paddingTop="10px";
e79style.style.fontSize="25px";
e79style.style.top="0px";
e79style.style.position="relative";

var e80=document.createElement("i");
e80.setAttribute("class","fab fa-linkedin-in");
e79.appendChild(e80);

var e81=document.createElement("div");
e81.setAttribute("class","social1");
e81.innerHTML="thamarai@linkedin.com";
e78.appendChild(e81);

var e81style=document.querySelector(".social1");
e81style.style.fontWeight="500px";
e81style.style.fontSize="25px";
e81style.style.paddingLeft="80px";
e81style.style.marginTop="-40px";
e81style.style.color="ghostwhite";
e81style.style.position="relative";

////////////////////////////////////////////////////

var e82=document.createElement("div");
e82.setAttribute("class","icon8");
e78.appendChild(e82);

var e82style=document.querySelector(".icon8");
e82style.style.width="45px";
e82style.style.height="40px";
e82style.style.backgroundColor="#fff"
e82style.style.borderRadius="100%";
e82style.style.color="#0bb5f4";
e82style.style.paddingLeft="22px";
e82style.style.paddingTop="10px";
e82style.style.fontSize="25px";
e82style.style.top="15px";
e82style.style.position="relative";

var e83=document.createElement("i");
e83.setAttribute("class","fab fa-twitter-square");
e82.appendChild(e83);

var e84=document.createElement("div");
e84.setAttribute("class","social2");
e84.innerHTML="thamarai@twitter.com";
e78.appendChild(e84);

var e84style=document.querySelector(".social2");
e84style.style.fontWeight="500px";
e84style.style.fontSize="25px";
e84style.style.paddingLeft="80px";
e84style.style.marginTop="-25px";
e84style.style.color="ghostwhite";
e84style.style.position="relative";

/////////////////////////////////////////////////////////

var e85=document.createElement("div");
e85.setAttribute("class","icon9");
e78.appendChild(e85);

var e85style=document.querySelector(".icon9");
e85style.style.width="45px";
e85style.style.height="40px";
e85style.style.backgroundColor="#fff"
e85style.style.borderRadius="100%";
e85style.style.color="#0bb5f4";
e85style.style.paddingLeft="22px";
e85style.style.paddingTop="10px";
e85style.style.fontSize="25px";
e85style.style.top="15px";
e85style.style.position="relative";

var e86=document.createElement("i");
e86.setAttribute("class","fab fa-instagram");
e85.appendChild(e86);

var e87=document.createElement("div");
e87.setAttribute("class","social3");
e87.innerHTML="thamarai@instagram.com";
e78.appendChild(e87);

var e87style=document.querySelector(".social3");
e87style.style.fontWeight="500px";
e87style.style.fontSize="25px";
e87style.style.paddingLeft="80px";
e87style.style.marginTop="-25px";
e87style.style.color="ghostwhite";
e87style.style.position="relative";


var e88=document.createElement("div");
e88.setAttribute("class","resume_right");
e1.appendChild(e88);

var e88style=document.querySelector(".resume_right");
e88style.style.position="absolute";
e88style.style.width="500px";
e88style.style.height="1153px";
e88style.style.left="500px";
e88style.style.backgroundColor="gray";

var e89=document.createElement("div");
e89.setAttribute("class","resume_right_inner1");
e88.appendChild(e89);

var e89style=document.querySelector(".resume_right_inner1");
e89style.style.width="500px";
e89style.style.height="923px";
e89style.style.paddingTop="10px";
e89style.style.paddingRight="-10px";

var e90=document.createElement("div");
e90.setAttribute("class","icon10");
e89.appendChild(e90);

var e90style=document.querySelector(".icon10");
e90style.style.width="32px";
e90style.style.height="32px";
e90style.style.backgroundColor="#fff"
e90style.style.borderRadius="100%";
e90style.style.color="#0bb5f4";
e90style.style.paddingLeft="13px";
e90style.style.paddingTop="10px";
e90style.style.fontSize="20px";
e90style.style.marginLeft="10px";
e90style.style.top="0px";
e90style.style.position="relative";

var e91=document.createElement("i");
e91.setAttribute("class","fas fa-dove");
e90.appendChild(e91);

var e92=document.createElement("div");
e92.setAttribute("class","experience");
e92.innerHTML="Work Experience";
e89.appendChild(e92);

var e92style=document.querySelector(".experience");
e92style.style.width="100%";
e92style.style.height="20px";
e92style.style.color="#b1eaff";
e92style.style.paddingLeft="60px";
e92style.style.marginTop="-43px";
e92style.style.fontSize="40px";
e92style.style.fontWeight="500";
e92style.style.position="relative";

var e93=document.createElement("div");
e93.setAttribute("class","designation");
e93.innerHTML="Senior Client Partner - AR";
e89.appendChild(e93);

var e93style=document.querySelector(".designation");
e93style.style.width="100%";
e93style.style.color="ghostwhite";
e93style.style.paddingLeft="10px";
e93style.style.marginTop="25px";
e93style.style.fontSize="30px";
e93style.style.fontWeight="500";
e93style.style.position="relative";


var e94=document.createElement("div");
e94.setAttribute("class","duration");
e94.innerHTML="2019 - Present";
e89.appendChild(e94);

var e94style=document.querySelector(".duration");
e94style.style.width="100%";
e94style.style.color="ghostwhite";
e94style.style.paddingLeft="10px";
e94style.style.marginTop="0px";
e94style.style.fontSize="20px";
e94style.style.fontWeight="500";
e94style.style.position="relative";


var e95=document.createElement("div");
e95.setAttribute("class","employer1");
e89.appendChild(e95);

var e95style=document.querySelector(".employer1");
e95style.style.paddingLeft="10px";

var e96=document.createElement("img");
e96.setAttribute("src","https://caas.athenahealth.com/sites/default/files/logo_0.png")
e96.setAttribute("class","img_athena");
e95.appendChild(e96);

var e96style=document.querySelector(".img_athena");
e96style.style.width="250px";

var e97=document.createElement("img");
e97.setAttribute("src","https://static1.squarespace.com/static/556dad00e4b074f7195938e5/t/5a293b5624a6942a95c1c1b8/1594314593267/?format=1500w")
e97.setAttribute("class","img_access");
e95.appendChild(e97);

var e97style=document.querySelector(".img_access");
e97style.style.width="250px";

var e98=document.createElement("div");
e98.setAttribute("class","job_desc1");
e98.innerHTML="We are supporting for more than 300000 physicians and 80 specialities across US. My day to day responsibility would be making a call to US payers to discuss about patient denied claims and let them to know submitted patient data and treatment protocol was followed according to the US statewise healthcare guidelines, we are requesting them to process the payment for physicians how much they charged for each patient treatment. Also some claims there may be an issue that was holding due to the litigation issue, until we should get a update from attorney what is going on this claim which we treated for this patient so provider have to wait for clear court judgement. In a day atleast we are speaking more than 5 hours with US payers";
e89.appendChild(e98);

var e98style=document.querySelector(".job_desc1");
e98style.style.paddingLeft="10px";
e98style.style.marginTop="0px";
e98style.style.color="ghostwhite";
e98style.style.fontSize="20px";
e98style.style.fontWeight="500";
e98style.style.position="relative";

var e99=document.createElement("div");
e99.setAttribute("class","designation2");
e99.innerHTML="Senior Data Associate - AR";
e89.appendChild(e99);

var e99style=document.querySelector(".designation2");
e99style.style.width="100%";
e99style.style.color="ghostwhite";
e99style.style.paddingLeft="10px";
e99style.style.marginTop="25px";
e99style.style.fontSize="30px";
e99style.style.fontWeight="500";
e99style.style.position="relative";

var e100=document.createElement("div");
e100.setAttribute("class","duration2");
e100.innerHTML="2015 - 2019";
e89.appendChild(e100);

var e100style=document.querySelector(".duration2");
e100style.style.width="100%";
e100style.style.color="ghostwhite";
e100style.style.paddingLeft="10px";
e100style.style.marginTop="0px";
e100style.style.fontSize="20px";
e100style.style.fontWeight="500";
e100style.style.position="relative";

var e101=document.createElement("div");
e101.setAttribute("class","employer2");
e89.appendChild(e101);

var e101style=document.querySelector(".employer2");
e101style.style.paddingLeft="10px";

var e102=document.createElement("img");
e102.setAttribute("src","http://www.worldsourceteam.com/assets/images/logo.png")
e102.setAttribute("class","img_worldsource");
e101.appendChild(e102);

var e102style=document.querySelector(".img_worldsource");
e102style.style.width="250px";

var e103=document.createElement("div");
e103.setAttribute("class","job_desc2");
e103.innerHTML="For 3 years I was worked here as senior data associate in medical billing project and client would be athenahealth. We are dealing with preparing the claims and sending to US payers for getting reimbursement. After reviewed claim at payer end they will return numerous claim to us which means submitted claim was denied due to some sort of issue on this bill, so that we are again reviewing the physician treatment data and claim form while mapping both data should be match if there is any discrepancy we have to discuss with physicians and also we’re getting the update about patient demographic data from patient if they have any different data and current insurance plan and policies";
e89.appendChild(e103);

var e103style=document.querySelector(".job_desc2");
e103style.style.paddingLeft="10px";
e103style.style.marginTop="0px";
e103style.style.color="ghostwhite";
e103style.style.fontSize="20px";
e103style.style.fontWeight="500";
e103style.style.position="relative";

var e104=document.createElement("div");
e104.setAttribute("class","resume_right_inner2");
e88.appendChild(e104);

var e104style=document.querySelector(".resume_right_inner2");
e104style.style.width="500px";
e104style.style.height="210px";
e104style.style.paddingTop="10px";
e104style.style.paddingRight="-10px";

var e105=document.createElement("div");
e105.setAttribute("class","icon11");
e104.appendChild(e105);

var e105style=document.querySelector(".icon11");
e105style.style.width="32px";
e105style.style.height="32px";
e105style.style.backgroundColor="#fff"
e105style.style.borderRadius="100%";
e105style.style.color="#0bb5f4";
e105style.style.paddingLeft="11px";
e105style.style.paddingTop="10px";
e105style.style.fontSize="20px";
e105style.style.marginLeft="10px";
e105style.style.top="0px";
e105style.style.position="relative";

var e106=document.createElement("i");
e106.setAttribute("class","fas fa-graduation-cap");
e105.appendChild(e106);

var e107=document.createElement("div");
e107.setAttribute("class","education");
e107.innerHTML="Education";
e104.appendChild(e107);

var e107style=document.querySelector(".education");
e107style.style.width="100%";
e107style.style.height="20px";
e107style.style.color="#b1eaff";
e107style.style.paddingLeft="60px";
e107style.style.marginTop="-43px";
e107style.style.fontSize="40px";
e107style.style.fontWeight="500";
e107style.style.position="relative";


var e108=document.createElement("div");
e108.setAttribute("class","college");
e108.innerHTML="Excel Engineering College";
e104.appendChild(e108);

var e108style=document.querySelector(".college");
e108style.style.paddingLeft="10px";
e108style.style.marginTop="40px";
e108style.style.width="100%";
e108style.style.fontSize="25px";
e108style.style.fontWeight="500";
e108style.style.color="linen";
e108style.style.position="relative";

var e109=document.createElement("div");
e109.setAttribute("class","stream");
e109.innerHTML="Electronics Engineering";
e108.appendChild(e109);

var e109style=document.querySelector(".stream");
e109style.style.paddingLeft="40px";
e109style.style.marginTop="10px";
e109style.style.width="100%";
e109style.style.fontSize="20px";
e109style.style.fontWeight="500";
e109style.style.color="linen";
e109style.style.position="relative";

var e110=document.createElement("div");
e110.setAttribute("class","study_duration");
e110.innerHTML="2010 - 2014";
e108.appendChild(e110);

var e110style=document.querySelector(".study_duration");
e110style.style.paddingLeft="40px";
e110style.style.marginTop="10px";
e110style.style.width="100%";
e110style.style.fontSize="20px";
e110style.style.fontWeight="500";
e110style.style.color="linen";
e110style.style.position="relative";

var e111=document.createElement("div");
e111.setAttribute("class","aggregate");
e111.innerHTML="75%";
e108.appendChild(e111);

var e111style=document.querySelector(".aggregate");
e111style.style.paddingLeft="40px";
e111style.style.marginTop="10px";
e111style.style.width="100%";
e111style.style.fontSize="20px";
e111style.style.fontWeight="500";
e111style.style.color="linen";
e111style.style.position="relative";