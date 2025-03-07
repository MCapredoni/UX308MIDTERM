//This program *calculates* the cost of **Gym_Membership** and the **Discount** when **Friends** sign up.

function convertGymMembershipCosts(Friends, Discount){
    if(Friends = 1){
	return Discount * 0.95;
    }
    if(Friends = 2){
    return Discount * 0.9;
    }
    if(Friends >= 3){
    return Discount * 0.85;
    }
    else{
        return Discount;
    }
}  

export {convertGymMembershipCosts}