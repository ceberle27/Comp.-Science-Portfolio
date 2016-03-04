//Dont cheat Mr Hesby, play game first then look.//

//Aso just this is  VERY IMPORTANT  , sort of.//
// :
//This game is happening through TEXT MESSAGES. This means that there are typos on purpose to give it realism.//
//because when teenage boys text there are tons of errors, so just keep that in mind.//


var choice1 = document.getElementById("choice1");

var choice2 = document.getElementById("choice2");

var container = document.getElementById("container");


choice1.addEventListener("click", addText1);
choice2.addEventListener("click", addText2);


//the first choice and second choice. this is the first one.                                                                                                                                                                                                                                                                    

function addText1() {

    //this makes each statement as a variable in the function.
    var firstPar = document.createElement("p");
    var secondPar = document.createElement("p");
    var thirdPar = document.createElement("p");
    var fourthPar = document.createElement("p");
    var fifthPar = document.createElement("p");
    var choice1 = document.createElement("input");
    var choice2 = document.createElement("input");
    //this assigns it to the class.
    firstPar.className = 'you';
    secondPar.className = 'you';
    thirdPar.className = 'you';
    fourthPar.className = 'you';
    fifthPar.className = 'you';
    choice1.className = 'oP';
    choice2.className = 'oP';

    //these are the words for each sentnce
    firstPar.textContent = "Yup. Still walking through this stupid forest. Still being hunted because the government thinks I'm a zombie or something. Yeah it's me.";
    secondPar.textContent = "So how have you been doing? Anything new in the outside world, as you can tell I'm sort of isolated out here.";
    thirdPar.textContent = "this is my first time accually being able to use my phone, I found some old generator and made it a charger for my phone.";
    fourthPar.textContent = "But pretty much what happened is I ran into then forest, but didnt know that the governemnt quarantined the area...";
    fifthPar.textContent = "...and were going to kill everything inside.";


    choice1.value = "Where are you? A generator?";
    choice2.value = "Nice to hear from you again!";

    choice1.type = 'button';
    choice2.type = 'button';

    container.appendChild(firstPar);
    container.appendChild(secondPar);
    container.appendChild(thirdPar);
    container.appendChild(fourthPar);
    container.appendChild(fifthPar);
    container.appendChild(choice1);
    container.appendChild(choice2);

    //this is for choice1, if you click choice1, where are you a generator
    choice1.addEventListener("click", function() {
        choice1.style.backgroundColor = "red";
        var firstParB = document.createElement("p");
        var secondParB = document.createElement("p");
        var thirdParB = document.createElement("p");
        var fourthParB = document.createElement("p");
        var fifthParB = document.createElement("p");
        var sixthParB = document.createElement("p");
        var seventhParB = document.createElement("p");
        var eighthParB = document.createElement("p");
        var ninthParB = document.createElement("p");
        var tenthParB = document.createElement("p");

        var choice4B = document.createElement("input");
        var choice5B = document.createElement("input");

        firstParB.className = 'you';
        secondParB.className = 'you';
        thirdParB.className = 'you';
        fourthParB.className = 'you';
        fifthParB.className = 'you';
        sixthParB.className = 'you';
        seventhParB.className = 'you';
        eighthParB.className = 'you';
        ninthParB.className = 'you';
        tenthParB.className = 'you';
        choice4B.className = 'oP';
        choice5B.className = 'oP';

        firstParB.textContent = "Well, I was walking through the forest and there was some clearing with some hut thing.";
        secondParB.textContent = "more of a cabin, but I started exploring it and before I went in, well I still havn't, but I started exploring around it and found a generator";
        thirdParB.textContent = "Luckily I had my handy dandy USB drivge and charged my phone.";
        fourthParB.textContent = "I still havn't gone in yet, It looks kinda abandoned but I'm not sure if I should go in.";
        fifthParB.textContent = "It's pretty creepy and its getting dar-- OH CRAP, is that...";
        sixthParB.textContent = "Is that blood on the handle of the door??!";
        seventhParB.textContent = "Don't forget, this is the zombie appocolipse--";
        eighthParB.textContent = "and whoevers blood that is it doesn't look like they tripped over a bug or something.";
        ninthParB.textContent = "So what do you recon, should I go in? Keep in mind though there could be some resources in there, I am running low on them and I have been eating grass and nuts for the past few days...";
        tenthParB.textContent = "And dont even ask me what I have been drinking.";

        choice4B.value = "If you have been drinking what I think you are, it's probably worth it. Go in";
        choice5B.value = "No, you shouldn't. Whatevers in there could be dangerouse.";

        choice4B.type = 'button';
        choice5B.type = 'button';

        container.appendChild(firstParB);
        container.appendChild(secondParB);
        container.appendChild(thirdParB);
        container.appendChild(fourthParB);
        container.appendChild(fifthParB);
        container.appendChild(sixthParB);
        container.appendChild(seventhParB);
        container.appendChild(eighthParB);
        container.appendChild(ninthParB);
        container.appendChild(tenthParB);

        container.appendChild(choice4B);
        container.appendChild(choice5B);








        //will, is that you?, where are you, a generator? dont go in the cabin
        choice5B.addEventListener("click", function() {
            choice5B.style.backgroundColor = "red";
            var firstParI = document.createElement("p");
            var secondParI = document.createElement("p");
            var thirdParI = document.createElement("p");

            var choice6I = document.createElement("input");
            var choice7I = document.createElement("input");


            firstParI.className = 'you';
            secondParI.className = 'you';
            thirdParI.className = 'you';

            choice6I.className = 'oP';
            choice7I.cassName = 'oP';


            firstParI.textContent = "Ok, thats probably smart considering there might be a zombie or something in there";
            secondParI.textContent = "Even though I REALLY want food and water right now....";
            thirdParI.textContent = "...What if I just went in REEEAALLY quick, got some food and water and left in a flash?";

            choice6I.value = "No, you really shoudln't, what if there was a zombie in there?";
            choice7I.value = "OK fine, but go REALLY quick, get what you need, and leave imediatly";

            choice6I.type = 'button';
            choice7I.type = 'button';

            container.appendChild(firstParI);
            container.appendChild(secondParI);
            container.appendChild(thirdParI);

            container.appendChild(choice6I);
            container.appendChild(choice7I);




//will, is that you?, where are you, a generator? dont go in the cabin, no seriously dont go in the cabin
            choice6I.addEventListener("click", function() {
                choice6I.style.backgroundColor = "red";


                var firstParQ = document.createElement("p");
                var secondParQ = document.createElement("p");
                var thirdParQ = document.createElement("p");
                var fourthParQ = document.createElement("p");
                var fifthParQ = document.createElement("p");
                var sixthParQ = document.createElement("p");
                var seventhParQ = document.createElement("p");
                var eighthParQ = document.createElement("p");
                var ninthParQ = document.createElement("p");
                var choice11 = document.createElement("p");
                var choice12 = document.createElement("p");


                firstParQ.className = 'you';
                secondParQ.className = 'you';
                thirdParQ.className = 'you';
                fourthParQ.className = 'you';
                fifthParQ.className = 'you';
                sixthParQ.className = 'you';
                seventhParQ.className = 'you';
                eighthParQ.className = 'you';
                ninthParQ.className = 'you';

                choice11.className = 'oP';
                choice12.className = 'oP';

                firstParQ.textContent = "Ok";
                secondParQ.textContent = "I have now come to a spot where there are two ways I can go. ";
                thirdParQ.textContent = "To the right or straight ahead past the cabin.";
                fourthParQ.textContent = "If I keep going straight past the cabin it starts to go downhill, maybe some water like a river or something.";
                fifthParQ.textContent = "If I go to the right it goes uphill but that might not so bad.";
                sixthParQ.textContent = "Because I do have a goal to find my family...";
                seventhParQ.textContent = "If they are still alive--";
                eighthParQ.textContent = "But if I go uphill I can see where I'm going more from some that veiwpoint I see up there.";
                ninthParQ.textContent = "So what do think would be best?";

                choice11.value = "Go straight ahead, downhill is easier and you need water.";
                choice12.value = "Go uphill, you need to know where you are going and you need to find your family.";




                container.appendChild(firstParQ);
                container.appendChild(secondParQ);
                container.appendChild(thirdParQ);
                container.appendChild(fourthParQ);
                container.appendChild(fifthParQ);
                container.appendChild(sixthParQ);
                container.appendChild(seventhParQ);
                container.appendChild(eighthParQ);
                container.appendChild(ninthParQ);

                container.appendChild(choice11);
                container.appendChild(choice11);



//will, is that you?, where are you, a generator? dont go in the cabin, no seriously dont go in the cabin, go downhill
                choice11.addEventListener("click", function() {
                    choice11.style.backgroundColor = "red";
                    var firstParK = document.createElement("p");
                    var secondParK = document.createElement("p");
                    var thirdParK = document.createElement("p");
                    var fourthParK = document.createElement("p");
                    var fifthParK = document.createElement("p");
                    var sixthParK = document.createElement("p");
                    var seventhParK = document.createElement("p");
                    var eighthParK = document.createElement("p");

                    var choice13 = document.createElement("input");
                    var choice14 = document.createElement("input");


                    firstParK.className = 'you';
                    secondParK.className = 'you';
                    thirdParK.className = 'you';
                    fourthParK.className = 'you';
                    fifthParK.className = 'you';
                    sixthParK.className = 'you';
                    seventhParK.className = 'you';
                    eighthParK.className = 'you';
                    choice13.className = 'oP';
                    choice14.className = 'oP';


                    firstParK.textContent = "Ok, I'm heading downhill, hopefully there is some water down there...";
                    secondParK.textContent = "walking...";
                    thirdParK.textContent = "This is getting steper--";
                    fourthParK.textContent = "It like starts off just normally going sort of downhill, but now its like turning into like a cliff thing";
                    fifthParK.textContent = "I'm a litte scared now...";
                    sixthParK.textContent = "Dude, I think I need to turn back now, this is too steep, I dont even see where it ends.";
                    seventhParK.textContent = "Its covered in trees, and its pitch black outside, dont forget its night time... but this is like a cliff now.";
                    eighthParK.textContent = "Don't ask me how the trees got here...";

                    choice13.value = "Turn back now, its too dangerouse.";
                    choice14.value = "Keep going, you need water.";

                    choice13.type = 'button';
                    choice14.type = 'button';



                    container.appendChild(firstParK);
                    container.appendChild(secondParK);
                    container.appendChild(thirdParK);
                    container.appendChild(fourthParK);
                    container.appendChild(fifthParK);
                    container.appendChild(sixthParK);
                    container.appendChild(seventhParK);
                    container.appendChild(eighthParK);
                    container.appendChild(choice13);
                    container.appendChild(choice14);





//will, is that you?, where are you, a generator? dont go in the cabin, no seriousely dont go in the cabin, go downhill, keep going downhill
                    choice14.addEventListener("click", function() {

                        choice14.style.backgroundColor = "red";

                        var firstParJ = document.createElement("p");
                        var secondParJ = document.createElement("p");
                        var thirdParJ = document.createElement("p");
                        var fourthParJ = document.createElement("p");
                        var fifthParJ = document.createElement("p");
                        var sixthParJ = document.createElement("p");
                        var seventhParJ = document.createElement("p");


                        firstParJ.className = 'you';
                        secondParJ.className = 'you';
                        thirdParJ.className = 'you';
                        fourthParJ.className = 'you';
                        fifthParJ.className = 'you';
                        sixthParJ.className = 'you';
                        seventhParJ.className = 'you';



                        firstParJ.textContent = "Ok, I'm gonna start crawling down, facing my feet down of course.";
                        secondParJ.textContent = "But I'm going--";
                        thirdParJ.textContent = "The ground is starting to get slippe--- AHHHHHH";
                        fourthParJ.textContent = "I SLIPPED!";
                        fifthParJ.textContent = "THIS IS IT";
                        sixthParJ.textContent = "IM GONNA DIE";
                        seventhParJ.textContent = "*CRUNCH*";


                        container.appendChild(firstParJ);
                        container.appendChild(secondParJ);
                        container.appendChild(thirdParJ);
                        container.appendChild(fourthParJ);
                        container.appendChild(fifthParJ);
                        container.appendChild(sixthParJ);
                        container.appendChild(seventhParJ);

                    });







//will, is that you?, where are you, a generator? dont go in the cabin, no seriously dont go in the cabin, go downhill, go back uphill

                    choice14.addEventListener("click", function() {

                        choice14.style.backgroundColor = "red";

                        var firstParD = document.createElement("p");
                        var secondParD = document.createElement("p");
                        var thirdParD = document.createElement("p");
                        var fourthParD = document.createElement("p");
                        var fifthParD = document.createElement("p");
                        var sixthParD = document.createElement("p");
                        var seventhParD = document.createElement("p");
                        var eighthParD = document.createElement("p");
                        var ninthParD = document.createElement("p");
                        var tenthParD = document.createElement("p");
                        var eleventhParD = document.createElement("p");
                        var twelthParD = document.createElement("p");
                        var thirteenthParD = document.createElement("p");
                        var fourteenthParD = document.createElement("p");
                        var fifteenthParD = document.createElement("p");

                        var choice15 = document.createElement("input");
                        var choice16 = document.createElement("input");

                        firstParD.className = 'you';
                        secondParD.className = 'you';
                        thirdParD.className = 'you';
                        fourthParD.className = 'you';
                        fifthParD.className = 'you';
                        sixthParD.className = 'you';
                        seventhParD.className = 'you';
                        eighthParD.className = 'you';
                        ninthParD.className = 'you';
                        tenthParD.className = 'you';
                        eleventhParD.className = 'you';
                        twelthParD.className = 'you';
                        thirteenthParD.className = 'you';
                        fourteenthParD.className = 'you';
                        fifteenthParD.className = 'you';

                        choice15.className = 'oP';
                        choice16.className = 'oP';


                        firstParD.textContent = "Ok, probably smart, Cause I dont see a bottom to this pit, I'm heading up, I'll text you when I get to the top of the hill.";
                        secondParD.textContent = "";
                        thirdParD.textContent = "";
                        fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                        fifthParD.textContent = "--Wait, theres some noise...";
                        sixthParD.textContent = "It sounds like, ";
                        seventhParD.textContent = "Like a helicopter...";
                        eighthParD.textContent = "OH CRAP!";
                        ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                        tenthParD.textContent = "Oh crap they see me";
                        eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                        twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                        thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                        fourteenthParD.textContent = "They are going to kill Me!";
                        fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                        choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                        choice16.value = "RUN!!";

                        choice15.type = 'button';
                        choice16.type = 'button';

                        container.appendChild(firstParD);
                        container.appendChild(secondParD);
                        container.appendChild(thirdParD);
                        container.appendChild(fourthParD);
                        container.appendChild(fifthParD);
                        container.appendChild(sixthParD);
                        container.appendChild(seventhParD);
                        container.appendChild(eighthParD);
                        container.appendChild(ninthParD);
                        container.appendChild(tenthParD);
                        container.appendChild(eleventhParD);
                        container.appendChild(twelthParD);
                        container.appendChild(thirteenthParD);
                        container.appendChild(fourteenthParD);
                        container.appendChild(fifteenthParD);

                        container.appendChild(choice15);
                        container.appendChild(choice16);



//will, is that you?, where are you, a generator? dont go in the cabin, no seriously dont go in the cabin, go downhill, go back uphill, RUN!
                        choice16.addEventListener("click", function() {

                            choice16.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");

                            var choicefourD = document.createElement("input");
                            var choicefiveD = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';




                            firstParD.textContent = "OK";
                            secondParD.textContent = "RUNNING";
                            thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                            fourthParD.textContent = "AHH";
                            fifthParD.textContent = "THEY ARE SHOOTING!!";
                            sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                            seventhParD.textContent = "OH MY GOD";
                            eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                            ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                            tenthParD.textContent = "THIS IS DEFIANTLY IT";
                            eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                            twelthParD.textContent = "So thank you for that, I mean it.";
                            thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                            fourteenthParD.textContent = "goodbye, Barry.";
                            fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);





                        });

//will, is that you?, where are you, a generator? dont go in the cabin, no seriously dont go in the cabin, go downhill, go back uphill, signal your not a zombie.
                        choice15.addEventListener("click", function() {

                            choice15.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");


                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';




                            firstParD.textContent = "OK, WAVING AT THEM";
                            secondParD.textContent = "Its sort of like I'm stranded or something";
                            thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                            fourthParD.textContent = "";
                            fifthParD.textContent = "";
                            sixthParD.textContent = "";
                            seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                            eighthParD.textContent = "I have been asleep for most of it";
                            ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                            tenthParD.textContent = "But all I know is that I'm safe now.";
                            eleventhParD.textContent = "And part of that is due to you-- most of it";
                            twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                            thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                            fourteenthParD.textContent = "So thank you.";
                            fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);



                        });


                    });








//will, is that you?, where are you, a generator? dont go in the cabin, no seriously dont go in the cabin, go uphill to find your family,

                    choice12.addEventListener("click", function() {

                        choice14.style.backgroundColor = "red";

                        var firstParD = document.createElement("p");
                        var secondParD = document.createElement("p");
                        var thirdParD = document.createElement("p");
                        var fourthParD = document.createElement("p");
                        var fifthParD = document.createElement("p");
                        var sixthParD = document.createElement("p");
                        var seventhParD = document.createElement("p");
                        var eighthParD = document.createElement("p");
                        var ninthParD = document.createElement("p");
                        var tenthParD = document.createElement("p");
                        var eleventhParD = document.createElement("p");
                        var twelthParD = document.createElement("p");
                        var thirteenthParD = document.createElement("p");
                        var fourteenthParD = document.createElement("p");
                        var fifteenthParD = document.createElement("p");

                        var choice15 = document.createElement("input");
                        var choice16 = document.createElement("input");

                        firstParD.className = 'you';
                        secondParD.className = 'you';
                        thirdParD.className = 'you';
                        fourthParD.className = 'you';
                        fifthParD.className = 'you';
                        sixthParD.className = 'you';
                        seventhParD.className = 'you';
                        eighthParD.className = 'you';
                        ninthParD.className = 'you';
                        tenthParD.className = 'you';
                        eleventhParD.className = 'you';
                        twelthParD.className = 'you';
                        thirteenthParD.className = 'you';
                        fourteenthParD.className = 'you';
                        fifteenthParD.className = 'you';

                        choice15.className = 'oP';
                        choice16.className = 'oP';


                        firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                        secondParD.textContent = "";
                        thirdParD.textContent = "";
                        fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                        fifthParD.textContent = "--Wait, theres some noise...";
                        sixthParD.textContent = "It sounds like, ";
                        seventhParD.textContent = "Like a helicopter...";
                        eighthParD.textContent = "OH CRAP!";
                        ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                        tenthParD.textContent = "Oh crap they see me";
                        eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                        twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                        thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                        fourteenthParD.textContent = "They are going to kill Me!";
                        fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                        choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                        choice16.value = "RUN!!";

                        choice15.type = 'button';
                        choice16.type = 'button';

                        container.appendChild(firstParD);
                        container.appendChild(secondParD);
                        container.appendChild(thirdParD);
                        container.appendChild(fourthParD);
                        container.appendChild(fifthParD);
                        container.appendChild(sixthParD);
                        container.appendChild(seventhParD);
                        container.appendChild(eighthParD);
                        container.appendChild(ninthParD);
                        container.appendChild(tenthParD);
                        container.appendChild(eleventhParD);
                        container.appendChild(twelthParD);
                        container.appendChild(thirteenthParD);
                        container.appendChild(fourteenthParD);
                        container.appendChild(fifteenthParD);

                        container.appendChild(choice15);
                        container.appendChild(choice16);



//will, is that you?, where are you, a generator? dont go in the cabin, no seriously dont go in the cabin, go uphill, RUN!
                        choice16.addEventListener("click", function() {

                            choice16.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");

                            var choicefourD = document.createElement("input");
                            var choicefiveD = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';




                            firstParD.textContent = "OK";
                            secondParD.textContent = "RUNNING";
                            thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                            fourthParD.textContent = "AHH";
                            fifthParD.textContent = "THEY ARE SHOOTING!!";
                            sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                            seventhParD.textContent = "OH MY GOD";
                            eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                            ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                            tenthParD.textContent = "THIS IS DEFIANTLY IT";
                            eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                            twelthParD.textContent = "So thank you for that, I mean it.";
                            thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                            fourteenthParD.textContent = "goodbye, Barry.";
                            fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);





                        });

//will, is that you?, where are you, a generator? dont go in the cabin, no seriously dont go in the cabin, signal your not a zombie!

                        choice15.addEventListener("click", function() {

                            choice15.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");


                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';




                            firstParD.textContent = "OK, WAVING AT THEM";
                            secondParD.textContent = "Its sort of like I'm stranded or something";
                            thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                            fourthParD.textContent = "";
                            fifthParD.textContent = "";
                            sixthParD.textContent = "";
                            seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                            eighthParD.textContent = "I have been asleep for most of it";
                            ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                            tenthParD.textContent = "But all I know is that I'm safe now.";
                            eleventhParD.textContent = "And part of that is due to you-- most of it";
                            twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                            thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                            fourteenthParD.textContent = "So thank you.";
                            fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);



                        });


                    });




                });





                //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin.
                choice7I.addEventListener("click", function() {

                    choice7I.style.backgroundColor = "red";

                    var firstParJ = document.createElement("p");
                    var secondParJ = document.createElement("p");
                    var thirdParJ = document.createElement("p");
                    var fourthParJ = document.createElement("p");
                    var fifthParJ = document.createElement("p");
                    var sixthParJ = document.createElement("p");
                    var seventhParJ = document.createElement("p");

                    var choice6J = document.createElement("input");
                    var choice7J = document.createElement("input");

                    firstParJ.className = 'you';
                    secondParJ.className = 'you';
                    thirdParJ.className = 'you';
                    fourthParJ.className = 'you';
                    fifthParJ.className = 'you';
                    sixthParJ.className = 'you';
                    seventhParJ.className = 'you';

                    choice6J.className = 'oP';
                    choice7J.className = 'oP';

                    firstParJ.textContent = "Ok, good idea, I'm a little bit scared...";
                    secondParJ.textContent = "But I'm heading to the door... ";
                    thirdParJ.textContent = "Ok, I made it to the porch, I'm going to grab this leaf and use it to open the door.";
                    fourthParJ.textContent = "Because I REALLY dont want to touch that ketchup juice.";
                    fifthParJ.textContent = "Peeking in.....Ok I'm sneeking in, very sneekily... Looks just like a normal cabin, OOOO THE KITCHEN!";
                    sixthParJ.textContent = "I cant even explain in words how hungry I am, even though I just did pretty much, whatever I'm already making myself some cerial.";
                    seventhParJ.textContent = "*gag* Dude, there is this aweful smell coming from upstairs...";

                    choice6J.value = "Go check it out.";
                    choice7J.value = "Stay clear of it, you probably dont need to worry about it.";

                    choice6J.type = 'button';
                    choice7J.type = 'button';

                    container.appendChild(firstParJ);
                    container.appendChild(secondParJ);
                    container.appendChild(thirdParJ);
                    container.appendChild(fourthParJ);
                    container.appendChild(fifthParJ);
                    container.appendChild(sixthParJ);
                    container.appendChild(seventhParJ);

                    container.appendChild(choice6J);
                    container.appendChild(choice7J);




                    //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin. go check out the smell.
                    choice6J.addEventListener("click", function() {
                        choice6J.style.backgroundColor = "red";
                        var firstParK = document.createElement("p");
                        var secondParK = document.createElement("p");
                        var thirdParK = document.createElement("p");
                        var fourthParK = document.createElement("p");
                        var fifthParK = document.createElement("p");
                        var sixthParK = document.createElement("p");
                        var seventhParK = document.createElement("p");
                        var eighthParK = document.createElement("p");
                        var ninthParK = document.createElement("p");
                        var tenthParK = document.createElement("p");
                        var eleventhParK = document.createElement("p");
                        var twelthParK = document.createElement("p");
                        var thirteenthParK = document.createElement("p");
                        var fourteenthParK = document.createElement("p");
                        var fifteenthParK = document.createElement("p");

                        firstParK.className = 'you';
                        secondParK.className = 'you';
                        thirdParK.className = 'you';
                        fourthParK.className = 'you';
                        fifthParK.className = 'you';
                        sixthParK.className = 'you';
                        seventhParK.className = 'you';
                        eighthParK.className = 'you';
                        ninthParK.className = 'you';
                        tenthParK.className = 'you';
                        eleventhParK.className = 'you';
                        twelthParK.className = 'you';
                        thirteenthParK.className = 'you';
                        fourteenthParK.className = 'you';
                        fifteenthParK.className = 'you';

                        firstParK.textContent = "Ok, going up too see what it is...";
                        secondParK.textContent = "I'm a little scared but I'm going to go make sure theres nothing up there...";
                        thirdParK.textContent = "This is like, really creepy. Like the floreboards are creeking, its dark, whatelse do you need??";
                        fourthParK.textContent = "But I'm going to face my fears. Nothing can scare me!";
                        fifthParK.textContent = "OH MY GOD WHAT WAS THAT NOISE?!?!?!";
                        sixthParK.textContent = "I stand corrected";
                        seventhParK.textContent = "I am very easily scared.";
                        eighthParK.textContent = "The smell is getting strongerrRRRRRROOOHHHAAHHHH MY GOD";
                        ninthParK.textContent = "GOD GOD GOD GOD NOOOOO";
                        tenthParK.textContent = "ZOMBIE";
                        eleventhParK.textContent = "GOT M--AHHHHH BITTING ME, DYING TO DEATH!!";
                        twelthParK.textContent = "WHATS EVEN WORSE IS THAT THE LAST THING I SAID DOESNT EVEN MAKE SENCE!!!";
                        thirteenthParK.textContent = "It's too late to do anything, I will turn into a zombie any moment now.";
                        fourteenthParK.textContent = "So I guess this is goodbye, thank you form sticking by me all this time though.";
                        fifteenthParK.textContent = "So goodbye";


                        container.appendChild(firstParK);
                        container.appendChild(secondParK);
                        container.appendChild(thirdParK);
                        container.appendChild(fourthParK);
                        container.appendChild(fifthParK);
                        container.appendChild(sixthParK);
                        container.appendChild(seventhParK);
                        container.appendChild(eighthParK);
                        container.appendChild(ninthParK);
                        container.appendChild(tenthParK);
                        container.appendChild(eleventhParK);
                        container.appendChild(twelthParK);
                        container.appendChild(thirteenthParK);
                        container.appendChild(fourteenthParK);
                        container.appendChild(fifteenthParK);


                    });
                    //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin. dont check out the smell.
                    choice7J.addEventListener("click", function() {

                        choice7J.style.backgroundColor = "red";

                        var firstParD = document.createElement("p");
                        var secondParD = document.createElement("p");
                        var thirdParD = document.createElement("p");
                        var fourthParD = document.createElement("p");
                        var fifthParD = document.createElement("p");
                        var sixthParD = document.createElement("p");
                        var seventhParD = document.createElement("p");
                        var eighthParD = document.createElement("p");
                        var ninthParD = document.createElement("p");
                        var tenthParD = document.createElement("p");
                        var eleventhParD = document.createElement("p");
                        var twelthParD = document.createElement("p");

                        var choice9D = document.createElement("input");
                        var choice10D = document.createElement("input");

                        firstParD.className = 'you';
                        secondParD.className = 'you';
                        thirdParD.className = 'you';
                        fourthParD.className = 'you';
                        fifthParD.className = 'you';
                        sixthParD.className = 'you';
                        seventhParD.className = 'you';
                        eighthParD.className = 'you';
                        ninthParD.className = 'you';
                        tenthParD.className = 'you';
                        eleventhParD.className = 'you';
                        twelthParD.className = 'you';

                        choice9D.className = 'oP';
                        choice10D.className = 'oP';

                        firstParD.textContent = "Yeah, I'm with you on that one.";
                        secondParD.textContent = "It could be something dangerouse";
                        thirdParD.textContent = "And plus, all I need here is food and water and then I'm out.";
                        fourthParD.textContent = "...Gathering...gathering....";
                        fifthParD.textContent = "Stuffing all I can into my backpack";
                        sixthParD.textContent = "I am so excited to eat all this, there is some really good stuff in these cabinets.";
                        seventhParD.textContent = "like chocolate bars, OOOO is that a twinkie????";
                        eighthParD.textContent = "Wait, what was that?";
                        ninthParD.textContent = "There was some noise coming from upstairs...";
                        tenthParD.textContent = "I know I probably shouldn't go and check it out, I'm going to keep packing up this food...";
                        eleventhParD.textContent = "maybe a bottle of water as well...";
                        twelthParD.textContent = "just quicker now.";


                        choice9D.value = "Yeah, do that";
                        choice10D.value = "Thats smart, but just to be sure make sure theres nothing really quick.";

                        choice9D.type = 'button';
                        choice10D.type = 'button';

                        container.appendChild(firstParD);
                        container.appendChild(secondParD);
                        container.appendChild(thirdParD);
                        container.appendChild(fourthParD);
                        container.appendChild(fifthParD);
                        container.appendChild(sixthParD);
                        container.appendChild(seventhParD);
                        container.appendChild(eighthParD);
                        container.appendChild(ninthParD);
                        container.appendChild(tenthParD);
                        container.appendChild(eleventhParD);
                        container.appendChild(twelthParD);

                        container.appendChild(choice9D);
                        container.appendChild(choice10D);









                        //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin, dont check out the smell, 
                        choice10D.addEventListener("click", function() {

                            choice10D.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");


                            var choice9H = document.createElement("input");
                            var choice10H = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';

                            choice9H.className = 'oP';
                            choice10H.className = 'oP';

                            firstParD.textContent = "Ok, just going to peek my head around the corner to the staircase--";
                            secondParD.textContent = "OH CRAP! THERES A ZOMBIE CRAWLING DOWN THE STAIRS!!";
                            thirdParD.textContent = "IM OUT MAN, I HAVE WHAT I NEED!";
                            fourthParD.textContent = "IM RUNNING TO THE DOOR!";
                            fifthParD.textContent = "Wait a second...";
                            sixthParD.textContent = "This zombie is hecka slow.";
                            seventhParD.textContent = "I dont need to worry, about this, I'm gonna walk out of here now though. ";
                            eighthParD.textContent = "Walking.";
                            ninthParD.textContent = "I kinda feel bad for it, it looks so desperate and sad, like it really wants to get me but it just cant...";
                            tenthParD.textContent = "Anyway, screw you zombie. Now there are two ways I can go.";
                            eleventhParD.textContent = "I can keep going past the house from where I came to it down this hill...";
                            twelthParD.textContent = "Or I can go up the hill to the right of the mountain wher eit goes uphill so I can see where I'm going.";


                            choice9H.value = "Go straight, downhill is easier.";
                            choice10H.value = "Go uphill. You have a goal to find your family, if your still persuing that goal then thats your bast option.";

                            choice9H.type = 'button';
                            choice10H.type = 'button';

                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);

                            container.appendChild(choice9H);
                            container.appendChild(choice10H);











                            choice10H.addEventListener("click", function() {

                                choice10H.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choice15 = document.createElement("input");
                                var choice16 = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';

                                choice15.className = 'oP';
                                choice16.className = 'oP';


                                firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                secondParD.textContent = "";
                                thirdParD.textContent = "";
                                fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                fifthParD.textContent = "--Wait, theres some noise...";
                                sixthParD.textContent = "It sounds like, ";
                                seventhParD.textContent = "Like a helicopter...";
                                eighthParD.textContent = "OH CRAP!";
                                ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                tenthParD.textContent = "Oh crap they see me";
                                eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                fourteenthParD.textContent = "They are going to kill Me!";
                                fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                choice16.value = "RUN!!";

                                choice15.type = 'button';
                                choice16.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);

                                container.appendChild(choice15);
                                container.appendChild(choice16);




                                choice16.addEventListener("click", function() {

                                    choice16.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");

                                    var choicefourD = document.createElement("input");
                                    var choicefiveD = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK";
                                    secondParD.textContent = "RUNNING";
                                    thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                    fourthParD.textContent = "AHH";
                                    fifthParD.textContent = "THEY ARE SHOOTING!!";
                                    sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                    seventhParD.textContent = "OH MY GOD";
                                    eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                    ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                    tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                    eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                    twelthParD.textContent = "So thank you for that, I mean it.";
                                    thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                    fourteenthParD.textContent = "goodbye, Barry.";
                                    fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);





                                });


                                choice15.addEventListener("click", function() {

                                    choice15.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");


                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK, WAVING AT THEM";
                                    secondParD.textContent = "Its sort of like I'm stranded or something";
                                    thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                    fourthParD.textContent = "";
                                    fifthParD.textContent = "";
                                    sixthParD.textContent = "";
                                    seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                    eighthParD.textContent = "I have been asleep for most of it";
                                    ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                    tenthParD.textContent = "But all I know is that I'm safe now.";
                                    eleventhParD.textContent = "And part of that is due to you-- most of it";
                                    twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                    thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                    fourteenthParD.textContent = "So thank you.";
                                    fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);



                                });


                            });














                        });


                        //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin. dont check out the smell, continue to do what your doing.
                        choice9D.addEventListener("click", function() {
                            choice9D.style.backgroundColor = "red";

                            var firstParl = document.createElement("p");
                            var secondParl = document.createElement("p");
                            var thirdParl = document.createElement("p");
                            var fourthParl = document.createElement("p");
                            var fifthParl = document.createElement("p");
                            var sixthParl = document.createElement("p");
                            var seventhParl = document.createElement("p");
                            var eighthParl = document.createElement("p");
                            var ninthParl = document.createElement("p");
                            var tenthParl = document.createElement("p");
                            var eleventhParl = document.createElement("p");
                            var twelthParl = document.createElement("p");


                            var choice9l = document.createElement("input");
                            var choice10l = document.createElement("input");

                            firstParl.className = 'you';
                            secondParl.className = 'you';
                            thirdParl.className = 'you';
                            fourthParl.className = 'you';
                            fifthParl.className = 'you';
                            sixthParl.className = 'you';
                            seventhParl.className = 'you';
                            eighthParl.className = 'you';
                            ninthParl.className = 'you';
                            tenthParl.className = 'you';
                            eleventhParl.className = 'you';
                            twelthParl.className = 'you';

                            choice9l.className = 'oP';
                            choice10l.className = 'oP';

                            firstParl.textContent = "Ok, almost finished....";
                            secondParl.textContent = "Just stuffing in a waterbottle...";
                            thirdParl.textContent = "oh, also by the way I got a blanket from the couch because it's cold outside.";
                            fourthParl.textContent = "because its cold outside and I am NOT sleeping here";
                            fifthParl.textContent = "So i'm not even going to give you that opti--";
                            sixthParl.textContent = "HOLY CRAP!!! CRAP CRAP CRAP CRAP!!!";
                            seventhParl.textContent = "THERES A ZOMBIE";
                            eighthParl.textContent = "Its a crawler, so its slow but Its closer to the door where the staircase is, of corse because it came from upstairs";
                            ninthParl.textContent = "Theres a window on the other side of the room but farther from the zombie than the door is, but it will take me a couple seconds to open it.";
                            tenthParl.textContent = "or should I just run for the door, the zombie is like 10 feet from the door..";
                            eleventhParl.textContent = "..and 15 feet from the window--";
                            twelthParl.textContent = "QUICK! WHICH ONE";


                            choice9l.value = "THE WINDOW!!";
                            choice10l.value = "THE DOOR!!";

                            choice9l.type = 'button';
                            choice10l.type = 'button';

                            container.appendChild(firstParl);
                            container.appendChild(secondParl);
                            container.appendChild(thirdParl);
                            container.appendChild(fourthParl);
                            container.appendChild(fifthParl);
                            container.appendChild(sixthParl);
                            container.appendChild(seventhParl);
                            container.appendChild(eighthParl);
                            container.appendChild(ninthParl);
                            container.appendChild(tenthParl);
                            container.appendChild(eleventhParl);
                            container.appendChild(twelthParl);

                            container.appendChild(choice9l);
                            container.appendChild(choice10l);



                            choice9l.addEventListener("click", function() {

                                choice9l.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choicefourD = document.createElement("input");
                                var choicefiveD = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';

                                choicefourD.className = 'oP';
                                choicefiveD.className = 'oP';


                                firstParD.textContent = "OK, HEADING TO THE WINDOW!";
                                secondParD.textContent = "Fiddling with the STUPID LATCH LEVER WINDOW THING!!";
                                thirdParD.textContent = "COME ON!!!!";
                                fourthParD.textContent = "OK, its FRIKIN FINALLY OPEN";
                                fifthParD.textContent = "OMG THE ZOMBIE IS RIGHT BEHIND ME";
                                sixthParD.textContent = "DIVING THROUGH THE WINDOW";
                                seventhParD.textContent = "ANNNNnnnnnd";
                                eighthParD.textContent = "OUCH!";
                                ninthParD.textContent = "Landed on my face but I have my backpack and I am OUT OF HERE.";
                                tenthParD.textContent = "Running...";
                                eleventhParD.textContent = "Ok, I'm a safe distance by now.";
                                twelthParD.textContent = "well... Now what?";
                                thirteenthParD.textContent = "Which way should I go, I could keep going past the house from where I came from, where it starts to go downhil-- ";
                                fourteenthParD.textContent = "Or I can go to the right where it goes uphill up this mountain, maybe I would be able to see where I am accually going. ";
                                fifteenthParD.textContent = "What do you think?";

                                choicefourD.value = "Go straight, downhill is easier and wherever your going you would be able to get there quicker.";
                                choicefiveD.value = "Go to the right, you are trying to find your family. You will know better where to go to find them.";

                                choicefourD.type = 'button';
                                choicefiveD.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);

                                container.appendChild(choicefourD);
                                container.appendChild(choicefiveD);













                                choicefiveD.addEventListener("click", function() {

                                    choicefiveD.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");

                                    var choice15 = document.createElement("input");
                                    var choice16 = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';

                                    choice15.className = 'oP';
                                    choice16.className = 'oP';


                                    firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                    secondParD.textContent = "";
                                    thirdParD.textContent = "";
                                    fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                    fifthParD.textContent = "--Wait, theres some noise...";
                                    sixthParD.textContent = "It sounds like, ";
                                    seventhParD.textContent = "Like a helicopter...";
                                    eighthParD.textContent = "OH CRAP!";
                                    ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                    tenthParD.textContent = "Oh crap they see me";
                                    eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                    twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                    thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                    fourteenthParD.textContent = "They are going to kill Me!";
                                    fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                    choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                    choice16.value = "RUN!!";

                                    choice15.type = 'button';
                                    choice16.type = 'button';

                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);

                                    container.appendChild(choice15);
                                    container.appendChild(choice16);




                                    choice16.addEventListener("click", function() {

                                        choice16.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");

                                        var choicefourD = document.createElement("input");
                                        var choicefiveD = document.createElement("input");

                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';




                                        firstParD.textContent = "OK";
                                        secondParD.textContent = "RUNNING";
                                        thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                        fourthParD.textContent = "AHH";
                                        fifthParD.textContent = "THEY ARE SHOOTING!!";
                                        sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                        seventhParD.textContent = "OH MY GOD";
                                        eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                        ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                        tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                        eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                        twelthParD.textContent = "So thank you for that, I mean it.";
                                        thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                        fourteenthParD.textContent = "goodbye, Barry.";
                                        fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);





                                    });


                                    choice15.addEventListener("click", function() {

                                        choice15.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");


                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';




                                        firstParD.textContent = "OK, WAVING AT THEM";
                                        secondParD.textContent = "Its sort of like I'm stranded or something";
                                        thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                        fourthParD.textContent = "";
                                        fifthParD.textContent = "";
                                        sixthParD.textContent = "";
                                        seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                        eighthParD.textContent = "I have been asleep for most of it";
                                        ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                        tenthParD.textContent = "But all I know is that I'm safe now.";
                                        eleventhParD.textContent = "And part of that is due to you-- most of it";
                                        twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                        thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                        fourteenthParD.textContent = "So thank you.";
                                        fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);



                                    });


                                });












                            });



                            choice10l.addEventListener("click", function() {

                                choice10l.style.backgroundColor = "red";

                                var firstParq = document.createElement("p");
                                var secondParq = document.createElement("p");
                                var thirdParq = document.createElement("p");
                                var fourthParq = document.createElement("p");
                                var fifthParq = document.createElement("p");
                                var sixthParq = document.createElement("p");
                                var seventhParq = document.createElement("p");
                                var eighthParq = document.createElement("p");
                                var ninthParq = document.createElement("p");
                                var tenthParq = document.createElement("p");
                                var eleventhParq = document.createElement("p");
                                var twelthParq = document.createElement("p");
                                var thirteenthParq = document.createElement("p");
                                var fourteenthParq = document.createElement("p");
                                var fifteenthParq = document.createElement("p");

                                var choicefourq = document.createElement("input");
                                var choicefiveq = document.createElement("input");

                                firstParq.className = 'you';
                                secondParq.className = 'you';
                                thirdParq.className = 'you';
                                fourthParq.className = 'you';
                                fifthParq.className = 'you';
                                sixthParq.className = 'you';
                                seventhParq.className = 'you';
                                eighthParq.className = 'you';
                                ninthParq.className = 'you';
                                tenthParq.className = 'you';
                                eleventhParq.className = 'you';
                                twelthParq.className = 'you';
                                thirteenthParq.className = 'you';
                                fourteenthParq.className = 'you';
                                fifteenthParq.className = 'you';

                                choicefourq.className = 'oP';
                                choicefiveq.className = 'oP';


                                firstParq.textContent = "OK, HEADING TO THE DOOR!";
                                secondParq.textContent = "Fiddling with the STUPID HANDLE THING!!";
                                thirdParq.textContent = "CRAP!";
                                fourthParq.textContent = "ITS OPEN AND I'M RUNNING OUT AAAnnnd";
                                fifthParq.textContent = "AHHHH";
                                sixthParq.textContent = "ZOMBIE GRABED MY LEGG!";
                                seventhParq.textContent = "AHHHHOUCH";
                                eighthParq.textContent = "OUCH!";
                                ninthParq.textContent = "IT SCRATCHED ME";
                                tenthParq.textContent = "IM BLEEDING";
                                eleventhParq.textContent = "OH MY GOD, this is it. If you get scratched by a zombie you turn into one of them";
                                twelthParq.textContent = "So I guess this is it.";
                                thirteenthParq.textContent = "I just want to thank you for being there for me, for staying with me and giving me advice, even if it didnt work out in the end--";
                                fourteenthParq.textContent = "But I'm grateful for you. Your a good friend.";
                                fifteenthParq.textContent = "So I guess this is goodbye.";


                                container.appendChild(firstParq);
                                container.appendChild(secondParq);
                                container.appendChild(thirdParq);
                                container.appendChild(fourthParq);
                                container.appendChild(fifthParq);
                                container.appendChild(sixthParq);
                                container.appendChild(seventhParq);
                                container.appendChild(eighthParq);
                                container.appendChild(ninthParq);
                                container.appendChild(tenthParq);
                                container.appendChild(eleventhParq);
                                container.appendChild(twelthParq);
                                container.appendChild(thirteenthParq);
                                container.appendChild(fourteenthParq);
                                container.appendChild(fifteenthParq);


                            });
                        });
                    });
                });
            });

















            //this is inside choice1, and choice4B. This is what happenes if you tell him to go in the cabin
            choice4B.addEventListener("click", function() {

                choice4B.style.backgroundColor = "red";

                var firstParJ = document.createElement("p");
                var secondParJ = document.createElement("p");
                var thirdParJ = document.createElement("p");
                var fourthParJ = document.createElement("p");
                var fifthParJ = document.createElement("p");
                var sixthParJ = document.createElement("p");
                var seventhParJ = document.createElement("p");

                var choice6J = document.createElement("input");
                var choice7J = document.createElement("input");

                firstParJ.className = 'you';
                secondParJ.className = 'you';
                thirdParJ.className = 'you';
                fourthParJ.className = 'you';
                fifthParJ.className = 'you';
                sixthParJ.className = 'you';
                seventhParJ.className = 'you';

                choice6J.className = 'oP';
                choice7J.className = 'oP';

                firstParJ.textContent = "Ok, good idea, I'm a little bit scared...";
                secondParJ.textContent = "But I'm heading to the door... ";
                thirdParJ.textContent = "Ok, I made it to the porch, I'm going to grab this leaf and use it to open the door.";
                fourthParJ.textContent = "Because I REALLY dont want to touch that ketchup juice.";
                fifthParJ.textContent = "Peeking in.....Ok I'm sneeking in, very sneekily... Looks just like a normal cabin, OOOO THE KITCHEN!";
                sixthParJ.textContent = "I cant even explain in words how hungry I am, even though I just did pretty much, whatever I'm already making myself some cerial.";
                seventhParJ.textContent = "*gag* Dude, there is this aweful smell coming from upstairs...";

                choice6J.value = "Go check it out.";
                choice7J.value = "Stay clear of it, you probably dont need to worry about it.";

                choice6J.type = 'button';
                choice7J.type = 'button';

                container.appendChild(firstParJ);
                container.appendChild(secondParJ);
                container.appendChild(thirdParJ);
                container.appendChild(fourthParJ);
                container.appendChild(fifthParJ);
                container.appendChild(sixthParJ);
                container.appendChild(seventhParJ);

                container.appendChild(choice6J);
                container.appendChild(choice7J);

                //this is what happens if you click choice6J, check it out. Dont cheat Mr. Hesby. will is that you, go to the cabin, check out nthe smell
                choice6J.addEventListener("click", function() {
                    choice6J.style.backgroundColor = "red";
                    var firstParK = document.createElement("p");
                    var secondParK = document.createElement("p");
                    var thirdParK = document.createElement("p");
                    var fourthParK = document.createElement("p");
                    var fifthParK = document.createElement("p");
                    var sixthParK = document.createElement("p");
                    var seventhParK = document.createElement("p");
                    var eighthParK = document.createElement("p");
                    var ninthParK = document.createElement("p");
                    var tenthParK = document.createElement("p");
                    var eleventhParK = document.createElement("p");
                    var twelthParK = document.createElement("p");
                    var thirteenthParK = document.createElement("p");
                    var fourteenthParK = document.createElement("p");
                    var fifteenthParK = document.createElement("p");

                    firstParK.className = 'you';
                    secondParK.className = 'you';
                    thirdParK.className = 'you';
                    fourthParK.className = 'you';
                    fifthParK.className = 'you';
                    sixthParK.className = 'you';
                    seventhParK.className = 'you';
                    eighthParK.className = 'you';
                    ninthParK.className = 'you';
                    tenthParK.className = 'you';
                    eleventhParK.className = 'you';
                    twelthParK.className = 'you';
                    thirteenthParK.className = 'you';
                    fourteenthParK.className = 'you';
                    fifteenthParK.className = 'you';

                    firstParK.textContent = "Ok, going up too see what it is...";
                    secondParK.textContent = "I'm a little scared but I'm going to go make sure theres nothing up there...";
                    thirdParK.textContent = "This is like, really creepy. Like the floreboards are creeking, its dark, whatelse do you need??";
                    fourthParK.textContent = "But I'm going to face my fears. Nothing can scare me!";
                    fifthParK.textContent = "OH MY GOD WHAT WAS THAT NOISE?!?!?!";
                    sixthParK.textContent = "I stand corrected";
                    seventhParK.textContent = "I am very easily scared.";
                    eighthParK.textContent = "The smell is getting strongerrRRRRRROOOHHHAAHHHH MY GOD";
                    ninthParK.textContent = "GOD GOD GOD GOD NOOOOO";
                    tenthParK.textContent = "ZOMBIE";
                    eleventhParK.textContent = "GOT M--AHHHHH BITTING ME, DYING TO DEATH!!";
                    twelthParK.textContent = "WHATS EVEN WORSE IS THAT THE LAST THING I SAID DOESNT EVEN MAKE SENCE!!!";
                    thirteenthParK.textContent = "It's too late to do anything, I will turn into a zombie any moment now.";
                    fourteenthParK.textContent = "So I guess this is goodbye, thank you form sticking by me all this time though.";
                    fifteenthParK.textContent = "So goodbye";


                    container.appendChild(firstParK);
                    container.appendChild(secondParK);
                    container.appendChild(thirdParK);
                    container.appendChild(fourthParK);
                    container.appendChild(fifthParK);
                    container.appendChild(sixthParK);
                    container.appendChild(seventhParK);
                    container.appendChild(eighthParK);
                    container.appendChild(ninthParK);
                    container.appendChild(tenthParK);
                    container.appendChild(eleventhParK);
                    container.appendChild(twelthParK);
                    container.appendChild(thirteenthParK);
                    container.appendChild(fourteenthParK);
                    container.appendChild(fifteenthParK);


                });
                //this is what happens if you click 7J on choice1. will is that you?, go in the cabin, stay clear of the smell. 
                choice7J.addEventListener("click", function() {

                    choice7J.style.backgroundColor = "red";

                    var firstParD = document.createElement("p");
                    var secondParD = document.createElement("p");
                    var thirdParD = document.createElement("p");
                    var fourthParD = document.createElement("p");
                    var fifthParD = document.createElement("p");
                    var sixthParD = document.createElement("p");
                    var seventhParD = document.createElement("p");
                    var eighthParD = document.createElement("p");
                    var ninthParD = document.createElement("p");
                    var tenthParD = document.createElement("p");
                    var eleventhParD = document.createElement("p");
                    var twelthParD = document.createElement("p");

                    var choice9D = document.createElement("input");
                    var choice10D = document.createElement("input");

                    firstParD.className = 'you';
                    secondParD.className = 'you';
                    thirdParD.className = 'you';
                    fourthParD.className = 'you';
                    fifthParD.className = 'you';
                    sixthParD.className = 'you';
                    seventhParD.className = 'you';
                    eighthParD.className = 'you';
                    ninthParD.className = 'you';
                    tenthParD.className = 'you';
                    eleventhParD.className = 'you';
                    twelthParD.className = 'you';

                    choice9D.className = 'oP';
                    choice10D.className = 'oP';

                    firstParD.textContent = "Yeah, I'm with you on that one.";
                    secondParD.textContent = "It could be something dangerouse";
                    thirdParD.textContent = "And plus, all I need here is food and water and then I'm out.";
                    fourthParD.textContent = "...Gathering...gathering....";
                    fifthParD.textContent = "Stuffing all I can into my backpack";
                    sixthParD.textContent = "I am so excited to eat all this, there is some really good stuff in these cabinets.";
                    seventhParD.textContent = "like chocolate bars, OOOO is that a twinkie????";
                    eighthParD.textContent = "Wait, what was that?";
                    ninthParD.textContent = "There was some noise coming from upstairs...";
                    tenthParD.textContent = "I know I probably shouldn't go and check it out, I'm going to keep packing up this food...";
                    eleventhParD.textContent = "maybe a bottle of water as well...";
                    twelthParD.textContent = "just quicker now.";


                    choice9D.value = "Yeah, do that";
                    choice10D.value = "Thats smart, but just to be sure make sure theres nothing really quick.";

                    choice9D.type = 'button';
                    choice10D.type = 'button';

                    container.appendChild(firstParD);
                    container.appendChild(secondParD);
                    container.appendChild(thirdParD);
                    container.appendChild(fourthParD);
                    container.appendChild(fifthParD);
                    container.appendChild(sixthParD);
                    container.appendChild(seventhParD);
                    container.appendChild(eighthParD);
                    container.appendChild(ninthParD);
                    container.appendChild(tenthParD);
                    container.appendChild(eleventhParD);
                    container.appendChild(twelthParD);

                    container.appendChild(choice9D);
                    container.appendChild(choice10D);









                    //will, is that you?, where are you, a generator?, go in the cabin, peek your head around the corner.
                    choice10D.addEventListener("click", function() {

                        choice10D.style.backgroundColor = "red";

                        var firstParD = document.createElement("p");
                        var secondParD = document.createElement("p");
                        var thirdParD = document.createElement("p");
                        var fourthParD = document.createElement("p");
                        var fifthParD = document.createElement("p");
                        var sixthParD = document.createElement("p");
                        var seventhParD = document.createElement("p");
                        var eighthParD = document.createElement("p");
                        var ninthParD = document.createElement("p");
                        var tenthParD = document.createElement("p");
                        var eleventhParD = document.createElement("p");
                        var twelthParD = document.createElement("p");


                        var choice9H = document.createElement("input");
                        var choice10H = document.createElement("input");

                        firstParD.className = 'you';
                        secondParD.className = 'you';
                        thirdParD.className = 'you';
                        fourthParD.className = 'you';
                        fifthParD.className = 'you';
                        sixthParD.className = 'you';
                        seventhParD.className = 'you';
                        eighthParD.className = 'you';
                        ninthParD.className = 'you';
                        tenthParD.className = 'you';
                        eleventhParD.className = 'you';
                        twelthParD.className = 'you';

                        choice9H.className = 'oP';
                        choice10H.className = 'oP';

                        firstParD.textContent = "Ok, just going to peek my head around the corner to the staircase--";
                        secondParD.textContent = "OH CRAP! THERES A ZOMBIE CRAWLING DOWN THE STAIRS!!";
                        thirdParD.textContent = "IM OUT MAN, I HAVE WHAT I NEED!";
                        fourthParD.textContent = "IM RUNNING TO THE DOOR!";
                        fifthParD.textContent = "Wait a second...";
                        sixthParD.textContent = "This zombie is hecka slow.";
                        seventhParD.textContent = "I dont need to worry, about this, I'm gonna walk out of here now though. ";
                        eighthParD.textContent = "Walking.";
                        ninthParD.textContent = "I kinda feel bad for it, it looks so desperate and sad, like it really wants to get me but it just cant...";
                        tenthParD.textContent = "Anyway, screw you zombie. Now there are two ways I can go.";
                        eleventhParD.textContent = "I can keep going past the house from where I came to it down this hill...";
                        twelthParD.textContent = "Or I can go up the hill to the right of the mountain wher eit goes uphill so I can see where I'm going.";


                        choice9H.value = "Go straight, downhill is easier.";
                        choice10H.value = "Go uphill. You have a goal to find your family, if your still persuing that goal then thats your bast option.";

                        choice9H.type = 'button';
                        choice10H.type = 'button';

                        container.appendChild(firstParD);
                        container.appendChild(secondParD);
                        container.appendChild(thirdParD);
                        container.appendChild(fourthParD);
                        container.appendChild(fifthParD);
                        container.appendChild(sixthParD);
                        container.appendChild(seventhParD);
                        container.appendChild(eighthParD);
                        container.appendChild(ninthParD);
                        container.appendChild(tenthParD);
                        container.appendChild(eleventhParD);
                        container.appendChild(twelthParD);

                        container.appendChild(choice9H);
                        container.appendChild(choice10H);





                        choice10H.addEventListener("click", function() {

                            choice10H.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");

                            var choice15 = document.createElement("input");
                            var choice16 = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';

                            choice15.className = 'oP';
                            choice16.className = 'oP';


                            firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                            secondParD.textContent = "";
                            thirdParD.textContent = "";
                            fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                            fifthParD.textContent = "--Wait, theres some noise...";
                            sixthParD.textContent = "It sounds like, ";
                            seventhParD.textContent = "Like a helicopter...";
                            eighthParD.textContent = "OH CRAP!";
                            ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                            tenthParD.textContent = "Oh crap they see me";
                            eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                            twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                            thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                            fourteenthParD.textContent = "They are going to kill Me!";
                            fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                            choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                            choice16.value = "RUN!!";

                            choice15.type = 'button';
                            choice16.type = 'button';

                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);

                            container.appendChild(choice15);
                            container.appendChild(choice16);




                            choice16.addEventListener("click", function() {

                                choice16.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choicefourD = document.createElement("input");
                                var choicefiveD = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';




                                firstParD.textContent = "OK";
                                secondParD.textContent = "RUNNING";
                                thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                fourthParD.textContent = "AHH";
                                fifthParD.textContent = "THEY ARE SHOOTING!!";
                                sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                seventhParD.textContent = "OH MY GOD";
                                eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                twelthParD.textContent = "So thank you for that, I mean it.";
                                thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                fourteenthParD.textContent = "goodbye, Barry.";
                                fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);





                            });


                            choice15.addEventListener("click", function() {

                                choice15.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");


                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';




                                firstParD.textContent = "OK, WAVING AT THEM";
                                secondParD.textContent = "Its sort of like I'm stranded or something";
                                thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                fourthParD.textContent = "";
                                fifthParD.textContent = "";
                                sixthParD.textContent = "";
                                seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                eighthParD.textContent = "I have been asleep for most of it";
                                ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                tenthParD.textContent = "But all I know is that I'm safe now.";
                                eleventhParD.textContent = "And part of that is due to you-- most of it";
                                twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                fourteenthParD.textContent = "So thank you.";
                                fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);



                            });


                        });





                    });


                    //will, is that you?, where are you, a generator?, go in the cabin, keep doing what your doing/yeah do that
                    choice9D.addEventListener("click", function() {
                        choice9D.style.backgroundColor = "red";

                        var firstParl = document.createElement("p");
                        var secondParl = document.createElement("p");
                        var thirdParl = document.createElement("p");
                        var fourthParl = document.createElement("p");
                        var fifthParl = document.createElement("p");
                        var sixthParl = document.createElement("p");
                        var seventhParl = document.createElement("p");
                        var eighthParl = document.createElement("p");
                        var ninthParl = document.createElement("p");
                        var tenthParl = document.createElement("p");
                        var eleventhParl = document.createElement("p");
                        var twelthParl = document.createElement("p");


                        var choice9l = document.createElement("input");
                        var choice10l = document.createElement("input");

                        firstParl.className = 'you';
                        secondParl.className = 'you';
                        thirdParl.className = 'you';
                        fourthParl.className = 'you';
                        fifthParl.className = 'you';
                        sixthParl.className = 'you';
                        seventhParl.className = 'you';
                        eighthParl.className = 'you';
                        ninthParl.className = 'you';
                        tenthParl.className = 'you';
                        eleventhParl.className = 'you';
                        twelthParl.className = 'you';

                        choice9l.className = 'oP';
                        choice10l.className = 'oP';

                        firstParl.textContent = "Ok, almost finished....";
                        secondParl.textContent = "Just stuffing in a waterbottle...";
                        thirdParl.textContent = "oh, also by the way I got a blanket from the couch because it's cold outside.";
                        fourthParl.textContent = "because its cold outside and I am NOT sleeping here";
                        fifthParl.textContent = "So i'm not even going to give you that opti--";
                        sixthParl.textContent = "HOLY CRAP!!! CRAP CRAP CRAP CRAP!!!";
                        seventhParl.textContent = "THERES A ZOMBIE";
                        eighthParl.textContent = "Its a crawler, so its slow but Its closer to the door where the staircase is, of corse because it came from upstairs";
                        ninthParl.textContent = "Theres a window on the other side of the room but farther from the zombie than the door is, but it will take me a couple seconds to open it.";
                        tenthParl.textContent = "or should I just run for the door, the zombie is like 10 feet from the door..";
                        eleventhParl.textContent = "..and 15 feet from the window--";
                        twelthParl.textContent = "QUICK! WHICH ONE";


                        choice9l.value = "THE WINDOW!!";
                        choice10l.value = "THE DOOR!!";

                        choice9l.type = 'button';
                        choice10l.type = 'button';

                        container.appendChild(firstParl);
                        container.appendChild(secondParl);
                        container.appendChild(thirdParl);
                        container.appendChild(fourthParl);
                        container.appendChild(fifthParl);
                        container.appendChild(sixthParl);
                        container.appendChild(seventhParl);
                        container.appendChild(eighthParl);
                        container.appendChild(ninthParl);
                        container.appendChild(tenthParl);
                        container.appendChild(eleventhParl);
                        container.appendChild(twelthParl);

                        container.appendChild(choice9l);
                        container.appendChild(choice10l);


                        //will, is that you?, where are you, a generator?, go in the cabin, keep doing what your doing, the window 
                        choice9l.addEventListener("click", function() {

                            choice9l.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");

                            var choicefourD = document.createElement("input");
                            var choicefiveD = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';

                            choicefourD.className = 'oP';
                            choicefiveD.className = 'oP';


                            firstParD.textContent = "OK, HEADING TO THE WINDOW!";
                            secondParD.textContent = "Fiddling with the STUPID LATCH LEVER WINDOW THING!!";
                            thirdParD.textContent = "COME ON!!!!";
                            fourthParD.textContent = "OK, its FRIKIN FINALLY OPEN";
                            fifthParD.textContent = "OMG THE ZOMBIE IS RIGHT BEHIND ME";
                            sixthParD.textContent = "DIVING THROUGH THE WINDOW";
                            seventhParD.textContent = "ANNNNnnnnnd";
                            eighthParD.textContent = "OUCH!";
                            ninthParD.textContent = "Landed on my face but I have my backpack and I am OUT OF HERE.";
                            tenthParD.textContent = "Running...";
                            eleventhParD.textContent = "Ok, I'm a safe distance by now.";
                            twelthParD.textContent = "well... Now what?";
                            thirteenthParD.textContent = "Which way should I go, I could keep going past the house from where I came from, where it starts to go downhil-- ";
                            fourteenthParD.textContent = "Or I can go to the right where it goes uphill up this mountain, maybe I would be able to see where I am accually going. ";
                            fifteenthParD.textContent = "What do you think?";

                            choicefourD.value = "Go straight, downhill is easier and wherever your going you would be able to get there quicker.";
                            choicefiveD.value = "Go to the right, you are trying to find your family. You will know better where to go to find them.";

                            choicefourD.type = 'button';
                            choicefiveD.type = 'button';

                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);

                            container.appendChild(choicefourD);
                            container.appendChild(choicefiveD);











                            choicefiveD.addEventListener("click", function() {

                                choicefiveD.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choice15 = document.createElement("input");
                                var choice16 = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';

                                choice15.className = 'oP';
                                choice16.className = 'oP';


                                firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                secondParD.textContent = "";
                                thirdParD.textContent = "";
                                fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                fifthParD.textContent = "--Wait, theres some noise...";
                                sixthParD.textContent = "It sounds like, ";
                                seventhParD.textContent = "Like a helicopter...";
                                eighthParD.textContent = "OH CRAP!";
                                ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                tenthParD.textContent = "Oh crap they see me";
                                eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                fourteenthParD.textContent = "They are going to kill Me!";
                                fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                choice16.value = "RUN!!";

                                choice15.type = 'button';
                                choice16.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);

                                container.appendChild(choice15);
                                container.appendChild(choice16);




                                choice16.addEventListener("click", function() {

                                    choice16.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");

                                    var choicefourD = document.createElement("input");
                                    var choicefiveD = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK";
                                    secondParD.textContent = "RUNNING";
                                    thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                    fourthParD.textContent = "AHH";
                                    fifthParD.textContent = "THEY ARE SHOOTING!!";
                                    sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                    seventhParD.textContent = "OH MY GOD";
                                    eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                    ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                    tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                    eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                    twelthParD.textContent = "So thank you for that, I mean it.";
                                    thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                    fourteenthParD.textContent = "goodbye, Barry.";
                                    fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);





                                });


                                choice15.addEventListener("click", function() {

                                    choice15.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");


                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK, WAVING AT THEM";
                                    secondParD.textContent = "Its sort of like I'm stranded or something";
                                    thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                    fourthParD.textContent = "";
                                    fifthParD.textContent = "";
                                    sixthParD.textContent = "";
                                    seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                    eighthParD.textContent = "I have been asleep for most of it";
                                    ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                    tenthParD.textContent = "But all I know is that I'm safe now.";
                                    eleventhParD.textContent = "And part of that is due to you-- most of it";
                                    twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                    thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                    fourteenthParD.textContent = "So thank you.";
                                    fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);



                                });


                            });










                        });
                        //will, is that you?, where are you, a generator?, go in the cabin, peek your head around the corner. the door
                        choice10l.addEventListener("click", function() {

                            choice10l.style.backgroundColor = "red";

                            var firstParq = document.createElement("p");
                            var secondParq = document.createElement("p");
                            var thirdParq = document.createElement("p");
                            var fourthParq = document.createElement("p");
                            var fifthParq = document.createElement("p");
                            var sixthParq = document.createElement("p");
                            var seventhParq = document.createElement("p");
                            var eighthParq = document.createElement("p");
                            var ninthParq = document.createElement("p");
                            var tenthParq = document.createElement("p");
                            var eleventhParq = document.createElement("p");
                            var twelthParq = document.createElement("p");
                            var thirteenthParq = document.createElement("p");
                            var fourteenthParq = document.createElement("p");
                            var fifteenthParq = document.createElement("p");

                            var choicefourq = document.createElement("input");
                            var choicefiveq = document.createElement("input");

                            firstParq.className = 'you';
                            secondParq.className = 'you';
                            thirdParq.className = 'you';
                            fourthParq.className = 'you';
                            fifthParq.className = 'you';
                            sixthParq.className = 'you';
                            seventhParq.className = 'you';
                            eighthParq.className = 'you';
                            ninthParq.className = 'you';
                            tenthParq.className = 'you';
                            eleventhParq.className = 'you';
                            twelthParq.className = 'you';
                            thirteenthParq.className = 'you';
                            fourteenthParq.className = 'you';
                            fifteenthParq.className = 'you';

                            choicefourq.className = 'oP';
                            choicefiveq.className = 'oP';


                            firstParq.textContent = "OK, HEADING TO THE DOOR!";
                            secondParq.textContent = "Fiddling with the STUPID HANDLE THING!!";
                            thirdParq.textContent = "CRAP!";
                            fourthParq.textContent = "ITS OPEN AND I'M RUNNING OUT AAAnnnd";
                            fifthParq.textContent = "AHHHH";
                            sixthParq.textContent = "ZOMBIE GRABED MY LEGG!";
                            seventhParq.textContent = "AHHHHOUCH";
                            eighthParq.textContent = "OUCH!";
                            ninthParq.textContent = "IT SCRATCHED ME";
                            tenthParq.textContent = "IM BLEEDING";
                            eleventhParq.textContent = "OH MY GOD, this is it. If you get scratched by a zombie you turn into one of them";
                            twelthParq.textContent = "So I guess this is it.";
                            thirteenthParq.textContent = "I just want to thank you for being there for me, for staying with me and giving me advice, even if it didnt work out in the end--";
                            fourteenthParq.textContent = "But I'm grateful for you. Your a good friend.";
                            fifteenthParq.textContent = "So I guess this is goodbye.";


                            container.appendChild(firstParq);
                            container.appendChild(secondParq);
                            container.appendChild(thirdParq);
                            container.appendChild(fourthParq);
                            container.appendChild(fifthParq);
                            container.appendChild(sixthParq);
                            container.appendChild(seventhParq);
                            container.appendChild(eighthParq);
                            container.appendChild(ninthParq);
                            container.appendChild(tenthParq);
                            container.appendChild(eleventhParq);
                            container.appendChild(twelthParq);
                            container.appendChild(thirteenthParq);
                            container.appendChild(fourteenthParq);
                            container.appendChild(fifteenthParq);


                        });

                    });





                    //will, is that you?, where are you, a generator? dont go in the cabin
                    choice5B.addEventListener("click", function() {
                        choice5B.style.backgroundColor = "red";
                        var firstParI = document.createElement("p");
                        var secondParI = document.createElement("p");
                        var thirdParI = document.createElement("p");

                        var choice6I = document.createElement("input");
                        var choice7I = document.createElement("input");


                        firstParI.className = 'you';
                        secondParI.className = 'you';
                        thirdParI.className = 'you';

                        choice6I.className = 'oP';
                        choice7I.cassName = 'oP';


                        firstParI.textContent = "Ok, thats probably smart considering there might be a zombie or something in there";
                        secondParI.textContent = "Even though I REALLY want food and water right now....";
                        thirdParI.textContent = "...What if I just went in REEEAALLY quick, got some food and water and left in a flash?";

                        choice6I.value = "No, you really shoudln't, what if there was a zombie in there?";
                        choice7I.value = "OK fine, but go REALLY quick, get what you need, and leave imediatly";

                        choice6I.type = 'button';
                        choice7I.type = 'button';

                        container.appendChild(firstParI);
                        container.appendChild(secondParI);
                        container.appendChild(thirdParI);

                        container.appendChild(choice6I);
                        container.appendChild(choice7I);


                        //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin.
                        choice7I.addEventListener("click", function() {

                            choice7I.style.backgroundColor = "red";

                            var firstParJ = document.createElement("p");
                            var secondParJ = document.createElement("p");
                            var thirdParJ = document.createElement("p");
                            var fourthParJ = document.createElement("p");
                            var fifthParJ = document.createElement("p");
                            var sixthParJ = document.createElement("p");
                            var seventhParJ = document.createElement("p");

                            var choice6J = document.createElement("input");
                            var choice7J = document.createElement("input");

                            firstParJ.className = 'you';
                            secondParJ.className = 'you';
                            thirdParJ.className = 'you';
                            fourthParJ.className = 'you';
                            fifthParJ.className = 'you';
                            sixthParJ.className = 'you';
                            seventhParJ.className = 'you';

                            choice6J.className = 'oP';
                            choice7J.className = 'oP';

                            firstParJ.textContent = "Ok, good idea, I'm a little bit scared...";
                            secondParJ.textContent = "But I'm heading to the door... ";
                            thirdParJ.textContent = "Ok, I made it to the porch, I'm going to grab this leaf and use it to open the door.";
                            fourthParJ.textContent = "Because I REALLY dont want to touch that ketchup juice.";
                            fifthParJ.textContent = "Peeking in.....Ok I'm sneeking in, very sneekily... Looks just like a normal cabin, OOOO THE KITCHEN!";
                            sixthParJ.textContent = "I cant even explain in words how hungry I am, even though I just did pretty much, whatever I'm already making myself some cerial.";
                            seventhParJ.textContent = "*gag* Dude, there is this aweful smell coming from upstairs...";

                            choice6J.value = "Go check it out.";
                            choice7J.value = "Stay clear of it, you probably dont need to worry about it.";

                            choice6J.type = 'button';
                            choice7J.type = 'button';

                            container.appendChild(firstParJ);
                            container.appendChild(secondParJ);
                            container.appendChild(thirdParJ);
                            container.appendChild(fourthParJ);
                            container.appendChild(fifthParJ);
                            container.appendChild(sixthParJ);
                            container.appendChild(seventhParJ);

                            container.appendChild(choice6J);
                            container.appendChild(choice7J);




                            //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin. go chekc out the smell.
                            choice6J.addEventListener("click", function() {
                                choice6J.style.backgroundColor = "red";
                                var firstParK = document.createElement("p");
                                var secondParK = document.createElement("p");
                                var thirdParK = document.createElement("p");
                                var fourthParK = document.createElement("p");
                                var fifthParK = document.createElement("p");
                                var sixthParK = document.createElement("p");
                                var seventhParK = document.createElement("p");
                                var eighthParK = document.createElement("p");
                                var ninthParK = document.createElement("p");
                                var tenthParK = document.createElement("p");
                                var eleventhParK = document.createElement("p");
                                var twelthParK = document.createElement("p");
                                var thirteenthParK = document.createElement("p");
                                var fourteenthParK = document.createElement("p");
                                var fifteenthParK = document.createElement("p");

                                firstParK.className = 'you';
                                secondParK.className = 'you';
                                thirdParK.className = 'you';
                                fourthParK.className = 'you';
                                fifthParK.className = 'you';
                                sixthParK.className = 'you';
                                seventhParK.className = 'you';
                                eighthParK.className = 'you';
                                ninthParK.className = 'you';
                                tenthParK.className = 'you';
                                eleventhParK.className = 'you';
                                twelthParK.className = 'you';
                                thirteenthParK.className = 'you';
                                fourteenthParK.className = 'you';
                                fifteenthParK.className = 'you';

                                firstParK.textContent = "Ok, going up too see what it is...";
                                secondParK.textContent = "I'm a little scared but I'm going to go make sure theres nothing up there...";
                                thirdParK.textContent = "This is like, really creepy. Like the floreboards are creeking, its dark, whatelse do you need??";
                                fourthParK.textContent = "But I'm going to face my fears. Nothing can scare me!";
                                fifthParK.textContent = "OH MY GOD WHAT WAS THAT NOISE?!?!?!";
                                sixthParK.textContent = "I stand corrected";
                                seventhParK.textContent = "I am very easily scared.";
                                eighthParK.textContent = "The smell is getting strongerrRRRRRROOOHHHAAHHHH MY GOD";
                                ninthParK.textContent = "GOD GOD GOD GOD NOOOOO";
                                tenthParK.textContent = "ZOMBIE";
                                eleventhParK.textContent = "GOT M--AHHHHH BITTING ME, DYING TO DEATH!!";
                                twelthParK.textContent = "WHATS EVEN WORSE IS THAT THE LAST THING I SAID DOESNT EVEN MAKE SENCE!!!";
                                thirteenthParK.textContent = "It's too late to do anything, I will turn into a zombie any moment now.";
                                fourteenthParK.textContent = "So I guess this is goodbye, thank you form sticking by me all this time though.";
                                fifteenthParK.textContent = "So goodbye";


                                container.appendChild(firstParK);
                                container.appendChild(secondParK);
                                container.appendChild(thirdParK);
                                container.appendChild(fourthParK);
                                container.appendChild(fifthParK);
                                container.appendChild(sixthParK);
                                container.appendChild(seventhParK);
                                container.appendChild(eighthParK);
                                container.appendChild(ninthParK);
                                container.appendChild(tenthParK);
                                container.appendChild(eleventhParK);
                                container.appendChild(twelthParK);
                                container.appendChild(thirteenthParK);
                                container.appendChild(fourteenthParK);
                                container.appendChild(fifteenthParK);


                            });
                            //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin. dont check out the smell.
                            choice7J.addEventListener("click", function() {

                                choice7J.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");

                                var choice9D = document.createElement("input");
                                var choice10D = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';

                                choice9D.className = 'oP';
                                choice10D.className = 'oP';

                                firstParD.textContent = "Yeah, I'm with you on that one.";
                                secondParD.textContent = "It could be something dangerouse";
                                thirdParD.textContent = "And plus, all I need here is food and water and then I'm out.";
                                fourthParD.textContent = "...Gathering...gathering....";
                                fifthParD.textContent = "Stuffing all I can into my backpack";
                                sixthParD.textContent = "I am so excited to eat all this, there is some really good stuff in these cabinets.";
                                seventhParD.textContent = "like chocolate bars, OOOO is that a twinkie????";
                                eighthParD.textContent = "Wait, what was that?";
                                ninthParD.textContent = "There was some noise coming from upstairs...";
                                tenthParD.textContent = "I know I probably shouldn't go and check it out, I'm going to keep packing up this food...";
                                eleventhParD.textContent = "maybe a bottle of water as well...";
                                twelthParD.textContent = "just quicker now.";


                                choice9D.value = "Yeah, do that";
                                choice10D.value = "Thats smart, but just to be sure make sure theres nothing really quick.";

                                choice9D.type = 'button';
                                choice10D.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);

                                container.appendChild(choice9D);
                                container.appendChild(choice10D);









                                //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin, dont check out the smell, 
                                choice10D.addEventListener("click", function() {

                                    choice10D.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");


                                    var choice9H = document.createElement("input");
                                    var choice10H = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';

                                    choice9H.className = 'oP';
                                    choice10H.className = 'oP';

                                    firstParD.textContent = "Ok, just going to peek my head around the corner to the staircase--";
                                    secondParD.textContent = "OH CRAP! THERES A ZOMBIE CRAWLING DOWN THE STAIRS!!";
                                    thirdParD.textContent = "IM OUT MAN, I HAVE WHAT I NEED!";
                                    fourthParD.textContent = "IM RUNNING TO THE DOOR!";
                                    fifthParD.textContent = "Wait a second...";
                                    sixthParD.textContent = "This zombie is hecka slow.";
                                    seventhParD.textContent = "I dont need to worry, about this, I'm gonna walk out of here now though. ";
                                    eighthParD.textContent = "Walking.";
                                    ninthParD.textContent = "I kinda feel bad for it, it looks so desperate and sad, like it really wants to get me but it just cant...";
                                    tenthParD.textContent = "Anyway, screw you zombie. Now there are two ways I can go.";
                                    eleventhParD.textContent = "I can keep going past the house from where I came to it down this hill...";
                                    twelthParD.textContent = "Or I can go up the hill to the right of the mountain wher eit goes uphill so I can see where I'm going.";


                                    choice9H.value = "Go straight, downhill is easier.";
                                    choice10H.value = "Go uphill. You have a goal to find your family, if your still persuing that goal then thats your best option.";

                                    choice9H.type = 'button';
                                    choice10H.type = 'button';

                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);

                                    container.appendChild(choice9H);
                                    container.appendChild(choice10H);














                                    choice10H.addEventListener("click", function() {

                                        choice10H.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");

                                        var choice15 = document.createElement("input");
                                        var choice16 = document.createElement("input");

                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';

                                        choice15.className = 'oP';
                                        choice16.className = 'oP';


                                        firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                        secondParD.textContent = "";
                                        thirdParD.textContent = "";
                                        fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                        fifthParD.textContent = "--Wait, theres some noise...";
                                        sixthParD.textContent = "It sounds like, ";
                                        seventhParD.textContent = "Like a helicopter...";
                                        eighthParD.textContent = "OH CRAP!";
                                        ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                        tenthParD.textContent = "Oh crap they see me";
                                        eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                        twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                        thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                        fourteenthParD.textContent = "They are going to kill Me!";
                                        fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                        choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                        choice16.value = "RUN!!";

                                        choice15.type = 'button';
                                        choice16.type = 'button';

                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);

                                        container.appendChild(choice15);
                                        container.appendChild(choice16);




                                        choice16.addEventListener("click", function() {

                                            choice16.style.backgroundColor = "red";

                                            var firstParD = document.createElement("p");
                                            var secondParD = document.createElement("p");
                                            var thirdParD = document.createElement("p");
                                            var fourthParD = document.createElement("p");
                                            var fifthParD = document.createElement("p");
                                            var sixthParD = document.createElement("p");
                                            var seventhParD = document.createElement("p");
                                            var eighthParD = document.createElement("p");
                                            var ninthParD = document.createElement("p");
                                            var tenthParD = document.createElement("p");
                                            var eleventhParD = document.createElement("p");
                                            var twelthParD = document.createElement("p");
                                            var thirteenthParD = document.createElement("p");
                                            var fourteenthParD = document.createElement("p");
                                            var fifteenthParD = document.createElement("p");

                                            var choicefourD = document.createElement("input");
                                            var choicefiveD = document.createElement("input");

                                            firstParD.className = 'you';
                                            secondParD.className = 'you';
                                            thirdParD.className = 'you';
                                            fourthParD.className = 'you';
                                            fifthParD.className = 'you';
                                            sixthParD.className = 'you';
                                            seventhParD.className = 'you';
                                            eighthParD.className = 'you';
                                            ninthParD.className = 'you';
                                            tenthParD.className = 'you';
                                            eleventhParD.className = 'you';
                                            twelthParD.className = 'you';
                                            thirteenthParD.className = 'you';
                                            fourteenthParD.className = 'you';
                                            fifteenthParD.className = 'you';




                                            firstParD.textContent = "OK";
                                            secondParD.textContent = "RUNNING";
                                            thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                            fourthParD.textContent = "AHH";
                                            fifthParD.textContent = "THEY ARE SHOOTING!!";
                                            sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                            seventhParD.textContent = "OH MY GOD";
                                            eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                            ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                            tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                            eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                            twelthParD.textContent = "So thank you for that, I mean it.";
                                            thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                            fourteenthParD.textContent = "goodbye, Barry.";
                                            fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                            container.appendChild(firstParD);
                                            container.appendChild(secondParD);
                                            container.appendChild(thirdParD);
                                            container.appendChild(fourthParD);
                                            container.appendChild(fifthParD);
                                            container.appendChild(sixthParD);
                                            container.appendChild(seventhParD);
                                            container.appendChild(eighthParD);
                                            container.appendChild(ninthParD);
                                            container.appendChild(tenthParD);
                                            container.appendChild(eleventhParD);
                                            container.appendChild(twelthParD);
                                            container.appendChild(thirteenthParD);
                                            container.appendChild(fourteenthParD);
                                            container.appendChild(fifteenthParD);





                                        });


                                        choice15.addEventListener("click", function() {

                                            choice15.style.backgroundColor = "red";

                                            var firstParD = document.createElement("p");
                                            var secondParD = document.createElement("p");
                                            var thirdParD = document.createElement("p");
                                            var fourthParD = document.createElement("p");
                                            var fifthParD = document.createElement("p");
                                            var sixthParD = document.createElement("p");
                                            var seventhParD = document.createElement("p");
                                            var eighthParD = document.createElement("p");
                                            var ninthParD = document.createElement("p");
                                            var tenthParD = document.createElement("p");
                                            var eleventhParD = document.createElement("p");
                                            var twelthParD = document.createElement("p");
                                            var thirteenthParD = document.createElement("p");
                                            var fourteenthParD = document.createElement("p");
                                            var fifteenthParD = document.createElement("p");


                                            firstParD.className = 'you';
                                            secondParD.className = 'you';
                                            thirdParD.className = 'you';
                                            fourthParD.className = 'you';
                                            fifthParD.className = 'you';
                                            sixthParD.className = 'you';
                                            seventhParD.className = 'you';
                                            eighthParD.className = 'you';
                                            ninthParD.className = 'you';
                                            tenthParD.className = 'you';
                                            eleventhParD.className = 'you';
                                            twelthParD.className = 'you';
                                            thirteenthParD.className = 'you';
                                            fourteenthParD.className = 'you';
                                            fifteenthParD.className = 'you';




                                            firstParD.textContent = "OK, WAVING AT THEM";
                                            secondParD.textContent = "Its sort of like I'm stranded or something";
                                            thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                            fourthParD.textContent = "";
                                            fifthParD.textContent = "";
                                            sixthParD.textContent = "";
                                            seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                            eighthParD.textContent = "I have been asleep for most of it";
                                            ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                            tenthParD.textContent = "But all I know is that I'm safe now.";
                                            eleventhParD.textContent = "And part of that is due to you-- most of it";
                                            twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                            thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                            fourteenthParD.textContent = "So thank you.";
                                            fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                            container.appendChild(firstParD);
                                            container.appendChild(secondParD);
                                            container.appendChild(thirdParD);
                                            container.appendChild(fourthParD);
                                            container.appendChild(fifthParD);
                                            container.appendChild(sixthParD);
                                            container.appendChild(seventhParD);
                                            container.appendChild(eighthParD);
                                            container.appendChild(ninthParD);
                                            container.appendChild(tenthParD);
                                            container.appendChild(eleventhParD);
                                            container.appendChild(twelthParD);
                                            container.appendChild(thirteenthParD);
                                            container.appendChild(fourteenthParD);
                                            container.appendChild(fifteenthParD);



                                        });


                                    });


                                });


                                //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin. dont check out the smell, continue to do what your doing.
                                choice9D.addEventListener("click", function() {
                                    choice9D.style.backgroundColor = "red";

                                    var firstParl = document.createElement("p");
                                    var secondParl = document.createElement("p");
                                    var thirdParl = document.createElement("p");
                                    var fourthParl = document.createElement("p");
                                    var fifthParl = document.createElement("p");
                                    var sixthParl = document.createElement("p");
                                    var seventhParl = document.createElement("p");
                                    var eighthParl = document.createElement("p");
                                    var ninthParl = document.createElement("p");
                                    var tenthParl = document.createElement("p");
                                    var eleventhParl = document.createElement("p");
                                    var twelthParl = document.createElement("p");


                                    var choice9l = document.createElement("input");
                                    var choice10l = document.createElement("input");

                                    firstParl.className = 'you';
                                    secondParl.className = 'you';
                                    thirdParl.className = 'you';
                                    fourthParl.className = 'you';
                                    fifthParl.className = 'you';
                                    sixthParl.className = 'you';
                                    seventhParl.className = 'you';
                                    eighthParl.className = 'you';
                                    ninthParl.className = 'you';
                                    tenthParl.className = 'you';
                                    eleventhParl.className = 'you';
                                    twelthParl.className = 'you';

                                    choice9l.className = 'oP';
                                    choice10l.className = 'oP';

                                    firstParl.textContent = "Ok, almost finished....";
                                    secondParl.textContent = "Just stuffing in a waterbottle...";
                                    thirdParl.textContent = "oh, also by the way I got a blanket from the couch because it's cold outside.";
                                    fourthParl.textContent = "because its cold outside and I am NOT sleeping here";
                                    fifthParl.textContent = "So i'm not even going to give you that opti--";
                                    sixthParl.textContent = "HOLY CRAP!!! CRAP CRAP CRAP CRAP!!!";
                                    seventhParl.textContent = "THERES A ZOMBIE";
                                    eighthParl.textContent = "Its a crawler, so its slow but Its closer to the door where the staircase is, of corse because it came from upstairs";
                                    ninthParl.textContent = "Theres a window on the other side of the room but farther from the zombie than the door is, but it will take me a couple seconds to open it.";
                                    tenthParl.textContent = "or should I just run for the door, the zombie is like 10 feet from the door..";
                                    eleventhParl.textContent = "..and 15 feet from the window--";
                                    twelthParl.textContent = "QUICK! WHICH ONE";


                                    choice9l.value = "THE WINDOW!!";
                                    choice10l.value = "THE DOOR!!";

                                    choice9l.type = 'button';
                                    choice10l.type = 'button';

                                    container.appendChild(firstParl);
                                    container.appendChild(secondParl);
                                    container.appendChild(thirdParl);
                                    container.appendChild(fourthParl);
                                    container.appendChild(fifthParl);
                                    container.appendChild(sixthParl);
                                    container.appendChild(seventhParl);
                                    container.appendChild(eighthParl);
                                    container.appendChild(ninthParl);
                                    container.appendChild(tenthParl);
                                    container.appendChild(eleventhParl);
                                    container.appendChild(twelthParl);

                                    container.appendChild(choice9l);
                                    container.appendChild(choice10l);



                                    choice9l.addEventListener("click", function() {

                                        choice9l.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");

                                        var choicefourD = document.createElement("input");
                                        var choicefiveD = document.createElement("input");

                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';

                                        choicefourD.className = 'oP';
                                        choicefiveD.className = 'oP';


                                        firstParD.textContent = "OK, HEADING TO THE WINDOW!";
                                        secondParD.textContent = "Fiddling with the STUPID LATCH LEVER WINDOW THING!!";
                                        thirdParD.textContent = "COME ON!!!!";
                                        fourthParD.textContent = "OK, its FRIKIN FINALLY OPEN";
                                        fifthParD.textContent = "OMG THE ZOMBIE IS RIGHT BEHIND ME";
                                        sixthParD.textContent = "DIVING THROUGH THE WINDOW";
                                        seventhParD.textContent = "ANNNNnnnnnd";
                                        eighthParD.textContent = "OUCH!";
                                        ninthParD.textContent = "Landed on my face but I have my backpack and I am OUT OF HERE.";
                                        tenthParD.textContent = "Running...";
                                        eleventhParD.textContent = "Ok, I'm a safe distance by now.";
                                        twelthParD.textContent = "well... Now what?";
                                        thirteenthParD.textContent = "Which way should I go, I could keep going past the house from where I came from, where it starts to go downhil-- ";
                                        fourteenthParD.textContent = "Or I can go to the right where it goes uphill up this mountain, maybe I would be able to see where I am accually going. ";
                                        fifteenthParD.textContent = "What do you think?";

                                        choicefourD.value = "Go straight, downhill is easier and wherever your going you would be able to get there quicker.";
                                        choicefiveD.value = "Go to the right, you are trying to find your family. You will know better where to go to find them.";

                                        choicefourD.type = 'button';
                                        choicefiveD.type = 'button';

                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);

                                        container.appendChild(choicefourD);
                                        container.appendChild(choicefiveD);

                                        /* CONTINUE THIS CHOICE LATER
                                         *CONTINUE THIS CHOICE LATER
                                         *CONTINUE THIS CHOICE LATER
                                         */













                                        choicefiveD.addEventListener("click", function() {

                                            choicefiveD.style.backgroundColor = "red";

                                            var firstParD = document.createElement("p");
                                            var secondParD = document.createElement("p");
                                            var thirdParD = document.createElement("p");
                                            var fourthParD = document.createElement("p");
                                            var fifthParD = document.createElement("p");
                                            var sixthParD = document.createElement("p");
                                            var seventhParD = document.createElement("p");
                                            var eighthParD = document.createElement("p");
                                            var ninthParD = document.createElement("p");
                                            var tenthParD = document.createElement("p");
                                            var eleventhParD = document.createElement("p");
                                            var twelthParD = document.createElement("p");
                                            var thirteenthParD = document.createElement("p");
                                            var fourteenthParD = document.createElement("p");
                                            var fifteenthParD = document.createElement("p");

                                            var choice15 = document.createElement("input");
                                            var choice16 = document.createElement("input");

                                            firstParD.className = 'you';
                                            secondParD.className = 'you';
                                            thirdParD.className = 'you';
                                            fourthParD.className = 'you';
                                            fifthParD.className = 'you';
                                            sixthParD.className = 'you';
                                            seventhParD.className = 'you';
                                            eighthParD.className = 'you';
                                            ninthParD.className = 'you';
                                            tenthParD.className = 'you';
                                            eleventhParD.className = 'you';
                                            twelthParD.className = 'you';
                                            thirteenthParD.className = 'you';
                                            fourteenthParD.className = 'you';
                                            fifteenthParD.className = 'you';

                                            choice15.className = 'oP';
                                            choice16.className = 'oP';


                                            firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                            secondParD.textContent = "";
                                            thirdParD.textContent = "";
                                            fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                            fifthParD.textContent = "--Wait, theres some noise...";
                                            sixthParD.textContent = "It sounds like, ";
                                            seventhParD.textContent = "Like a helicopter...";
                                            eighthParD.textContent = "OH CRAP!";
                                            ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                            tenthParD.textContent = "Oh crap they see me";
                                            eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                            twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                            thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                            fourteenthParD.textContent = "They are going to kill Me!";
                                            fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                            choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                            choice16.value = "RUN!!";

                                            choice15.type = 'button';
                                            choice16.type = 'button';

                                            container.appendChild(firstParD);
                                            container.appendChild(secondParD);
                                            container.appendChild(thirdParD);
                                            container.appendChild(fourthParD);
                                            container.appendChild(fifthParD);
                                            container.appendChild(sixthParD);
                                            container.appendChild(seventhParD);
                                            container.appendChild(eighthParD);
                                            container.appendChild(ninthParD);
                                            container.appendChild(tenthParD);
                                            container.appendChild(eleventhParD);
                                            container.appendChild(twelthParD);
                                            container.appendChild(thirteenthParD);
                                            container.appendChild(fourteenthParD);
                                            container.appendChild(fifteenthParD);

                                            container.appendChild(choice15);
                                            container.appendChild(choice16);




                                            choice16.addEventListener("click", function() {

                                                choice16.style.backgroundColor = "red";

                                                var firstParD = document.createElement("p");
                                                var secondParD = document.createElement("p");
                                                var thirdParD = document.createElement("p");
                                                var fourthParD = document.createElement("p");
                                                var fifthParD = document.createElement("p");
                                                var sixthParD = document.createElement("p");
                                                var seventhParD = document.createElement("p");
                                                var eighthParD = document.createElement("p");
                                                var ninthParD = document.createElement("p");
                                                var tenthParD = document.createElement("p");
                                                var eleventhParD = document.createElement("p");
                                                var twelthParD = document.createElement("p");
                                                var thirteenthParD = document.createElement("p");
                                                var fourteenthParD = document.createElement("p");
                                                var fifteenthParD = document.createElement("p");

                                                var choicefourD = document.createElement("input");
                                                var choicefiveD = document.createElement("input");

                                                firstParD.className = 'you';
                                                secondParD.className = 'you';
                                                thirdParD.className = 'you';
                                                fourthParD.className = 'you';
                                                fifthParD.className = 'you';
                                                sixthParD.className = 'you';
                                                seventhParD.className = 'you';
                                                eighthParD.className = 'you';
                                                ninthParD.className = 'you';
                                                tenthParD.className = 'you';
                                                eleventhParD.className = 'you';
                                                twelthParD.className = 'you';
                                                thirteenthParD.className = 'you';
                                                fourteenthParD.className = 'you';
                                                fifteenthParD.className = 'you';




                                                firstParD.textContent = "OK";
                                                secondParD.textContent = "RUNNING";
                                                thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                                fourthParD.textContent = "AHH";
                                                fifthParD.textContent = "THEY ARE SHOOTING!!";
                                                sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                                seventhParD.textContent = "OH MY GOD";
                                                eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                                ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                                tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                                eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                                twelthParD.textContent = "So thank you for that, I mean it.";
                                                thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                                fourteenthParD.textContent = "goodbye, Barry.";
                                                fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                                container.appendChild(firstParD);
                                                container.appendChild(secondParD);
                                                container.appendChild(thirdParD);
                                                container.appendChild(fourthParD);
                                                container.appendChild(fifthParD);
                                                container.appendChild(sixthParD);
                                                container.appendChild(seventhParD);
                                                container.appendChild(eighthParD);
                                                container.appendChild(ninthParD);
                                                container.appendChild(tenthParD);
                                                container.appendChild(eleventhParD);
                                                container.appendChild(twelthParD);
                                                container.appendChild(thirteenthParD);
                                                container.appendChild(fourteenthParD);
                                                container.appendChild(fifteenthParD);





                                            });


                                            choice15.addEventListener("click", function() {

                                                choice15.style.backgroundColor = "red";

                                                var firstParD = document.createElement("p");
                                                var secondParD = document.createElement("p");
                                                var thirdParD = document.createElement("p");
                                                var fourthParD = document.createElement("p");
                                                var fifthParD = document.createElement("p");
                                                var sixthParD = document.createElement("p");
                                                var seventhParD = document.createElement("p");
                                                var eighthParD = document.createElement("p");
                                                var ninthParD = document.createElement("p");
                                                var tenthParD = document.createElement("p");
                                                var eleventhParD = document.createElement("p");
                                                var twelthParD = document.createElement("p");
                                                var thirteenthParD = document.createElement("p");
                                                var fourteenthParD = document.createElement("p");
                                                var fifteenthParD = document.createElement("p");


                                                firstParD.className = 'you';
                                                secondParD.className = 'you';
                                                thirdParD.className = 'you';
                                                fourthParD.className = 'you';
                                                fifthParD.className = 'you';
                                                sixthParD.className = 'you';
                                                seventhParD.className = 'you';
                                                eighthParD.className = 'you';
                                                ninthParD.className = 'you';
                                                tenthParD.className = 'you';
                                                eleventhParD.className = 'you';
                                                twelthParD.className = 'you';
                                                thirteenthParD.className = 'you';
                                                fourteenthParD.className = 'you';
                                                fifteenthParD.className = 'you';




                                                firstParD.textContent = "OK, WAVING AT THEM";
                                                secondParD.textContent = "Its sort of like I'm stranded or something";
                                                thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                                fourthParD.textContent = "";
                                                fifthParD.textContent = "";
                                                sixthParD.textContent = "";
                                                seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                                eighthParD.textContent = "I have been asleep for most of it";
                                                ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                                tenthParD.textContent = "But all I know is that I'm safe now.";
                                                eleventhParD.textContent = "And part of that is due to you-- most of it";
                                                twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                                thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                                fourteenthParD.textContent = "So thank you.";
                                                fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                                container.appendChild(firstParD);
                                                container.appendChild(secondParD);
                                                container.appendChild(thirdParD);
                                                container.appendChild(fourthParD);
                                                container.appendChild(fifthParD);
                                                container.appendChild(sixthParD);
                                                container.appendChild(seventhParD);
                                                container.appendChild(eighthParD);
                                                container.appendChild(ninthParD);
                                                container.appendChild(tenthParD);
                                                container.appendChild(eleventhParD);
                                                container.appendChild(twelthParD);
                                                container.appendChild(thirteenthParD);
                                                container.appendChild(fourteenthParD);
                                                container.appendChild(fifteenthParD);



                                            });


                                        });





                                    });



                                    choice10l.addEventListener("click", function() {

                                        choice10l.style.backgroundColor = "red";

                                        var firstParq = document.createElement("p");
                                        var secondParq = document.createElement("p");
                                        var thirdParq = document.createElement("p");
                                        var fourthParq = document.createElement("p");
                                        var fifthParq = document.createElement("p");
                                        var sixthParq = document.createElement("p");
                                        var seventhParq = document.createElement("p");
                                        var eighthParq = document.createElement("p");
                                        var ninthParq = document.createElement("p");
                                        var tenthParq = document.createElement("p");
                                        var eleventhParq = document.createElement("p");
                                        var twelthParq = document.createElement("p");
                                        var thirteenthParq = document.createElement("p");
                                        var fourteenthParq = document.createElement("p");
                                        var fifteenthParq = document.createElement("p");

                                        var choicefourq = document.createElement("input");
                                        var choicefiveq = document.createElement("input");

                                        firstParq.className = 'you';
                                        secondParq.className = 'you';
                                        thirdParq.className = 'you';
                                        fourthParq.className = 'you';
                                        fifthParq.className = 'you';
                                        sixthParq.className = 'you';
                                        seventhParq.className = 'you';
                                        eighthParq.className = 'you';
                                        ninthParq.className = 'you';
                                        tenthParq.className = 'you';
                                        eleventhParq.className = 'you';
                                        twelthParq.className = 'you';
                                        thirteenthParq.className = 'you';
                                        fourteenthParq.className = 'you';
                                        fifteenthParq.className = 'you';

                                        choicefourq.className = 'oP';
                                        choicefiveq.className = 'oP';


                                        firstParq.textContent = "OK, HEADING TO THE DOOR!";
                                        secondParq.textContent = "Fiddling with the STUPID HANDLE THING!!";
                                        thirdParq.textContent = "CRAP!";
                                        fourthParq.textContent = "ITS OPEN AND I'M RUNNING OUT AAAnnnd";
                                        fifthParq.textContent = "AHHHH";
                                        sixthParq.textContent = "ZOMBIE GRABED MY LEGG!";
                                        seventhParq.textContent = "AHHHHOUCH";
                                        eighthParq.textContent = "OUCH!";
                                        ninthParq.textContent = "IT SCRATCHED ME";
                                        tenthParq.textContent = "IM BLEEDING";
                                        eleventhParq.textContent = "OH MY GOD, this is it. If you get scratched by a zombie you turn into one of them";
                                        twelthParq.textContent = "So I guess this is it.";
                                        thirteenthParq.textContent = "I just want to thank you for being there for me, for staying with me and giving me advice, even if it didnt work out in the end--";
                                        fourteenthParq.textContent = "But I'm grateful for you. Your a good friend.";
                                        fifteenthParq.textContent = "So I guess this is goodbye.";


                                        container.appendChild(firstParq);
                                        container.appendChild(secondParq);
                                        container.appendChild(thirdParq);
                                        container.appendChild(fourthParq);
                                        container.appendChild(fifthParq);
                                        container.appendChild(sixthParq);
                                        container.appendChild(seventhParq);
                                        container.appendChild(eighthParq);
                                        container.appendChild(ninthParq);
                                        container.appendChild(tenthParq);
                                        container.appendChild(eleventhParq);
                                        container.appendChild(twelthParq);
                                        container.appendChild(thirteenthParq);
                                        container.appendChild(fourteenthParq);
                                        container.appendChild(fifteenthParq);


                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
        //Will is that you?, nice to her from you again.

        choice2.addEventListener("click", function() {

            choice2.style.backgroundColor = "red";

            var firstParD = document.createElement("p");
            var secondParD = document.createElement("p");
            var thirdParD = document.createElement("p");
            var fourthParD = document.createElement("p");
            var fifthParD = document.createElement("p");
            var sixthParD = document.createElement("p");
            var seventhParD = document.createElement("p");
            var eighthParD = document.createElement("p");
            var ninthParD = document.createElement("p");
            var tenthParD = document.createElement("p");
            var eleventhParD = document.createElement("p");
            var twelthParD = document.createElement("p");
            var thirteenthParD = document.createElement("p");
            var fourteenthParD = document.createElement("p");
            var fifteenthParD = document.createElement("p");

            var choicefourD = document.createElement("input");
            var choicefiveD = document.createElement("input");

            firstParD.className = 'you';
            secondParD.className = 'you';
            thirdParD.className = 'you';
            fourthParD.className = 'you';
            fifthParD.className = 'you';
            sixthParD.className = 'you';
            seventhParD.className = 'you';
            eighthParD.className = 'you';
            ninthParD.className = 'you';
            tenthParD.className = 'you';
            eleventhParD.className = 'you';
            twelthParD.className = 'you';
            thirteenthParD.className = 'you';
            fourteenthParD.className = 'you';
            fifteenthParD.className = 'you';

            choicefourD.className = 'oP';
            choicefiveD.className = 'oP';


            firstParD.textContent = "Yeah, nice to hear from you too";
            secondParD.textContent = "It has been SO long since I have talken to a human being.";
            thirdParD.textContent = "Dang, I sound like I'm some alien or something.";
            fourthParD.textContent = "But anyway, I bet your wondering how I'm talking to you--";
            fifthParD.textContent = "Because if you remember we lost contact when I ran out of battery. So ill start from the begining. ";
            sixthParD.textContent = "I was walking through the forest and there was some clearing with this hut thing.";
            seventhParD.textContent = "more of a cabin, but I started exploring it and before I went in, well I still havn't, but I started exploring around it and found a generator";
            eighthParD.textContent = "Luckily I had my handy dandy USB drivge and charged my phone.";
            ninthParD.textContent = "I still havn't gone in yet, It looks kinda abandoned but I'm not sure if I should go in.";
            tenthParD.textContent = "It's pretty creepy and its getting dar-- OH CRAP, is that...";
            eleventhParD.textContent = "Is that blood on the handle of the door??!";
            twelthParD.textContent = "Don't forget, this is the zombie appocolipse--";
            thirteenthParD.textContent = "and whoevers blood that is it doesn't look like they tripped over a bug or something.";
            fourteenthParD.textContent = "So what do you recon, should I go in? Keep in mind though there could be some resources in there, I am running low on them and I have been eating grass and nuts for the past few days...";
            fifteenthParD.textContent = "And dont even ask me what I have been drinking.";

            choicefourD.value = "If you have been drinking what I think you are, it's probably worth it. Go in";
            choicefiveD.value = "No, you shouldn't. Whatevers in there could be dangerouse.";

            choicefourD.type = 'button';
            choicefiveD.type = 'button';

            container.appendChild(firstParD);
            container.appendChild(secondParD);
            container.appendChild(thirdParD);
            container.appendChild(fourthParD);
            container.appendChild(fifthParD);
            container.appendChild(sixthParD);
            container.appendChild(seventhParD);
            container.appendChild(eighthParD);
            container.appendChild(ninthParD);
            container.appendChild(tenthParD);
            container.appendChild(eleventhParD);
            container.appendChild(twelthParD);
            container.appendChild(thirteenthParD);
            container.appendChild(fourteenthParD);
            container.appendChild(fifteenthParD);

            container.appendChild(choicefourD);
            container.appendChild(choicefiveD);











            //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin.
            choicefourD.addEventListener("click", function() {

                choicefourD.style.backgroundColor = "red";

                var firstParJ = document.createElement("p");
                var secondParJ = document.createElement("p");
                var thirdParJ = document.createElement("p");
                var fourthParJ = document.createElement("p");
                var fifthParJ = document.createElement("p");
                var sixthParJ = document.createElement("p");
                var seventhParJ = document.createElement("p");

                var choice6J = document.createElement("input");
                var choice7J = document.createElement("input");

                firstParJ.className = 'you';
                secondParJ.className = 'you';
                thirdParJ.className = 'you';
                fourthParJ.className = 'you';
                fifthParJ.className = 'you';
                sixthParJ.className = 'you';
                seventhParJ.className = 'you';

                choice6J.className = 'oP';
                choice7J.className = 'oP';

                firstParJ.textContent = "Ok, good idea, I'm a little bit scared...";
                secondParJ.textContent = "But I'm heading to the door... ";
                thirdParJ.textContent = "Ok, I made it to the porch, I'm going to grab this leaf and use it to open the door.";
                fourthParJ.textContent = "Because I REALLY dont want to touch that ketchup juice.";
                fifthParJ.textContent = "Peeking in.....Ok I'm sneeking in, very sneekily... Looks just like a normal cabin, OOOO THE KITCHEN!";
                sixthParJ.textContent = "I cant even explain in words how hungry I am, even though I just did pretty much, whatever I'm already making myself some cerial.";
                seventhParJ.textContent = "*gag* Dude, there is this aweful smell coming from upstairs...";

                choice6J.value = "Go check it out.";
                choice7J.value = "Stay clear of it, you probably dont need to worry about it.";

                choice6J.type = 'button';
                choice7J.type = 'button';

                container.appendChild(firstParJ);
                container.appendChild(secondParJ);
                container.appendChild(thirdParJ);
                container.appendChild(fourthParJ);
                container.appendChild(fifthParJ);
                container.appendChild(sixthParJ);
                container.appendChild(seventhParJ);

                container.appendChild(choice6J);
                container.appendChild(choice7J);




                //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin. go chekc out the smell.
                choice6J.addEventListener("click", function() {
                    choice6J.style.backgroundColor = "red";
                    var firstParK = document.createElement("p");
                    var secondParK = document.createElement("p");
                    var thirdParK = document.createElement("p");
                    var fourthParK = document.createElement("p");
                    var fifthParK = document.createElement("p");
                    var sixthParK = document.createElement("p");
                    var seventhParK = document.createElement("p");
                    var eighthParK = document.createElement("p");
                    var ninthParK = document.createElement("p");
                    var tenthParK = document.createElement("p");
                    var eleventhParK = document.createElement("p");
                    var twelthParK = document.createElement("p");
                    var thirteenthParK = document.createElement("p");
                    var fourteenthParK = document.createElement("p");
                    var fifteenthParK = document.createElement("p");

                    firstParK.className = 'you';
                    secondParK.className = 'you';
                    thirdParK.className = 'you';
                    fourthParK.className = 'you';
                    fifthParK.className = 'you';
                    sixthParK.className = 'you';
                    seventhParK.className = 'you';
                    eighthParK.className = 'you';
                    ninthParK.className = 'you';
                    tenthParK.className = 'you';
                    eleventhParK.className = 'you';
                    twelthParK.className = 'you';
                    thirteenthParK.className = 'you';
                    fourteenthParK.className = 'you';
                    fifteenthParK.className = 'you';

                    firstParK.textContent = "Ok, going up too see what it is...";
                    secondParK.textContent = "I'm a little scared but I'm going to go make sure theres nothing up there...";
                    thirdParK.textContent = "This is like, really creepy. Like the floreboards are creeking, its dark, whatelse do you need??";
                    fourthParK.textContent = "But I'm going to face my fears. Nothing can scare me!";
                    fifthParK.textContent = "OH MY GOD WHAT WAS THAT NOISE?!?!?!";
                    sixthParK.textContent = "I stand corrected";
                    seventhParK.textContent = "I am very easily scared.";
                    eighthParK.textContent = "The smell is getting strongerrRRRRRROOOHHHAAHHHH MY GOD";
                    ninthParK.textContent = "GOD GOD GOD GOD NOOOOO";
                    tenthParK.textContent = "ZOMBIE";
                    eleventhParK.textContent = "GOT M--AHHHHH BITTING ME, DYING TO DEATH!!";
                    twelthParK.textContent = "WHATS EVEN WORSE IS THAT THE LAST THING I SAID DOESNT EVEN MAKE SENCE!!!";
                    thirteenthParK.textContent = "It's too late to do anything, I will turn into a zombie any moment now.";
                    fourteenthParK.textContent = "So I guess this is goodbye, thank you form sticking by me all this time though.";
                    fifteenthParK.textContent = "So goodbye";


                    container.appendChild(firstParK);
                    container.appendChild(secondParK);
                    container.appendChild(thirdParK);
                    container.appendChild(fourthParK);
                    container.appendChild(fifthParK);
                    container.appendChild(sixthParK);
                    container.appendChild(seventhParK);
                    container.appendChild(eighthParK);
                    container.appendChild(ninthParK);
                    container.appendChild(tenthParK);
                    container.appendChild(eleventhParK);
                    container.appendChild(twelthParK);
                    container.appendChild(thirteenthParK);
                    container.appendChild(fourteenthParK);
                    container.appendChild(fifteenthParK);


                });
                //will, is that you?, nice to hear from you! go in the cabin, . dont check out the smell.
                choice7J.addEventListener("click", function() {

                    choice7J.style.backgroundColor = "red";

                    var firstParD = document.createElement("p");
                    var secondParD = document.createElement("p");
                    var thirdParD = document.createElement("p");
                    var fourthParD = document.createElement("p");
                    var fifthParD = document.createElement("p");
                    var sixthParD = document.createElement("p");
                    var seventhParD = document.createElement("p");
                    var eighthParD = document.createElement("p");
                    var ninthParD = document.createElement("p");
                    var tenthParD = document.createElement("p");
                    var eleventhParD = document.createElement("p");
                    var twelthParD = document.createElement("p");

                    var choice9D = document.createElement("input");
                    var choice10D = document.createElement("input");

                    firstParD.className = 'you';
                    secondParD.className = 'you';
                    thirdParD.className = 'you';
                    fourthParD.className = 'you';
                    fifthParD.className = 'you';
                    sixthParD.className = 'you';
                    seventhParD.className = 'you';
                    eighthParD.className = 'you';
                    ninthParD.className = 'you';
                    tenthParD.className = 'you';
                    eleventhParD.className = 'you';
                    twelthParD.className = 'you';

                    choice9D.className = 'oP';
                    choice10D.className = 'oP';

                    firstParD.textContent = "Yeah, I'm with you on that one.";
                    secondParD.textContent = "It could be something dangerouse";
                    thirdParD.textContent = "And plus, all I need here is food and water and then I'm out.";
                    fourthParD.textContent = "...Gathering...gathering....";
                    fifthParD.textContent = "Stuffing all I can into my backpack";
                    sixthParD.textContent = "I am so excited to eat all this, there is some really good stuff in these cabinets.";
                    seventhParD.textContent = "like chocolate bars, OOOO is that a twinkie????";
                    eighthParD.textContent = "Wait, what was that?";
                    ninthParD.textContent = "There was some noise coming from upstairs...";
                    tenthParD.textContent = "I know I probably shouldn't go and check it out, I'm going to keep packing up this food...";
                    eleventhParD.textContent = "maybe a bottle of water as well...";
                    twelthParD.textContent = "just quicker now.";


                    choice9D.value = "Yeah, do that";
                    choice10D.value = "Thats smart, but just to be sure make sure theres nothing really quick.";

                    choice9D.type = 'button';
                    choice10D.type = 'button';

                    container.appendChild(firstParD);
                    container.appendChild(secondParD);
                    container.appendChild(thirdParD);
                    container.appendChild(fourthParD);
                    container.appendChild(fifthParD);
                    container.appendChild(sixthParD);
                    container.appendChild(seventhParD);
                    container.appendChild(eighthParD);
                    container.appendChild(ninthParD);
                    container.appendChild(tenthParD);
                    container.appendChild(eleventhParD);
                    container.appendChild(twelthParD);

                    container.appendChild(choice9D);
                    container.appendChild(choice10D);









                    //will, is that you?, nice to hear from you!, go in the cabin, dont check out the smell, 
                    choice10D.addEventListener("click", function() {

                        choice10D.style.backgroundColor = "red";

                        var firstParD = document.createElement("p");
                        var secondParD = document.createElement("p");
                        var thirdParD = document.createElement("p");
                        var fourthParD = document.createElement("p");
                        var fifthParD = document.createElement("p");
                        var sixthParD = document.createElement("p");
                        var seventhParD = document.createElement("p");
                        var eighthParD = document.createElement("p");
                        var ninthParD = document.createElement("p");
                        var tenthParD = document.createElement("p");
                        var eleventhParD = document.createElement("p");
                        var twelthParD = document.createElement("p");


                        var choice9H = document.createElement("input");
                        var choice10H = document.createElement("input");

                        firstParD.className = 'you';
                        secondParD.className = 'you';
                        thirdParD.className = 'you';
                        fourthParD.className = 'you';
                        fifthParD.className = 'you';
                        sixthParD.className = 'you';
                        seventhParD.className = 'you';
                        eighthParD.className = 'you';
                        ninthParD.className = 'you';
                        tenthParD.className = 'you';
                        eleventhParD.className = 'you';
                        twelthParD.className = 'you';

                        choice9H.className = 'oP';
                        choice10H.className = 'oP';

                        firstParD.textContent = "Ok, just going to peek my head around the corner to the staircase--";
                        secondParD.textContent = "OH CRAP! THERES A ZOMBIE CRAWLING DOWN THE STAIRS!!";
                        thirdParD.textContent = "IM OUT MAN, I HAVE WHAT I NEED!";
                        fourthParD.textContent = "IM RUNNING TO THE DOOR!";
                        fifthParD.textContent = "Wait a second...";
                        sixthParD.textContent = "This zombie is hecka slow.";
                        seventhParD.textContent = "I dont need to worry, about this, I'm gonna walk out of here now though. ";
                        eighthParD.textContent = "Walking.";
                        ninthParD.textContent = "I kinda feel bad for it, it looks so desperate and sad, like it really wants to get me but it just cant...";
                        tenthParD.textContent = "Anyway, screw you zombie. Now there are two ways I can go.";
                        eleventhParD.textContent = "I can keep going past the house from where I came to it down this hill...";
                        twelthParD.textContent = "Or I can go up the hill to the right of the mountain wher eit goes uphill so I can see where I'm going.";


                        choice9H.value = "Go straight, downhill is easier.";
                        choice10H.value = "Go uphill. You have a goal to find your family, if your still persuing that goal then thats your bast option.";

                        choice9H.type = 'button';
                        choice10H.type = 'button';

                        container.appendChild(firstParD);
                        container.appendChild(secondParD);
                        container.appendChild(thirdParD);
                        container.appendChild(fourthParD);
                        container.appendChild(fifthParD);
                        container.appendChild(sixthParD);
                        container.appendChild(seventhParD);
                        container.appendChild(eighthParD);
                        container.appendChild(ninthParD);
                        container.appendChild(tenthParD);
                        container.appendChild(eleventhParD);
                        container.appendChild(twelthParD);

                        container.appendChild(choice9H);
                        container.appendChild(choice10H);

















                        choice10H.addEventListener("click", function() {

                            choice10H.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");

                            var choice15 = document.createElement("input");
                            var choice16 = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';

                            choice15.className = 'oP';
                            choice16.className = 'oP';


                            firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                            secondParD.textContent = "";
                            thirdParD.textContent = "";
                            fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                            fifthParD.textContent = "--Wait, theres some noise...";
                            sixthParD.textContent = "It sounds like, ";
                            seventhParD.textContent = "Like a helicopter...";
                            eighthParD.textContent = "OH CRAP!";
                            ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                            tenthParD.textContent = "Oh crap they see me";
                            eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                            twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                            thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                            fourteenthParD.textContent = "They are going to kill Me!";
                            fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                            choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                            choice16.value = "RUN!!";

                            choice15.type = 'button';
                            choice16.type = 'button';

                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);

                            container.appendChild(choice15);
                            container.appendChild(choice16);




                            choice16.addEventListener("click", function() {

                                choice16.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choicefourD = document.createElement("input");
                                var choicefiveD = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';




                                firstParD.textContent = "OK";
                                secondParD.textContent = "RUNNING";
                                thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                fourthParD.textContent = "AHH";
                                fifthParD.textContent = "THEY ARE SHOOTING!!";
                                sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                seventhParD.textContent = "OH MY GOD";
                                eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                twelthParD.textContent = "So thank you for that, I mean it.";
                                thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                fourteenthParD.textContent = "goodbye, Barry.";
                                fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);





                            });


                            choice15.addEventListener("click", function() {

                                choice15.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");


                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';




                                firstParD.textContent = "OK, WAVING AT THEM";
                                secondParD.textContent = "Its sort of like I'm stranded or something";
                                thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                fourthParD.textContent = "";
                                fifthParD.textContent = "";
                                sixthParD.textContent = "";
                                seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                eighthParD.textContent = "I have been asleep for most of it";
                                ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                tenthParD.textContent = "But all I know is that I'm safe now.";
                                eleventhParD.textContent = "And part of that is due to you-- most of it";
                                twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                fourteenthParD.textContent = "So thank you.";
                                fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);



                            });


                        });



                    });


                    //will, is that you?, nice to hear from you again!,  dont go in the cabin, ok fine go in the cabin. dont check out the smell, continue to do what your doing.
                    choice9D.addEventListener("click", function() {
                        choice9D.style.backgroundColor = "red";

                        var firstParl = document.createElement("p");
                        var secondParl = document.createElement("p");
                        var thirdParl = document.createElement("p");
                        var fourthParl = document.createElement("p");
                        var fifthParl = document.createElement("p");
                        var sixthParl = document.createElement("p");
                        var seventhParl = document.createElement("p");
                        var eighthParl = document.createElement("p");
                        var ninthParl = document.createElement("p");
                        var tenthParl = document.createElement("p");
                        var eleventhParl = document.createElement("p");
                        var twelthParl = document.createElement("p");


                        var choice9l = document.createElement("input");
                        var choice10l = document.createElement("input");

                        firstParl.className = 'you';
                        secondParl.className = 'you';
                        thirdParl.className = 'you';
                        fourthParl.className = 'you';
                        fifthParl.className = 'you';
                        sixthParl.className = 'you';
                        seventhParl.className = 'you';
                        eighthParl.className = 'you';
                        ninthParl.className = 'you';
                        tenthParl.className = 'you';
                        eleventhParl.className = 'you';
                        twelthParl.className = 'you';

                        choice9l.className = 'oP';
                        choice10l.className = 'oP';

                        firstParl.textContent = "Ok, almost finished....";
                        secondParl.textContent = "Just stuffing in a waterbottle...";
                        thirdParl.textContent = "oh, also by the way I got a blanket from the couch because it's cold outside.";
                        fourthParl.textContent = "because its cold outside and I am NOT sleeping here";
                        fifthParl.textContent = "So i'm not even going to give you that opti--";
                        sixthParl.textContent = "HOLY CRAP!!! CRAP CRAP CRAP CRAP!!!";
                        seventhParl.textContent = "THERES A ZOMBIE";
                        eighthParl.textContent = "Its a crawler, so its slow but Its closer to the door where the staircase is, of corse because it came from upstairs";
                        ninthParl.textContent = "Theres a window on the other side of the room but farther from the zombie than the door is, but it will take me a couple seconds to open it.";
                        tenthParl.textContent = "or should I just run for the door, the zombie is like 10 feet from the door..";
                        eleventhParl.textContent = "..and 15 feet from the window--";
                        twelthParl.textContent = "QUICK! WHICH ONE";


                        choice9l.value = "THE WINDOW!!";
                        choice10l.value = "THE DOOR!!";

                        choice9l.type = 'button';
                        choice10l.type = 'button';

                        container.appendChild(firstParl);
                        container.appendChild(secondParl);
                        container.appendChild(thirdParl);
                        container.appendChild(fourthParl);
                        container.appendChild(fifthParl);
                        container.appendChild(sixthParl);
                        container.appendChild(seventhParl);
                        container.appendChild(eighthParl);
                        container.appendChild(ninthParl);
                        container.appendChild(tenthParl);
                        container.appendChild(eleventhParl);
                        container.appendChild(twelthParl);

                        container.appendChild(choice9l);
                        container.appendChild(choice10l);



                        choice9l.addEventListener("click", function() {

                            choice9l.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");

                            var choicefourD = document.createElement("input");
                            var choicefiveD = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';

                            choicefourD.className = 'oP';
                            choicefiveD.className = 'oP';


                            firstParD.textContent = "OK, HEADING TO THE WINDOW!";
                            secondParD.textContent = "Fiddling with the STUPID LATCH LEVER WINDOW THING!!";
                            thirdParD.textContent = "COME ON!!!!";
                            fourthParD.textContent = "OK, its FRIKIN FINALLY OPEN";
                            fifthParD.textContent = "OMG THE ZOMBIE IS RIGHT BEHIND ME";
                            sixthParD.textContent = "DIVING THROUGH THE WINDOW";
                            seventhParD.textContent = "ANNNNnnnnnd";
                            eighthParD.textContent = "OUCH!";
                            ninthParD.textContent = "Landed on my face but I have my backpack and I am OUT OF HERE.";
                            tenthParD.textContent = "Running...";
                            eleventhParD.textContent = "Ok, I'm a safe distance by now.";
                            twelthParD.textContent = "well... Now what?";
                            thirteenthParD.textContent = "Which way should I go, I could keep going past the house from where I came from, where it starts to go downhil-- ";
                            fourteenthParD.textContent = "Or I can go to the right where it goes uphill up this mountain, maybe I would be able to see where I am accually going. ";
                            fifteenthParD.textContent = "What do you think?";

                            choicefourD.value = "Go straight, downhill is easier and wherever your going you would be able to get there quicker.";
                            choicefiveD.value = "Go to the right, you are trying to find your family. You will know better where to go to find them.";

                            choicefourD.type = 'button';
                            choicefiveD.type = 'button';

                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);

                            container.appendChild(choicefourD);
                            container.appendChild(choicefiveD);

                            /* CONTINUE THIS CHOICE LATER
                             *CONTINUE THIS CHOICE LATER
                             *CONTINUE THIS CHOICE LATER
                             */

                            choicefiveD.addEventListener("click", function() {

                                choicefiveD.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choice15 = document.createElement("input");
                                var choice16 = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';

                                choice15.className = 'oP';
                                choice16.className = 'oP';


                                firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                secondParD.textContent = "";
                                thirdParD.textContent = "";
                                fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                fifthParD.textContent = "--Wait, theres some noise...";
                                sixthParD.textContent = "It sounds like, ";
                                seventhParD.textContent = "Like a helicopter...";
                                eighthParD.textContent = "OH CRAP!";
                                ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                tenthParD.textContent = "Oh crap they see me";
                                eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                fourteenthParD.textContent = "They are going to kill Me!";
                                fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                choice16.value = "RUN!!";

                                choice15.type = 'button';
                                choice16.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);

                                container.appendChild(choice15);
                                container.appendChild(choice16);




                                choice16.addEventListener("click", function() {

                                    choice16.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");

                                    var choicefourD = document.createElement("input");
                                    var choicefiveD = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK";
                                    secondParD.textContent = "RUNNING";
                                    thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                    fourthParD.textContent = "AHH";
                                    fifthParD.textContent = "THEY ARE SHOOTING!!";
                                    sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                    seventhParD.textContent = "OH MY GOD";
                                    eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                    ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                    tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                    eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                    twelthParD.textContent = "So thank you for that, I mean it.";
                                    thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                    fourteenthParD.textContent = "goodbye, Barry.";
                                    fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);





                                });


                                choice15.addEventListener("click", function() {

                                    choice15.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");


                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK, WAVING AT THEM";
                                    secondParD.textContent = "Its sort of like I'm stranded or something";
                                    thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                    fourthParD.textContent = "";
                                    fifthParD.textContent = "";
                                    sixthParD.textContent = "";
                                    seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                    eighthParD.textContent = "I have been asleep for most of it";
                                    ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                    tenthParD.textContent = "But all I know is that I'm safe now.";
                                    eleventhParD.textContent = "And part of that is due to you-- most of it";
                                    twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                    thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                    fourteenthParD.textContent = "So thank you.";
                                    fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);



                                });


                            });















                        });



                        choice10l.addEventListener("click", function() {

                            choice10l.style.backgroundColor = "red";

                            var firstParq = document.createElement("p");
                            var secondParq = document.createElement("p");
                            var thirdParq = document.createElement("p");
                            var fourthParq = document.createElement("p");
                            var fifthParq = document.createElement("p");
                            var sixthParq = document.createElement("p");
                            var seventhParq = document.createElement("p");
                            var eighthParq = document.createElement("p");
                            var ninthParq = document.createElement("p");
                            var tenthParq = document.createElement("p");
                            var eleventhParq = document.createElement("p");
                            var twelthParq = document.createElement("p");
                            var thirteenthParq = document.createElement("p");
                            var fourteenthParq = document.createElement("p");
                            var fifteenthParq = document.createElement("p");

                            var choicefourq = document.createElement("input");
                            var choicefiveq = document.createElement("input");

                            firstParq.className = 'you';
                            secondParq.className = 'you';
                            thirdParq.className = 'you';
                            fourthParq.className = 'you';
                            fifthParq.className = 'you';
                            sixthParq.className = 'you';
                            seventhParq.className = 'you';
                            eighthParq.className = 'you';
                            ninthParq.className = 'you';
                            tenthParq.className = 'you';
                            eleventhParq.className = 'you';
                            twelthParq.className = 'you';
                            thirteenthParq.className = 'you';
                            fourteenthParq.className = 'you';
                            fifteenthParq.className = 'you';

                            choicefourq.value = 'oP';
                            choicefiveq.value = 'oP';

                            choicefourq.type = 'button';
                            choicefiveq.type = 'button';


                            firstParq.textContent = "OK, HEADING TO THE DOOR!";
                            secondParq.textContent = "Fiddling with the STUPID HANDLE THING!!";
                            thirdParq.textContent = "CRAP!";
                            fourthParq.textContent = "ITS OPEN AND I'M RUNNING OUT AAAnnnd";
                            fifthParq.textContent = "AHHHH";
                            sixthParq.textContent = "ZOMBIE GRABED MY LEGG!";
                            seventhParq.textContent = "AHHHHOUCH";
                            eighthParq.textContent = "OUCH!";
                            ninthParq.textContent = "IT SCRATCHED ME";
                            tenthParq.textContent = "IM BLEEDING";
                            eleventhParq.textContent = "OH MY GOD, this is it. If you get scratched by a zombie you turn into one of them";
                            twelthParq.textContent = "So I guess this is it.";
                            thirteenthParq.textContent = "I just want to thank you for being there for me, for staying with me and giving me advice, even if it didnt work out in the end--";
                            fourteenthParq.textContent = "But I'm grateful for you. Your a good friend.";
                            fifteenthParq.textContent = "So I guess this is goodbye.";


                            container.appendChild(firstParq);
                            container.appendChild(secondParq);
                            container.appendChild(thirdParq);
                            container.appendChild(fourthParq);
                            container.appendChild(fifthParq);
                            container.appendChild(sixthParq);
                            container.appendChild(seventhParq);
                            container.appendChild(eighthParq);
                            container.appendChild(ninthParq);
                            container.appendChild(tenthParq);
                            container.appendChild(eleventhParq);
                            container.appendChild(twelthParq);
                            container.appendChild(thirteenthParq);
                            container.appendChild(fourteenthParq);
                            container.appendChild(fifteenthParq);


                        });

                    });

                });



            });








            choicefiveD.addEventListener("click", function() {
                choicefiveD.style.backgroundColor = "red";
                var firstParI = document.createElement("p");
                var secondParI = document.createElement("p");
                var thirdParI = document.createElement("p");

                var choice6I = document.createElement("input");
                var choice7I = document.createElement("input");


                firstParI.className = 'you';
                secondParI.className = 'you';
                thirdParI.className = 'you';

                choice6I.className = 'oP';
                choice7I.cassName = 'oP';


                firstParI.textContent = "Ok, thats probably smart considering there might be a zombie or something in there";
                secondParI.textContent = "Even though I REALLY want food and water right now....";
                thirdParI.textContent = "...What if I just went in REEEAALLY quick, got some food and water and left in a flash?";

                choice6I.value = "No, you really shoudln't, what if there was a zombie in there?";
                choice7I.value = "OK fine, but go REALLY quick, get what you need, and leave imediatly";

                choice6I.type = 'button';
                choice7I.type = 'button';

                container.appendChild(firstParI);
                container.appendChild(secondParI);
                container.appendChild(thirdParI);

                container.appendChild(choice6I);
                container.appendChild(choice7I);




                //will is that you?, nice to hear from you again!, dont go in the cabin., No really dont go in.
                choice6I.addEventListener("click", function() {
                    choice6I.style.backgroundColor = "red";


                    var firstParQ = document.createElement("p");
                    var secondParQ = document.createElement("p");
                    var thirdParQ = document.createElement("p");
                    var fourthParQ = document.createElement("p");
                    var fifthParQ = document.createElement("p");
                    var sixthParQ = document.createElement("p");
                    var seventhParQ = document.createElement("p");
                    var eighthParQ = document.createElement("p");
                    var ninthParQ = document.createElement("p");
                    
                    var choice11 = document.createElement("input");
                    var choice12 = document.createElement("input");


                    firstParQ.className = 'you';
                    secondParQ.className = 'you';
                    thirdParQ.className = 'you';
                    fourthParQ.className = 'you';
                    fifthParQ.className = 'you';
                    sixthParQ.className = 'you';
                    seventhParQ.className = 'you';
                    eighthParQ.className = 'you';
                    ninthParQ.className = 'you';

                    choice11.className = 'oP';
                    choice12.className = 'oP';

                    firstParQ.textContent = "Ok";
                    secondParQ.textContent = "I have now come to a spot where there are two ways I can go. ";
                    thirdParQ.textContent = "To the right or straight ahead past the cabin.";
                    fourthParQ.textContent = "If I keep going straight past the cabin it starts to go downhill, maybe some water like a river or something.";
                    fifthParQ.textContent = "If I go to the right it goes uphill but that might not so bad.";
                    sixthParQ.textContent = "Because I do have a goal to find my family...";
                    seventhParQ.textContent = "If they are still alive--";
                    eighthParQ.textContent = "But if I go uphill I can see where I'm going more from some that veiwpoint I see up there.";
                    ninthParQ.textContent = "So what do think would be best?";

                    choice11.value = "Go straight ahead, downhill is easier and you need water.";
                    choice12.value = "Go uphill, you need to know where you are going and you need to find your family.";

                    choice11.type = 'button';
                    choice12.type = 'button';


                    container.appendChild(firstParQ);
                    container.appendChild(secondParQ);
                    container.appendChild(thirdParQ);
                    container.appendChild(fourthParQ);
                    container.appendChild(fifthParQ);
                    container.appendChild(sixthParQ);
                    container.appendChild(seventhParQ);
                    container.appendChild(eighthParQ);
                    container.appendChild(ninthParQ);

                    container.appendChild(choice11);
                    container.appendChild(choice12);















                    choice12.addEventListener("click", function() {

                        choice12.style.backgroundColor = "red";

                        var firstParD = document.createElement("p");
                        var secondParD = document.createElement("p");
                        var thirdParD = document.createElement("p");
                        var fourthParD = document.createElement("p");
                        var fifthParD = document.createElement("p");
                        var sixthParD = document.createElement("p");
                        var seventhParD = document.createElement("p");
                        var eighthParD = document.createElement("p");
                        var ninthParD = document.createElement("p");
                        var tenthParD = document.createElement("p");
                        var eleventhParD = document.createElement("p");
                        var twelthParD = document.createElement("p");
                        var thirteenthParD = document.createElement("p");
                        var fourteenthParD = document.createElement("p");
                        var fifteenthParD = document.createElement("p");

                        var choice15 = document.createElement("input");
                        var choice16 = document.createElement("input");

                        firstParD.className = 'you';
                        secondParD.className = 'you';
                        thirdParD.className = 'you';
                        fourthParD.className = 'you';
                        fifthParD.className = 'you';
                        sixthParD.className = 'you';
                        seventhParD.className = 'you';
                        eighthParD.className = 'you';
                        ninthParD.className = 'you';
                        tenthParD.className = 'you';
                        eleventhParD.className = 'you';
                        twelthParD.className = 'you';
                        thirteenthParD.className = 'you';
                        fourteenthParD.className = 'you';
                        fifteenthParD.className = 'you';

                        choice15.className = 'oP';
                        choice16.className = 'oP';


                        firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                        secondParD.textContent = "";
                        thirdParD.textContent = "";
                        fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                        fifthParD.textContent = "--Wait, theres some noise...";
                        sixthParD.textContent = "It sounds like, ";
                        seventhParD.textContent = "Like a helicopter...";
                        eighthParD.textContent = "OH CRAP!";
                        ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                        tenthParD.textContent = "Oh crap they see me";
                        eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                        twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                        thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                        fourteenthParD.textContent = "They are going to kill Me!";
                        fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                        choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                        choice16.value = "RUN!!";

                        choice15.type = 'button';
                        choice16.type = 'button';

                        container.appendChild(firstParD);
                        container.appendChild(secondParD);
                        container.appendChild(thirdParD);
                        container.appendChild(fourthParD);
                        container.appendChild(fifthParD);
                        container.appendChild(sixthParD);
                        container.appendChild(seventhParD);
                        container.appendChild(eighthParD);
                        container.appendChild(ninthParD);
                        container.appendChild(tenthParD);
                        container.appendChild(eleventhParD);
                        container.appendChild(twelthParD);
                        container.appendChild(thirteenthParD);
                        container.appendChild(fourteenthParD);
                        container.appendChild(fifteenthParD);

                        container.appendChild(choice15);
                        container.appendChild(choice16);




                        choice16.addEventListener("click", function() {

                            choice16.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");


                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';




                            firstParD.textContent = "OK";
                            secondParD.textContent = "RUNNING";
                            thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                            fourthParD.textContent = "AHH";
                            fifthParD.textContent = "THEY ARE SHOOTING!!";
                            sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                            seventhParD.textContent = "OH MY GOD";
                            eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                            ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                            tenthParD.textContent = "THIS IS DEFIANTLY IT";
                            eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                            twelthParD.textContent = "So thank you for that, I mean it.";
                            thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                            fourteenthParD.textContent = "goodbye, Barry.";
                            fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);





                        });


                        choice15.addEventListener("click", function() {

                            choice15.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");


                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';




                            firstParD.textContent = "OK, WAVING AT THEM";
                            secondParD.textContent = "Its sort of like I'm stranded or something";
                            thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                            fourthParD.textContent = "";
                            fifthParD.textContent = "";
                            sixthParD.textContent = "";
                            seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                            eighthParD.textContent = "I have been asleep for most of it";
                            ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                            tenthParD.textContent = "But all I know is that I'm safe now.";
                            eleventhParD.textContent = "And part of that is due to you-- most of it";
                            twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                            thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                            fourteenthParD.textContent = "So thank you.";
                            fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);



                        });


                    });


                });



                //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin.
                choice7I.addEventListener("click", function() {

                    choice7I.style.backgroundColor = "red";

                    var firstParJ = document.createElement("p");
                    var secondParJ = document.createElement("p");
                    var thirdParJ = document.createElement("p");
                    var fourthParJ = document.createElement("p");
                    var fifthParJ = document.createElement("p");
                    var sixthParJ = document.createElement("p");
                    var seventhParJ = document.createElement("p");

                    var choice6J = document.createElement("input");
                    var choice7J = document.createElement("input");

                    firstParJ.className = 'you';
                    secondParJ.className = 'you';
                    thirdParJ.className = 'you';
                    fourthParJ.className = 'you';
                    fifthParJ.className = 'you';
                    sixthParJ.className = 'you';
                    seventhParJ.className = 'you';

                    choice6J.className = 'oP';
                    choice7J.className = 'oP';

                    firstParJ.textContent = "Ok, good idea, I'm a little bit scared...";
                    secondParJ.textContent = "But I'm heading to the door... ";
                    thirdParJ.textContent = "Ok, I made it to the porch, I'm going to grab this leaf and use it to open the door.";
                    fourthParJ.textContent = "Because I REALLY dont want to touch that ketchup juice.";
                    fifthParJ.textContent = "Peeking in.....Ok I'm sneeking in, very sneekily... Looks just like a normal cabin, OOOO THE KITCHEN!";
                    sixthParJ.textContent = "I cant even explain in words how hungry I am, even though I just did pretty much, whatever I'm already making myself some cerial.";
                    seventhParJ.textContent = "*gag* Dude, there is this aweful smell coming from upstairs...";

                    choice6J.value = "Go check it out.";
                    choice7J.value = "Stay clear of it, you probably dont need to worry about it.";

                    choice6J.type = 'button';
                    choice7J.type = 'button';

                    container.appendChild(firstParJ);
                    container.appendChild(secondParJ);
                    container.appendChild(thirdParJ);
                    container.appendChild(fourthParJ);
                    container.appendChild(fifthParJ);
                    container.appendChild(sixthParJ);
                    container.appendChild(seventhParJ);

                    container.appendChild(choice6J);
                    container.appendChild(choice7J);




                    //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin. go chekc out the smell.
                    choice6J.addEventListener("click", function() {
                        choice6J.style.backgroundColor = "red";
                        var firstParK = document.createElement("p");
                        var secondParK = document.createElement("p");
                        var thirdParK = document.createElement("p");
                        var fourthParK = document.createElement("p");
                        var fifthParK = document.createElement("p");
                        var sixthParK = document.createElement("p");
                        var seventhParK = document.createElement("p");
                        var eighthParK = document.createElement("p");
                        var ninthParK = document.createElement("p");
                        var tenthParK = document.createElement("p");
                        var eleventhParK = document.createElement("p");
                        var twelthParK = document.createElement("p");
                        var thirteenthParK = document.createElement("p");
                        var fourteenthParK = document.createElement("p");
                        var fifteenthParK = document.createElement("p");

                        firstParK.className = 'you';
                        secondParK.className = 'you';
                        thirdParK.className = 'you';
                        fourthParK.className = 'you';
                        fifthParK.className = 'you';
                        sixthParK.className = 'you';
                        seventhParK.className = 'you';
                        eighthParK.className = 'you';
                        ninthParK.className = 'you';
                        tenthParK.className = 'you';
                        eleventhParK.className = 'you';
                        twelthParK.className = 'you';
                        thirteenthParK.className = 'you';
                        fourteenthParK.className = 'you';
                        fifteenthParK.className = 'you';

                        firstParK.textContent = "Ok, going up too see what it is...";
                        secondParK.textContent = "I'm a little scared but I'm going to go make sure theres nothing up there...";
                        thirdParK.textContent = "This is like, really creepy. Like the floreboards are creeking, its dark, whatelse do you need??";
                        fourthParK.textContent = "But I'm going to face my fears. Nothing can scare me!";
                        fifthParK.textContent = "OH MY GOD WHAT WAS THAT NOISE?!?!?!";
                        sixthParK.textContent = "I stand corrected";
                        seventhParK.textContent = "I am very easily scared.";
                        eighthParK.textContent = "The smell is getting strongerrRRRRRROOOHHHAAHHHH MY GOD";
                        ninthParK.textContent = "GOD GOD GOD GOD NOOOOO";
                        tenthParK.textContent = "ZOMBIE";
                        eleventhParK.textContent = "GOT M--AHHHHH BITTING ME, DYING TO DEATH!!";
                        twelthParK.textContent = "WHATS EVEN WORSE IS THAT THE LAST THING I SAID DOESNT EVEN MAKE SENCE!!!";
                        thirteenthParK.textContent = "It's too late to do anything, I will turn into a zombie any moment now.";
                        fourteenthParK.textContent = "So I guess this is goodbye, thank you form sticking by me all this time though.";
                        fifteenthParK.textContent = "So goodbye";


                        container.appendChild(firstParK);
                        container.appendChild(secondParK);
                        container.appendChild(thirdParK);
                        container.appendChild(fourthParK);
                        container.appendChild(fifthParK);
                        container.appendChild(sixthParK);
                        container.appendChild(seventhParK);
                        container.appendChild(eighthParK);
                        container.appendChild(ninthParK);
                        container.appendChild(tenthParK);
                        container.appendChild(eleventhParK);
                        container.appendChild(twelthParK);
                        container.appendChild(thirteenthParK);
                        container.appendChild(fourteenthParK);
                        container.appendChild(fifteenthParK);


                    });

                    choice7J.addEventListener("click", function() {

                        choice7J.style.backgroundColor = "red";

                        var firstParD = document.createElement("p");
                        var secondParD = document.createElement("p");
                        var thirdParD = document.createElement("p");
                        var fourthParD = document.createElement("p");
                        var fifthParD = document.createElement("p");
                        var sixthParD = document.createElement("p");
                        var seventhParD = document.createElement("p");
                        var eighthParD = document.createElement("p");
                        var ninthParD = document.createElement("p");
                        var tenthParD = document.createElement("p");
                        var eleventhParD = document.createElement("p");
                        var twelthParD = document.createElement("p");

                        var choice9D = document.createElement("input");
                        var choice10D = document.createElement("input");

                        firstParD.className = 'you';
                        secondParD.className = 'you';
                        thirdParD.className = 'you';
                        fourthParD.className = 'you';
                        fifthParD.className = 'you';
                        sixthParD.className = 'you';
                        seventhParD.className = 'you';
                        eighthParD.className = 'you';
                        ninthParD.className = 'you';
                        tenthParD.className = 'you';
                        eleventhParD.className = 'you';
                        twelthParD.className = 'you';

                        choice9D.className = 'oP';
                        choice10D.className = 'oP';

                        firstParD.textContent = "Yeah, I'm with you on that one.";
                        secondParD.textContent = "It could be something dangerouse";
                        thirdParD.textContent = "And plus, all I need here is food and water and then I'm out.";
                        fourthParD.textContent = "...Gathering...gathering....";
                        fifthParD.textContent = "Stuffing all I can into my backpack";
                        sixthParD.textContent = "I am so excited to eat all this, there is some really good stuff in these cabinets.";
                        seventhParD.textContent = "like chocolate bars, OOOO is that a twinkie????";
                        eighthParD.textContent = "Wait, what was that?";
                        ninthParD.textContent = "There was some noise coming from upstairs...";
                        tenthParD.textContent = "I know I probably shouldn't go and check it out, I'm going to keep packing up this food...";
                        eleventhParD.textContent = "maybe a bottle of water as well...";
                        twelthParD.textContent = "just quicker now.";


                        choice9D.value = "Yeah, do that";
                        choice10D.value = "Thats smart, but just to be sure make sure theres nothing really quick.";

                        choice9D.type = 'button';
                        choice10D.type = 'button';

                        container.appendChild(firstParD);
                        container.appendChild(secondParD);
                        container.appendChild(thirdParD);
                        container.appendChild(fourthParD);
                        container.appendChild(fifthParD);
                        container.appendChild(sixthParD);
                        container.appendChild(seventhParD);
                        container.appendChild(eighthParD);
                        container.appendChild(ninthParD);
                        container.appendChild(tenthParD);
                        container.appendChild(eleventhParD);
                        container.appendChild(twelthParD);

                        container.appendChild(choice9D);
                        container.appendChild(choice10D);









                        //will, is that you?, where are you, a generator? dont go in the cabin, ok fine go in the cabin, dont check out the smell, 
                        choice10D.addEventListener("click", function() {

                            choice10D.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");


                            var choice9H = document.createElement("input");
                            var choice10H = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';

                            choice9H.className = 'oP';
                            choice10H.className = 'oP';

                            firstParD.textContent = "Ok, just going to peek my head around the corner to the staircase--";
                            secondParD.textContent = "OH CRAP! THERES A ZOMBIE CRAWLING DOWN THE STAIRS!!";
                            thirdParD.textContent = "IM OUT MAN, I HAVE WHAT I NEED!";
                            fourthParD.textContent = "IM RUNNING TO THE DOOR!";
                            fifthParD.textContent = "Wait a second...";
                            sixthParD.textContent = "This zombie is hecka slow.";
                            seventhParD.textContent = "I dont need to worry, about this, I'm gonna walk out of here now though. ";
                            eighthParD.textContent = "Walking.";
                            ninthParD.textContent = "I kinda feel bad for it, it looks so desperate and sad, like it really wants to get me but it just cant...";
                            tenthParD.textContent = "Anyway, screw you zombie. Now there are two ways I can go.";
                            eleventhParD.textContent = "I can keep going past the house from where I came to it down this hill...";
                            twelthParD.textContent = "Or I can go up the hill to the right of the mountain wher eit goes uphill so I can see where I'm going.";


                            choice9H.value = "Go straight, downhill is easier.";
                            choice10H.value = "Go uphill. You have a goal to find your family, if your still persuing that goal then thats your bast option.";

                            choice9H.type = 'button';
                            choice10H.type = 'button';

                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);

                            container.appendChild(choice9H);
                            container.appendChild(choice10H);



                            choice10H.addEventListener("click", function() {

                                choice10H.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choice15 = document.createElement("input");
                                var choice16 = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';

                                choice15.className = 'oP';
                                choice16.className = 'oP';


                                firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                secondParD.textContent = "";
                                thirdParD.textContent = "";
                                fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                fifthParD.textContent = "--Wait, theres some noise...";
                                sixthParD.textContent = "It sounds like, ";
                                seventhParD.textContent = "Like a helicopter...";
                                eighthParD.textContent = "OH CRAP!";
                                ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                tenthParD.textContent = "Oh crap they see me";
                                eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                fourteenthParD.textContent = "They are going to kill Me!";
                                fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                choice16.value = "RUN!!";

                                choice15.type = 'button';
                                choice16.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);

                                container.appendChild(choice15);
                                container.appendChild(choice16);




                                choice16.addEventListener("click", function() {

                                    choice16.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");

                    

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK";
                                    secondParD.textContent = "RUNNING";
                                    thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                    fourthParD.textContent = "AHH";
                                    fifthParD.textContent = "THEY ARE SHOOTING!!";
                                    sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                    seventhParD.textContent = "OH MY GOD";
                                    eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                    ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                    tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                    eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                    twelthParD.textContent = "So thank you for that, I mean it.";
                                    thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                    fourteenthParD.textContent = "goodbye, Barry.";
                                    fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);





                                });


                                choice15.addEventListener("click", function() {

                                    choice15.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");


                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK, WAVING AT THEM";
                                    secondParD.textContent = "Its sort of like I'm stranded or something";
                                    thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                    fourthParD.textContent = "";
                                    fifthParD.textContent = "";
                                    sixthParD.textContent = "";
                                    seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                    eighthParD.textContent = "I have been asleep for most of it";
                                    ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                    tenthParD.textContent = "But all I know is that I'm safe now.";
                                    eleventhParD.textContent = "And part of that is due to you-- most of it";
                                    twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                    thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                    fourteenthParD.textContent = "So thank you.";
                                    fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);



                                });


                            });


                        });


                        //will, is that you?, nice to hear from you again!,  dont go in the cabin, ok fine go in the cabin. dont check out the smell, continue to do what your doing.
                        choice9D.addEventListener("click", function() {
                            choice9D.style.backgroundColor = "red";

                            var firstParl = document.createElement("p");
                            var secondParl = document.createElement("p");
                            var thirdParl = document.createElement("p");
                            var fourthParl = document.createElement("p");
                            var fifthParl = document.createElement("p");
                            var sixthParl = document.createElement("p");
                            var seventhParl = document.createElement("p");
                            var eighthParl = document.createElement("p");
                            var ninthParl = document.createElement("p");
                            var tenthParl = document.createElement("p");
                            var eleventhParl = document.createElement("p");
                            var twelthParl = document.createElement("p");


                            var choice9l = document.createElement("input");
                            var choice10l = document.createElement("input");

                            firstParl.className = 'you';
                            secondParl.className = 'you';
                            thirdParl.className = 'you';
                            fourthParl.className = 'you';
                            fifthParl.className = 'you';
                            sixthParl.className = 'you';
                            seventhParl.className = 'you';
                            eighthParl.className = 'you';
                            ninthParl.className = 'you';
                            tenthParl.className = 'you';
                            eleventhParl.className = 'you';
                            twelthParl.className = 'you';

                            choice9l.className = 'oP';
                            choice10l.className = 'oP';

                            firstParl.textContent = "Ok, almost finished....";
                            secondParl.textContent = "Just stuffing in a waterbottle...";
                            thirdParl.textContent = "oh, also by the way I got a blanket from the couch because it's cold outside.";
                            fourthParl.textContent = "because its cold outside and I am NOT sleeping here";
                            fifthParl.textContent = "So i'm not even going to give you that opti--";
                            sixthParl.textContent = "HOLY CRAP!!! CRAP CRAP CRAP CRAP!!!";
                            seventhParl.textContent = "THERES A ZOMBIE";
                            eighthParl.textContent = "Its a crawler, so its slow but Its closer to the door where the staircase is, of corse because it came from upstairs";
                            ninthParl.textContent = "Theres a window on the other side of the room but farther from the zombie than the door is, but it will take me a couple seconds to open it.";
                            tenthParl.textContent = "or should I just run for the door, the zombie is like 10 feet from the door..";
                            eleventhParl.textContent = "..and 15 feet from the window--";
                            twelthParl.textContent = "QUICK! WHICH ONE";


                            choice9l.value = "THE WINDOW!!";
                            choice10l.value = "THE DOOR!!";

                            choice9l.type = 'button';
                            choice10l.type = 'button';

                            container.appendChild(firstParl);
                            container.appendChild(secondParl);
                            container.appendChild(thirdParl);
                            container.appendChild(fourthParl);
                            container.appendChild(fifthParl);
                            container.appendChild(sixthParl);
                            container.appendChild(seventhParl);
                            container.appendChild(eighthParl);
                            container.appendChild(ninthParl);
                            container.appendChild(tenthParl);
                            container.appendChild(eleventhParl);
                            container.appendChild(twelthParl);

                            container.appendChild(choice9l);
                            container.appendChild(choice10l);



                            choice9l.addEventListener("click", function() {

                                choice9l.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choicefourD = document.createElement("input");
                                var choicefiveD = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';

                                choicefourD.className = 'oP';
                                choicefiveD.className = 'oP';


                                firstParD.textContent = "OK, HEADING TO THE WINDOW!";
                                secondParD.textContent = "Fiddling with the STUPID LATCH LEVER WINDOW THING!!";
                                thirdParD.textContent = "COME ON!!!!";
                                fourthParD.textContent = "OK, its FRIKIN FINALLY OPEN";
                                fifthParD.textContent = "OMG THE ZOMBIE IS RIGHT BEHIND ME";
                                sixthParD.textContent = "DIVING THROUGH THE WINDOW";
                                seventhParD.textContent = "ANNNNnnnnnd";
                                eighthParD.textContent = "OUCH!";
                                ninthParD.textContent = "Landed on my face but I have my backpack and I am OUT OF HERE.";
                                tenthParD.textContent = "Running...";
                                eleventhParD.textContent = "Ok, I'm a safe distance by now.";
                                twelthParD.textContent = "well... Now what?";
                                thirteenthParD.textContent = "Which way should I go, I could keep going past the house from where I came from, where it starts to go downhil-- ";
                                fourteenthParD.textContent = "Or I can go to the right where it goes uphill up this mountain, maybe I would be able to see where I am accually going. ";
                                fifteenthParD.textContent = "What do you think?";

                                choicefourD.value = "Go straight, downhill is easier and wherever your going you would be able to get there quicker.";
                                choicefiveD.value = "Go to the right, you are trying to find your family. You will know better where to go to find them.";

                                choicefourD.type = 'button';
                                choicefiveD.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);

                                container.appendChild(choicefourD);
                                container.appendChild(choicefiveD);

                                /* CONTINUE THIS CHOICE LATER
                                 *CONTINUE THIS CHOICE LATER
                                 *CONTINUE THIS CHOICE LATER
                                 */










                                choicefiveD.addEventListener("click", function() {

                                    choicefiveD.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");

                                    var choice15 = document.createElement("input");
                                    var choice16 = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';

                                    choice15.className = 'oP';
                                    choice16.className = 'oP';


                                    firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                    secondParD.textContent = "";
                                    thirdParD.textContent = "";
                                    fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                    fifthParD.textContent = "--Wait, theres some noise...";
                                    sixthParD.textContent = "It sounds like, ";
                                    seventhParD.textContent = "Like a helicopter...";
                                    eighthParD.textContent = "OH CRAP!";
                                    ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                    tenthParD.textContent = "Oh crap they see me";
                                    eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                    twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                    thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                    fourteenthParD.textContent = "They are going to kill Me!";
                                    fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                    choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                    choice16.value = "RUN!!";

                                    choice15.type = 'button';
                                    choice16.type = 'button';

                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);

                                    container.appendChild(choice15);
                                    container.appendChild(choice16);




                                    choice16.addEventListener("click", function() {

                                        choice16.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");

                                        var choicefourD = document.createElement("input");
                                        var choicefiveD = document.createElement("input");

                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';




                                        firstParD.textContent = "OK";
                                        secondParD.textContent = "RUNNING";
                                        thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                        fourthParD.textContent = "AHH";
                                        fifthParD.textContent = "THEY ARE SHOOTING!!";
                                        sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                        seventhParD.textContent = "OH MY GOD";
                                        eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                        ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                        tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                        eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                        twelthParD.textContent = "So thank you for that, I mean it.";
                                        thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                        fourteenthParD.textContent = "goodbye, Barry.";
                                        fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);





                                    });


                                    choice15.addEventListener("click", function() {

                                        choice15.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");


                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';




                                        firstParD.textContent = "OK, WAVING AT THEM";
                                        secondParD.textContent = "Its sort of like I'm stranded or something";
                                        thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                        fourthParD.textContent = "";
                                        fifthParD.textContent = "";
                                        sixthParD.textContent = "";
                                        seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                        eighthParD.textContent = "I have been asleep for most of it";
                                        ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                        tenthParD.textContent = "But all I know is that I'm safe now.";
                                        eleventhParD.textContent = "And part of that is due to you-- most of it";
                                        twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                        thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                        fourteenthParD.textContent = "So thank you.";
                                        fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);



                                    });


                                });






                            });



                            choice10l.addEventListener("click", function() {

                                choice10l.style.backgroundColor = "red";

                                var firstParq = document.createElement("p");
                                var secondParq = document.createElement("p");
                                var thirdParq = document.createElement("p");
                                var fourthParq = document.createElement("p");
                                var fifthParq = document.createElement("p");
                                var sixthParq = document.createElement("p");
                                var seventhParq = document.createElement("p");
                                var eighthParq = document.createElement("p");
                                var ninthParq = document.createElement("p");
                                var tenthParq = document.createElement("p");
                                var eleventhParq = document.createElement("p");
                                var twelthParq = document.createElement("p");
                                var thirteenthParq = document.createElement("p");
                                var fourteenthParq = document.createElement("p");
                                var fifteenthParq = document.createElement("p");

                                var choicefourq = document.createElement("input");
                                var choicefiveq = document.createElement("input");

                                firstParq.className = 'you';
                                secondParq.className = 'you';
                                thirdParq.className = 'you';
                                fourthParq.className = 'you';
                                fifthParq.className = 'you';
                                sixthParq.className = 'you';
                                seventhParq.className = 'you';
                                eighthParq.className = 'you';
                                ninthParq.className = 'you';
                                tenthParq.className = 'you';
                                eleventhParq.className = 'you';
                                twelthParq.className = 'you';
                                thirteenthParq.className = 'you';
                                fourteenthParq.className = 'you';
                                fifteenthParq.className = 'you';

                                choicefourq.className = 'oP';
                                choicefiveq.className = 'oP';


                                firstParq.textContent = "OK, HEADING TO THE DOOR!";
                                secondParq.textContent = "Fiddling with the STUPID HANDLE THING!!";
                                thirdParq.textContent = "CRAP!";
                                fourthParq.textContent = "ITS OPEN AND I'M RUNNING OUT AAAnnnd";
                                fifthParq.textContent = "AHHHH";
                                sixthParq.textContent = "ZOMBIE GRABED MY LEGG!";
                                seventhParq.textContent = "AHHHHOUCH";
                                eighthParq.textContent = "OUCH!";
                                ninthParq.textContent = "IT SCRATCHED ME";
                                tenthParq.textContent = "IM BLEEDING";
                                eleventhParq.textContent = "OH MY GOD, this is it. If you get scratched by a zombie you turn into one of them";
                                twelthParq.textContent = "So I guess this is it.";
                                thirteenthParq.textContent = "I just want to thank you for being there for me, for staying with me and giving me advice, even if it didnt work out in the end--";
                                fourteenthParq.textContent = "But I'm grateful for you. Your a good friend.";
                                fifteenthParq.textContent = "So I guess this is goodbye.";


                                container.appendChild(firstParq);
                                container.appendChild(secondParq);
                                container.appendChild(thirdParq);
                                container.appendChild(fourthParq);
                                container.appendChild(fifthParq);
                                container.appendChild(sixthParq);
                                container.appendChild(seventhParq);
                                container.appendChild(eighthParq);
                                container.appendChild(ninthParq);
                                container.appendChild(tenthParq);
                                container.appendChild(eleventhParq);
                                container.appendChild(twelthParq);
                                container.appendChild(thirteenthParq);
                                container.appendChild(fourteenthParq);
                                container.appendChild(fifteenthParq);


                            });

                        });


                    });

                    //will is that you?, nice to hear from you again!, go into the cabin.
                    choicefourD.addEventListener("click", function() {
                        choicefourD.style.backgroundColor = "red";


                        var firstParG = document.createElement("p");
                        var secondParG = document.createElement("p");
                        var thirdParG = document.createElement("p");
                        var fourthParG = document.createElement("p");
                        var fifthParG = document.createElement("p");
                        var sixthParG = document.createElement("p");
                        var seventhParG = document.createElement("p");
                        var choice6B = document.createElement("input");
                        var choice7B = document.createElement("input");

                        firstParG.className = 'you';
                        secondParG.className = 'you';
                        thirdParG.className = 'you';
                        fourthParG.className = 'you';
                        fifthParG.className = 'you';
                        sixthParG.className = 'you';
                        seventhParG.className = 'you';

                        choice6B.className = 'oP';
                        choice7B.className = 'oP';

                        firstParG.textContent = "Ok, good idea, I'm a little bit scared...";
                        secondParG.textContent = "But I'm heading to the door... ";
                        thirdParG.textContent = "Ok, I made it to the porch, I'm going to grab this leaf and use it to open the door.";
                        fourthParG.textContent = "Because I REALLY dont want to touch that ketchup juice.";
                        fifthParG.textContent = "Peeking in.....Ok I'm sneeking in, very sneekily... Looks just like a normal cabin, OOOO THE KITCHEN!";
                        sixthParG.textContent = "I cant even explain in words how hungry I am, even though I just did pretty much, whatever I'm already making myself some cerial.";
                        seventhParG.textContent = "*gag* Dude, there is this aweful smell coming from upstairs...";

                        choice6B.value = "Go check it out.";
                        choice7B.value = "Stay clear of it, you probably dont need to worry about it.";

                        choice6B.type = 'button';
                        choice7B.type = 'button';

                        container.appendChild(firstParG);
                        container.appendChild(secondParG);
                        container.appendChild(thirdParG);
                        container.appendChild(fourthParG);
                        container.appendChild(fifthParG);
                        container.appendChild(sixthParG);
                        container.appendChild(seventhParG);

                        container.appendChild(choice6B);
                        container.appendChild(choice7B);


                        //will is that you?, nice to hear from you again!, go into the cabin., check out the smell.
                        choice6B.addEventListener("click", function() {

                            choice6B.style.backgroundColor = "red";

                            var firstParK = document.createElement("p");
                            var secondParK = document.createElement("p");
                            var thirdParK = document.createElement("p");
                            var fourthParK = document.createElement("p");
                            var fifthParK = document.createElement("p");
                            var sixthParK = document.createElement("p");
                            var seventhParK = document.createElement("p");
                            var eighthParK = document.createElement("p");
                            var ninthParK = document.createElement("p");
                            var tenthParK = document.createElement("p");
                            var eleventhParK = document.createElement("p");
                            var twelthParK = document.createElement("p");
                            var thirteenthParK = document.createElement("p");
                            var fourteenthParK = document.createElement("p");
                            var fifteenthParK = document.createElement("p");

                            firstParK.className = 'you';
                            secondParK.className = 'you';
                            thirdParK.className = 'you';
                            fourthParK.className = 'you';
                            fifthParK.className = 'you';
                            sixthParK.className = 'you';
                            seventhParK.className = 'you';
                            eighthParK.className = 'you';
                            ninthParK.className = 'you';
                            tenthParK.className = 'you';
                            eleventhParK.className = 'you';
                            twelthParK.className = 'you';
                            thirteenthParK.className = 'you';
                            fourteenthParK.className = 'you';
                            fifteenthParK.className = 'you';

                            firstParK.textContent = "Ok, going up too see what it is...";
                            secondParK.textContent = "I'm a little scared but I'm going to go make sure theres nothing up there...";
                            thirdParK.textContent = "This is like, really creepy. Like the floreboards are creeking, its dark, whatelse do you need??";
                            fourthParK.textContent = "But I'm going to face my fears. Nothing can scare me!";
                            fifthParK.textContent = "OH MY GOD WHAT WAS THAT NOISE?!?!?!";
                            sixthParK.textContent = "I stand corrected";
                            seventhParK.textContent = "I am very easily scared.";
                            eighthParK.textContent = "The smell is getting strongerrRRRRRROOOHHHAAHHHH MY GOD";
                            ninthParK.textContent = "GOD GOD GOD GOD NOOOOO";
                            tenthParK.textContent = "ZOMBIE";
                            eleventhParK.textContent = "GOT M--AHHHHH BITTING ME, DYING TO DEATH!!";
                            twelthParK.textContent = "WHATS EVEN WORSE IS THAT THE LAST THING I SAID DOESNT EVEN MAKE SENCE!!!";
                            thirteenthParK.textContent = "It's too late to do anything, I will turn into a zombie any moment now.";
                            fourteenthParK.textContent = "So I guess this is goodbye, thank you form sticking by me all this time though.";
                            fifteenthParK.textContent = "So goodbye";


                            container.appendChild(firstParK);
                            container.appendChild(secondParK);
                            container.appendChild(thirdParK);
                            container.appendChild(fourthParK);
                            container.appendChild(fifthParK);
                            container.appendChild(sixthParK);
                            container.appendChild(seventhParK);
                            container.appendChild(eighthParK);
                            container.appendChild(ninthParK);
                            container.appendChild(tenthParK);
                            container.appendChild(eleventhParK);
                            container.appendChild(twelthParK);
                            container.appendChild(thirteenthParK);
                            container.appendChild(fourteenthParK);
                            container.appendChild(fifteenthParK);


                        });



                        //will is that you?, nice to hear from you again!, dont go in the cabin.

                        choicefiveD.addEventListener("click", function() {
                            choicefiveD.style.backgroundColor = "red";
                            var firstParI = document.createElement("p");
                            var secondParI = document.createElement("p");
                            var thirdParI = document.createElement("p");

                            var choice6I = document.createElement("input");
                            var choice7I = document.createElement("input");


                            firstParI.className = 'you';
                            secondParI.className = 'you';
                            thirdParI.className = 'you';

                            choice6I.className = 'oP';
                            choice7I.cassName = 'oP';


                            firstParI.textContent = "Ok, thats probably smart considering there might be a zombie or something in there";
                            secondParI.textContent = "Even though I REALLY want food and water right now....";
                            thirdParI.textContent = "...What if I just went in REEEAALLY quick, got some food and water and left in a flash?";

                            choice6I.value = "No, you really shoudln't, what if there was a zombie in there?";
                            choice7I.value = "OK fine, but go REALLY quick, get what you need, and leave imediatly";

                            choice6I.type = 'button';
                            choice7I.type = 'button';

                            container.appendChild(firstParI);
                            container.appendChild(secondParI);
                            container.appendChild(thirdParI);

                            container.appendChild(choice6I);
                            container.appendChild(choice7I);


                        });
                    });
                });
            });
        });
}
//this is the second option you can chose in the begining, thats not how the song goes.


function addText2() {
    // container.innerHTML += "<p class='you' > Well, I'm going to have to improvise. The original song doesnt say what I want it too. </p> <p class='you' >Anyway, Reconize me? I'm back from like a while ago, I've lost track of time.</p> <p class='you' > But I was in the zombie apocolips that happened while you were on vacation, and you kept in contact with me. </p><p class='you'> And somehow I survived and got away...</p><p class='you'> Not knowing that the government was quarantined the entire area so it wouldnt spread.</p><p class='you'>But it would have killed everyone there as well...</p><p class='you'>So somehow I got away and ran through the forest, but I'm also the governments most wanted because they think I may have the disease or soemthing.";
    var firstPara = document.createElement("p");
    var secondPara = document.createElement("p");
    var thirdPara = document.createElement("p");
    var fourthPara = document.createElement("p");
    var fifthPara = document.createElement("p");
    var sixthPara = document.createElement("p");

    var choice3a = document.createElement("input");
    var choice4a = document.createElement("input");


    firstPara.className = 'you';
    secondPara.className = 'you';
    thirdPara.className = 'you';
    fourthPara.className = 'you';
    fifthPara.className = 'you';
    sixthPara.className = 'you';
    choice3a.className = 'oP';
    choice4a.className = 'oP';

    firstPara.textContent = "Well, I'm going to have to improvise. The original song doesnt say what I want it too. ";
    secondPara.textContent = "Anyway, Reconize me? I'm back from like a while ago, I've lost track of time.";
    thirdPara.textContent = " But I was in the zombie apocolips that happened while you were on vacation, and you kept in contact with me.";
    fourthPara.textContent = "And somehow I survived and got away...";
    fifthPara.textContent = "Not knowing that the government was quarantined the entire area so it wouldnt spread.";
    sixthPara.textContent = "But it would have killed everyone there as well...";

    choice3a.value = "Yeah I remember, but we lost contact when you ran out of battery... So how are you talking to me?";
    choice4a.value = "You must have been traveling for weeks now, where are you now?";

    choice3a.type = 'button';
    choice4a.type = 'button';

    container.appendChild(firstPara);
    container.appendChild(secondPara);
    container.appendChild(thirdPara);
    container.appendChild(fourthPara);
    container.appendChild(fifthPara);
    container.appendChild(sixthPara);
    container.appendChild(choice3a);
    container.appendChild(choice4a);






















    //thats not how the song goes, yeah I remember, but how are you talking to me?
    choice4a.addEventListener("click", function() {

        choice4a.style.backgroundColor = "red";

        var firstParC = document.createElement("p");
        var secondParC = document.createElement("p");
        var thirdParC = document.createElement("p");
        var fourthParC = document.createElement("p");
        var fifthParC = document.createElement("p");
        var sixthParC = document.createElement("p");
        var seventhParC = document.createElement("p");
        var eighthParC = document.createElement("p");
        var ninthParC = document.createElement("p");
        var tenthParC = document.createElement("p");

        var choice4C = document.createElement("input");
        var choice5C = document.createElement("input");

        firstParC.className = 'you';
        secondParC.className = 'you';
        thirdParC.className = 'you';
        fourthParC.className = 'you';
        fifthParC.className = 'you';
        sixthParC.className = 'you';
        seventhParC.className = 'you';
        eighthParC.className = 'you';
        ninthParC.className = 'you';
        tenthParC.className = 'you';
        choice4C.className = 'oP';
        choice5C.className = 'oP';

        firstParC.textContent = "Yeah, it has been forever, or at least so long that I've lost track of time, and we know from the movies that means forever, but anyway-- I was walking through the forest, and I came across some clearing with some hut thing.";
        secondParC.textContent = "more of a cabin, but I started exploring it and before I went in, well I still havn't, but I started exploring around it and found a generator";
        thirdParC.textContent = "Luckily I had my handy dandy USB drivge and charged my phone.";
        fourthParC.textContent = "I still havn't gone in yet, It looks kinda abandoned but I'm not sure if I should go in.";
        fifthParC.textContent = "It's pretty creepy and its getting dar-- OH CRAP, is that...";
        sixthParC.textContent = "Is that blood on the handle of the door??!";
        seventhParC.textContent = "Don't forget, this is the zombie appocolipse--";
        eighthParC.textContent = "and whoevers blood that is it doesn't look like they tripped over a bug or something.";
        ninthParC.textContent = "So what do you recon, should I go in? Keep in mind though there could be some resources in there, I am running low on them and I have been eating grass and nuts for the past few days...";
        tenthParC.textContent = "And dont even ask me what I have been drinking.";

        choice4C.value = "If you have been drinking what I think you are, it's probably worth it. Go in";
        choice5C.value = "No, you shouldn't. Whatevers in there could be dangerouse.";

        choice4C.type = 'button';
        choice5C.type = 'button';

        container.appendChild(firstParC);
        container.appendChild(secondParC);
        container.appendChild(thirdParC);
        container.appendChild(fourthParC);
        container.appendChild(fifthParC);
        container.appendChild(sixthParC);
        container.appendChild(seventhParC);
        container.appendChild(eighthParC);
        container.appendChild(ninthParC);
        container.appendChild(tenthParC);

        container.appendChild(choice4C);
        container.appendChild(choice5C);



        //thats not how the song goes, you must have been traveling for weeks now, where are you?, dont go in the cabin
        choice5C.addEventListener("click", function() {
            choice5C.style.backgroundColor = "red";
            var firstParI = document.createElement("p");
            var secondParI = document.createElement("p");
            var thirdParI = document.createElement("p");

            var choice6I = document.createElement("input");
            var choice7I = document.createElement("input");


            firstParI.className = 'you';
            secondParI.className = 'you';
            thirdParI.className = 'you';

            choice6I.className = 'oP';
            choice7I.cassName = 'oP';


            firstParI.textContent = "Ok, thats probably smart considering there might be a zombie or something in there";
            secondParI.textContent = "Even though I REALLY want food and water right now....";
            thirdParI.textContent = "...What if I just went in REEEAALLY quick, got some food and water and left in a flash?";

            choice6I.value = "No, you really shoudln't, what if there was a zombie in there?";
            choice7I.value = "OK fine, but go REALLY quick, get what you need, and leave imediatly";

            choice6I.type = 'button';
            choice7I.type = 'button';

            container.appendChild(firstParI);
            container.appendChild(secondParI);
            container.appendChild(thirdParI);

            container.appendChild(choice6I);
            container.appendChild(choice7I);


            //thats not how the song goes, you have been traveling for weeks now, where are you?, go in the cabin, dont go in the cabin.
            choice6I.addEventListener("click", function() {
                choice6I.style.backgroundColor = "red";


                var firstParQ = document.createElement("p");
                var secondParQ = document.createElement("p");
                var thirdParQ = document.createElement("p");
                var fourthParQ = document.createElement("p");
                var fifthParQ = document.createElement("p");
                var sixthParQ = document.createElement("p");
                var seventhParQ = document.createElement("p");
                var eighthParQ = document.createElement("p");
                var ninthParQ = document.createElement("p");
                var choice11 = document.createElement("input");
                var choice12 = document.createElement("input");


                firstParQ.className = 'you';
                secondParQ.className = 'you';
                thirdParQ.className = 'you';
                fourthParQ.className = 'you';
                fifthParQ.className = 'you';
                sixthParQ.className = 'you';
                seventhParQ.className = 'you';
                eighthParQ.className = 'you';
                ninthParQ.className = 'you';

                choice11.className = 'oP';
                choice12.className = 'oP';

                firstParQ.textContent = "Ok";
                secondParQ.textContent = "I have now come to a spot where there are two ways I can go. ";
                thirdParQ.textContent = "To the right or straight ahead past the cabin.";
                fourthParQ.textContent = "If I keep going straight past the cabin it starts to go downhill, maybe some water like a river or something.";
                fifthParQ.textContent = "If I go to the right it goes uphill but that might not so bad.";
                sixthParQ.textContent = "Because I do have a goal to find my family...";
                seventhParQ.textContent = "If they are still alive--";
                eighthParQ.textContent = "But if I go uphill I can see where I'm going more from some that veiwpoint I see up there.";
                ninthParQ.textContent = "So what do think would be best?";

                choice11.value = "Go straight ahead, downhill is easier and you need water.";
                choice12.value = "Go uphill, you need to know where you are going and you need to find your family.";

                container.appendChild(firstParQ);
                container.appendChild(secondParQ);
                container.appendChild(thirdParQ);
                container.appendChild(fourthParQ);
                container.appendChild(fifthParQ);
                container.appendChild(sixthParQ);
                container.appendChild(seventhParQ);
                container.appendChild(eighthParQ);
                container.appendChild(ninthParQ);

                container.appendChild(choice11);
                container.appendChild(choice12);














                choice12.addEventListener("click", function() {

                    choice12.style.backgroundColor = "red";

                    var firstParD = document.createElement("p");
                    var secondParD = document.createElement("p");
                    var thirdParD = document.createElement("p");
                    var fourthParD = document.createElement("p");
                    var fifthParD = document.createElement("p");
                    var sixthParD = document.createElement("p");
                    var seventhParD = document.createElement("p");
                    var eighthParD = document.createElement("p");
                    var ninthParD = document.createElement("p");
                    var tenthParD = document.createElement("p");
                    var eleventhParD = document.createElement("p");
                    var twelthParD = document.createElement("p");
                    var thirteenthParD = document.createElement("p");
                    var fourteenthParD = document.createElement("p");
                    var fifteenthParD = document.createElement("p");

                    var choice15 = document.createElement("input");
                    var choice16 = document.createElement("input");

                    firstParD.className = 'you';
                    secondParD.className = 'you';
                    thirdParD.className = 'you';
                    fourthParD.className = 'you';
                    fifthParD.className = 'you';
                    sixthParD.className = 'you';
                    seventhParD.className = 'you';
                    eighthParD.className = 'you';
                    ninthParD.className = 'you';
                    tenthParD.className = 'you';
                    eleventhParD.className = 'you';
                    twelthParD.className = 'you';
                    thirteenthParD.className = 'you';
                    fourteenthParD.className = 'you';
                    fifteenthParD.className = 'you';

                    choice15.className = 'oP';
                    choice16.className = 'oP';


                    firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                    secondParD.textContent = "";
                    thirdParD.textContent = "";
                    fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                    fifthParD.textContent = "--Wait, theres some noise...";
                    sixthParD.textContent = "It sounds like, ";
                    seventhParD.textContent = "Like a helicopter...";
                    eighthParD.textContent = "OH CRAP!";
                    ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                    tenthParD.textContent = "Oh crap they see me";
                    eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                    twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                    thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                    fourteenthParD.textContent = "They are going to kill Me!";
                    fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                    choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                    choice16.value = "RUN!!";

                    choice15.type = 'button';
                    choice16.type = 'button';

                    container.appendChild(firstParD);
                    container.appendChild(secondParD);
                    container.appendChild(thirdParD);
                    container.appendChild(fourthParD);
                    container.appendChild(fifthParD);
                    container.appendChild(sixthParD);
                    container.appendChild(seventhParD);
                    container.appendChild(eighthParD);
                    container.appendChild(ninthParD);
                    container.appendChild(tenthParD);
                    container.appendChild(eleventhParD);
                    container.appendChild(twelthParD);
                    container.appendChild(thirteenthParD);
                    container.appendChild(fourteenthParD);
                    container.appendChild(fifteenthParD);

                    container.appendChild(choice15);
                    container.appendChild(choice16);




                    choice16.addEventListener("click", function() {

                        choice16.style.backgroundColor = "red";

                        var firstParD = document.createElement("p");
                        var secondParD = document.createElement("p");
                        var thirdParD = document.createElement("p");
                        var fourthParD = document.createElement("p");
                        var fifthParD = document.createElement("p");
                        var sixthParD = document.createElement("p");
                        var seventhParD = document.createElement("p");
                        var eighthParD = document.createElement("p");
                        var ninthParD = document.createElement("p");
                        var tenthParD = document.createElement("p");
                        var eleventhParD = document.createElement("p");
                        var twelthParD = document.createElement("p");
                        var thirteenthParD = document.createElement("p");
                        var fourteenthParD = document.createElement("p");
                        var fifteenthParD = document.createElement("p");

                        var choicefourD = document.createElement("input");
                        var choicefiveD = document.createElement("input");

                        firstParD.className = 'you';
                        secondParD.className = 'you';
                        thirdParD.className = 'you';
                        fourthParD.className = 'you';
                        fifthParD.className = 'you';
                        sixthParD.className = 'you';
                        seventhParD.className = 'you';
                        eighthParD.className = 'you';
                        ninthParD.className = 'you';
                        tenthParD.className = 'you';
                        eleventhParD.className = 'you';
                        twelthParD.className = 'you';
                        thirteenthParD.className = 'you';
                        fourteenthParD.className = 'you';
                        fifteenthParD.className = 'you';




                        firstParD.textContent = "OK";
                        secondParD.textContent = "RUNNING";
                        thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                        fourthParD.textContent = "AHH";
                        fifthParD.textContent = "THEY ARE SHOOTING!!";
                        sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                        seventhParD.textContent = "OH MY GOD";
                        eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                        ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                        tenthParD.textContent = "THIS IS DEFIANTLY IT";
                        eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                        twelthParD.textContent = "So thank you for that, I mean it.";
                        thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                        fourteenthParD.textContent = "goodbye, Barry.";
                        fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                        container.appendChild(firstParD);
                        container.appendChild(secondParD);
                        container.appendChild(thirdParD);
                        container.appendChild(fourthParD);
                        container.appendChild(fifthParD);
                        container.appendChild(sixthParD);
                        container.appendChild(seventhParD);
                        container.appendChild(eighthParD);
                        container.appendChild(ninthParD);
                        container.appendChild(tenthParD);
                        container.appendChild(eleventhParD);
                        container.appendChild(twelthParD);
                        container.appendChild(thirteenthParD);
                        container.appendChild(fourteenthParD);
                        container.appendChild(fifteenthParD);





                    });


                    choice15.addEventListener("click", function() {

                        choice15.style.backgroundColor = "red";

                        var firstParD = document.createElement("p");
                        var secondParD = document.createElement("p");
                        var thirdParD = document.createElement("p");
                        var fourthParD = document.createElement("p");
                        var fifthParD = document.createElement("p");
                        var sixthParD = document.createElement("p");
                        var seventhParD = document.createElement("p");
                        var eighthParD = document.createElement("p");
                        var ninthParD = document.createElement("p");
                        var tenthParD = document.createElement("p");
                        var eleventhParD = document.createElement("p");
                        var twelthParD = document.createElement("p");
                        var thirteenthParD = document.createElement("p");
                        var fourteenthParD = document.createElement("p");
                        var fifteenthParD = document.createElement("p");


                        firstParD.className = 'you';
                        secondParD.className = 'you';
                        thirdParD.className = 'you';
                        fourthParD.className = 'you';
                        fifthParD.className = 'you';
                        sixthParD.className = 'you';
                        seventhParD.className = 'you';
                        eighthParD.className = 'you';
                        ninthParD.className = 'you';
                        tenthParD.className = 'you';
                        eleventhParD.className = 'you';
                        twelthParD.className = 'you';
                        thirteenthParD.className = 'you';
                        fourteenthParD.className = 'you';
                        fifteenthParD.className = 'you';




                        firstParD.textContent = "OK, WAVING AT THEM";
                        secondParD.textContent = "Its sort of like I'm stranded or something";
                        thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                        fourthParD.textContent = "";
                        fifthParD.textContent = "";
                        sixthParD.textContent = "";
                        seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                        eighthParD.textContent = "I have been asleep for most of it";
                        ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                        tenthParD.textContent = "But all I know is that I'm safe now.";
                        eleventhParD.textContent = "And part of that is due to you-- most of it";
                        twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                        thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                        fourteenthParD.textContent = "So thank you.";
                        fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                        container.appendChild(firstParD);
                        container.appendChild(secondParD);
                        container.appendChild(thirdParD);
                        container.appendChild(fourthParD);
                        container.appendChild(fifthParD);
                        container.appendChild(sixthParD);
                        container.appendChild(seventhParD);
                        container.appendChild(eighthParD);
                        container.appendChild(ninthParD);
                        container.appendChild(tenthParD);
                        container.appendChild(eleventhParD);
                        container.appendChild(twelthParD);
                        container.appendChild(thirteenthParD);
                        container.appendChild(fourteenthParD);
                        container.appendChild(fifteenthParD);



                    });


                });













            });



            //thats not how the song goes, you have been traveling for weeks now, where are you?, go in the cabin
            choice4C.addEventListener("click", function() {
                choice4C.style.backgroundColor = "red";
                var firstParH = document.createElement("p");
                var secondParH = document.createElement("p");
                var thirdParH = document.createElement("p");
                var fourthParH = document.createElement("p");
                var fifthParH = document.createElement("p");
                var sixthParH = document.createElement("p");
                var seventhParH = document.createElement("p");

                var choice6H = document.createElement("input");
                var choice7H = document.createElement("input");

                firstParH.className = 'you';
                secondParH.className = 'you';
                thirdParH.className = 'you';
                fourthParH.className = 'you';
                fifthParH.className = 'you';
                sixthParH.className = 'you';
                seventhParH.className = 'you';

                choice6H.className = 'oP';
                choice7H.className = 'oP';

                firstParH.textContent = "Ok, good idea, I'm a little bit scared...";
                secondParH.textContent = "But I'm heading to the door... ";
                thirdParH.textContent = "Ok, I made it to the porch, I'm going to grab this leaf and use it to open the door.";
                fourthParH.textContent = "Because I REALLY dont want to touch that ketchup juice.";
                fifthParH.textContent = "Peeking in.....Ok I'm sneeking in, very sneekily... Looks just like a normal cabin, OOOO THE KITCHEN!";
                sixthParH.textContent = "I cant even explain in words how hungry I am, even though I just did pretty much, whatever I'm already making myself some cerial.";
                seventhParH.textContent = "*gag* Dude, there is this aweful smell coming from upstairs...";

                choice6H.value = "Go check it out.";
                choice7H.value = "Stay clear of it, you probably dont need to worry about it.";

                choice6H.type = 'button';
                choice7H.type = 'button';

                container.appendChild(firstParH);
                container.appendChild(secondParH);
                container.appendChild(thirdParH);
                container.appendChild(fourthParH);
                container.appendChild(fifthParH);
                container.appendChild(sixthParH);
                container.appendChild(seventhParH);

                container.appendChild(choice6H);
                container.appendChild(choice7H);


                //thats not how the song goes, you have been traveling for weeks now, where are you?, go in the cabin, check out the smell.
                choice6H.addEventListener("click", function() {
                    choice6H.style.backgroundColor = "red";
                    var firstParK = document.createElement("p");
                    var secondParK = document.createElement("p");
                    var thirdParK = document.createElement("p");
                    var fourthParK = document.createElement("p");
                    var fifthParK = document.createElement("p");
                    var sixthParK = document.createElement("p");
                    var seventhParK = document.createElement("p");
                    var eighthParK = document.createElement("p");
                    var ninthParK = document.createElement("p");
                    var tenthParK = document.createElement("p");
                    var eleventhParK = document.createElement("p");
                    var twelthParK = document.createElement("p");
                    var thirteenthParK = document.createElement("p");
                    var fourteenthParK = document.createElement("p");
                    var fifteenthParK = document.createElement("p");

                    firstParK.className = 'you';
                    secondParK.className = 'you';
                    thirdParK.className = 'you';
                    fourthParK.className = 'you';
                    fifthParK.className = 'you';
                    sixthParK.className = 'you';
                    seventhParK.className = 'you';
                    eighthParK.className = 'you';
                    ninthParK.className = 'you';
                    tenthParK.className = 'you';
                    eleventhParK.className = 'you';
                    twelthParK.className = 'you';
                    thirteenthParK.className = 'you';
                    fourteenthParK.className = 'you';
                    fifteenthParK.className = 'you';

                    firstParK.textContent = "Ok, going up too see what it is...";
                    secondParK.textContent = "I'm a little scared but I'm going to go make sure theres nothing up there...";
                    thirdParK.textContent = "This is like, really creepy. Like the floreboards are creeking, its dark, whatelse do you need??";
                    fourthParK.textContent = "But I'm going to face my fears. Nothing can scare me!";
                    fifthParK.textContent = "OH MY GOD WHAT WAS THAT NOISE?!?!?!";
                    sixthParK.textContent = "I stand corrected";
                    seventhParK.textContent = "I am very easily scared.";
                    eighthParK.textContent = "The smell is getting strongerrRRRRRROOOHHHAAHHHH MY GOD";
                    ninthParK.textContent = "GOD GOD GOD GOD NOOOOO";
                    tenthParK.textContent = "ZOMBIE";
                    eleventhParK.textContent = "GOT M--AHHHHH BITTING ME, DYING TO DEATH!!";
                    twelthParK.textContent = "WHATS EVEN WORSE IS THAT THE LAST THING I SAID DOESNT EVEN MAKE SENCE!!!";
                    thirteenthParK.textContent = "It's too late to do anything, I will turn into a zombie any moment now.";
                    fourteenthParK.textContent = "So I guess this is goodbye, thank you form sticking by me all this time though.";
                    fifteenthParK.textContent = "So goodbye";


                    container.appendChild(firstParK);
                    container.appendChild(secondParK);
                    container.appendChild(thirdParK);
                    container.appendChild(fourthParK);
                    container.appendChild(fifthParK);
                    container.appendChild(sixthParK);
                    container.appendChild(seventhParK);
                    container.appendChild(eighthParK);
                    container.appendChild(ninthParK);
                    container.appendChild(tenthParK);
                    container.appendChild(eleventhParK);
                    container.appendChild(twelthParK);
                    container.appendChild(thirteenthParK);
                    container.appendChild(fourteenthParK);
                    container.appendChild(fifteenthParK);


                });


                choice7H.addEventListener("click", function() {
                    choice7H.style.backgroundColor = "red";


                    var firstParD = document.createElement("p");
                    var secondParD = document.createElement("p");
                    var thirdParD = document.createElement("p");
                    var fourthParD = document.createElement("p");
                    var fifthParD = document.createElement("p");
                    var sixthParD = document.createElement("p");
                    var seventhParD = document.createElement("p");
                    var eighthParD = document.createElement("p");
                    var ninthParD = document.createElement("p");
                    var tenthParD = document.createElement("p");
                    var eleventhParD = document.createElement("p");
                    var twelthParD = document.createElement("p");

                    var choice9D = document.createElement("input");
                    var choice10D = document.createElement("input");

                    firstParD.className = 'you';
                    secondParD.className = 'you';
                    thirdParD.className = 'you';
                    fourthParD.className = 'you';
                    fifthParD.className = 'you';
                    sixthParD.className = 'you';
                    seventhParD.className = 'you';
                    eighthParD.className = 'you';
                    ninthParD.className = 'you';
                    tenthParD.className = 'you';
                    eleventhParD.className = 'you';
                    twelthParD.className = 'you';

                    choice9D.className = 'oP';
                    choice10D.className = 'oP';

                    firstParD.textContent = "Yeah, I'm with you on that one.";
                    secondParD.textContent = "It could be something dangerouse";
                    thirdParD.textContent = "And plus, all I need here is food and water and then I'm out.";
                    fourthParD.textContent = "...Gathering...gathering....";
                    fifthParD.textContent = "Stuffing all I can into my backpack";
                    sixthParD.textContent = "I am so excited to eat all this, there is some really good stuff in these cabinets.";
                    seventhParD.textContent = "like chocolate bars, OOOO is that a twinkie????";
                    eighthParD.textContent = "Wait, what was that?";
                    ninthParD.textContent = "There was some noise coming from upstairs...";
                    tenthParD.textContent = "I know I probably shouldn't go and check it out, I'm going to keep packing up this food...";
                    eleventhParD.textContent = "maybe a bottle of water as well...";
                    twelthParD.textContent = "just quicker now.";


                    choice9D.value = "Yeah, do that";
                    choice10D.value = "Thats smart, but just to be sure make sure theres nothing really quick.";

                    choice9D.type = 'button';
                    choice10D.type = 'button';

                    container.appendChild(firstParD);
                    container.appendChild(secondParD);
                    container.appendChild(thirdParD);
                    container.appendChild(fourthParD);
                    container.appendChild(fifthParD);
                    container.appendChild(sixthParD);
                    container.appendChild(seventhParD);
                    container.appendChild(eighthParD);
                    container.appendChild(ninthParD);
                    container.appendChild(tenthParD);
                    container.appendChild(eleventhParD);
                    container.appendChild(twelthParD);

                    container.appendChild(choice9D);
                    container.appendChild(choice10D);



                    //thats not how the song goes, yeah I remember, but how are you talking to me?, dont go in cabin, ok fine go in cabin,dont check out the smell, make sure theres nothing really quick.
                    choice10D.addEventListener("click", function() {

                        choice10D.style.backgroundColor = "red";

                        var firstParD = document.createElement("p");
                        var secondParD = document.createElement("p");
                        var thirdParD = document.createElement("p");
                        var fourthParD = document.createElement("p");
                        var fifthParD = document.createElement("p");
                        var sixthParD = document.createElement("p");
                        var seventhParD = document.createElement("p");
                        var eighthParD = document.createElement("p");
                        var ninthParD = document.createElement("p");
                        var tenthParD = document.createElement("p");
                        var eleventhParD = document.createElement("p");
                        var twelthParD = document.createElement("p");


                        var choice9H = document.createElement("input");
                        var choice10H = document.createElement("input");

                        firstParD.className = 'you';
                        secondParD.className = 'you';
                        thirdParD.className = 'you';
                        fourthParD.className = 'you';
                        fifthParD.className = 'you';
                        sixthParD.className = 'you';
                        seventhParD.className = 'you';
                        eighthParD.className = 'you';
                        ninthParD.className = 'you';
                        tenthParD.className = 'you';
                        eleventhParD.className = 'you';
                        twelthParD.className = 'you';

                        choice9H.className = 'oP';
                        choice10H.className = 'oP';

                        firstParD.textContent = "Ok, just going to peek my head around the corner to the staircase--";
                        secondParD.textContent = "OH CRAP! THERES A ZOMBIE CRAWLING DOWN THE STAIRS!!";
                        thirdParD.textContent = "IM OUT MAN, I HAVE WHAT I NEED!";
                        fourthParD.textContent = "IM RUNNING TO THE DOOR!";
                        fifthParD.textContent = "Wait a second...";
                        sixthParD.textContent = "This zombie is hecka slow.";
                        seventhParD.textContent = "I dont need to worry, about this, I'm gonna walk out of here now though. ";
                        eighthParD.textContent = "Walking.";
                        ninthParD.textContent = "I kinda feel bad for it, it looks so desperate and sad, like it really wants to get me but it just cant...";
                        tenthParD.textContent = "Anyway, screw you zombie. Now there are two ways I can go.";
                        eleventhParD.textContent = "I can keep going past the house from where I came to it down this hill...";
                        twelthParD.textContent = "Or I can go up the hill to the right of the mountain wher eit goes uphill so I can see where I'm going.";


                        choice9H.value = "Go straight, downhill is easier.";
                        choice10H.value = "Go uphill. You have a goal to find your family, if your still persuing that goal then thats your bast option.";

                        choice9H.type = 'button';
                        choice10H.type = 'button';

                        container.appendChild(firstParD);
                        container.appendChild(secondParD);
                        container.appendChild(thirdParD);
                        container.appendChild(fourthParD);
                        container.appendChild(fifthParD);
                        container.appendChild(sixthParD);
                        container.appendChild(seventhParD);
                        container.appendChild(eighthParD);
                        container.appendChild(ninthParD);
                        container.appendChild(tenthParD);
                        container.appendChild(eleventhParD);
                        container.appendChild(twelthParD);

                        container.appendChild(choice9H);
                        container.appendChild(choice10H);
                        


                        choice10H.addEventListener("click", function() {

                            choice10H.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");

                            var choice15 = document.createElement("input");
                            var choice16 = document.createElement("input");


                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';

                            choice15.className = 'oP';
                            choice16.className = 'oP';


                            firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                            secondParD.textContent = "";
                            thirdParD.textContent = "";
                            fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                            fifthParD.textContent = "--Wait, theres some noise...";
                            sixthParD.textContent = "It sounds like, ";
                            seventhParD.textContent = "Like a helicopter...";
                            eighthParD.textContent = "OH CRAP!";
                            ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                            tenthParD.textContent = "Oh crap they see me";
                            eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                            twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                            thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                            fourteenthParD.textContent = "They are going to kill Me!";
                            fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                            choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                            choice16.value = "RUN!!";

                            choice15.type = 'button';
                            choice16.type = 'button';

                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);

                            container.appendChild(choice15);
                            container.appendChild(choice16);




                            choice16.addEventListener("click", function() {

                                choice16.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choicefourD = document.createElement("input");
                                var choicefiveD = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';




                                firstParD.textContent = "OK";
                                secondParD.textContent = "RUNNING";
                                thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                fourthParD.textContent = "AHH";
                                fifthParD.textContent = "THEY ARE SHOOTING!!";
                                sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                seventhParD.textContent = "OH MY GOD";
                                eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                twelthParD.textContent = "So thank you for that, I mean it.";
                                thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                fourteenthParD.textContent = "goodbye, Barry.";
                                fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);





                            });


                            choice15.addEventListener("click", function() {

                                choice15.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");


                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';




                                firstParD.textContent = "OK, WAVING AT THEM";
                                secondParD.textContent = "Its sort of like I'm stranded or something";
                                thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                fourthParD.textContent = "";
                                fifthParD.textContent = "";
                                sixthParD.textContent = "";
                                seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                eighthParD.textContent = "I have been asleep for most of it";
                                ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                tenthParD.textContent = "But all I know is that I'm safe now.";
                                eleventhParD.textContent = "And part of that is due to you-- most of it";
                                twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                fourteenthParD.textContent = "So thank you.";
                                fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);



                            });


                        });


                    });

                    choice9D.addEventListener("click", function() {
                        choice9D.style.backgroundColor = "red";

                        var firstParl = document.createElement("p");
                        var secondParl = document.createElement("p");
                        var thirdParl = document.createElement("p");
                        var fourthParl = document.createElement("p");
                        var fifthParl = document.createElement("p");
                        var sixthParl = document.createElement("p");
                        var seventhParl = document.createElement("p");
                        var eighthParl = document.createElement("p");
                        var ninthParl = document.createElement("p");
                        var tenthParl = document.createElement("p");
                        var eleventhParl = document.createElement("p");
                        var twelthParl = document.createElement("p");


                        var choice9l = document.createElement("input");
                        var choice10l = document.createElement("input");

                        firstParl.className = 'you';
                        secondParl.className = 'you';
                        thirdParl.className = 'you';
                        fourthParl.className = 'you';
                        fifthParl.className = 'you';
                        sixthParl.className = 'you';
                        seventhParl.className = 'you';
                        eighthParl.className = 'you';
                        ninthParl.className = 'you';
                        tenthParl.className = 'you';
                        eleventhParl.className = 'you';
                        twelthParl.className = 'you';

                        choice9l.className = 'oP';
                        choice10l.className = 'oP';

                        firstParl.textContent = "Ok, almost finished....";
                        secondParl.textContent = "Just stuffing in a waterbottle...";
                        thirdParl.textContent = "oh, also by the way I got a blanket from the couch because it's cold outside.";
                        fourthParl.textContent = "because its cold outside and I am NOT sleeping here";
                        fifthParl.textContent = "So i'm not even going to give you that opti--";
                        sixthParl.textContent = "HOLY CRAP!!! CRAP CRAP CRAP CRAP!!!";
                        seventhParl.textContent = "THERES A ZOMBIE";
                        eighthParl.textContent = "Its a crawler, so its slow but Its closer to the door where the staircase is, of corse because it came from upstairs";
                        ninthParl.textContent = "Theres a window on the other side of the room but farther from the zombie than the door is, but it will take me a couple seconds to open it.";
                        tenthParl.textContent = "or should I just run for the door, the zombie is like 10 feet from the door..";
                        eleventhParl.textContent = "..and 15 feet from the window--";
                        twelthParl.textContent = "QUICK! WHICH ONE";


                        choice9l.value = "THE WINDOW!!";
                        choice10l.value = "THE DOOR!!";

                        choice9l.type = 'button';
                        choice10l.type = 'button';

                        container.appendChild(firstParl);
                        container.appendChild(secondParl);
                        container.appendChild(thirdParl);
                        container.appendChild(fourthParl);
                        container.appendChild(fifthParl);
                        container.appendChild(sixthParl);
                        container.appendChild(seventhParl);
                        container.appendChild(eighthParl);
                        container.appendChild(ninthParl);
                        container.appendChild(tenthParl);
                        container.appendChild(eleventhParl);
                        container.appendChild(twelthParl);

                        container.appendChild(choice9l);
                        container.appendChild(choice10l);


                        //will, is that you?, where are you, a generator?, go in the cabin, keep doing what your doing, the window 
                        choice9l.addEventListener("click", function() {

                            choice9l.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");

                            var choicefourD = document.createElement("input");
                            var choicefiveD = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';

                            choicefourD.className = 'oP';
                            choicefiveD.className = 'oP';


                            firstParD.textContent = "OK, HEADING TO THE WINDOW!";
                            secondParD.textContent = "Fiddling with the STUPID LATCH LEVER WINDOW THING!!";
                            thirdParD.textContent = "COME ON!!!!";
                            fourthParD.textContent = "OK, its FRIKIN FINALLY OPEN";
                            fifthParD.textContent = "OMG THE ZOMBIE IS RIGHT BEHIND ME";
                            sixthParD.textContent = "DIVING THROUGH THE WINDOW";
                            seventhParD.textContent = "ANNNNnnnnnd";
                            eighthParD.textContent = "OUCH!";
                            ninthParD.textContent = "Landed on my face but I have my backpack and I am OUT OF HERE.";
                            tenthParD.textContent = "Running...";
                            eleventhParD.textContent = "Ok, I'm a safe distance by now.";
                            twelthParD.textContent = "well... Now what?";
                            thirteenthParD.textContent = "Which way should I go, I could keep going past the house from where I came from, where it starts to go downhil-- ";
                            fourteenthParD.textContent = "Or I can go to the right where it goes uphill up this mountain, maybe I would be able to see where I am accually going. ";
                            fifteenthParD.textContent = "What do you think?";

                            choicefourD.value = "Go straight, downhill is easier and wherever your going you would be able to get there quicker.";
                            choicefiveD.value = "Go to the right, you are trying to find your family. You will know better where to go to find them.";

                            choicefourD.type = 'button';
                            choicefiveD.type = 'button';

                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);

                            container.appendChild(choicefourD);
                            container.appendChild(choicefiveD);


                        });
                        //will, is that you?, where are you, a generator?, go in the cabin, peek your head around the corner. the door
                        choice10l.addEventListener("click", function() {

                            choice10l.style.backgroundColor = "red";

                            var firstParq = document.createElement("p");
                            var secondParq = document.createElement("p");
                            var thirdParq = document.createElement("p");
                            var fourthParq = document.createElement("p");
                            var fifthParq = document.createElement("p");
                            var sixthParq = document.createElement("p");
                            var seventhParq = document.createElement("p");
                            var eighthParq = document.createElement("p");
                            var ninthParq = document.createElement("p");
                            var tenthParq = document.createElement("p");
                            var eleventhParq = document.createElement("p");
                            var twelthParq = document.createElement("p");
                            var thirteenthParq = document.createElement("p");
                            var fourteenthParq = document.createElement("p");
                            var fifteenthParq = document.createElement("p");

                            var choicefourq = document.createElement("input");
                            var choicefiveq = document.createElement("input");

                            firstParq.className = 'you';
                            secondParq.className = 'you';
                            thirdParq.className = 'you';
                            fourthParq.className = 'you';
                            fifthParq.className = 'you';
                            sixthParq.className = 'you';
                            seventhParq.className = 'you';
                            eighthParq.className = 'you';
                            ninthParq.className = 'you';
                            tenthParq.className = 'you';
                            eleventhParq.className = 'you';
                            twelthParq.className = 'you';
                            thirteenthParq.className = 'you';
                            fourteenthParq.className = 'you';
                            fifteenthParq.className = 'you';

                            choicefourq.className = 'oP';
                            choicefiveq.className = 'oP';


                            firstParq.textContent = "OK, HEADING TO THE DOOR!";
                            secondParq.textContent = "Fiddling with the STUPID HANDLE THING!!";
                            thirdParq.textContent = "CRAP!";
                            fourthParq.textContent = "ITS OPEN AND I'M RUNNING OUT AAAnnnd";
                            fifthParq.textContent = "AHHHH";
                            sixthParq.textContent = "ZOMBIE GRABED MY LEGG!";
                            seventhParq.textContent = "AHHHHOUCH";
                            eighthParq.textContent = "OUCH!";
                            ninthParq.textContent = "IT SCRATCHED ME";
                            tenthParq.textContent = "IM BLEEDING";
                            eleventhParq.textContent = "OH MY GOD, this is it. If you get scratched by a zombie you turn into one of them";
                            twelthParq.textContent = "So I guess this is it.";
                            thirteenthParq.textContent = "I just want to thank you for being there for me, for staying with me and giving me advice, even if it didnt work out in the end--";
                            fourteenthParq.textContent = "But I'm grateful for you. Your a good friend.";
                            fifteenthParq.textContent = "So I guess this is goodbye.";


                            container.appendChild(firstParq);
                            container.appendChild(secondParq);
                            container.appendChild(thirdParq);
                            container.appendChild(fourthParq);
                            container.appendChild(fifthParq);
                            container.appendChild(sixthParq);
                            container.appendChild(seventhParq);
                            container.appendChild(eighthParq);
                            container.appendChild(ninthParq);
                            container.appendChild(tenthParq);
                            container.appendChild(eleventhParq);
                            container.appendChild(twelthParq);
                            container.appendChild(thirteenthParq);
                            container.appendChild(fourteenthParq);
                            container.appendChild(fifteenthParq);


                        });

                    });


                });


            });


            //thats not how the song goes, yeah I remember, but how are you talking to me?
            choice3a.addEventListener("click", function() {

                choice3a.style.backgroundColor = "red";

                var firstParC = document.createElement("p");
                var secondParC = document.createElement("p");
                var thirdParC = document.createElement("p");
                var fourthParC = document.createElement("p");
                var fifthParC = document.createElement("p");
                var sixthParC = document.createElement("p");
                var seventhParC = document.createElement("p");
                var eighthParC = document.createElement("p");
                var ninthParC = document.createElement("p");
                var tenthParC = document.createElement("p");

                var choice4C = document.createElement("input");
                var choice5C = document.createElement("input");

                firstParC.className = 'you';
                secondParC.className = 'you';
                thirdParC.className = 'you';
                fourthParC.className = 'you';
                fifthParC.className = 'you';
                sixthParC.className = 'you';
                seventhParC.className = 'you';
                eighthParC.className = 'you';
                ninthParC.className = 'you';
                tenthParC.className = 'you';
                choice4C.className = 'oP';
                choice5C.className = 'oP';

                firstParC.textContent = "So I was walking through the forest, and I came across some clearing with some hut thing.";
                secondParC.textContent = "more of a cabin, but I started exploring it and before I went in, well I still havn't, but I started exploring around it and found a generator";
                thirdParC.textContent = "Luckily I had my handy dandy USB drivge and charged my phone.";
                fourthParC.textContent = "I still havn't gone in yet, It looks kinda abandoned but I'm not sure if I should go in.";
                fifthParC.textContent = "It's pretty creepy and its getting dar-- OH CRAP, is that...";
                sixthParC.textContent = "Is that blood on the handle of the door??!";
                seventhParC.textContent = "Don't forget, this is the zombie appocolipse--";
                eighthParC.textContent = "and whoevers blood that is it doesn't look like they tripped over a bug or something.";
                ninthParC.textContent = "So what do you recon, should I go in? Keep in mind though there could be some resources in there, I am running low on them and I have been eating grass and nuts for the past few days...";
                tenthParC.textContent = "And dont even ask me what I have been drinking.";

                choice4C.value = "If you have been drinking what I think you are, it's probably worth it. Go in";
                choice5C.value = "No, you shouldn't. Whatevers in there could be dangerouse.";

                choice4C.type = 'button';
                choice5C.type = 'button';

                container.appendChild(firstParC);
                container.appendChild(secondParC);
                container.appendChild(thirdParC);
                container.appendChild(fourthParC);
                container.appendChild(fifthParC);
                container.appendChild(sixthParC);
                container.appendChild(seventhParC);
                container.appendChild(eighthParC);
                container.appendChild(ninthParC);
                container.appendChild(tenthParC);

                container.appendChild(choice4C);
                container.appendChild(choice5C);



                //thats not how the song goes, yeah I remember, but how are you talking to me?, dont go in the cabin
                choice5C.addEventListener("click", function() {
                    choice5C.style.backgroundColor = "red";
                    var firstParI = document.createElement("p");
                    var secondParI = document.createElement("p");
                    var thirdParI = document.createElement("p");

                    var choice6I = document.createElement("input");
                    var choice7I = document.createElement("input");


                    firstParI.className = 'you';
                    secondParI.className = 'you';
                    thirdParI.className = 'you';

                    choice6I.className = 'oP';
                    choice7I.cassName = 'oP';


                    firstParI.textContent = "Ok, thats probably smart considering there might be a zombie or something in there";
                    secondParI.textContent = "Even though I REALLY want food and water right now....";
                    thirdParI.textContent = "...What if I just went in REEEAALLY quick, got some food and water and left in a flash?";

                    choice6I.value = "No, you really shoudln't, what if there was a zombie in there?";
                    choice7I.value = "OK fine, but go REALLY quick, get what you need, and leave imediatly";

                    choice6I.type = 'button';
                    choice7I.type = 'button';

                    container.appendChild(firstParI);
                    container.appendChild(secondParI);
                    container.appendChild(thirdParI);

                    container.appendChild(choice6I);
                    container.appendChild(choice7I);


                    //thats not how the song goes, yeah I remember, but how are you talking to me?, go in the cabin, dont go in the cabin.
                    choice6I.addEventListener("click", function() {
                        choice6I.style.backgroundColor = "red";


                        var firstParQ = document.createElement("p");
                        var secondParQ = document.createElement("p");
                        var thirdParQ = document.createElement("p");
                        var fourthParQ = document.createElement("p");
                        var fifthParQ = document.createElement("p");
                        var sixthParQ = document.createElement("p");
                        var seventhParQ = document.createElement("p");
                        var eighthParQ = document.createElement("p");
                        var ninthParQ = document.createElement("p");
                        
                        var choice11 = document.createElement("input");
                        var choice12 = document.createElement("input");


                        firstParQ.className = 'you';
                        secondParQ.className = 'you';
                        thirdParQ.className = 'you';
                        fourthParQ.className = 'you';
                        fifthParQ.className = 'you';
                        sixthParQ.className = 'you';
                        seventhParQ.className = 'you';
                        eighthParQ.className = 'you';
                        ninthParQ.className = 'you';

                        choice11.className = 'oP';
                        choice12.className = 'oP';

                        firstParQ.textContent = "Ok";
                        secondParQ.textContent = "I have now come to a spot where there are two ways I can go. ";
                        thirdParQ.textContent = "To the right or straight ahead past the cabin.";
                        fourthParQ.textContent = "If I keep going straight past the cabin it starts to go downhill, maybe some water like a river or something.";
                        fifthParQ.textContent = "If I go to the right it goes uphill but that might not so bad.";
                        sixthParQ.textContent = "Because I do have a goal to find my family...";
                        seventhParQ.textContent = "If they are still alive--";
                        eighthParQ.textContent = "But if I go uphill I can see where I'm going more from some that veiwpoint I see up there.";
                        ninthParQ.textContent = "So what do think would be best?";

                        choice11.value = "Go straight ahead, downhill is easier and you need water.";
                        choice12.value = "Go uphill, you need to know where you are going and you need to find your family.";

                        choice11.type = 'button';
                        choice12.type = 'button';
                    
                        container.appendChild(firstParQ);
                        container.appendChild(secondParQ);
                        container.appendChild(thirdParQ);
                        container.appendChild(fourthParQ);
                        container.appendChild(fifthParQ);
                        container.appendChild(sixthParQ);
                        container.appendChild(seventhParQ);
                        container.appendChild(eighthParQ);
                        container.appendChild(ninthParQ);

                        container.appendChild(choice11);
                        container.appendChild(choice12);


















                        choice12.addEventListener("click", function() {

                            choice12.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");
                            var thirteenthParD = document.createElement("p");
                            var fourteenthParD = document.createElement("p");
                            var fifteenthParD = document.createElement("p");

                            var choice15 = document.createElement("input");
                            var choice16 = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';
                            thirteenthParD.className = 'you';
                            fourteenthParD.className = 'you';
                            fifteenthParD.className = 'you';

                            choice15.className = 'oP';
                            choice16.className = 'oP';


                            firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                            secondParD.textContent = "";
                            thirdParD.textContent = "";
                            fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                            fifthParD.textContent = "--Wait, theres some noise...";
                            sixthParD.textContent = "It sounds like, ";
                            seventhParD.textContent = "Like a helicopter...";
                            eighthParD.textContent = "OH CRAP!";
                            ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                            tenthParD.textContent = "Oh crap they see me";
                            eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                            twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                            thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                            fourteenthParD.textContent = "They are going to kill Me!";
                            fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                            choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                            choice16.value = "RUN!!";

                            choice15.type = 'button';
                            choice16.type = 'button';

                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);
                            container.appendChild(thirteenthParD);
                            container.appendChild(fourteenthParD);
                            container.appendChild(fifteenthParD);

                            container.appendChild(choice15);
                            container.appendChild(choice16);




                            choice16.addEventListener("click", function() {

                                choice16.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choicefourD = document.createElement("input");
                                var choicefiveD = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';




                                firstParD.textContent = "OK";
                                secondParD.textContent = "RUNNING";
                                thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                fourthParD.textContent = "AHH";
                                fifthParD.textContent = "THEY ARE SHOOTING!!";
                                sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                seventhParD.textContent = "OH MY GOD";
                                eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                twelthParD.textContent = "So thank you for that, I mean it.";
                                thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                fourteenthParD.textContent = "goodbye, Barry.";
                                fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);





                            });


                            choice15.addEventListener("click", function() {

                                choice15.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");


                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';




                                firstParD.textContent = "OK, WAVING AT THEM";
                                secondParD.textContent = "Its sort of like I'm stranded or something";
                                thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                fourthParD.textContent = "";
                                fifthParD.textContent = "";
                                sixthParD.textContent = "";
                                seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                eighthParD.textContent = "I have been asleep for most of it";
                                ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                tenthParD.textContent = "But all I know is that I'm safe now.";
                                eleventhParD.textContent = "And part of that is due to you-- most of it";
                                twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                fourteenthParD.textContent = "So thank you.";
                                fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);



                            });


                        });


                    });



                    //thats not how the song goes, yeah I remember, but how are you talking to me?, go in the cabin
                    choice4C.addEventListener("click", function() {
                        choice4C.style.backgroundColor = "red";
                        var firstParH = document.createElement("p");
                        var secondParH = document.createElement("p");
                        var thirdParH = document.createElement("p");
                        var fourthParH = document.createElement("p");
                        var fifthParH = document.createElement("p");
                        var sixthParH = document.createElement("p");
                        var seventhParH = document.createElement("p");

                        var choice6H = document.createElement("input");
                        var choice7H = document.createElement("input");

                        firstParH.className = 'you';
                        secondParH.className = 'you';
                        thirdParH.className = 'you';
                        fourthParH.className = 'you';
                        fifthParH.className = 'you';
                        sixthParH.className = 'you';
                        seventhParH.className = 'you';

                        choice6H.className = 'oP';
                        choice7H.className = 'oP';

                        firstParH.textContent = "Ok, good idea, I'm a little bit scared...";
                        secondParH.textContent = "But I'm heading to the door... ";
                        thirdParH.textContent = "Ok, I made it to the porch, I'm going to grab this leaf and use it to open the door.";
                        fourthParH.textContent = "Because I REALLY dont want to touch that ketchup juice.";
                        fifthParH.textContent = "Peeking in.....Ok I'm sneeking in, very sneekily... Looks just like a normal cabin, OOOO THE KITCHEN!";
                        sixthParH.textContent = "I cant even explain in words how hungry I am, even though I just did pretty much, whatever I'm already making myself some cerial.";
                        seventhParH.textContent = "*gag* Dude, there is this aweful smell coming from upstairs...";

                        choice6H.value = "Go check it out.";
                        choice7H.value = "Stay clear of it, you probably dont need to worry about it.";

                        choice6H.type = 'button';
                        choice7H.type = 'button';

                        container.appendChild(firstParH);
                        container.appendChild(secondParH);
                        container.appendChild(thirdParH);
                        container.appendChild(fourthParH);
                        container.appendChild(fifthParH);
                        container.appendChild(sixthParH);
                        container.appendChild(seventhParH);

                        container.appendChild(choice6H);
                        container.appendChild(choice7H);


                        //thats not how the song goes, yeah I remember, but how are you talking to me?, go in the cabin, check out the smell.
                        choice6H.addEventListener("click", function() {
                            choice6H.style.backgroundColor = "red";
                            var firstParK = document.createElement("p");
                            var secondParK = document.createElement("p");
                            var thirdParK = document.createElement("p");
                            var fourthParK = document.createElement("p");
                            var fifthParK = document.createElement("p");
                            var sixthParK = document.createElement("p");
                            var seventhParK = document.createElement("p");
                            var eighthParK = document.createElement("p");
                            var ninthParK = document.createElement("p");
                            var tenthParK = document.createElement("p");
                            var eleventhParK = document.createElement("p");
                            var twelthParK = document.createElement("p");
                            var thirteenthParK = document.createElement("p");
                            var fourteenthParK = document.createElement("p");
                            var fifteenthParK = document.createElement("p");

                            firstParK.className = 'you';
                            secondParK.className = 'you';
                            thirdParK.className = 'you';
                            fourthParK.className = 'you';
                            fifthParK.className = 'you';
                            sixthParK.className = 'you';
                            seventhParK.className = 'you';
                            eighthParK.className = 'you';
                            ninthParK.className = 'you';
                            tenthParK.className = 'you';
                            eleventhParK.className = 'you';
                            twelthParK.className = 'you';
                            thirteenthParK.className = 'you';
                            fourteenthParK.className = 'you';
                            fifteenthParK.className = 'you';

                            firstParK.textContent = "Ok, going up too see what it is...";
                            secondParK.textContent = "I'm a little scared but I'm going to go make sure theres nothing up there...";
                            thirdParK.textContent = "This is like, really creepy. Like the floreboards are creeking, its dark, whatelse do you need??";
                            fourthParK.textContent = "But I'm going to face my fears. Nothing can scare me!";
                            fifthParK.textContent = "OH MY GOD WHAT WAS THAT NOISE?!?!?!";
                            sixthParK.textContent = "I stand corrected";
                            seventhParK.textContent = "I am very easily scared.";
                            eighthParK.textContent = "The smell is getting strongerrRRRRRROOOHHHAAHHHH MY GOD";
                            ninthParK.textContent = "GOD GOD GOD GOD NOOOOO";
                            tenthParK.textContent = "ZOMBIE";
                            eleventhParK.textContent = "GOT M--AHHHHH BITTING ME, DYING TO DEATH!!";
                            twelthParK.textContent = "WHATS EVEN WORSE IS THAT THE LAST THING I SAID DOESNT EVEN MAKE SENCE!!!";
                            thirteenthParK.textContent = "It's too late to do anything, I will turn into a zombie any moment now.";
                            fourteenthParK.textContent = "So I guess this is goodbye, thank you form sticking by me all this time though.";
                            fifteenthParK.textContent = "So goodbye";


                            container.appendChild(firstParK);
                            container.appendChild(secondParK);
                            container.appendChild(thirdParK);
                            container.appendChild(fourthParK);
                            container.appendChild(fifthParK);
                            container.appendChild(sixthParK);
                            container.appendChild(seventhParK);
                            container.appendChild(eighthParK);
                            container.appendChild(ninthParK);
                            container.appendChild(tenthParK);
                            container.appendChild(eleventhParK);
                            container.appendChild(twelthParK);
                            container.appendChild(thirteenthParK);
                            container.appendChild(fourteenthParK);
                            container.appendChild(fifteenthParK);


                        });


                        choice7H.addEventListener("click", function() {
                            choice7H.style.backgroundColor = "red";


                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");

                            var choice9D = document.createElement("input");
                            var choice10D = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';

                            choice9D.className = 'oP';
                            choice10D.className = 'oP';

                            firstParD.textContent = "Yeah, I'm with you on that one.";
                            secondParD.textContent = "It could be something dangerouse";
                            thirdParD.textContent = "And plus, all I need here is food and water and then I'm out.";
                            fourthParD.textContent = "...Gathering...gathering....";
                            fifthParD.textContent = "Stuffing all I can into my backpack";
                            sixthParD.textContent = "I am so excited to eat all this, there is some really good stuff in these cabinets.";
                            seventhParD.textContent = "like chocolate bars, OOOO is that a twinkie????";
                            eighthParD.textContent = "Wait, what was that?";
                            ninthParD.textContent = "There was some noise coming from upstairs...";
                            tenthParD.textContent = "I know I probably shouldn't go and check it out, I'm going to keep packing up this food...";
                            eleventhParD.textContent = "maybe a bottle of water as well...";
                            twelthParD.textContent = "just quicker now.";


                            choice9D.value = "Yeah, do that";
                            choice10D.value = "Thats smart, but just to be sure make sure theres nothing really quick.";

                            choice9D.type = 'button';
                            choice10D.type = 'button';

                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);

                            container.appendChild(choice9D);
                            container.appendChild(choice10D);



                            //thats not how the song goes, yeah I remember, but how are you talking to me?, dont go in cabin, ok fine go in cabin,dont check out the smell, make sure theres nothing really quick.
                            choice10D.addEventListener("click", function() {

                                choice10D.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");


                                var choice9H = document.createElement("input");
                                var choice10H = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';

                                choice9H.className = 'oP';
                                choice10H.className = 'oP';

                                firstParD.textContent = "Ok, just going to peek my head around the corner to the staircase--";
                                secondParD.textContent = "OH CRAP! THERES A ZOMBIE CRAWLING DOWN THE STAIRS!!";
                                thirdParD.textContent = "IM OUT MAN, I HAVE WHAT I NEED!";
                                fourthParD.textContent = "IM RUNNING TO THE DOOR!";
                                fifthParD.textContent = "Wait a second...";
                                sixthParD.textContent = "This zombie is hecka slow.";
                                seventhParD.textContent = "I dont need to worry, about this, I'm gonna walk out of here now though. ";
                                eighthParD.textContent = "Walking.";
                                ninthParD.textContent = "I kinda feel bad for it, it looks so desperate and sad, like it really wants to get me but it just cant...";
                                tenthParD.textContent = "Anyway, screw you zombie. Now there are two ways I can go.";
                                eleventhParD.textContent = "I can keep going past the house from where I came to it down this hill...";
                                twelthParD.textContent = "Or I can go up the hill to the right of the mountain wher eit goes uphill so I can see where I'm going.";


                                choice9H.value = "Go straight, downhill is easier.";
                                choice10H.value = "Go uphill. You have a goal to find your family, if your still persuing that goal then thats your bast option.";

                                choice9H.type = 'button';
                                choice10H.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);

                                container.appendChild(choice9H);
                                container.appendChild(choice10H);











                                choice10H.addEventListener("click", function() {

                                    choice10H.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");

                                    var choice15 = document.createElement("input");
                                    var choice16 = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';

                                    choice15.className = 'oP';
                                    choice16.className = 'oP';


                                    firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                    secondParD.textContent = "";
                                    thirdParD.textContent = "";
                                    fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                    fifthParD.textContent = "--Wait, theres some noise...";
                                    sixthParD.textContent = "It sounds like, ";
                                    seventhParD.textContent = "Like a helicopter...";
                                    eighthParD.textContent = "OH CRAP!";
                                    ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                    tenthParD.textContent = "Oh crap they see me";
                                    eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                    twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                    thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                    fourteenthParD.textContent = "They are going to kill Me!";
                                    fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                    choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                    choice16.value = "RUN!!";

                                    choice15.type = 'button';
                                    choice16.type = 'button';

                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);

                                    container.appendChild(choice15);
                                    container.appendChild(choice16);




                                    choice16.addEventListener("click", function() {

                                        choice16.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");

                                        var choicefourD = document.createElement("input");
                                        var choicefiveD = document.createElement("input");

                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';




                                        firstParD.textContent = "OK";
                                        secondParD.textContent = "RUNNING";
                                        thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                        fourthParD.textContent = "AHH";
                                        fifthParD.textContent = "THEY ARE SHOOTING!!";
                                        sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                        seventhParD.textContent = "OH MY GOD";
                                        eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                        ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                        tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                        eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                        twelthParD.textContent = "So thank you for that, I mean it.";
                                        thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                        fourteenthParD.textContent = "goodbye, Barry.";
                                        fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);





                                    });


                                    choice15.addEventListener("click", function() {

                                        choice15.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");


                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';




                                        firstParD.textContent = "OK, WAVING AT THEM";
                                        secondParD.textContent = "Its sort of like I'm stranded or something";
                                        thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                        fourthParD.textContent = "";
                                        fifthParD.textContent = "";
                                        sixthParD.textContent = "";
                                        seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                        eighthParD.textContent = "I have been asleep for most of it";
                                        ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                        tenthParD.textContent = "But all I know is that I'm safe now.";
                                        eleventhParD.textContent = "And part of that is due to you-- most of it";
                                        twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                        thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                        fourteenthParD.textContent = "So thank you.";
                                        fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);



                                    });


                                });
















                            });
                            choice9D.addEventListener("click", function() {
                                choice9D.style.backgroundColor = "red";

                                var firstParl = document.createElement("p");
                                var secondParl = document.createElement("p");
                                var thirdParl = document.createElement("p");
                                var fourthParl = document.createElement("p");
                                var fifthParl = document.createElement("p");
                                var sixthParl = document.createElement("p");
                                var seventhParl = document.createElement("p");
                                var eighthParl = document.createElement("p");
                                var ninthParl = document.createElement("p");
                                var tenthParl = document.createElement("p");
                                var eleventhParl = document.createElement("p");
                                var twelthParl = document.createElement("p");


                                var choice9l = document.createElement("input");
                                var choice10l = document.createElement("input");

                                firstParl.className = 'you';
                                secondParl.className = 'you';
                                thirdParl.className = 'you';
                                fourthParl.className = 'you';
                                fifthParl.className = 'you';
                                sixthParl.className = 'you';
                                seventhParl.className = 'you';
                                eighthParl.className = 'you';
                                ninthParl.className = 'you';
                                tenthParl.className = 'you';
                                eleventhParl.className = 'you';
                                twelthParl.className = 'you';

                                choice9l.className = 'oP';
                                choice10l.className = 'oP';

                                firstParl.textContent = "Ok, almost finished....";
                                secondParl.textContent = "Just stuffing in a waterbottle...";
                                thirdParl.textContent = "oh, also by the way I got a blanket from the couch because it's cold outside.";
                                fourthParl.textContent = "because its cold outside and I am NOT sleeping here";
                                fifthParl.textContent = "So i'm not even going to give you that opti--";
                                sixthParl.textContent = "HOLY CRAP!!! CRAP CRAP CRAP CRAP!!!";
                                seventhParl.textContent = "THERES A ZOMBIE";
                                eighthParl.textContent = "Its a crawler, so its slow but Its closer to the door where the staircase is, of corse because it came from upstairs";
                                ninthParl.textContent = "Theres a window on the other side of the room but farther from the zombie than the door is, but it will take me a couple seconds to open it.";
                                tenthParl.textContent = "or should I just run for the door, the zombie is like 10 feet from the door..";
                                eleventhParl.textContent = "..and 15 feet from the window--";
                                twelthParl.textContent = "QUICK! WHICH ONE";


                                choice9l.value = "THE WINDOW!!";
                                choice10l.value = "THE DOOR!!";

                                choice9l.type = 'button';
                                choice10l.type = 'button';

                                container.appendChild(firstParl);
                                container.appendChild(secondParl);
                                container.appendChild(thirdParl);
                                container.appendChild(fourthParl);
                                container.appendChild(fifthParl);
                                container.appendChild(sixthParl);
                                container.appendChild(seventhParl);
                                container.appendChild(eighthParl);
                                container.appendChild(ninthParl);
                                container.appendChild(tenthParl);
                                container.appendChild(eleventhParl);
                                container.appendChild(twelthParl);

                                container.appendChild(choice9l);
                                container.appendChild(choice10l);


                                //will, is that you?, where are you, a generator?, go in the cabin, keep doing what your doing, the window 
                                choice9l.addEventListener("click", function() {

                                    choice9l.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");

                                    var choicefourD = document.createElement("input");
                                    var choicefiveD = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';

                                    choicefourD.className = 'oP';
                                    choicefiveD.className = 'oP';


                                    firstParD.textContent = "OK, HEADING TO THE WINDOW!";
                                    secondParD.textContent = "Fiddling with the STUPID LATCH LEVER WINDOW THING!!";
                                    thirdParD.textContent = "COME ON!!!!";
                                    fourthParD.textContent = "OK, its FRIKIN FINALLY OPEN";
                                    fifthParD.textContent = "OMG THE ZOMBIE IS RIGHT BEHIND ME";
                                    sixthParD.textContent = "DIVING THROUGH THE WINDOW";
                                    seventhParD.textContent = "ANNNNnnnnnd";
                                    eighthParD.textContent = "OUCH!";
                                    ninthParD.textContent = "Landed on my face but I have my backpack and I am OUT OF HERE.";
                                    tenthParD.textContent = "Running...";
                                    eleventhParD.textContent = "Ok, I'm a safe distance by now.";
                                    twelthParD.textContent = "well... Now what?";
                                    thirteenthParD.textContent = "Which way should I go, I could keep going past the house from where I came from, where it starts to go downhil-- ";
                                    fourteenthParD.textContent = "Or I can go to the right where it goes uphill up this mountain, maybe I would be able to see where I am accually going. ";
                                    fifteenthParD.textContent = "What do you think?";

                                    choicefourD.value = "Go straight, downhill is easier and wherever your going you would be able to get there quicker.";
                                    choicefiveD.value = "Go to the right, you are trying to find your family. You will know better where to go to find them.";

                                    choicefourD.type = 'button';
                                    choicefiveD.type = 'button';

                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);

                                    container.appendChild(choicefourD);
                                    container.appendChild(choicefiveD);













                                    choicefiveD.addEventListener("click", function() {

                                        choicefiveD.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");

                                        var choice15 = document.createElement("input");
                                        var choice16 = document.createElement("input");

                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';

                                        choice15.className = 'oP';
                                        choice16.className = 'oP';


                                        firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                        secondParD.textContent = "";
                                        thirdParD.textContent = "";
                                        fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                        fifthParD.textContent = "--Wait, theres some noise...";
                                        sixthParD.textContent = "It sounds like, ";
                                        seventhParD.textContent = "Like a helicopter...";
                                        eighthParD.textContent = "OH CRAP!";
                                        ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                        tenthParD.textContent = "Oh crap they see me";
                                        eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                        twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                        thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                        fourteenthParD.textContent = "They are going to kill Me!";
                                        fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                        choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                        choice16.value = "RUN!!";

                                        choice15.type = 'button';
                                        choice16.type = 'button';

                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);

                                        container.appendChild(choice15);
                                        container.appendChild(choice16);




                                        choice16.addEventListener("click", function() {

                                            choice16.style.backgroundColor = "red";

                                            var firstParD = document.createElement("p");
                                            var secondParD = document.createElement("p");
                                            var thirdParD = document.createElement("p");
                                            var fourthParD = document.createElement("p");
                                            var fifthParD = document.createElement("p");
                                            var sixthParD = document.createElement("p");
                                            var seventhParD = document.createElement("p");
                                            var eighthParD = document.createElement("p");
                                            var ninthParD = document.createElement("p");
                                            var tenthParD = document.createElement("p");
                                            var eleventhParD = document.createElement("p");
                                            var twelthParD = document.createElement("p");
                                            var thirteenthParD = document.createElement("p");
                                            var fourteenthParD = document.createElement("p");
                                            var fifteenthParD = document.createElement("p");

                                            var choicefourD = document.createElement("input");
                                            var choicefiveD = document.createElement("input");

                                            firstParD.className = 'you';
                                            secondParD.className = 'you';
                                            thirdParD.className = 'you';
                                            fourthParD.className = 'you';
                                            fifthParD.className = 'you';
                                            sixthParD.className = 'you';
                                            seventhParD.className = 'you';
                                            eighthParD.className = 'you';
                                            ninthParD.className = 'you';
                                            tenthParD.className = 'you';
                                            eleventhParD.className = 'you';
                                            twelthParD.className = 'you';
                                            thirteenthParD.className = 'you';
                                            fourteenthParD.className = 'you';
                                            fifteenthParD.className = 'you';




                                            firstParD.textContent = "OK";
                                            secondParD.textContent = "RUNNING";
                                            thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                            fourthParD.textContent = "AHH";
                                            fifthParD.textContent = "THEY ARE SHOOTING!!";
                                            sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                            seventhParD.textContent = "OH MY GOD";
                                            eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                            ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                            tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                            eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                            twelthParD.textContent = "So thank you for that, I mean it.";
                                            thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                            fourteenthParD.textContent = "goodbye, Barry.";
                                            fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                            container.appendChild(firstParD);
                                            container.appendChild(secondParD);
                                            container.appendChild(thirdParD);
                                            container.appendChild(fourthParD);
                                            container.appendChild(fifthParD);
                                            container.appendChild(sixthParD);
                                            container.appendChild(seventhParD);
                                            container.appendChild(eighthParD);
                                            container.appendChild(ninthParD);
                                            container.appendChild(tenthParD);
                                            container.appendChild(eleventhParD);
                                            container.appendChild(twelthParD);
                                            container.appendChild(thirteenthParD);
                                            container.appendChild(fourteenthParD);
                                            container.appendChild(fifteenthParD);





                                        });


                                        choice15.addEventListener("click", function() {

                                            choice15.style.backgroundColor = "red";

                                            var firstParD = document.createElement("p");
                                            var secondParD = document.createElement("p");
                                            var thirdParD = document.createElement("p");
                                            var fourthParD = document.createElement("p");
                                            var fifthParD = document.createElement("p");
                                            var sixthParD = document.createElement("p");
                                            var seventhParD = document.createElement("p");
                                            var eighthParD = document.createElement("p");
                                            var ninthParD = document.createElement("p");
                                            var tenthParD = document.createElement("p");
                                            var eleventhParD = document.createElement("p");
                                            var twelthParD = document.createElement("p");
                                            var thirteenthParD = document.createElement("p");
                                            var fourteenthParD = document.createElement("p");
                                            var fifteenthParD = document.createElement("p");


                                            firstParD.className = 'you';
                                            secondParD.className = 'you';
                                            thirdParD.className = 'you';
                                            fourthParD.className = 'you';
                                            fifthParD.className = 'you';
                                            sixthParD.className = 'you';
                                            seventhParD.className = 'you';
                                            eighthParD.className = 'you';
                                            ninthParD.className = 'you';
                                            tenthParD.className = 'you';
                                            eleventhParD.className = 'you';
                                            twelthParD.className = 'you';
                                            thirteenthParD.className = 'you';
                                            fourteenthParD.className = 'you';
                                            fifteenthParD.className = 'you';




                                            firstParD.textContent = "OK, WAVING AT THEM";
                                            secondParD.textContent = "Its sort of like I'm stranded or something";
                                            thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                            fourthParD.textContent = "";
                                            fifthParD.textContent = "";
                                            sixthParD.textContent = "";
                                            seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                            eighthParD.textContent = "I have been asleep for most of it";
                                            ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                            tenthParD.textContent = "But all I know is that I'm safe now.";
                                            eleventhParD.textContent = "And part of that is due to you-- most of it";
                                            twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                            thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                            fourteenthParD.textContent = "So thank you.";
                                            fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                            container.appendChild(firstParD);
                                            container.appendChild(secondParD);
                                            container.appendChild(thirdParD);
                                            container.appendChild(fourthParD);
                                            container.appendChild(fifthParD);
                                            container.appendChild(sixthParD);
                                            container.appendChild(seventhParD);
                                            container.appendChild(eighthParD);
                                            container.appendChild(ninthParD);
                                            container.appendChild(tenthParD);
                                            container.appendChild(eleventhParD);
                                            container.appendChild(twelthParD);
                                            container.appendChild(thirteenthParD);
                                            container.appendChild(fourteenthParD);
                                            container.appendChild(fifteenthParD);



                                        });


                                    });



                                });
                                //will, is that you?, where are you, a generator?, go in the cabin, peek your head around the corner. the door
                                choice10l.addEventListener("click", function() {

                                    choice10l.style.backgroundColor = "red";

                                    var firstParq = document.createElement("p");
                                    var secondParq = document.createElement("p");
                                    var thirdParq = document.createElement("p");
                                    var fourthParq = document.createElement("p");
                                    var fifthParq = document.createElement("p");
                                    var sixthParq = document.createElement("p");
                                    var seventhParq = document.createElement("p");
                                    var eighthParq = document.createElement("p");
                                    var ninthParq = document.createElement("p");
                                    var tenthParq = document.createElement("p");
                                    var eleventhParq = document.createElement("p");
                                    var twelthParq = document.createElement("p");
                                    var thirteenthParq = document.createElement("p");
                                    var fourteenthParq = document.createElement("p");
                                    var fifteenthParq = document.createElement("p");

                                    var choicefourq = document.createElement("input");
                                    var choicefiveq = document.createElement("input");

                                    firstParq.className = 'you';
                                    secondParq.className = 'you';
                                    thirdParq.className = 'you';
                                    fourthParq.className = 'you';
                                    fifthParq.className = 'you';
                                    sixthParq.className = 'you';
                                    seventhParq.className = 'you';
                                    eighthParq.className = 'you';
                                    ninthParq.className = 'you';
                                    tenthParq.className = 'you';
                                    eleventhParq.className = 'you';
                                    twelthParq.className = 'you';
                                    thirteenthParq.className = 'you';
                                    fourteenthParq.className = 'you';
                                    fifteenthParq.className = 'you';

                                    choicefourq.className = 'oP';
                                    choicefiveq.className = 'oP';


                                    firstParq.textContent = "OK, HEADING TO THE DOOR!";
                                    secondParq.textContent = "Fiddling with the STUPID HANDLE THING!!";
                                    thirdParq.textContent = "CRAP!";
                                    fourthParq.textContent = "ITS OPEN AND I'M RUNNING OUT AAAnnnd";
                                    fifthParq.textContent = "AHHHH";
                                    sixthParq.textContent = "ZOMBIE GRABED MY LEGG!";
                                    seventhParq.textContent = "AHHHHOUCH";
                                    eighthParq.textContent = "OUCH!";
                                    ninthParq.textContent = "IT SCRATCHED ME";
                                    tenthParq.textContent = "IM BLEEDING";
                                    eleventhParq.textContent = "OH MY GOD, this is it. If you get scratched by a zombie you turn into one of them";
                                    twelthParq.textContent = "So I guess this is it.";
                                    thirteenthParq.textContent = "I just want to thank you for being there for me, for staying with me and giving me advice, even if it didnt work out in the end--";
                                    fourteenthParq.textContent = "But I'm grateful for you. Your a good friend.";
                                    fifteenthParq.textContent = "So I guess this is goodbye.";


                                    container.appendChild(firstParq);
                                    container.appendChild(secondParq);
                                    container.appendChild(thirdParq);
                                    container.appendChild(fourthParq);
                                    container.appendChild(fifthParq);
                                    container.appendChild(sixthParq);
                                    container.appendChild(seventhParq);
                                    container.appendChild(eighthParq);
                                    container.appendChild(ninthParq);
                                    container.appendChild(tenthParq);
                                    container.appendChild(eleventhParq);
                                    container.appendChild(twelthParq);
                                    container.appendChild(thirteenthParq);
                                    container.appendChild(fourteenthParq);
                                    container.appendChild(fifteenthParq);


                                });

                            });


                        });


                    });


                });

                //thats not how the song goes, yeah I remember, but how are you talking to me?, dont go in the cabin, ok fine go in the cabin
                choice7I.addEventListener("click", function() {
                    choice7I.style.backgroundColor = "red";
                    var firstParF = document.createElement("p");
                    var secondParF = document.createElement("p");
                    var thirdParF = document.createElement("p");
                    var fourthParF = document.createElement("p");
                    var fifthParF = document.createElement("p");
                    var sixthParF = document.createElement("p");
                    var seventhParF = document.createElement("p");

                    var choice6A = document.createElement("input");
                    var choice7A = document.createElement("input");

                    firstParF.className = 'you';
                    secondParF.className = 'you';
                    thirdParF.className = 'you';
                    fourthParF.className = 'you';
                    fifthParF.className = 'you';
                    sixthParF.className = 'you';
                    seventhParF.className = 'you';

                    choice6A.className = 'oP';
                    choice7A.className = 'oP';

                    firstParF.textContent = "Ok, good idea, I'm a little bit scared...";
                    secondParF.textContent = "But I'm heading to the door... ";
                    thirdParF.textContent = "Ok, I made it to the porch, I'm going to grab this leaf and use it to open the door.";
                    fourthParF.textContent = "Because I REALLY dont want to touch that ketchup juice.";
                    fifthParF.textContent = "Peeking in.....Ok I'm sneeking in, very sneekily... Looks just like a normal cabin, OOOO THE KITCHEN!";
                    sixthParF.textContent = "I cant even explain in words how hungry I am, even though I just did pretty much, whatever I'm already making myself some cerial.";
                    seventhParF.textContent = "*gag* Dude, there is this aweful smell coming from upstairs...";

                    choice6A.value = "Go check it out.";
                    choice7A.value = "Stay clear of it, you probably dont need to worry about it.";

                    choice6A.type = 'button';
                    choice7A.type = 'button';

                    container.appendChild(firstParF);
                    container.appendChild(secondParF);
                    container.appendChild(thirdParF);
                    container.appendChild(fourthParF);
                    container.appendChild(fifthParF);
                    container.appendChild(sixthParF);
                    container.appendChild(seventhParF);

                    container.appendChild(choice6A);
                    container.appendChild(choice7A);


                    //thats not how the song goes, yeah I remember, but how are you talking to me?, dont go in cabin, ok fine go in cabin,check out the smell.
                    choice6A.addEventListener("click", function() {
                        choice6A.style.backgroundColor = "red";
                        var firstParK = document.createElement("p");
                        var secondParK = document.createElement("p");
                        var thirdParK = document.createElement("p");
                        var fourthParK = document.createElement("p");
                        var fifthParK = document.createElement("p");
                        var sixthParK = document.createElement("p");
                        var seventhParK = document.createElement("p");
                        var eighthParK = document.createElement("p");
                        var ninthParK = document.createElement("p");
                        var tenthParK = document.createElement("p");
                        var eleventhParK = document.createElement("p");
                        var twelthParK = document.createElement("p");
                        var thirteenthParK = document.createElement("p");
                        var fourteenthParK = document.createElement("p");
                        var fifteenthParK = document.createElement("p");

                        firstParK.className = 'you';
                        secondParK.className = 'you';
                        thirdParK.className = 'you';
                        fourthParK.className = 'you';
                        fifthParK.className = 'you';
                        sixthParK.className = 'you';
                        seventhParK.className = 'you';
                        eighthParK.className = 'you';
                        ninthParK.className = 'you';
                        tenthParK.className = 'you';
                        eleventhParK.className = 'you';
                        twelthParK.className = 'you';
                        thirteenthParK.className = 'you';
                        fourteenthParK.className = 'you';
                        fifteenthParK.className = 'you';

                        firstParK.textContent = "Ok, going up too see what it is...";
                        secondParK.textContent = "I'm a little scared but I'm going to go make sure theres nothing up there...";
                        thirdParK.textContent = "This is like, really creepy. Like the floreboards are creeking, its dark, whatelse do you need??";
                        fourthParK.textContent = "But I'm going to face my fears. Nothing can scare me!";
                        fifthParK.textContent = "OH MY GOD WHAT WAS THAT NOISE?!?!?!";
                        sixthParK.textContent = "I stand corrected";
                        seventhParK.textContent = "I am very easily scared.";
                        eighthParK.textContent = "The smell is getting strongerrRRRRRROOOHHHAAHHHH MY GOD";
                        ninthParK.textContent = "GOD GOD GOD GOD NOOOOO";
                        tenthParK.textContent = "ZOMBIE";
                        eleventhParK.textContent = "GOT M--AHHHHH BITTING ME, DYING TO DEATH!!";
                        twelthParK.textContent = "WHATS EVEN WORSE IS THAT THE LAST THING I SAID DOESNT EVEN MAKE SENCE!!!";
                        thirteenthParK.textContent = "It's too late to do anything, I will turn into a zombie any moment now.";
                        fourteenthParK.textContent = "So I guess this is goodbye, thank you form sticking by me all this time though.";
                        fifteenthParK.textContent = "So goodbye";


                        container.appendChild(firstParK);
                        container.appendChild(secondParK);
                        container.appendChild(thirdParK);
                        container.appendChild(fourthParK);
                        container.appendChild(fifthParK);
                        container.appendChild(sixthParK);
                        container.appendChild(seventhParK);
                        container.appendChild(eighthParK);
                        container.appendChild(ninthParK);
                        container.appendChild(tenthParK);
                        container.appendChild(eleventhParK);
                        container.appendChild(twelthParK);
                        container.appendChild(thirteenthParK);
                        container.appendChild(fourteenthParK);
                        container.appendChild(fifteenthParK);


                    });

                    //thats not how the song goes, yeah I remember, but how are you talking to me?, dont go in cabin, ok fine go in cabin, dont check out the smell.

                    choice7A.addEventListener("click", function() {
                        choice7A.style.backgroundColor = "red";

                        var firstParD = document.createElement("p");
                        var secondParD = document.createElement("p");
                        var thirdParD = document.createElement("p");
                        var fourthParD = document.createElement("p");
                        var fifthParD = document.createElement("p");
                        var sixthParD = document.createElement("p");
                        var seventhParD = document.createElement("p");
                        var eighthParD = document.createElement("p");
                        var ninthParD = document.createElement("p");
                        var tenthParD = document.createElement("p");
                        var eleventhParD = document.createElement("p");
                        var twelthParD = document.createElement("p");

                        var choice9D = document.createElement("input");
                        var choice10D = document.createElement("input");

                        firstParD.className = 'you';
                        secondParD.className = 'you';
                        thirdParD.className = 'you';
                        fourthParD.className = 'you';
                        fifthParD.className = 'you';
                        sixthParD.className = 'you';
                        seventhParD.className = 'you';
                        eighthParD.className = 'you';
                        ninthParD.className = 'you';
                        tenthParD.className = 'you';
                        eleventhParD.className = 'you';
                        twelthParD.className = 'you';

                        choice9D.className = 'oP';
                        choice10D.className = 'oP';

                        firstParD.textContent = "Yeah, I'm with you on that one.";
                        secondParD.textContent = "It could be something dangerouse";
                        thirdParD.textContent = "And plus, all I need here is food and water and then I'm out.";
                        fourthParD.textContent = "...Gathering...gathering....";
                        fifthParD.textContent = "Stuffing all I can into my backpack";
                        sixthParD.textContent = "I am so excited to eat all this, there is some really good stuff in these cabinets.";
                        seventhParD.textContent = "like chocolate bars, OOOO is that a twinkie????";
                        eighthParD.textContent = "Wait, what was that?";
                        ninthParD.textContent = "There was some noise coming from upstairs...";
                        tenthParD.textContent = "I know I probably shouldn't go and check it out, I'm going to keep packing up this food...";
                        eleventhParD.textContent = "maybe a bottle of water as well...";
                        twelthParD.textContent = "just quicker now.";


                        choice9D.value = "Yeah, do that";
                        choice10D.value = "Thats smart, but just to be sure make sure theres nothing really quick.";

                        choice9D.type = 'button';
                        choice10D.type = 'button';

                        container.appendChild(firstParD);
                        container.appendChild(secondParD);
                        container.appendChild(thirdParD);
                        container.appendChild(fourthParD);
                        container.appendChild(fifthParD);
                        container.appendChild(sixthParD);
                        container.appendChild(seventhParD);
                        container.appendChild(eighthParD);
                        container.appendChild(ninthParD);
                        container.appendChild(tenthParD);
                        container.appendChild(eleventhParD);
                        container.appendChild(twelthParD);

                        container.appendChild(choice9D);
                        container.appendChild(choice10D);


                        //thats not how the song goes, yeah I remember, but how are you talking to me?, dont go in cabin, ok fine go in cabin,dont check out the smell, make sure theres nothing really quick.
                        choice10D.addEventListener("click", function() {

                            choice10D.style.backgroundColor = "red";

                            var firstParD = document.createElement("p");
                            var secondParD = document.createElement("p");
                            var thirdParD = document.createElement("p");
                            var fourthParD = document.createElement("p");
                            var fifthParD = document.createElement("p");
                            var sixthParD = document.createElement("p");
                            var seventhParD = document.createElement("p");
                            var eighthParD = document.createElement("p");
                            var ninthParD = document.createElement("p");
                            var tenthParD = document.createElement("p");
                            var eleventhParD = document.createElement("p");
                            var twelthParD = document.createElement("p");


                            var choice9H = document.createElement("input");
                            var choice10H = document.createElement("input");

                            firstParD.className = 'you';
                            secondParD.className = 'you';
                            thirdParD.className = 'you';
                            fourthParD.className = 'you';
                            fifthParD.className = 'you';
                            sixthParD.className = 'you';
                            seventhParD.className = 'you';
                            eighthParD.className = 'you';
                            ninthParD.className = 'you';
                            tenthParD.className = 'you';
                            eleventhParD.className = 'you';
                            twelthParD.className = 'you';

                            choice9H.className = 'oP';
                            choice10H.className = 'oP';

                            firstParD.textContent = "Ok, just going to peek my head around the corner to the staircase--";
                            secondParD.textContent = "OH CRAP! THERES A ZOMBIE CRAWLING DOWN THE STAIRS!!";
                            thirdParD.textContent = "IM OUT MAN, I HAVE WHAT I NEED!";
                            fourthParD.textContent = "IM RUNNING TO THE DOOR!";
                            fifthParD.textContent = "Wait a second...";
                            sixthParD.textContent = "This zombie is hecka slow.";
                            seventhParD.textContent = "I dont need to worry, about this, I'm gonna walk out of here now though. ";
                            eighthParD.textContent = "Walking.";
                            ninthParD.textContent = "I kinda feel bad for it, it looks so desperate and sad, like it really wants to get me but it just cant...";
                            tenthParD.textContent = "Anyway, screw you zombie. Now there are two ways I can go.";
                            eleventhParD.textContent = "I can keep going past the house from where I came to it down this hill...";
                            twelthParD.textContent = "Or I can go up the hill to the right of the mountain wher eit goes uphill so I can see where I'm going.";


                            choice9H.value = "Go straight, downhill is easier.";
                            choice10H.value = "Go uphill. You have a goal to find your family, if your still persuing that goal then thats your bast option.";

                            choice9H.type = 'button';
                            choice10H.type = 'button';

                            container.appendChild(firstParD);
                            container.appendChild(secondParD);
                            container.appendChild(thirdParD);
                            container.appendChild(fourthParD);
                            container.appendChild(fifthParD);
                            container.appendChild(sixthParD);
                            container.appendChild(seventhParD);
                            container.appendChild(eighthParD);
                            container.appendChild(ninthParD);
                            container.appendChild(tenthParD);
                            container.appendChild(eleventhParD);
                            container.appendChild(twelthParD);

                            container.appendChild(choice9H);
                            container.appendChild(choice10H);
















                            choice10H.addEventListener("click", function() {

                                choice10H.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choice15 = document.createElement("input");
                                var choice16 = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';

                                choice15.className = 'oP';
                                choice16.className = 'oP';


                                firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                secondParD.textContent = "";
                                thirdParD.textContent = "";
                                fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                fifthParD.textContent = "--Wait, theres some noise...";
                                sixthParD.textContent = "It sounds like, ";
                                seventhParD.textContent = "Like a helicopter...";
                                eighthParD.textContent = "OH CRAP!";
                                ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                tenthParD.textContent = "Oh crap they see me";
                                eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                fourteenthParD.textContent = "They are going to kill Me!";
                                fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                choice16.value = "RUN!!";

                                choice15.type = 'button';
                                choice16.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);

                                container.appendChild(choice15);
                                container.appendChild(choice16);




                                choice16.addEventListener("click", function() {

                                    choice16.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");

                                    var choicefourD = document.createElement("input");
                                    var choicefiveD = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK";
                                    secondParD.textContent = "RUNNING";
                                    thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                    fourthParD.textContent = "AHH";
                                    fifthParD.textContent = "THEY ARE SHOOTING!!";
                                    sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                    seventhParD.textContent = "OH MY GOD";
                                    eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                    ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                    tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                    eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                    twelthParD.textContent = "So thank you for that, I mean it.";
                                    thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                    fourteenthParD.textContent = "goodbye, Barry.";
                                    fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);





                                });


                                choice15.addEventListener("click", function() {

                                    choice15.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");


                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK, WAVING AT THEM";
                                    secondParD.textContent = "Its sort of like I'm stranded or something";
                                    thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                    fourthParD.textContent = "";
                                    fifthParD.textContent = "";
                                    sixthParD.textContent = "";
                                    seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                    eighthParD.textContent = "I have been asleep for most of it";
                                    ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                    tenthParD.textContent = "But all I know is that I'm safe now.";
                                    eleventhParD.textContent = "And part of that is due to you-- most of it";
                                    twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                    thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                    fourteenthParD.textContent = "So thank you.";
                                    fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);



                                });


                            });
















                        });


                        //thats not how the song goes, yeah I remember, but how are you talking to me?, dont go in cabin, ok fine go in cabin,dont check out the smell,
                        choice9D.addEventListener("click", function() {
                            choice9D.style.backgroundColor = "red";

                            var firstParl = document.createElement("p");
                            var secondParl = document.createElement("p");
                            var thirdParl = document.createElement("p");
                            var fourthParl = document.createElement("p");
                            var fifthParl = document.createElement("p");
                            var sixthParl = document.createElement("p");
                            var seventhParl = document.createElement("p");
                            var eighthParl = document.createElement("p");
                            var ninthParl = document.createElement("p");
                            var tenthParl = document.createElement("p");
                            var eleventhParl = document.createElement("p");
                            var twelthParl = document.createElement("p");


                            var choice9l = document.createElement("input");
                            var choice10l = document.createElement("input");

                            firstParl.className = 'you';
                            secondParl.className = 'you';
                            thirdParl.className = 'you';
                            fourthParl.className = 'you';
                            fifthParl.className = 'you';
                            sixthParl.className = 'you';
                            seventhParl.className = 'you';
                            eighthParl.className = 'you';
                            ninthParl.className = 'you';
                            tenthParl.className = 'you';
                            eleventhParl.className = 'you';
                            twelthParl.className = 'you';

                            choice9l.className = 'oP';
                            choice10l.className = 'oP';

                            firstParl.textContent = "Ok, almost finished....";
                            secondParl.textContent = "Just stuffing in a waterbottle...";
                            thirdParl.textContent = "oh, also by the way I got a blanket from the couch because it's cold outside.";
                            fourthParl.textContent = "because its cold outside and I am NOT sleeping here";
                            fifthParl.textContent = "So i'm not even going to give you that opti--";
                            sixthParl.textContent = "HOLY CRAP!!! CRAP CRAP CRAP CRAP!!!";
                            seventhParl.textContent = "THERES A ZOMBIE";
                            eighthParl.textContent = "Its a crawler, so its slow but Its closer to the door where the staircase is, of corse because it came from upstairs";
                            ninthParl.textContent = "Theres a window on the other side of the room but farther from the zombie than the door is, but it will take me a couple seconds to open it.";
                            tenthParl.textContent = "or should I just run for the door, the zombie is like 10 feet from the door..";
                            eleventhParl.textContent = "..and 15 feet from the window--";
                            twelthParl.textContent = "QUICK! WHICH ONE";


                            choice9l.value = "THE WINDOW!!";
                            choice10l.value = "THE DOOR!!";

                            choice9l.type = 'button';
                            choice10l.type = 'button';

                            container.appendChild(firstParl);
                            container.appendChild(secondParl);
                            container.appendChild(thirdParl);
                            container.appendChild(fourthParl);
                            container.appendChild(fifthParl);
                            container.appendChild(sixthParl);
                            container.appendChild(seventhParl);
                            container.appendChild(eighthParl);
                            container.appendChild(ninthParl);
                            container.appendChild(tenthParl);
                            container.appendChild(eleventhParl);
                            container.appendChild(twelthParl);

                            container.appendChild(choice9l);
                            container.appendChild(choice10l);

                            //thats not how the song goes, yeah I remember, but how are you talking to me?, dont go in cabin, ok fine go in cabin,dont check out the smell, go for the window.

                            choice9l.addEventListener("click", function() {

                                choice9l.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choicefourD = document.createElement("input");
                                var choicefiveD = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';

                                choicefourD.className = 'oP';
                                choicefiveD.className = 'oP';


                                firstParD.textContent = "OK, HEADING TO THE WINDOW!";
                                secondParD.textContent = "Fiddling with the STUPID LATCH LEVER WINDOW THING!!";
                                thirdParD.textContent = "COME ON!!!!";
                                fourthParD.textContent = "OK, its FRIKIN FINALLY OPEN";
                                fifthParD.textContent = "OMG THE ZOMBIE IS RIGHT BEHIND ME";
                                sixthParD.textContent = "DIVING THROUGH THE WINDOW";
                                seventhParD.textContent = "ANNNNnnnnnd";
                                eighthParD.textContent = "OUCH!";
                                ninthParD.textContent = "Landed on my face but I have my backpack and I am OUT OF HERE.";
                                tenthParD.textContent = "Running...";
                                eleventhParD.textContent = "Ok, I'm a safe distance by now.";
                                twelthParD.textContent = "well... Now what?";
                                thirteenthParD.textContent = "Which way should I go, I could keep going past the house from where I came from, where it starts to go downhil-- ";
                                fourteenthParD.textContent = "Or I can go to the right where it goes uphill up this mountain, maybe I would be able to see where I am accually going. ";
                                fifteenthParD.textContent = "What do you think?";

                                choicefourD.value = "Go straight, downhill is easier and wherever your going you would be able to get there quicker.";
                                choicefiveD.value = "Go to the right, you are trying to find your family. You will know better where to go to find them.";

                                choicefourD.type = 'button';
                                choicefiveD.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);

                                container.appendChild(choicefourD);
                                container.appendChild(choicefiveD);











                                choicefiveD.addEventListener("click", function() {

                                    choicefiveD.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");

                                    var choice15 = document.createElement("input");
                                    var choice16 = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';

                                    choice15.className = 'oP';
                                    choice16.className = 'oP';


                                    firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                    secondParD.textContent = "";
                                    thirdParD.textContent = "";
                                    fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                    fifthParD.textContent = "--Wait, theres some noise...";
                                    sixthParD.textContent = "It sounds like, ";
                                    seventhParD.textContent = "Like a helicopter...";
                                    eighthParD.textContent = "OH CRAP!";
                                    ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                    tenthParD.textContent = "Oh crap they see me";
                                    eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                    twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                    thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                    fourteenthParD.textContent = "They are going to kill Me!";
                                    fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                    choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                    choice16.value = "RUN!!";

                                    choice15.type = 'button';
                                    choice16.type = 'button';

                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);

                                    container.appendChild(choice15);
                                    container.appendChild(choice16);




                                    choice16.addEventListener("click", function() {

                                        choice16.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");

                                        var choicefourD = document.createElement("input");
                                        var choicefiveD = document.createElement("input");

                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';




                                        firstParD.textContent = "OK";
                                        secondParD.textContent = "RUNNING";
                                        thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                        fourthParD.textContent = "AHH";
                                        fifthParD.textContent = "THEY ARE SHOOTING!!";
                                        sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                        seventhParD.textContent = "OH MY GOD";
                                        eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                        ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                        tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                        eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                        twelthParD.textContent = "So thank you for that, I mean it.";
                                        thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                        fourteenthParD.textContent = "goodbye, Barry.";
                                        fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);





                                    });


                                    choice15.addEventListener("click", function() {

                                        choice15.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");


                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';




                                        firstParD.textContent = "OK, WAVING AT THEM";
                                        secondParD.textContent = "Its sort of like I'm stranded or something";
                                        thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                        fourthParD.textContent = "";
                                        fifthParD.textContent = "";
                                        sixthParD.textContent = "";
                                        seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                        eighthParD.textContent = "I have been asleep for most of it";
                                        ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                        tenthParD.textContent = "But all I know is that I'm safe now.";
                                        eleventhParD.textContent = "And part of that is due to you-- most of it";
                                        twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                        thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                        fourteenthParD.textContent = "So thank you.";
                                        fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);



                                    });


                                });















                            });
                            //thats not how the song goes, yeah I remember, but how are you talking to me?, dont go in cabin, ok fine go in cabin,dont check out the smell., go for the door
                            choice10l.addEventListener("click", function() {

                                choice10l.style.backgroundColor = "red";

                                var firstParq = document.createElement("p");
                                var secondParq = document.createElement("p");
                                var thirdParq = document.createElement("p");
                                var fourthParq = document.createElement("p");
                                var fifthParq = document.createElement("p");
                                var sixthParq = document.createElement("p");
                                var seventhParq = document.createElement("p");
                                var eighthParq = document.createElement("p");
                                var ninthParq = document.createElement("p");
                                var tenthParq = document.createElement("p");
                                var eleventhParq = document.createElement("p");
                                var twelthParq = document.createElement("p");
                                var thirteenthParq = document.createElement("p");
                                var fourteenthParq = document.createElement("p");
                                var fifteenthParq = document.createElement("p");

                                firstParq.className = 'you';
                                secondParq.className = 'you';
                                thirdParq.className = 'you';
                                fourthParq.className = 'you';
                                fifthParq.className = 'you';
                                sixthParq.className = 'you';
                                seventhParq.className = 'you';
                                eighthParq.className = 'you';
                                ninthParq.className = 'you';
                                tenthParq.className = 'you';
                                eleventhParq.className = 'you';
                                twelthParq.className = 'you';
                                thirteenthParq.className = 'you';
                                fourteenthParq.className = 'you';
                                fifteenthParq.className = 'you';



                                firstParq.textContent = "OK, HEADING TO THE DOOR!";
                                secondParq.textContent = "Fiddling with the STUPID HANDLE THING!!";
                                thirdParq.textContent = "CRAP!";
                                fourthParq.textContent = "ITS OPEN AND I'M RUNNING OUT AAAnnnd";
                                fifthParq.textContent = "AHHHH";
                                sixthParq.textContent = "ZOMBIE GRABED MY LEGG!";
                                seventhParq.textContent = "AHHHHOUCH";
                                eighthParq.textContent = "OUCH!";
                                ninthParq.textContent = "IT SCRATCHED ME";
                                tenthParq.textContent = "IM BLEEDING";
                                eleventhParq.textContent = "OH MY GOD, this is it. If you get scratched by a zombie you turn into one of them";
                                twelthParq.textContent = "So I guess this is it.";
                                thirteenthParq.textContent = "I just want to thank you for being there for me, for staying with me and giving me advice, even if it didnt work out in the end--";
                                fourteenthParq.textContent = "But I'm grateful for you. Your a good friend.";
                                fifteenthParq.textContent = "So I guess this is goodbye.";


                                container.appendChild(firstParq);
                                container.appendChild(secondParq);
                                container.appendChild(thirdParq);
                                container.appendChild(fourthParq);
                                container.appendChild(fifthParq);
                                container.appendChild(sixthParq);
                                container.appendChild(seventhParq);
                                container.appendChild(eighthParq);
                                container.appendChild(ninthParq);
                                container.appendChild(tenthParq);
                                container.appendChild(eleventhParq);
                                container.appendChild(twelthParq);
                                container.appendChild(thirteenthParq);
                                container.appendChild(fourteenthParq);
                                container.appendChild(fifteenthParq);


                            });

                        });

                    });


                    //thats not how the song goes, you must have been traveling for weeks now, where are you?
                    choice4a.addEventListener("click", function() {
                        choice4a.style.backgroundColor = "red";
                        var firstParE = document.createElement("p");
                        var secondParE = document.createElement("p");
                        var thirdParE = document.createElement("p");
                        var fourthParE = document.createElement("p");
                        var fifthParE = document.createElement("p");
                        var sixthParE = document.createElement("p");
                        var seventhParE = document.createElement("p");
                        var eighthParE = document.createElement("p");
                        var ninthParE = document.createElement("p");
                        var tenthParE = document.createElement("p");
                        var eleventhParE = document.createElement("p");
                        var twelthParE = document.createElement("p");
                        var thirteenthParE = document.createElement("p");
                        var fourteenthParE = document.createElement("p");
                        var fifteenthParE = document.createElement("p");

                        var choice4E = document.createElement("input");
                        var choice5E = document.createElement("input");

                        firstParE.className = 'you';
                        secondParE.className = 'you';
                        thirdParE.className = 'you';
                        fourthParE.className = 'you';
                        fifthParE.className = 'you';
                        sixthParE.className = 'you';
                        seventhParE.className = 'you';
                        eighthParE.className = 'you';
                        ninthParE.className = 'you';
                        tenthParE.className = 'you';
                        eleventhParE.className = 'you';
                        twelthParE.className = 'you';
                        thirteenthParE.className = 'you';
                        fourteenthParE.className = 'you';
                        fifteenthParE.className = 'you';

                        choice4E.value = 'oP';
                        choice5E.value = 'oP';

                        secondParE.textContent = "Ok, so I was walking through the forest right, and I saw a small clearing up ahead.";
                        thirdParE.textContent = "So I thought for a minut of if I should go there....";
                        firstParE.textContent = "And I decided I should, so I walked towards it and in the small clearing there was a hut thing";
                        fourthParE.textContent = "More like a cabin, but I went to the back because In wasn't sure if there was anyonje in there, and also it looked like, REALLY CREEPY. ";
                        fifthParE.textContent = "I dont know, something about it creeps me out, but I put myself in stealth mode and started exploring around it.";
                        sixthParE.textContent = "As I did I found an old generator, which is how I charged my phone and how I am talking to you, just so you know.";
                        seventhParE.textContent = "But I'm still debating wheather I should go in or no-- OH MY GOD-- Is that blood?";
                        eighthParE.textContent = "**Of cource it is stupid** Not you, me, but it's not like someone spilled catchup out here...";
                        ninthParE.textContent = "and plus, it looks like a more red vertion of the catchup water, and catchup bottles dont have that much catchup water in them...So it has to be blood!";
                        tenthParE.textContent = "Man, I was really looking forward to just going in there, eating something other than nuts and grass, sitting by the warm fire, and drinking water!";
                        eleventhParE.textContent = "Don't ask me what other than water I have been drinking in the past week ever since I ran out.";
                        twelthParE.textContent = "but ANYWAY, What do you think? ";
                        thirteenthParE.textContent = "Should I explore the creepy cabin in the woods?";
                        fourteenthParE.textContent = "Or just book it right now, or more like after my phone charges 100% of cource. Its only at 32% now.";
                        fifteenthParE.textContent = "Be mindful though, there could be that nice warm fire, good food, and water in there for me to take, Could help me survive in the future.";

                        choice4E.value = "If you have been drinking what I think you are, it's probably worth it. Go in";
                        choice5E.value = "No, you shouldn't. Whatevers in there could be dangerouse.";

                        choice4E.type = 'button';
                        choice5E.type = 'button';


                        container.appendChild(secondParE);
                        container.appendChild(thirdParE);
                        container.appendChild(firstParE);
                        container.appendChild(fourthParE);
                        container.appendChild(fifthParE);
                        container.appendChild(sixthParE);
                        container.appendChild(seventhParE);
                        container.appendChild(eighthParE);
                        container.appendChild(ninthParE);
                        container.appendChild(tenthParE);
                        container.appendChild(eleventhParE);
                        container.appendChild(twelthParE);
                        container.appendChild(thirteenthParE);
                        container.appendChild(fourteenthParE);
                        container.appendChild(fifteenthParE);
                        container.appendChild(choice4E);
                        container.appendChild(choice5E);


                        //thats not how the song goes, you must have been traveling for weeks now, where are you? dont go in the cabin, dont go in the cabin again.
                        choice5E.addEventListener("click", function() {
                            choice4E.style.backgroundColor = "red";


                            var firstParQ = document.createElement("p");
                            var secondParQ = document.createElement("p");
                            var thirdParQ = document.createElement("p");
                            var fourthParQ = document.createElement("p");
                            var fifthParQ = document.createElement("p");
                            var sixthParQ = document.createElement("p");
                            var seventhParQ = document.createElement("p");
                            var eighthParQ = document.createElement("p");
                            var ninthParQ = document.createElement("p");
                            var choice11 = document.createElement("oP");
                            var choice12 = document.createElement("oP");


                            firstParQ.className = 'you';
                            secondParQ.className = 'you';
                            thirdParQ.className = 'you';
                            fourthParQ.className = 'you';
                            fifthParQ.className = 'you';
                            sixthParQ.className = 'you';
                            seventhParQ.className = 'you';
                            eighthParQ.className = 'you';
                            ninthParQ.className = 'you';

                            choice11.className = 'you';
                            choice12.className = 'you';

                            firstParQ.textContent = "Ok";
                            secondParQ.textContent = "I have now come to a spot where there are two ways I can go. ";
                            thirdParQ.textContent = "To the right or straight ahead past the cabin.";
                            fourthParQ.textContent = "If I keep going straight past the cabin it starts to go downhill, maybe some water like a river or something.";
                            fifthParQ.textContent = "If I go to the right it goes uphill but that might not so bad.";
                            sixthParQ.textContent = "Because I do have a goal to find my family...";
                            seventhParQ.textContent = "If they are still alive--";
                            eighthParQ.textContent = "But if I go uphill I can see where I'm going more from some that veiwpoint I see up there.";
                            ninthParQ.textContent = "So what do think would be best?";

                            choice11.textContent = "Go straight ahead, downhill is easier and you need water.";
                            choice12.textContent = "Go uphill, you need to know where you are going and you need to find your family.";

                            container.appendChild(firstParQ);
                            container.appendChild(secondParQ);
                            container.appendChild(thirdParQ);
                            container.appendChild(fourthParQ);
                            container.appendChild(fifthParQ);
                            container.appendChild(sixthParQ);
                            container.appendChild(seventhParQ);
                            container.appendChild(eighthParQ);
                            container.appendChild(ninthParQ);

                            container.appendChild(choice11);
                            container.appendChild(choice12);












                            choice12.addEventListener("click", function() {

                                choice12.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");
                                var thirteenthParD = document.createElement("p");
                                var fourteenthParD = document.createElement("p");
                                var fifteenthParD = document.createElement("p");

                                var choice15 = document.createElement("input");
                                var choice16 = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';
                                thirteenthParD.className = 'you';
                                fourteenthParD.className = 'you';
                                fifteenthParD.className = 'you';

                                choice15.className = 'oP';
                                choice16.className = 'oP';


                                firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                secondParD.textContent = "";
                                thirdParD.textContent = "";
                                fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                fifthParD.textContent = "--Wait, theres some noise...";
                                sixthParD.textContent = "It sounds like, ";
                                seventhParD.textContent = "Like a helicopter...";
                                eighthParD.textContent = "OH CRAP!";
                                ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                tenthParD.textContent = "Oh crap they see me";
                                eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                fourteenthParD.textContent = "They are going to kill Me!";
                                fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                choice16.value = "RUN!!";

                                choice15.type = 'button';
                                choice16.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);
                                container.appendChild(thirteenthParD);
                                container.appendChild(fourteenthParD);
                                container.appendChild(fifteenthParD);

                                container.appendChild(choice15);
                                container.appendChild(choice16);




                                choice16.addEventListener("click", function() {

                                    choice16.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");

                                    var choicefourD = document.createElement("input");
                                    var choicefiveD = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK";
                                    secondParD.textContent = "RUNNING";
                                    thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                    fourthParD.textContent = "AHH";
                                    fifthParD.textContent = "THEY ARE SHOOTING!!";
                                    sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                    seventhParD.textContent = "OH MY GOD";
                                    eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                    ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                    tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                    eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                    twelthParD.textContent = "So thank you for that, I mean it.";
                                    thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                    fourteenthParD.textContent = "goodbye, Barry.";
                                    fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);





                                });


                                choice15.addEventListener("click", function() {

                                    choice15.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");
                                    var thirteenthParD = document.createElement("p");
                                    var fourteenthParD = document.createElement("p");
                                    var fifteenthParD = document.createElement("p");


                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';
                                    thirteenthParD.className = 'you';
                                    fourteenthParD.className = 'you';
                                    fifteenthParD.className = 'you';




                                    firstParD.textContent = "OK, WAVING AT THEM";
                                    secondParD.textContent = "Its sort of like I'm stranded or something";
                                    thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                    fourthParD.textContent = "";
                                    fifthParD.textContent = "";
                                    sixthParD.textContent = "";
                                    seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                    eighthParD.textContent = "I have been asleep for most of it";
                                    ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                    tenthParD.textContent = "But all I know is that I'm safe now.";
                                    eleventhParD.textContent = "And part of that is due to you-- most of it";
                                    twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                    thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                    fourteenthParD.textContent = "So thank you.";
                                    fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);
                                    container.appendChild(thirteenthParD);
                                    container.appendChild(fourteenthParD);
                                    container.appendChild(fifteenthParD);



                                });


                            });














                        });


                        //thats not how the song goes, you must have been traveling for weeks now, where are you? dont go in the cabin, ok fine go in the cabin quickly

                        choice4E.addEventListener("click", function() {
                            choice4E.style.backgroundColor = "red";
                            var firstParF = document.createElement("p");
                            var secondParF = document.createElement("p");
                            var thirdParF = document.createElement("p");
                            var fourthParF = document.createElement("p");
                            var fifthParF = document.createElement("p");
                            var sixthParF = document.createElement("p");
                            var seventhParF = document.createElement("p");

                            var choice6A = document.createElement("input");
                            var choice7A = document.createElement("input");

                            firstParF.className = 'you';
                            secondParF.className = 'you';
                            thirdParF.className = 'you';
                            fourthParF.className = 'you';
                            fifthParF.className = 'you';
                            sixthParF.className = 'you';
                            seventhParF.className = 'you';

                            choice6A.className = 'oP';
                            choice7A.className = 'oP';

                            firstParF.textContent = "Ok, good idea, I'm a little bit scared...";
                            secondParF.textContent = "But I'm heading to the door... ";
                            thirdParF.textContent = "Ok, I made it to the porch, I'm going to grab this leaf and use it to open the door.";
                            fourthParF.textContent = "Because I REALLY dont want to touch that ketchup juice.";
                            fifthParF.textContent = "Peeking in.....Ok I'm sneeking in, very sneekily... Looks just like a normal cabin, OOOO THE KITCHEN!";
                            sixthParF.textContent = "I cant even explain in words how hungry I am, even though I just did pretty much, whatever I'm already making myself some cerial.";
                            seventhParF.textContent = "*gag* Dude, there is this aweful smell coming from upstairs...";

                            choice6A.value = "Go check it out.";
                            choice7A.value = "Stay clear of it, you probably dont need to worry about it.";

                            choice6A.type = 'button';
                            choice7A.type = 'button';

                            container.appendChild(firstParF);
                            container.appendChild(secondParF);
                            container.appendChild(thirdParF);
                            container.appendChild(fourthParF);
                            container.appendChild(fifthParF);
                            container.appendChild(sixthParF);
                            container.appendChild(seventhParF);

                            container.appendChild(choice6A);
                            container.appendChild(choice7A);

                            //thats not how the song goes, you must have been traveling for weeks now, where are you? dont go in the cabin, ok fine go in the cabin quickly, go check out the smell.
                            choice6A.addEventListener("click", function() {
                                choice6A.style.backgroundColor = "red";
                                var firstParK = document.createElement("p");
                                var secondParK = document.createElement("p");
                                var thirdParK = document.createElement("p");
                                var fourthParK = document.createElement("p");
                                var fifthParK = document.createElement("p");
                                var sixthParK = document.createElement("p");
                                var seventhParK = document.createElement("p");
                                var eighthParK = document.createElement("p");
                                var ninthParK = document.createElement("p");
                                var tenthParK = document.createElement("p");
                                var eleventhParK = document.createElement("p");
                                var twelthParK = document.createElement("p");
                                var thirteenthParK = document.createElement("p");
                                var fourteenthParK = document.createElement("p");
                                var fifteenthParK = document.createElement("p");

                                firstParK.className = 'you';
                                secondParK.className = 'you';
                                thirdParK.className = 'you';
                                fourthParK.className = 'you';
                                fifthParK.className = 'you';
                                sixthParK.className = 'you';
                                seventhParK.className = 'you';
                                eighthParK.className = 'you';
                                ninthParK.className = 'you';
                                tenthParK.className = 'you';
                                eleventhParK.className = 'you';
                                twelthParK.className = 'you';
                                thirteenthParK.className = 'you';
                                fourteenthParK.className = 'you';
                                fifteenthParK.className = 'you';

                                firstParK.textContent = "Ok, going up too see what it is...";
                                secondParK.textContent = "I'm a little scared but I'm going to go make sure theres nothing up there...";
                                thirdParK.textContent = "This is like, really creepy. Like the floreboards are creeking, its dark, whatelse do you need??";
                                fourthParK.textContent = "But I'm going to face my fears. Nothing can scare me!";
                                fifthParK.textContent = "OH MY GOD WHAT WAS THAT NOISE?!?!?!";
                                sixthParK.textContent = "I stand corrected";
                                seventhParK.textContent = "I am very easily scared.";
                                eighthParK.textContent = "The smell is getting strongerrRRRRRROOOHHHAAHHHH MY GOD";
                                ninthParK.textContent = "GOD GOD GOD GOD NOOOOO";
                                tenthParK.textContent = "ZOMBIE";
                                eleventhParK.textContent = "GOT M--AHHHHH BITTING ME, DYING TO DEATH!!";
                                twelthParK.textContent = "WHATS EVEN WORSE IS THAT THE LAST THING I SAID DOESNT EVEN MAKE SENCE!!!";
                                thirteenthParK.textContent = "It's too late to do anything, I will turn into a zombie any moment now.";
                                fourteenthParK.textContent = "So I guess this is goodbye, thank you form sticking by me all this time though.";
                                fifteenthParK.textContent = "So goodbye";


                                container.appendChild(firstParK);
                                container.appendChild(secondParK);
                                container.appendChild(thirdParK);
                                container.appendChild(fourthParK);
                                container.appendChild(fifthParK);
                                container.appendChild(sixthParK);
                                container.appendChild(seventhParK);
                                container.appendChild(eighthParK);
                                container.appendChild(ninthParK);
                                container.appendChild(tenthParK);
                                container.appendChild(eleventhParK);
                                container.appendChild(twelthParK);
                                container.appendChild(thirteenthParK);
                                container.appendChild(fourteenthParK);
                                container.appendChild(fifteenthParK);


                            });


                            //thats not how the song goes, you must have been traveling for weeks now, where are you? dont go in the cabin, ok fine go in the cabin quickly, dont check out the smell
                            choice7A.addEventListener("click", function() {
                                choice7A.style.backgroundColor = "red";

                                var firstParD = document.createElement("p");
                                var secondParD = document.createElement("p");
                                var thirdParD = document.createElement("p");
                                var fourthParD = document.createElement("p");
                                var fifthParD = document.createElement("p");
                                var sixthParD = document.createElement("p");
                                var seventhParD = document.createElement("p");
                                var eighthParD = document.createElement("p");
                                var ninthParD = document.createElement("p");
                                var tenthParD = document.createElement("p");
                                var eleventhParD = document.createElement("p");
                                var twelthParD = document.createElement("p");

                                var choice9D = document.createElement("input");
                                var choice10D = document.createElement("input");

                                firstParD.className = 'you';
                                secondParD.className = 'you';
                                thirdParD.className = 'you';
                                fourthParD.className = 'you';
                                fifthParD.className = 'you';
                                sixthParD.className = 'you';
                                seventhParD.className = 'you';
                                eighthParD.className = 'you';
                                ninthParD.className = 'you';
                                tenthParD.className = 'you';
                                eleventhParD.className = 'you';
                                twelthParD.className = 'you';

                                choice9D.className = 'oP';
                                choice10D.className = 'oP';

                                firstParD.textContent = "Yeah, I'm with you on that one.";
                                secondParD.textContent = "It could be something dangerouse";
                                thirdParD.textContent = "And plus, all I need here is food and water and then I'm out.";
                                fourthParD.textContent = "...Gathering...gathering....";
                                fifthParD.textContent = "Stuffing all I can into my backpack";
                                sixthParD.textContent = "I am so excited to eat all this, there is some really good stuff in these cabinets.";
                                seventhParD.textContent = "like chocolate bars, OOOO is that a twinkie????";
                                eighthParD.textContent = "Wait, what was that?";
                                ninthParD.textContent = "There was some noise coming from upstairs...";
                                tenthParD.textContent = "I know I probably shouldn't go and check it out, I'm going to keep packing up this food...";
                                eleventhParD.textContent = "maybe a bottle of water as well...";
                                twelthParD.textContent = "just quicker now.";


                                choice9D.value = "Yeah, do that";
                                choice10D.value = "Thats smart, but just to be sure make sure theres nothing really quick.";

                                choice9D.type = 'button';
                                choice10D.type = 'button';

                                container.appendChild(firstParD);
                                container.appendChild(secondParD);
                                container.appendChild(thirdParD);
                                container.appendChild(fourthParD);
                                container.appendChild(fifthParD);
                                container.appendChild(sixthParD);
                                container.appendChild(seventhParD);
                                container.appendChild(eighthParD);
                                container.appendChild(ninthParD);
                                container.appendChild(tenthParD);
                                container.appendChild(eleventhParD);
                                container.appendChild(twelthParD);

                                container.appendChild(choice9D);
                                container.appendChild(choice10D);


                                choice10D.addEventListener("click", function() {

                                    choice10D.style.backgroundColor = "red";

                                    var firstParD = document.createElement("p");
                                    var secondParD = document.createElement("p");
                                    var thirdParD = document.createElement("p");
                                    var fourthParD = document.createElement("p");
                                    var fifthParD = document.createElement("p");
                                    var sixthParD = document.createElement("p");
                                    var seventhParD = document.createElement("p");
                                    var eighthParD = document.createElement("p");
                                    var ninthParD = document.createElement("p");
                                    var tenthParD = document.createElement("p");
                                    var eleventhParD = document.createElement("p");
                                    var twelthParD = document.createElement("p");


                                    var choice9H = document.createElement("input");
                                    var choice10H = document.createElement("input");

                                    firstParD.className = 'you';
                                    secondParD.className = 'you';
                                    thirdParD.className = 'you';
                                    fourthParD.className = 'you';
                                    fifthParD.className = 'you';
                                    sixthParD.className = 'you';
                                    seventhParD.className = 'you';
                                    eighthParD.className = 'you';
                                    ninthParD.className = 'you';
                                    tenthParD.className = 'you';
                                    eleventhParD.className = 'you';
                                    twelthParD.className = 'you';

                                    choice9H.className = 'oP';
                                    choice10H.className = 'oP';

                                    firstParD.textContent = "Ok, just going to peek my head around the corner to the staircase--";
                                    secondParD.textContent = "OH CRAP! THERES A ZOMBIE CRAWLING DOWN THE STAIRS!!";
                                    thirdParD.textContent = "IM OUT MAN, I HAVE WHAT I NEED!";
                                    fourthParD.textContent = "IM RUNNING TO THE DOOR!";
                                    fifthParD.textContent = "Wait a second...";
                                    sixthParD.textContent = "This zombie is hecka slow.";
                                    seventhParD.textContent = "I dont need to worry, about this, I'm gonna walk out of here now though. ";
                                    eighthParD.textContent = "Walking.";
                                    ninthParD.textContent = "I kinda feel bad for it, it looks so desperate and sad, like it really wants to get me but it just cant...";
                                    tenthParD.textContent = "Anyway, screw you zombie. Now there are two ways I can go.";
                                    eleventhParD.textContent = "I can keep going past the house from where I came to it down this hill...";
                                    twelthParD.textContent = "Or I can go up the hill to the right of the mountain wher eit goes uphill so I can see where I'm going.";


                                    choice9H.value = "Go straight, downhill is easier.";
                                    choice10H.value = "Go uphill. You have a goal to find your family, if your still persuing that goal then thats your bast option.";

                                    choice9H.type = 'button';
                                    choice10H.type = 'button';

                                    container.appendChild(firstParD);
                                    container.appendChild(secondParD);
                                    container.appendChild(thirdParD);
                                    container.appendChild(fourthParD);
                                    container.appendChild(fifthParD);
                                    container.appendChild(sixthParD);
                                    container.appendChild(seventhParD);
                                    container.appendChild(eighthParD);
                                    container.appendChild(ninthParD);
                                    container.appendChild(tenthParD);
                                    container.appendChild(eleventhParD);
                                    container.appendChild(twelthParD);

                                    container.appendChild(choice9H);
                                    container.appendChild(choice10H);













                                    choice10H.addEventListener("click", function() {

                                        choice10H.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");

                                        var choice15 = document.createElement("input");
                                        var choice16 = document.createElement("input");

                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';

                                        choice15.className = 'oP';
                                        choice16.className = 'oP';


                                        firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                        secondParD.textContent = "";
                                        thirdParD.textContent = "";
                                        fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                        fifthParD.textContent = "--Wait, theres some noise...";
                                        sixthParD.textContent = "It sounds like, ";
                                        seventhParD.textContent = "Like a helicopter...";
                                        eighthParD.textContent = "OH CRAP!";
                                        ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                        tenthParD.textContent = "Oh crap they see me";
                                        eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                        twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                        thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                        fourteenthParD.textContent = "They are going to kill Me!";
                                        fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                        choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                        choice16.value = "RUN!!";

                                        choice15.type = 'button';
                                        choice16.type = 'button';

                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);

                                        container.appendChild(choice15);
                                        container.appendChild(choice16);




                                        choice16.addEventListener("click", function() {

                                            choice16.style.backgroundColor = "red";

                                            var firstParD = document.createElement("p");
                                            var secondParD = document.createElement("p");
                                            var thirdParD = document.createElement("p");
                                            var fourthParD = document.createElement("p");
                                            var fifthParD = document.createElement("p");
                                            var sixthParD = document.createElement("p");
                                            var seventhParD = document.createElement("p");
                                            var eighthParD = document.createElement("p");
                                            var ninthParD = document.createElement("p");
                                            var tenthParD = document.createElement("p");
                                            var eleventhParD = document.createElement("p");
                                            var twelthParD = document.createElement("p");
                                            var thirteenthParD = document.createElement("p");
                                            var fourteenthParD = document.createElement("p");
                                            var fifteenthParD = document.createElement("p");

                                            var choicefourD = document.createElement("input");
                                            var choicefiveD = document.createElement("input");

                                            firstParD.className = 'you';
                                            secondParD.className = 'you';
                                            thirdParD.className = 'you';
                                            fourthParD.className = 'you';
                                            fifthParD.className = 'you';
                                            sixthParD.className = 'you';
                                            seventhParD.className = 'you';
                                            eighthParD.className = 'you';
                                            ninthParD.className = 'you';
                                            tenthParD.className = 'you';
                                            eleventhParD.className = 'you';
                                            twelthParD.className = 'you';
                                            thirteenthParD.className = 'you';
                                            fourteenthParD.className = 'you';
                                            fifteenthParD.className = 'you';




                                            firstParD.textContent = "OK";
                                            secondParD.textContent = "RUNNING";
                                            thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                            fourthParD.textContent = "AHH";
                                            fifthParD.textContent = "THEY ARE SHOOTING!!";
                                            sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                            seventhParD.textContent = "OH MY GOD";
                                            eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                            ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                            tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                            eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                            twelthParD.textContent = "So thank you for that, I mean it.";
                                            thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                            fourteenthParD.textContent = "goodbye, Barry.";
                                            fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                            container.appendChild(firstParD);
                                            container.appendChild(secondParD);
                                            container.appendChild(thirdParD);
                                            container.appendChild(fourthParD);
                                            container.appendChild(fifthParD);
                                            container.appendChild(sixthParD);
                                            container.appendChild(seventhParD);
                                            container.appendChild(eighthParD);
                                            container.appendChild(ninthParD);
                                            container.appendChild(tenthParD);
                                            container.appendChild(eleventhParD);
                                            container.appendChild(twelthParD);
                                            container.appendChild(thirteenthParD);
                                            container.appendChild(fourteenthParD);
                                            container.appendChild(fifteenthParD);





                                        });


                                        choice15.addEventListener("click", function() {

                                            choice15.style.backgroundColor = "red";

                                            var firstParD = document.createElement("p");
                                            var secondParD = document.createElement("p");
                                            var thirdParD = document.createElement("p");
                                            var fourthParD = document.createElement("p");
                                            var fifthParD = document.createElement("p");
                                            var sixthParD = document.createElement("p");
                                            var seventhParD = document.createElement("p");
                                            var eighthParD = document.createElement("p");
                                            var ninthParD = document.createElement("p");
                                            var tenthParD = document.createElement("p");
                                            var eleventhParD = document.createElement("p");
                                            var twelthParD = document.createElement("p");
                                            var thirteenthParD = document.createElement("p");
                                            var fourteenthParD = document.createElement("p");
                                            var fifteenthParD = document.createElement("p");


                                            firstParD.className = 'you';
                                            secondParD.className = 'you';
                                            thirdParD.className = 'you';
                                            fourthParD.className = 'you';
                                            fifthParD.className = 'you';
                                            sixthParD.className = 'you';
                                            seventhParD.className = 'you';
                                            eighthParD.className = 'you';
                                            ninthParD.className = 'you';
                                            tenthParD.className = 'you';
                                            eleventhParD.className = 'you';
                                            twelthParD.className = 'you';
                                            thirteenthParD.className = 'you';
                                            fourteenthParD.className = 'you';
                                            fifteenthParD.className = 'you';




                                            firstParD.textContent = "OK, WAVING AT THEM";
                                            secondParD.textContent = "Its sort of like I'm stranded or something";
                                            thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                            fourthParD.textContent = "";
                                            fifthParD.textContent = "";
                                            sixthParD.textContent = "";
                                            seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                            eighthParD.textContent = "I have been asleep for most of it";
                                            ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                            tenthParD.textContent = "But all I know is that I'm safe now.";
                                            eleventhParD.textContent = "And part of that is due to you-- most of it";
                                            twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                            thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                            fourteenthParD.textContent = "So thank you.";
                                            fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of mu=onths, But for now, Ill see you then.";


                                            container.appendChild(firstParD);
                                            container.appendChild(secondParD);
                                            container.appendChild(thirdParD);
                                            container.appendChild(fourthParD);
                                            container.appendChild(fifthParD);
                                            container.appendChild(sixthParD);
                                            container.appendChild(seventhParD);
                                            container.appendChild(eighthParD);
                                            container.appendChild(ninthParD);
                                            container.appendChild(tenthParD);
                                            container.appendChild(eleventhParD);
                                            container.appendChild(twelthParD);
                                            container.appendChild(thirteenthParD);
                                            container.appendChild(fourteenthParD);
                                            container.appendChild(fifteenthParD);



                                        });


                                    });
















                                });



                                choice9D.addEventListener("click", function() {
                                    choice9D.style.backgroundColor = "red";

                                    var firstParl = document.createElement("p");
                                    var secondParl = document.createElement("p");
                                    var thirdParl = document.createElement("p");
                                    var fourthParl = document.createElement("p");
                                    var fifthParl = document.createElement("p");
                                    var sixthParl = document.createElement("p");
                                    var seventhParl = document.createElement("p");
                                    var eighthParl = document.createElement("p");
                                    var ninthParl = document.createElement("p");
                                    var tenthParl = document.createElement("p");
                                    var eleventhParl = document.createElement("p");
                                    var twelthParl = document.createElement("p");


                                    var choice9l = document.createElement("input");
                                    var choice10l = document.createElement("input");

                                    firstParl.className = 'you';
                                    secondParl.className = 'you';
                                    thirdParl.className = 'you';
                                    fourthParl.className = 'you';
                                    fifthParl.className = 'you';
                                    sixthParl.className = 'you';
                                    seventhParl.className = 'you';
                                    eighthParl.className = 'you';
                                    ninthParl.className = 'you';
                                    tenthParl.className = 'you';
                                    eleventhParl.className = 'you';
                                    twelthParl.className = 'you';

                                    choice9l.className = 'oP';
                                    choice10l.className = 'oP';

                                    firstParl.textContent = "Ok, almost finished....";
                                    secondParl.textContent = "Just stuffing in a waterbottle...";
                                    thirdParl.textContent = "oh, also by the way I got a blanket from the couch because it's cold outside.";
                                    fourthParl.textContent = "because its cold outside and I am NOT sleeping here";
                                    fifthParl.textContent = "So i'm not even going to give you that opti--";
                                    sixthParl.textContent = "HOLY CRAP!!! CRAP CRAP CRAP CRAP!!!";
                                    seventhParl.textContent = "THERES A ZOMBIE";
                                    eighthParl.textContent = "Its a crawler, so its slow but Its closer to the door where the staircase is, of corse because it came from upstairs";
                                    ninthParl.textContent = "Theres a window on the other side of the room but farther from the zombie than the door is, but it will take me a couple seconds to open it.";
                                    tenthParl.textContent = "or should I just run for the door, the zombie is like 10 feet from the door..";
                                    eleventhParl.textContent = "..and 15 feet from the window--";
                                    twelthParl.textContent = "QUICK! WHICH ONE";


                                    choice9l.value = "THE WINDOW!!";
                                    choice10l.value = "THE DOOR!!";

                                    choice9l.type = 'button';
                                    choice10l.type = 'button';

                                    container.appendChild(firstParl);
                                    container.appendChild(secondParl);
                                    container.appendChild(thirdParl);
                                    container.appendChild(fourthParl);
                                    container.appendChild(fifthParl);
                                    container.appendChild(sixthParl);
                                    container.appendChild(seventhParl);
                                    container.appendChild(eighthParl);
                                    container.appendChild(ninthParl);
                                    container.appendChild(tenthParl);
                                    container.appendChild(eleventhParl);
                                    container.appendChild(twelthParl);

                                    container.appendChild(choice9l);
                                    container.appendChild(choice10l);



                                    choice9l.addEventListener("click", function() {

                                        choice9l.style.backgroundColor = "red";

                                        var firstParD = document.createElement("p");
                                        var secondParD = document.createElement("p");
                                        var thirdParD = document.createElement("p");
                                        var fourthParD = document.createElement("p");
                                        var fifthParD = document.createElement("p");
                                        var sixthParD = document.createElement("p");
                                        var seventhParD = document.createElement("p");
                                        var eighthParD = document.createElement("p");
                                        var ninthParD = document.createElement("p");
                                        var tenthParD = document.createElement("p");
                                        var eleventhParD = document.createElement("p");
                                        var twelthParD = document.createElement("p");
                                        var thirteenthParD = document.createElement("p");
                                        var fourteenthParD = document.createElement("p");
                                        var fifteenthParD = document.createElement("p");

                                        var choicefourD = document.createElement("input");
                                        var choicefiveD = document.createElement("input");

                                        firstParD.className = 'you';
                                        secondParD.className = 'you';
                                        thirdParD.className = 'you';
                                        fourthParD.className = 'you';
                                        fifthParD.className = 'you';
                                        sixthParD.className = 'you';
                                        seventhParD.className = 'you';
                                        eighthParD.className = 'you';
                                        ninthParD.className = 'you';
                                        tenthParD.className = 'you';
                                        eleventhParD.className = 'you';
                                        twelthParD.className = 'you';
                                        thirteenthParD.className = 'you';
                                        fourteenthParD.className = 'you';
                                        fifteenthParD.className = 'you';

                                        choicefourD.className = 'oP';
                                        choicefiveD.className = 'oP';


                                        firstParD.textContent = "OK, HEADING TO THE WINDOW!";
                                        secondParD.textContent = "Fiddling with the STUPID LATCH LEVER WINDOW THING!!";
                                        thirdParD.textContent = "COME ON!!!!";
                                        fourthParD.textContent = "OK, its FRIKIN FINALLY OPEN";
                                        fifthParD.textContent = "OMG THE ZOMBIE IS RIGHT BEHIND ME";
                                        sixthParD.textContent = "DIVING THROUGH THE WINDOW";
                                        seventhParD.textContent = "ANNNNnnnnnd";
                                        eighthParD.textContent = "OUCH!";
                                        ninthParD.textContent = "Landed on my face but I have my backpack and I am OUT OF HERE.";
                                        tenthParD.textContent = "Running...";
                                        eleventhParD.textContent = "Ok, I'm a safe distance by now.";
                                        twelthParD.textContent = "well... Now what?";
                                        thirteenthParD.textContent = "Which way should I go, I could keep going past the house from where I came from, where it starts to go downhil-- ";
                                        fourteenthParD.textContent = "Or I can go to the right where it goes uphill up this mountain, maybe I would be able to see where I am accually going. ";
                                        fifteenthParD.textContent = "What do you think?";

                                        choicefourD.value = "Go straight, downhill is easier and wherever your going you would be able to get there quicker.";
                                        choicefiveD.value = "Go to the right, you are trying to find your family. You will know better where to go to find them.";

                                        choicefourD.type = 'button';
                                        choicefiveD.type = 'button';

                                        container.appendChild(firstParD);
                                        container.appendChild(secondParD);
                                        container.appendChild(thirdParD);
                                        container.appendChild(fourthParD);
                                        container.appendChild(fifthParD);
                                        container.appendChild(sixthParD);
                                        container.appendChild(seventhParD);
                                        container.appendChild(eighthParD);
                                        container.appendChild(ninthParD);
                                        container.appendChild(tenthParD);
                                        container.appendChild(eleventhParD);
                                        container.appendChild(twelthParD);
                                        container.appendChild(thirteenthParD);
                                        container.appendChild(fourteenthParD);
                                        container.appendChild(fifteenthParD);

                                        container.appendChild(choicefourD);
                                        container.appendChild(choicefiveD);
















                                        choicefiveD.addEventListener("click", function() {

                                            choicefiveD.style.backgroundColor = "red";

                                            var firstParD = document.createElement("p");
                                            var secondParD = document.createElement("p");
                                            var thirdParD = document.createElement("p");
                                            var fourthParD = document.createElement("p");
                                            var fifthParD = document.createElement("p");
                                            var sixthParD = document.createElement("p");
                                            var seventhParD = document.createElement("p");
                                            var eighthParD = document.createElement("p");
                                            var ninthParD = document.createElement("p");
                                            var tenthParD = document.createElement("p");
                                            var eleventhParD = document.createElement("p");
                                            var twelthParD = document.createElement("p");
                                            var thirteenthParD = document.createElement("p");
                                            var fourteenthParD = document.createElement("p");
                                            var fifteenthParD = document.createElement("p");

                                            var choice15 = document.createElement("input");
                                            var choice16 = document.createElement("input");

                                            firstParD.className = 'you';
                                            secondParD.className = 'you';
                                            thirdParD.className = 'you';
                                            fourthParD.className = 'you';
                                            fifthParD.className = 'you';
                                            sixthParD.className = 'you';
                                            seventhParD.className = 'you';
                                            eighthParD.className = 'you';
                                            ninthParD.className = 'you';
                                            tenthParD.className = 'you';
                                            eleventhParD.className = 'you';
                                            twelthParD.className = 'you';
                                            thirteenthParD.className = 'you';
                                            fourteenthParD.className = 'you';
                                            fifteenthParD.className = 'you';

                                            choice15.className = 'oP';
                                            choice16.className = 'oP';


                                            firstParD.textContent = "Ok, probably smart, I'm heading up, I'll text you when I get to the top of the hill.";
                                            secondParD.textContent = "";
                                            thirdParD.textContent = "";
                                            fourthParD.textContent = "Ok, it's been like 30 minuts, I'm back up and heading to the top of the mountain hill thing to find out where I'm going.";
                                            fifthParD.textContent = "--Wait, theres some noise...";
                                            sixthParD.textContent = "It sounds like, ";
                                            seventhParD.textContent = "Like a helicopter...";
                                            eighthParD.textContent = "OH CRAP!";
                                            ninthParD.textContent = "It's the army! they are in a helicopter and heading towards me! I'm in plain sight as well--";
                                            tenthParD.textContent = "Oh crap they see me";
                                            eleventhParD.textContent = "They have like a freaking minigun on the helicopter";
                                            twelthParD.textContent = "And if you remember, the military was trying to hunt me down because they though I was a zomnie";
                                            thirteenthParD.textContent = "Crap dude, I'm dreaking out";
                                            fourteenthParD.textContent = "They are going to kill Me!";
                                            fifteenthParD.textContent = "WHAT SHOULD I DO?!?!";

                                            choice15.value = "SIGNAL TO THEM YOUR NOT A ZOMBIE!!";
                                            choice16.value = "RUN!!";

                                            choice15.type = 'button';
                                            choice16.type = 'button';

                                            container.appendChild(firstParD);
                                            container.appendChild(secondParD);
                                            container.appendChild(thirdParD);
                                            container.appendChild(fourthParD);
                                            container.appendChild(fifthParD);
                                            container.appendChild(sixthParD);
                                            container.appendChild(seventhParD);
                                            container.appendChild(eighthParD);
                                            container.appendChild(ninthParD);
                                            container.appendChild(tenthParD);
                                            container.appendChild(eleventhParD);
                                            container.appendChild(twelthParD);
                                            container.appendChild(thirteenthParD);
                                            container.appendChild(fourteenthParD);
                                            container.appendChild(fifteenthParD);

                                            container.appendChild(choice15);
                                            container.appendChild(choice16);




                                            choice16.addEventListener("click", function() {

                                                choice16.style.backgroundColor = "red";

                                                var firstParD = document.createElement("p");
                                                var secondParD = document.createElement("p");
                                                var thirdParD = document.createElement("p");
                                                var fourthParD = document.createElement("p");
                                                var fifthParD = document.createElement("p");
                                                var sixthParD = document.createElement("p");
                                                var seventhParD = document.createElement("p");
                                                var eighthParD = document.createElement("p");
                                                var ninthParD = document.createElement("p");
                                                var tenthParD = document.createElement("p");
                                                var eleventhParD = document.createElement("p");
                                                var twelthParD = document.createElement("p");
                                                var thirteenthParD = document.createElement("p");
                                                var fourteenthParD = document.createElement("p");
                                                var fifteenthParD = document.createElement("p");


                                                firstParD.className = 'you';
                                                secondParD.className = 'you';
                                                thirdParD.className = 'you';
                                                fourthParD.className = 'you';
                                                fifthParD.className = 'you';
                                                sixthParD.className = 'you';
                                                seventhParD.className = 'you';
                                                eighthParD.className = 'you';
                                                ninthParD.className = 'you';
                                                tenthParD.className = 'you';
                                                eleventhParD.className = 'you';
                                                twelthParD.className = 'you';
                                                thirteenthParD.className = 'you';
                                                fourteenthParD.className = 'you';
                                                fifteenthParD.className = 'you';




                                                firstParD.textContent = "OK";
                                                secondParD.textContent = "RUNNING";
                                                thirdParD.textContent = "I THINK THEY ARE COMING FOR ME!";
                                                fourthParD.textContent = "AHH";
                                                fifthParD.textContent = "THEY ARE SHOOTING!!";
                                                sixthParD.textContent = "THERE ARE BULLETS EVERYWHERE";
                                                seventhParD.textContent = "OH MY GOD";
                                                eighthParD.textContent = "THIS IS LIKE AN EPIC ACTION MOVIE LIKE HOW I'M RUNNING FROM THE BULLETS AND HELICOPTER";
                                                ninthParD.textContent = "AHHH, MY LEG, I'M DOWN";
                                                tenthParD.textContent = "THIS IS DEFIANTLY IT";
                                                eleventhParD.textContent = "GOOD BYE, you have been a good friend, you have stuck by me.";
                                                twelthParD.textContent = "So thank you for that, I mean it.";
                                                thirteenthParD.textContent = "THEY KEEP SHOOTING, AHHHHH";
                                                fourteenthParD.textContent = "goodbye, Barry.";
                                                fifteenthParD.textContent = "OUCH! I'M DYING ALREADY YOU STUPID ARMY PEOPLE.";



                                                container.appendChild(firstParD);
                                                container.appendChild(secondParD);
                                                container.appendChild(thirdParD);
                                                container.appendChild(fourthParD);
                                                container.appendChild(fifthParD);
                                                container.appendChild(sixthParD);
                                                container.appendChild(seventhParD);
                                                container.appendChild(eighthParD);
                                                container.appendChild(ninthParD);
                                                container.appendChild(tenthParD);
                                                container.appendChild(eleventhParD);
                                                container.appendChild(twelthParD);
                                                container.appendChild(thirteenthParD);
                                                container.appendChild(fourteenthParD);
                                                container.appendChild(fifteenthParD);





                                            });


                                            choice15.addEventListener("click", function() {

                                                choice15.style.backgroundColor = "red";

                                                var firstParD = document.createElement("p");
                                                var secondParD = document.createElement("p");
                                                var thirdParD = document.createElement("p");
                                                var fourthParD = document.createElement("p");
                                                var fifthParD = document.createElement("p");
                                                var sixthParD = document.createElement("p");
                                                var seventhParD = document.createElement("p");
                                                var eighthParD = document.createElement("p");
                                                var ninthParD = document.createElement("p");
                                                var tenthParD = document.createElement("p");
                                                var eleventhParD = document.createElement("p");
                                                var twelthParD = document.createElement("p");
                                                var thirteenthParD = document.createElement("p");
                                                var fourteenthParD = document.createElement("p");
                                                var fifteenthParD = document.createElement("p");


                                                firstParD.className = 'you';
                                                secondParD.className = 'you';
                                                thirdParD.className = 'you';
                                                fourthParD.className = 'you';
                                                fifthParD.className = 'you';
                                                sixthParD.className = 'you';
                                                seventhParD.className = 'you';
                                                eighthParD.className = 'you';
                                                ninthParD.className = 'you';
                                                tenthParD.className = 'you';
                                                eleventhParD.className = 'you';
                                                twelthParD.className = 'you';
                                                thirteenthParD.className = 'you';
                                                fourteenthParD.className = 'you';
                                                fifteenthParD.className = 'you';




                                                firstParD.textContent = "OK, WAVING AT THEM";
                                                secondParD.textContent = "Its sort of like I'm stranded or something";
                                                thirdParD.textContent = "Well I am but, OH CRAP THEY ARE COMING OUT FO THE HELICOPT--";
                                                fourthParD.textContent = "";
                                                fifthParD.textContent = "";
                                                sixthParD.textContent = "";
                                                seventhParD.textContent = "They tell me it has been 1 week since they took me in";
                                                eighthParD.textContent = "I have been asleep for most of it";
                                                ninthParD.textContent = "I dont remember anything that happened other than I went black when they came out of the helicopter for me.";
                                                tenthParD.textContent = "But all I know is that I'm safe now.";
                                                eleventhParD.textContent = "And part of that is due to you-- most of it";
                                                twelthParD.textContent = "So thank you for being there for me, I'm in some facility now";
                                                thirteenthParD.textContent = "OH, And also they say my family is ok and I can see them soon";
                                                fourteenthParD.textContent = "So thank you.";
                                                fifteenthParD.textContent = "We can meet up and hang out when this whole think is over, probably in a couple of months, But for now, Ill see you then.";


                                                container.appendChild(firstParD);
                                                container.appendChild(secondParD);
                                                container.appendChild(thirdParD);
                                                container.appendChild(fourthParD);
                                                container.appendChild(fifthParD);
                                                container.appendChild(sixthParD);
                                                container.appendChild(seventhParD);
                                                container.appendChild(eighthParD);
                                                container.appendChild(ninthParD);
                                                container.appendChild(tenthParD);
                                                container.appendChild(eleventhParD);
                                                container.appendChild(twelthParD);
                                                container.appendChild(thirteenthParD);
                                                container.appendChild(fourteenthParD);
                                                container.appendChild(fifteenthParD);



                                            });


                                        });














                                    });

                                    choice10l.addEventListener("click", function() {

                                        choice10l.style.backgroundColor = "red";

                                        var firstParq = document.createElement("p");
                                        var secondParq = document.createElement("p");
                                        var thirdParq = document.createElement("p");
                                        var fourthParq = document.createElement("p");
                                        var fifthParq = document.createElement("p");
                                        var sixthParq = document.createElement("p");
                                        var seventhParq = document.createElement("p");
                                        var eighthParq = document.createElement("p");
                                        var ninthParq = document.createElement("p");
                                        var tenthParq = document.createElement("p");
                                        var eleventhParq = document.createElement("p");
                                        var twelthParq = document.createElement("p");
                                        var thirteenthParq = document.createElement("p");
                                        var fourteenthParq = document.createElement("p");
                                        var fifteenthParq = document.createElement("p");

                                      

                                        firstParq.className = 'you';
                                        secondParq.className = 'you';
                                        thirdParq.className = 'you';
                                        fourthParq.className = 'you';
                                        fifthParq.className = 'you';
                                        sixthParq.className = 'you';
                                        seventhParq.className = 'you';
                                        eighthParq.className = 'you';
                                        ninthParq.className = 'you';
                                        tenthParq.className = 'you';
                                        eleventhParq.className = 'you';
                                        twelthParq.className = 'you';
                                        thirteenthParq.className = 'you';
                                        fourteenthParq.className = 'you';
                                        fifteenthParq.className = 'you';

  


                                        firstParq.textContent = "OK, HEADING TO THE DOOR!";
                                        secondParq.textContent = "Fiddling with the STUPID HANDLE THING!!";
                                        thirdParq.textContent = "CRAP!";
                                        fourthParq.textContent = "ITS OPEN AND I'M RUNNING OUT AAAnnnd";
                                        fifthParq.textContent = "AHHHH";
                                        sixthParq.textContent = "ZOMBIE GRABED MY LEGG!";
                                        seventhParq.textContent = "AHHHHOUCH";
                                        eighthParq.textContent = "OUCH!";
                                        ninthParq.textContent = "IT SCRATCHED ME";
                                        tenthParq.textContent = "IM BLEEDING";
                                        eleventhParq.textContent = "OH MY GOD, this is it. If you get scratched by a zombie you turn into one of them";
                                        twelthParq.textContent = "So I guess this is it.";
                                        thirteenthParq.textContent = "I just want to thank you for being there for me, for staying with me and giving me advice, even if it didnt work out in the end--";
                                        fourteenthParq.textContent = "But I'm grateful for you. Your a good friend.";
                                        fifteenthParq.textContent = "So I guess this is goodbye.";


                                        container.appendChild(firstParq);
                                        container.appendChild(secondParq);
                                        container.appendChild(thirdParq);
                                        container.appendChild(fourthParq);
                                        container.appendChild(fifthParq);
                                        container.appendChild(sixthParq);
                                        container.appendChild(seventhParq);
                                        container.appendChild(eighthParq);
                                        container.appendChild(ninthParq);
                                        container.appendChild(tenthParq);
                                        container.appendChild(eleventhParq);
                                        container.appendChild(twelthParq);
                                        container.appendChild(thirteenthParq);
                                        container.appendChild(fourteenthParq);
                                        container.appendChild(fifteenthParq);


                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}



//addPara("words", "you");

function addPara(words, speaker){
    var tempEle = document.createElement("p");
    tempEle.textContent = words;
    tempEle.className = speaker;
    container.appendChild(tempEle);
}