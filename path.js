function setup() {
  noLoop();
  createCanvas(3000,3000);
}


function draw() {
  translate(-1000,3000);
pathData ={  "SurvData" :[
    {
      "div": 1,
      "Surv": 340000, 
      "lon": 24, 
      "lat": 54.9,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 340000, 
      "lon": 24.5, 
      "lat": 55,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 340000, 
      "lon": 25.5, 
      "lat": 54.5,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 320000, 
      "lon": 26, 
      "lat": 54.7,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 300000, 
      "lon": 27, 
      "lat": 54.8,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 280000, 
      "lon": 28, 
      "lat": 54.9,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 240000, 
      "lon": 28.5, 
      "lat": 55,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 210000, 
      "lon": 29, 
      "lat": 55.1,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 180000, 
      "lon": 30, 
      "lat": 55.2,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 175000, 
      "lon": 30.3, 
      "lat": 55.3,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 145000, 
      "lon": 32, 
      "lat": 54.8,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 140000, 
      "lon": 33.2, 
      "lat": 54.9,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 127100, 
      "lon": 34.4, 
      "lat": 55.5,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 100000, 
      "lon": 35.5, 
      "lat": 55.4,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 100000, 
      "lon": 36, 
      "lat": 55.5,
      "dir":"A"
    },
    {
      "div": 1,
      "Surv": 100000, 
      "lon": 37.6, 
      "lat": 55.8,
      "dir":"R"
    },
    {
      "div": 1,
      "Surv": 98000, 
      "lon": 37.5, 
      "lat": 55.7,
      "dir":"R"
    },
    {
      "div": 1,
      "Surv": 97000, 
      "lon": 37, 
      "lat": 55,
      "dir":"R"
    },
    {
      "div": 1,
      "Surv": 96000, 
      "lon": 36.8, 
      "lat": 55,
      "dir":"R"
    },
    {
      "div": 1,
      "Surv": 87000, 
      "lon": 35.4, 
      "lat": 55.3,
      "dir":"R"
    },
    {
      "div": 1,
      "Surv": 55000, 
      "lon": 34.3, 
      "lat": 55.2,
      "dir":"R"
    },
    {
      "div": 1,
      "Surv": 37000, 
      "lon": 33.3, 
      "lat": 54.9,
      "dir":"R"
    },
    {
      "div": 1,
      "Surv": 24000, 
      "lon": 32, 
      "lat": 54.6,
      "dir":"R"
    },
    {
      "div": 1,
      "Surv": 20000, 
      "lon": 30.4, 
      "lat": 54.4,
      "dir":"R"
    },
    {
      "div": 1,
      "Surv": 20000, 
      "lon": 29.2, 
      "lat": 54.4,
      "dir":"R"
    },
    {
      "div": 1,
      "Surv": 20000, 
      "lon": 28.5, 
      "lat": 54.3,
      "dir":"R"
    },
    {
      "div": 1,
      "Surv": 20000, 
      "lon": 28.3, 
      "lat": 54.4,
      "dir":"R"
    },
    {
      "div": 2,
      "Surv": 60000, 
      "lon": 24, 
      "lat": 55.1,
      "dir":"A"
    },
    {
      "div": 2,
      "Surv": 60000, 
      "lon": 24.5, 
      "lat": 55.2,
      "dir":"A"
    },
    {
      "div": 2,
      "Surv": 60000, 
      "lon": 25.5, 
      "lat": 54.7,
      "dir":"A"
    },
    {
      "div": 2,
      "Surv": 40000, 
      "lon": 26.6, 
      "lat": 55.7,
      "dir":"A"
    },
    {
      "div": 2,
      "Surv": 33000, 
      "lon": 27.4, 
      "lat": 55.6,
      "dir":"A"
    },
    {
      "div": 2,
      "Surv": 30000, 
      "lon": 28.7, 
      "lat": 55.5,
      "dir":"R"
    },
    {
      "div": 2,
      "Surv": 30000, 
      "lon": 29.2, 
      "lat": 54.3,
      "dir":"R"
    },
    {
      "div": 2,
      "Surv": 30000, 
      "lon": 28.5, 
      "lat": 54.2,
      "dir":"R"
    },
    {
      "div": 2,
      "Surv": 28000, 
      "lon": 28.3, 
      "lat": 54.3,
      "dir":"R"
    },
    {
      "div": 2,
      "Surv": 20000, 
      "lon": 27.5, 
      "lat": 54.5,
      "dir":"R"
    },
    {
      "div": 2,
      "Surv": 12000, 
      "lon": 26.8, 
      "lat": 54.3,
      "dir":"R"
    },
    {
      "div": 2,
      "Surv": 14000, 
      "lon": 26.4, 
      "lat": 54.4,
      "dir":"R"
    },
    {
      "div": 2,
      "Surv": 8000, 
      "lon": 24.6, 
      "lat": 54.5,
      "dir":"R"
    },
    {
      "div": 2,
      "Surv": 4000, 
      "lon": 24.4, 
      "lat": 54.4,
      "dir":"R"
    },
    {
      "div": 2,
      "Surv": 4000, 
      "lon": 24.2, 
      "lat": 54.4,
      "dir":"R"
    },
    {
      "div": 2,
      "Surv": 4000, 
      "lon": 24.1, 
      "lat": 54.3,
      "dir":"R"
    },
    {
      "div": 3,
      "Surv": 22000, 
      "lon": 24, 
      "lat": 55.2,
      "dir":"A"
    },
    {
      "div": 3,
      "Surv": 22000, 
      "lon": 24.5, 
      "lat": 55.3,
      "dir":"A"
    },
    {
      "div": 3,
      "Surv": 6000, 
      "lon": 24.6, 
      "lat": 55.8,
      "dir":"R"
    },
    {
      "div": 3,
      "Surv": 6000, 
      "lon": 24.2, 
      "lat": 54.4,
      "dir":"R"
    },
    {
      "div": 3,
      "Surv": 6000, 
      "lon": 24.1, 
      "lat": 54.3,
      "dir":"R"
    }
    ],
    cities:[
    {
      "lon": 24, 
      "lat": 55,
      "name":"Kowno"
    },
    {
      "lon": 25.3, 
      "lat": 54.7,
      "name":"Wilna"
    },
    {
      "lon": 26.4, 
      "lat": 54.4,
      "name":"Smorgoni"
    },
    {
      "lon": 26.8, 
      "lat": 54.3,
      "name":"Molodexno"
    },
    {
      "lon": 27.7, 
      "lat": 55.2,
      "name":"Gloubokoe"
    },
    {
      "lon": 27.6, 
      "lat": 53.9,
      "name":"Minsk"
    },
    {
      "lon": 28.5, 
      "lat": 54.3,
      "name":"Studienska"
    },
    {
      "lon": 28.7, 
      "lat": 55.5,
      "name":"Polotzk"
    },
    {
      "lon": 29.2, 
      "lat": 54.4,
      "name":"Bobr"
    },
    {
      "lon": 30.2, 
      "lat": 55.3,
      "name":"Witebsk"
    },
    {
      "lon": 30.4, 
      "lat": 54.5,
      "name":"Orscha"
    },
    {
      "lon": 30.4, 
      "lat": 53.9,
      "name":"Mohilow"
    },
    {
      "lon": 32, 
      "lat": 54.8,
      "name":"Smolensk"
    },
    {
      "lon": 33.2, 
      "lat": 54.9,
      "name":"Dorogobouge"
    },
    {
      "lon": 34.3, 
      "lat": 55.2,
      "name":"Wixma"
    },
    {
      "lon": 34.4, 
      "lat": 55.5,
      "name":"Chjat"
    },
    {
      "lon": 36, 
      "lat": 55.5,
      "name":"Mojaisk"
    },
    {
      "lon": 37.6, 
      "lat": 55.8,
      "name":"Moscou"
    },
    {
      "lon": 36.6, 
      "lat": 55.3,
      "name":"Tarantino"
    },
    {
      "lon": 36.5, 
      "lat": 55,
      "name":"Malo-jarosewli"
    }],
    temperature:[
    {
      "temp":0,
      "lon":37.6
    },
    {
      "temp":0,
      "lon":36
    },
    {
      "temp":-9,
      "lon":33.2
    },
    {
      "temp":-21,
      "lon":32
    },
    {
      "temp":-11,
      "lon":29.2
    },
    {
      "temp":-20,
      "lon":28.5
    },
    {
      "temp":-24,
      "lon":27.2
    },
    {
      "temp":-30,
      "lon":26.7
    },
    {
      "temp":-26,
      "lon":25.3
    }
    
    ]
 }

  
  var i;
  for(i=1;i<pathData.SurvData.length;i++)
  {
   strokeWeight(pathData.SurvData[i].Surv/18000);


     if (pathData.SurvData[i-1].dir == "A")//the forward march
    {
     stroke(color('#3378B6'));
    }
    else
    {
     stroke('green'); ///retreat
    }

    if (pathData.SurvData[i].div == 1) //army in direction 1
    {

       line((pathData.SurvData[i-1].lon*52),-(pathData.SurvData[i-1].lat*52),(pathData.SurvData[i].lon*52),-(pathData.SurvData[i].lat*52));

    }
    if (pathData.SurvData[i].div == 2 && pathData.SurvData[i-1].div==2)//army in direction 2
    {
  
      line((pathData.SurvData[i-1].lon*52),-((pathData.SurvData[i-1].lat*52)+3),(pathData.SurvData[i].lon*52),-((pathData.SurvData[i].lat*52)+3));

    }
    if (pathData.SurvData[i].div == 3 && pathData.SurvData[i-1].div==3)//army in direction 3
    {
     
       line((pathData.SurvData[i-1].lon*52),-(pathData.SurvData[i-1].lat*52+3),(pathData.SurvData[i].lon*52),-(pathData.SurvData[i].lat*52+3));

    }

 }
 for(i=0;i<pathData.cities.length;i++){
   stroke(0);
   strokeWeight(5);
   point(pathData.cities[i].lon*52,-(pathData.cities[i].lat*52)); //x,-y for scaling of axis
   strokeWeight(0);
   textSize(12);
   text(pathData.cities[i].name,(pathData.cities[i].lon*52-10),-((pathData.cities[i].lat*52)+5));
 }  


 for(i=1;i<pathData.temperature.length;i++)
 {
   
   strokeWeight(5);
   stroke('red');
   line((pathData.temperature[i-1].lon*52),-((2700+(5*pathData.temperature[i-1].temp))),(pathData.temperature[i].lon*52),-((2700+(5*pathData.temperature[i].temp))));
   
 }
  var j=pathData.temperature.length;
  strokeWeight(0.2);
  stroke('black');
  line((pathData.temperature[0].lon*52)+5,-(2500),(pathData.temperature[j-1].lon)*52+5,-(2500));
  line((pathData.temperature[0].lon*52)+5,-((2700)+5*pathData.temperature[0].temp),((pathData.temperature[0].lon)*52)+5,-((2700)+5*pathData.temperature[j-1].temp-j*(j-1)));
  var j=-40;
  var k=0;
  var c="°c";

  for(i=0;i<pathData.temperature.length;i++)
  { 
    text(str(j)+c,(pathData.temperature[0].lon*52)+10,-((2500)+24*i));
    j=j+5;

    for(k=0;k<pathData.SurvData.length;k++)
    {
      if(pathData.temperature[i].lon == pathData.SurvData[k].lon && pathData.SurvData[k].dir=='A')
      {
        console.log(pathData.SurvData[k].lon);
        stroke('black');
        strokeWeight(0.1);
        line((pathData.temperature[i].lon*52),-(pathData.SurvData[k].lat*52+3),(pathData.temperature[i].lon*52),-((2700+(5*pathData.temperature[i].temp))));
      
      }
    }
   
  }
  
}
