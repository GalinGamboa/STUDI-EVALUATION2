//  Declarartion des Variables
const newGame = document.getElementById("new_game")
const buttons_player1 = document.querySelector('.buttons_player1');
const buttons_player2 = document.querySelector('.buttons_player2');
const hold1 = document.getElementById('hold1');
const hold2 = document.getElementById('hold2');
let points_glob1 = document.querySelector('.points_glob1');
let points_glob2 = document.querySelector('.points_glob2');
let points_temp1 = document.querySelector('.points_temp1');
let points_temp2 = document.querySelector('.points_temp2');
let roll_dice1 = document.getElementById('roll_dice1');
let roll_dice2 = document.getElementById('roll_dice2');

let p_g_1 =0;               // Valeur ======> points globaux joueur1   
let p_g_2 =0;               // Valeur ======> points globaux joueur2
let p_t_1 = 0;              // Valeur ======> points du round joueur2
let p_t_2 = 0;              // Valeur ======> points du round joueur2


newGame.addEventListener('click',(e)=>{
   
    p_g_1 =0;
    p_g_2 =0;
    p_t_1 = 0;
    p_t_2 = 0;
    points_glob1.textContent = p_g_1;
    points_temp1.textContent = p_t_1;
    points_glob2.textContent = p_g_2;
    points_temp2.textContent = p_t_2;

    changer_player1()

 })


 //  roll dice jouer1

 roll_dice1.addEventListener ('click', function(){
    
    var dice1 = Math.floor(Math.random() * 6 + 1);
    
        switch (dice1){
            case 1:
                let dice_1 = document.querySelector('#dice_1')
                dice_1.setAttribute('src', "images/dice1.jpg")
                console.log(dice_1)
                changer_player2()
            break
            case 2:
                let dice_2 = document.querySelector('#dice_1')
                dice_2.setAttribute('src', "images/dice2.jpg")
                p_t_1= p_t_1 + (dice1);
                points_temp1.textContent = p_t_1 
            break
            case 3:
                let dice_3 = document.querySelector('#dice_1')
                dice_3.setAttribute('src', "images/dice3.jpg")
                p_t_1= p_t_1+(dice1);
                points_temp1.textContent = p_t_1
            break
            case 4:
                let dice_4 = document.querySelector('#dice_1')
                dice_4.setAttribute('src', "images/dice4.jpg")
                p_t_1= p_t_1+(dice1);
                points_temp1.textContent = p_t_1
            break
            case 5:
                let dice_5 = document.querySelector('#dice_1')
                dice_5.setAttribute('src', "images/dice5.jpg")
                p_t_1= p_t_1+(dice1);
                points_temp1.textContent = p_t_1
            break
            case 6:
                let dice_6 = document.querySelector('#dice_1')
                dice_6.setAttribute('src', "images/dice6.jpg")
                p_t_1= p_t_1+(dice1);
                points_temp1.textContent = p_t_1
            break
            }
            
})


//  roll dice jouer2

roll_dice2.addEventListener ('click', function(){
   
    var dice2 = Math.floor(Math.random() * 6 + 1);
    
        switch (dice2){
            case 1:
                let dice_1 = document.querySelector('#dice_1')
                dice_1.setAttribute('src', "images/dice1.jpg")
                console.log(dice_1)
                changer_player2()
            break
            case 2:
                let dice_2 = document.querySelector('#dice_1')
                dice_2.setAttribute('src', "images/dice2.jpg")
                p_t_2= p_t_2 + (dice2);
                points_temp2.textContent = p_t_2 
            break
            case 3:
                let dice_3 = document.querySelector('#dice_1')
                dice_3.setAttribute('src', "images/dice3.jpg")
                p_t_2= p_t_2+(dice2);
                points_temp2.textContent = p_t_2
            break
            case 4:
                let dice_4 = document.querySelector('#dice_1')
                dice_4.setAttribute('src', "images/dice4.jpg")
                p_t_2= p_t_2+(dice2);
                points_temp2.textContent = p_t_2
            break
            case 5:
                let dice_5 = document.querySelector('#dice_1')
                dice_5.setAttribute('src', "images/dice5.jpg")
                p_t_2= p_t_2+(dice2);
                points_temp2.textContent = p_t_2
            break
            case 6:
                let dice_6 = document.querySelector('#dice_1')
                dice_6.setAttribute('src', "images/dice6.jpg")
                p_t_2= p_t_2+(dice2);
                points_temp2.textContent = p_t_2
            break
        }   
})


//  buttons pour joueur 1

 function changer_player1  (){
    
    p_t_1 = 0
    points_temp1.textContent=0
    points_temp2.textContent=0
    buttons_player2.classList.add('container_buttons');
    buttons_player1.classList.remove('container_buttons');
    joueur_gagnant2.classList.add('joueur_gagnant2')
    joueur_gagnant1.classList.add('joueur_gagnant1')

}

//  buttons pour joueur 2

function changer_player2  (){
    p_t_2 = 0
    points_temp1.textContent=0
    points_temp2.textContent=0
   buttons_player1.classList.add('container_buttons');
   buttons_player2.classList.remove('container_buttons');
   joueur_gagnant2.classList.add('joueur_gagnant2')
   joueur_gagnant1.classList.add('joueur_gagnant1')
}

//  hold  joueur 1 

hold1.addEventListener ('click', function(){
    p_g_1 = p_g_1 +p_t_1
    points_glob1.textContent = p_g_1
        if (p_g_1 >= 100){
            const joueur_gagnant1 = document.getElementById("joueur_gagnant1");
            joueur_gagnant1.classList.remove('joueur_gagnant1')
            gagnant()
        }
    else {
        changer_player2  ()
    }
})


//  hold  joueur 1

hold2.addEventListener ('click', function(){
    p_g_2 = p_g_2 + p_t_2
    points_glob2.textContent = p_g_2
        if (p_g_2 >=100){
            const joueur_gagnant2 = document.getElementById("joueur_gagnant2");
            joueur_gagnant2.classList.remove('joueur_gagnant2')
            gagnant()
    }
    else{
        changer_player1  ()
    }
})


// Message gagnant

function gagnant (){
    p_g_1 = 0;
    p_g_2 =0
    buttons_player2.classList.add('container_buttons');
    buttons_player1.classList.add('container_buttons');
}