export default function curuser(){

let user_id
let creator
if(localStorage.getItem('userd')){
  const user = JSON.parse(localStorage.getItem('userd'))
  creator = {
    creatorid: user._id,
    createdby: user.fullname,
    creatorphone: user.phone
  }
  user_id = user.user_id
}
else{
  creator = {
    creatorid: '',
    createdby: '',
    creatorphone: ''
  }
  user_id = ''
}




  return {user_id, creator}
}

