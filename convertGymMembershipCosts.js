//This program *calculates* the **Cost** of **Gym_Membership** and the discount when **Friends** sign up.

function convertGymMembershipCosts(Friends, Cost){
    if(Friends == 1){
	return Cost * 0.95;
    }
    if(Friends == 2){
    return Cost * 0.9;
    }
    if(Friends >= 3){
    return Cost * 0.85;
    }
    else{
        return Cost;
    }
}  

export {convertGymMembershipCosts}