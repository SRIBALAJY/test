function metric()
{
        height = document.getElementById("height").value;
        num1=height/100;
        age=document.getElementById("age").value;
        num2 = document.getElementById("weight").value;
        document.getElementById("result").innerHTML = (num2/ (num1*num1)).toFixed(1)+ " kg/m"+"3".sup();
        num3=((13.397*num2)+(4.799*height)-(5.677*age)+88.362).toFixed(1);
        document.getElementById("suggestion").innerHTML="To maintain the same weight follow this...";
        snum=num3;
        snum=snum.toString();
        document.getElementById("suggestion-cal").innerHTML="You will need "+snum+" Calories per day";
        img=document.createElement("img");
        img.src="https://mypinchofyum.files.wordpress.com/2015/10/idli.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('a1.1').appendChild(img)
        document.getElementById("a1.2").innerHTML=("Breakfast").fontsize(7).bold();
        mainbf=Math.round((3*(num3))/(1350));
        mainbf=(mainbf).toString();
        document.getElementById("a1.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+mainbf.bold().fontsize(6)+ " idlies with sambar and one chuttney".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://qph.fs.quoracdn.net/main-qimg-b6a1e98404c213424760c727b082ec3e";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('a2.1').appendChild(img)
        document.getElementById("a2.2").innerHTML=("Lunch").fontsize(7).bold();
        document.getElementById("a2.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+"100g".bold().fontsize(6)+" of sambar rice and ".fontsize(6).fontcolor("brown")+"100g".bold().fontsize(6)+" of rasam rice and ".fontsize(6).fontcolor("brown")+"75g".bold().fontsize(6)+" of curd rice with kootu and poriyal".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://ak.picdn.net/shutterstock/videos/1024044353/thumb/1.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('a3.1').appendChild(img)
        document.getElementById("a3.2").innerHTML=("Dinner").fontsize(7).bold();
        maindn=Math.round(((num3)-600-(((3*num3)/(8))))/(150));
        maindn=(maindn).toString();
        document.getElementById("a3.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+maindn.bold().fontsize(6)+ " Chappathies with Channa masala".fontsize(6).fontcolor("brown");



        realnum=num3;
        num3=1.31*num3;
        snum=num3.toFixed(1);
        snum=snum.toString();
        document.getElementById("suggestion2").innerHTML="To Gain weight you can follow this...";
        document.getElementById("suggestion2-cal").innerHTML="You will need "+snum+" Calories per day";
        img=document.createElement("img");
        img.src="https://craftlog.com/m/i/5428287=s1280=h960";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('b1.1').appendChild(img)
        document.getElementById("b1.2").innerHTML=("Breakfast").fontsize(7).bold();
        mainbf=Math.round((3*(num3))/(1350));
        mainbf=(mainbf).toString();
        document.getElementById("b1.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+mainbf.bold().fontsize(6)+ " idlies with sambar and one chuttney".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://farm6.staticflickr.com/5580/18259113644_18bc5c1066_o.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('b2.1').appendChild(img)
        document.getElementById("b2.2").innerHTML=("Lunch").fontsize(7).bold();
        document.getElementById("b2.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+"150g".bold().fontsize(6)+" of sambar rice and ".fontsize(6).fontcolor("brown")+"150g".bold().fontsize(6)+" of rasam rice and ".fontsize(6).fontcolor("brown")+"75g".bold().fontsize(6)+" of curd rice with kootu and poriyal".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://previews.123rf.com/images/espies/espies2008/espies200800481/152881012-spicy-chickpea-curry-chana-masala-or-choley-in-bowl-with-chapati-and-salad-traditional-north-indian-.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('b3.1').appendChild(img)
        document.getElementById("b3.2").innerHTML=("Dinner").fontsize(7).bold();
        maindn=Math.round(((num3)-750-(((3*num3)/(8))))/(150));
        maindn=(maindn).toString();
        document.getElementById("b3.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+maindn.bold().fontsize(6)+ " Chappathies with Channa masala".fontsize(6).fontcolor("brown");



        num3=0.84*realnum;
        document.getElementById("suggestion3").innerHTML="To lose weight you can follow this...";
        snum=num3.toFixed(1);
        snum=snum.toString();
        document.getElementById("suggestion3-cal").innerHTML="You will need "+snum+" Calories per day";
        img=document.createElement("img");
        img.src="https://thumbs.dreamstime.com/b/south-indian-breakfast-idli-chutney-48378225.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('c1.1').appendChild(img)
        document.getElementById("c1.2").innerHTML=("Breakfast").fontsize(7).bold();
        mainbf=Math.round((3*(num3))/(1350));
        mainbf=(mainbf).toString();
        document.getElementById("c1.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+mainbf.bold().fontsize(6)+ " idlies with sambar and one chuttney".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://www.edaiya.com/wp-content/uploads/2020/07/Rice-sambar-kuttu-poriyal-Rasam-curd1.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('c2.1').appendChild(img)
        document.getElementById("c2.2").innerHTML=("Lunch").fontsize(7).bold();
        document.getElementById("c2.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+"100g".bold().fontsize(6)+" of sambar rice and ".fontsize(6).fontcolor("brown")+"80g".bold().fontsize(6)+" of rasam rice and ".fontsize(6).fontcolor("brown")+"50g".bold().fontsize(6)+" of curd rice with kootu and poriyal".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://media02.stockfood.com/largepreviews/MTM3NjU3MDU=/00444055-Channa-masala-chickpea-curry-from-India-and-chapatis.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('c3.1').appendChild(img)
        document.getElementById("c3.2").innerHTML=("Dinner").fontsize(7).bold();
        maindn=Math.round(((num3)-525-(((3*num3)/(8))))/(150));
        maindn=(maindn).toString();
        document.getElementById("c3.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+maindn.bold().fontsize(6)+ " Chappathies with Channa masala".fontsize(6).fontcolor("brown");


        
}
function imperial()
{
        num1 = document.getElementById("height").value;
        num2 = document.getElementById("weight").value;
        age=document.getElementById("age").value;
        document.getElementById("result").innerHTML = ((num2*702)/ (num1*num1)).toFixed(1) + " kg/m"+"3".sup();
        num3=(66+(6.2*num2)+(12.7*num1)-(6.76*age)).toFixed(1);
        document.getElementById("suggestion").innerHTML="To maintain the same weight follow this...";
        snum=num3;
        snum=snum.toString();
        document.getElementById("suggestion-cal").innerHTML="You will need "+snum+" Calories per day";
        img=document.createElement("img");
        img.src="https://mypinchofyum.files.wordpress.com/2015/10/idli.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('a1.1').appendChild(img)
        document.getElementById("a1.2").innerHTML=("Breakfast").fontsize(7).bold();
        mainbf=Math.round((3*(num3))/(1350));
        mainbf=(mainbf).toString();
        document.getElementById("a1.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+mainbf.bold().fontsize(6)+ " idlies with sambar and one chuttney".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://qph.fs.quoracdn.net/main-qimg-b6a1e98404c213424760c727b082ec3e";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('a2.1').appendChild(img)
        document.getElementById("a2.2").innerHTML=("Lunch").fontsize(7).bold();
        document.getElementById("a2.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+"100g".bold().fontsize(6)+" of sambar rice and ".fontsize(6).fontcolor("brown")+"100g".bold().fontsize(6)+" of rasam rice and ".fontsize(6).fontcolor("brown")+"75g".bold().fontsize(6)+" of curd rice with kootu and poriyal".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://ak.picdn.net/shutterstock/videos/1024044353/thumb/1.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('a3.1').appendChild(img)
        document.getElementById("a3.2").innerHTML=("Dinner").fontsize(7).bold();
        maindn=Math.round(((num3)-600-(((3*num3)/(8))))/(150));
        maindn=(maindn).toString();
        document.getElementById("a3.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+maindn.bold().fontsize(6)+ " Chappathies with Channa masala".fontsize(6).fontcolor("brown");



        realnum=num3;
        num3=1.31*num3;
        snum=num3.toFixed(1);
        snum=snum.toString();
        document.getElementById("suggestion2").innerHTML="To Gain weight you can follow this...";
        document.getElementById("suggestion2-cal").innerHTML="You will need "+snum+" Calories per day";
        img=document.createElement("img");
        img.src="https://craftlog.com/m/i/5428287=s1280=h960";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('b1.1').appendChild(img)
        document.getElementById("b1.2").innerHTML=("Breakfast").fontsize(7).bold();
        mainbf=Math.round((3*(num3))/(1350));
        mainbf=(mainbf).toString();
        document.getElementById("b1.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+mainbf.bold().fontsize(6)+ " idlies with sambar and one chuttney".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://farm6.staticflickr.com/5580/18259113644_18bc5c1066_o.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('b2.1').appendChild(img)
        document.getElementById("b2.2").innerHTML=("Lunch").fontsize(7).bold();
        document.getElementById("b2.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+"150g".bold().fontsize(6)+" of sambar rice and ".fontsize(6).fontcolor("brown")+"150g".bold().fontsize(6)+" of rasam rice and ".fontsize(6).fontcolor("brown")+"75g".bold().fontsize(6)+" of curd rice with kootu and poriyal".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://previews.123rf.com/images/espies/espies2008/espies200800481/152881012-spicy-chickpea-curry-chana-masala-or-choley-in-bowl-with-chapati-and-salad-traditional-north-indian-.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('b3.1').appendChild(img)
        document.getElementById("b3.2").innerHTML=("Dinner").fontsize(7).bold();
        maindn=Math.round(((num3)-750-(((3*num3)/(8))))/(150));
        maindn=(maindn).toString();
        document.getElementById("b3.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+maindn.bold().fontsize(6)+ " Chappathies with Channa masala".fontsize(6).fontcolor("brown");



        num3=0.84*realnum;
        document.getElementById("suggestion3").innerHTML="To lose weight you can follow this...";
        snum=num3.toFixed(1);
        snum=snum.toString();
        document.getElementById("suggestion3-cal").innerHTML="You will need "+snum+" Calories per day";
        img=document.createElement("img");
        img.src="https://thumbs.dreamstime.com/b/south-indian-breakfast-idli-chutney-48378225.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('c1.1').appendChild(img)
        document.getElementById("c1.2").innerHTML=("Breakfast").fontsize(7).bold();
        mainbf=Math.round((3*(num3))/(1350));
        mainbf=(mainbf).toString();
        document.getElementById("c1.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+mainbf.bold().fontsize(6)+ " idlies with sambar and one chuttney".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://www.edaiya.com/wp-content/uploads/2020/07/Rice-sambar-kuttu-poriyal-Rasam-curd1.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('c2.1').appendChild(img)
        document.getElementById("c2.2").innerHTML=("Lunch").fontsize(7).bold();
        document.getElementById("c2.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+"100g".bold().fontsize(6)+" of sambar rice and ".fontsize(6).fontcolor("brown")+"80g".bold().fontsize(6)+" of rasam rice and ".fontsize(6).fontcolor("brown")+"50g".bold().fontsize(6)+" of curd rice with kootu and poriyal".fontsize(6).fontcolor("brown");

        img=document.createElement("img");
        img.src="https://media02.stockfood.com/largepreviews/MTM3NjU3MDU=/00444055-Channa-masala-chickpea-curry-from-India-and-chapatis.jpg";
        img.style.height='200px';
        img.style.width='275px';
        document.getElementById('c3.1').appendChild(img)
        document.getElementById("c3.2").innerHTML=("Dinner").fontsize(7).bold();
        maindn=Math.round(((num3)-525-(((3*num3)/(8))))/(150));
        maindn=(maindn).toString();
        document.getElementById("c3.3").innerHTML="Eat ".fontsize(6).fontcolor("brown")+maindn.bold().fontsize(6)+ " Chappathies with Channa masala".fontsize(6).fontcolor("brown");


}
