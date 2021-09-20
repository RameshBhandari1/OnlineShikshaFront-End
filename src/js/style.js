import $ from 'jquery';
// $(function(){
//     $(".dropdown-item").click(function(){
//         var icon_text =$(this).html();
//         $(".dropdown-toggle").html(icon_text);
//     })
// })
$(function(){
    $("#fileupload").change(function(event) {
        var x = URL.createObjectURL(event.target.files[0]);
        $("#upload-img").attr("src",x);
        console.log(event);
    });
})

$(function(){
    $("#file").change(function(event) {
        var x = URL.createObjectURL(event.target.files[0]);
        $("#upload-file").attr("src",x);
        console.log(event);
    });
})

$(function(){
    $(".data-target").on("click", function(){
        var target_id =$(this).attr('data-target');
        $(target_id).toggleClass("show");
        $('body').toggleClass("offcanvas-active");
    });
    $(".btn-close").click(function(){
        $(".navbar-collapse").removeClass("show");
        $('body').removeClass("offcanvas-active");
    })
})
  
const inputs = document.querySelectorAll(".input");

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value ===""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});