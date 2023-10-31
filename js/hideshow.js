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