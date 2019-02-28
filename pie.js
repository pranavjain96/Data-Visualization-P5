function setup() {
  noLoop();
  createCanvas(3000,3000);
  stroke(0);
  
}
function draw() 
  {
  fill('black');
  
  chart1 ={  "data" :[
  {
    "month": "Apr 1855",
    "disease": 177.5,
    "wounds": 17.9,
    "other": 21.2,
    "army": 32252
  },
  {
    "month": "May 1855",
    "disease": 171.8,
    "wounds": 16.6,
    "other": 12.5,
    "army": 35473
  },
  {
    "month": "Jun 1855",
    "disease": 247.6,
    "wounds": 64.5,
    "other": 9.6,
    "army": 38863
  },
  {
    "month": "Jul 1855",
    "disease": 107.5,
    "wounds": 37.7,
    "other": 9.3,
    "army": 42647
  },
  {
    "month": "Aug 1855",
    "disease": 129.9,
    "wounds": 44.1,
    "other": 6.7,
    "army": 44614
  },
  {
    "month": "Sep 1855",
    "disease": 47.5,
    "wounds": 69.4,
    "other": 5,
    "army": 47751
  },
  {
    "month": "Oct 1855",
    "disease": 32.8,
    "wounds": 13.6,
    "other": 4.6,
    "army": 46852
  },
  {
    "month": "Nov 1855",
    "disease": 56.4,
    "wounds": 10.5,
    "other": 10.1,
    "army": 37853
  },
  {
    "month": "Dec 1855",
    "disease": 25.3,
    "wounds": 5,
    "other": 7.8,
    "army": 43217
  },
  {
    "month": "Jan 1856",
    "disease": 11.4,
    "wounds": 0.5,
    "other": 13,
    "army": 44212
  },
  {
    "month": "Feb 1856",
    "disease": 6.6,
    "wounds": 0,
    "other": 5.2,
    "army": 43485
  },
  {
    "month": "Mar 1856",
    "disease": 3.9,
    "wounds": 0,
    "other": 9.1,
    "army": 46140
  }
]
 }
  chart ={  "data" :[
    {
      "month": "Apr54",
      "army": 8571, 
      "disease": 1, 
      "wounds": 0, 
      "other": 5 
    },
    {
      "month": "May54", 
      "army": 23333, 
      "disease": 12, 
      "wounds": 0,   
      "other": 9 
    },
    {
      "month": "Jun54", 
      "army": 28333, 
      "disease": 11, 
      "wounds": 0, 
      "other": 6 
    },
    {
      "month": "Jul54", 
      "army": 28722, 
      "disease": 359, 
      "wounds": 0, 
      "other": 23 
    },
    {  
      "month": "Aug54", 
      "army": 30246, 
      "disease": 828, 
      "wounds": 1, 
      "other": 30 
    },
    {
      "month": "Sep54", 
      "army": 30290, 
      "disease": 788, 
      "wounds": 81, 
      "other": 70 
    },
    {
      "month": "Oct54", 
      "army": 30643, 
      "disease": 503, 
      "wounds": 132, 
      "other": 128 
    },
    {
      "month": "Nov54", 
      "army": 29736, 
      "disease": 844, 
      "wounds": 287, 
      "other": 106 
    },
    {
      "month": "Dec54", 
      "army": 32779, 
      "disease": 1725, 
      "wounds": 114, 
      "other": 131 
    },
    {
      "month": "Jan55", 
      "army": 32393, 
      "disease": 2761, 
      "wounds": 83, 
      "other": 324 
    },
    {
      "month": "Feb55", 
      "army": 30919, 
      "disease": 2120, 
      "wounds": 42, 
      "other": 361 
    },
    {
      "month": "Mar55", 
      "army": 30107, 
      "disease": 1205, 
      "wounds": 32, 
      "other": 172 
    }
  ]
 }
    // var q = ((12000 / chart.data[1].army)*12)/PI;
    // var d = sqrt(chart.data[1].disease * q); 
    // var w = sqrt(chart.data[1].wounds * q); 
    // var o = sqrt(chart.data[1].other * q);
    // x=1500/2+MaxValue(d,w,o)*100;
    // y=1500/2;
    // line(0,y,x,y);
//////////////chart data April 1854-March 1855 i.e for rotated par for next year data////////////////
    var startAngle = radians(0);
    var len=0;
    len=chart.data.length;
    console.log(len);

 
  for(i in chart.data)
    {

    var t = ((12000 / chart.data[i].army)*12)/PI;
    var disease = sqrt(chart.data[i].disease * t); 
    var wounds = sqrt(chart.data[i].wounds * t); 
    var other = sqrt(chart.data[i].other * t);

  
   
    pieChart(disease,wounds,other,startAngle,len);///this function is used to create a arc

    ////This portion is used to display the month on the pie chart////////////////
    value=MaxValue(disease,wounds,other);
  
    x=1500+1500/5+value*10*cos(startAngle+(radians(15)));
    y=1500/2 -100+value*10*sin(startAngle+(radians(15)));
    stroke(0);
    strokeWeight(5);
    point(x,y);
    strokeWeight(0);
    textSize(18);
    fill(0);
    text(chart.data[i].month,x+5,y+5);
    //////////////////////

    startAngle+=radians(360/len);

    }
 //////////////chart data April 1855 -March 1856 i.e for rotated par for next year data////////////////
    var startAngle = radians(0);
    var len=0;
    len=chart1.data.length;
    console.log(len);

  
  for(k in chart1.data)
    {

    var t = ((11000 / chart1.data[k].army)*12)/PI;
    var disease = sqrt(chart1.data[k].disease * t); 
    var wounds = sqrt(chart1.data[k].wounds * t); 
    var other = sqrt(chart1.data[k].other * t);

  
   
    pieChart1(disease,wounds,other,startAngle,len); ///this function is used to create a arc

    ////This portion is used to display the month on the pie chart////////////////
    value1=MaxValue(disease,wounds,other);
 
    x=1500/2+value1*15*cos(startAngle+(radians(15)));
    y=1500/2 -100+value1*15*sin(startAngle+(radians(15)));
    stroke(0);
    strokeWeight(5);
    point(x,y);
    strokeWeight(0);
    textSize(18);
    fill(0);
    //rotate(radians(360));
    text(chart1.data[k].month,x+5,y+5);

    startAngle+=radians(360/len);

    }
}
 //////////////////////////////////////
//draw function ends


  function MaxValue(disease,wounds,other) ///function calculated the maximum value out the the given parameters
  {
    if((disease > wounds) && (disease > other))
    {
      fill(color('#C9E2FF'));
      return disease;
    }
    if((wounds>disease) && (wounds>other))
    {
      fill(color('#F36F93'));
      return wounds;
    }
    if((other>disease) && (wounds<other))
    {
      fill(color('#323232'));
      return other;
    }
  }
  //maxValue function ends


  function SecondMax(a,b,c) ///function calculated the second maximum value out the the given parameters
  {
     if (a > b && b > c)                                                                             
    {  
      fill(color('#F36F93'));                                                                                             
        return b;                                                                                   
    }                                                                                                                                                                                  
    else if (a > c && c > b)                                                                        
    {
        fill(color('#323232'));                                                                                               
        return c;                                                                                   
    }                                                                                                                                                                    
    else                                                                                            
    {        
      fill(color('#C9E2FF'));                                                                                     
        return a;                                                                                  
    }        
  }
  function MinValue(disease,wounds,other) ///function calculated the minimum value out the the given parameters
  {
    if((disease < wounds) && (disease < other))
    {
      fill(color('#C9E2FF'));
      return disease;
    }
    if((wounds<disease) && (wounds<other))
    {
      fill(color('#F36F93'));
      return wounds;
    }
    if((other<disease) && (wounds>other))
    {
      fill(color('#323232'));
      return other;
    }
  }
    
  function pieChart(disease,wounds,other,startAngle,len){

    var angle=radians(360/len);
    
    arc(1500+1500/5,1500/2 -100, MaxValue(disease,wounds,other)*20, MaxValue(disease,wounds,other)*20, startAngle, startAngle+angle);
    
    arc(1500+1500/5,1500/2 -100, SecondMax(disease,wounds,other)*20, SecondMax(disease,wounds,other)*20, startAngle, startAngle+angle)
    
    arc(1500+1500/5,1500/2 -100, MinValue(disease,wounds,other)*20, MinValue(disease,wounds,other)*20, startAngle, startAngle+angle);
  
 
 }

  function pieChart1(disease,wounds,other,startAngle,len){

    var angle=radians(360/len);
    
    arc(1500/2,1500/2 -100, MaxValue(disease,wounds,other)*30, MaxValue(disease,wounds,other)*30, startAngle, startAngle+angle);
    
    arc(1500/2,1500/2 -100, SecondMax(disease,wounds,other)*30, SecondMax(disease,wounds,other)*30, startAngle, startAngle+angle)
    
    arc(1500/2,1500/2 -100, MinValue(disease,wounds,other)*30, MinValue(disease,wounds,other)*30, startAngle, startAngle+angle);
  
  
 }



 
 
