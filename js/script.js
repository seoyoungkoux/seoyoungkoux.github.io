let profile_name, proflie_img, profile_avatar, intro_main, intro_sub;

window.onload = function(){
  init();
  SetProfile();
  Blog_Write_Post();
}

function SetProfile(){
  document.title =  "Nickname";
  profile_name.innerHTML = "Nicname";
  profile_avatar.src = "./avatar.gif";
  intro_main.innerHTML =  "Title_Intro_Title";
  intro_sub.innerHTML = "Photo booth cold-pressed air plant iceland actually single-origin coffee. Tacos kitsch tattooed, trust fund vaporware woke letterpress messenger bag photo booth viral. Vice 8-bit live-edge, iceland scenester next level affogato heirloom banh mi fingerstache you probably haven't heard of them schlitz fashion axe pok pok helvetica. Knausgaard post-ironic ramps mustache lo-fi. Knausgaard subway tile vegan banh mi hoodie VHS wayfarers direct trade williamsburg raclette schlitz enamel pin.";
}
function init(){
  profile_name = document.querySelector('#nickname');
  profile_avatar = document.querySelector('#profile_avatar');
  intro_main = document.querySelector('#intro_main');
  intro_sub = document.querySelector('#intro_sub');
}

