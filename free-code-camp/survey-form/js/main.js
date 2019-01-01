const toggleTheme = () => {
    let darkEnabled = document.querySelector("#darkMode").checked;

    if(darkEnabled) {
        $("main").removeClass("light")  
        $("main").addClass("dark")  
    } else {
        $("main").removeClass("dark") 
        $("main").addClass("light")
    }
};

window.onload = function(){
    toggleTheme();
}