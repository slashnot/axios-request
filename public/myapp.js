
var post = document.querySelector('ax-post');

post.post("http://localhost:3000/users", {name: "New Name"}, function(res){
    console.log(res)
})