function switchImage(){
    document.getElementById("koreanNote").style.visibility="hidden";
    document.getElementById("englishNote").style.visibility="visible";
}

function resetImage(){
    document.getElementById("hiddenNote").style.display="none";
    document.getElementById("foldNote").style.visibility="visible";
} 

function showNote(){
    document.getElementById("englishNote").style.visibility="hidden";
    document.getElementById("koreanNote").style.visibility="visible";
    document.getElementById("foldNote").style.visibility="hidden";
    document.getElementById("hiddenNote").style.display="block";
}



function switchJR(){
    document.getElementById("KRJR").style.visibility="hidden";
    document.getElementById("ENJR").style.visibility="visible";
}

function resetJR(){
    document.getElementById("hiddenJR").style.display="none";
    document.getElementById("OBJR").style.visibility="visible";
} 

function showJR(){
    document.getElementById("ENJR").style.visibility="hidden";
    document.getElementById("KRJR").style.visibility="visible";
    document.getElementById("OBJR").style.visibility="hidden";
    document.getElementById("hiddenJR").style.display="block";
}




function switchIP(){
    document.getElementById("RIP").style.visibility="hidden";
    document.getElementById("EIP").style.visibility="visible";
}

function resetIP(){
    document.getElementById("HN").style.display="none";
    document.getElementById("AN").style.visibility="visible";
} 

function showIP(){
    document.getElementById("EIP").style.visibility="hidden";
    document.getElementById("RIP").style.visibility="visible";
    document.getElementById("AN").style.visibility="hidden";
    document.getElementById("HN").style.display="block";
}