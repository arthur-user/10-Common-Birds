const randomNumber = (num) => {return Math.floor(Math.random()*num)}



const birds = {name:['American Robin','Northern Mockingbird','American Goldfinch','White-breasted Nuthatch','Blue Jay',],
 coolfact1:['Hummingbirds can fly backward and hover in place',
'Crows hold funerals','Some birds cover themselves in ants',
'Owls swallow some of their food whole','Pigeons can recognize humans'],
coolfact2:['Some birds can sleep while flying','The smallest bird egg belongs to the hummingbird',
'The egg of the ostrich (genus Struthio) is the largest of any living bird','The kiwi is the only wingless bird','Chickens can communicate using over 200 different noises',
'Owls can turn their heads 270 degrees','Bird eyes take up 50% of their heads'],

}

let randBird = []

//iterating
for(let i in birds){
    let randID = randomNumber(birds[i].length)

switch(i){
    case 'name':
        randBird.push(`Your random bird is:"${birds[i][randID]}"`)
        break
    case 'interestingFact1':
        randBird.push(`Cool facts about birds: "${birds[i][randID]}"`)
        break
    case 'interestingFact2':
        randBird.push(`Cool facts about birds: "${birds[i][randID]}"`)
        break
    default:
        randBird.push('Please try again')
}

}

