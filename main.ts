let guest_list: string[]=[`Usman`,`Ahmed`,`Aman`,`Awais`]
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ` + guest_list[i] + `\nWe are invited you on tomorrow dinner.\nThank you\n`);
}
let not_present: string = "Ahmed";
let new_guest: string = "Islam";
guest_list[1]= new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ` + guest_list[i] + `\nWe are invited you on tomorrow dinner.\nThank you\n`);
}
console.log(`Mr ${not_present} will not coming on tomorrow diinner.`);
guest_list.unshift(`Akhter`,`ali`)
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ` + guest_list[i] + `\nWe found big table so we decided to invite 2 more people.\nThank you\n`);
}
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Dear  ${remove_guest} you are not invited for tomorrow dinner.`)
}
for (let i=0; i<guest_list.length; i++){
    console.log(`Dear ` + guest_list[i] + `\nyes you are still invited for tomorrow dinner.\nThank you\n`);
}
guest_list.splice(0,2);
console.log(guest_list);


