const form_btn = document.querySelector('.form-btn');
const float_form = document.querySelector('.float-form')

form_btn.addEventListener('click', form_action)

function form_action(e){
    if(float_form.style.visibility === 'hidden'){
        float_form.style.visibility = 'visible'
    } else{
        float_form.style.visibility = "hidden"
    }
}