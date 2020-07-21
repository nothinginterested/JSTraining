var request=new XMLHttpRequest()
request.open('POST','/')
request.onreadystatechange=()=>{
  if(request.readyState==4&&request.status===200){
    console.log(request.responseText);
  }
}

request.send()