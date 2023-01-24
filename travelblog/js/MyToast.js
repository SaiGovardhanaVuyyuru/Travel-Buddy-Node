function ToastDisplay(displayText,addOnClass)
{
    Toastify({ className:`${addOnClass} fw-5 border-3 rounded-3`,text: displayText,duration: 3000,gravity:'bottom',position:'center'}).showToast();
}