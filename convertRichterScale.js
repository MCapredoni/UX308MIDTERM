// This program *converts* **RichterScale** to **Characterization**

function convertRichterScale(RichterScale){
    if(RichterScale <= 5){
	return "Little or no damage";
    }
    if(RichterScale <= 5.5){
    return "Some damage";
    }
    if(RichterScale <= 6.5){
    return "Serious damage, walls may crack or fall";
    }
    if(RichterScale <= 7.5){
    return "Disaster, buildings may collapse";
    }
    if(RichterScale >= 7.5){
    return "Catastrophe, most buildings destroyed";
    }
}  

export {convertRichterScale}