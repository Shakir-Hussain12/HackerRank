// Suppose there is a circle. There are petrol pumps on that circle. Petrol pumps are numbered 0 to N - 1
//  (both inclusive). You have two pieces of information corresponding to each of the petrol pump: (1)
// the amount of petrol that particular petrol pump will give, and (2) the distance from that petrol pump to the
// next petrol pump.
// Initially, you have a tank of infinite capacity carrying no petrol. You can start the tour at any of the petrol
// pumps. Calculate the first point from where the truck will be able to complete the circle. Consider that the
// truck will stop at each of the petrol pumps. The truck will move one kilometer for each litre of the petrol.

function truckTour(petrolpumps) {
    // Write your code here
    let ind = -1;
    for (let i = 0; i < petrolpumps.length; i++) {
        let distToTravel = petrolpumps[i][1];
        let currCapacity = petrolpumps[i][0];
        ind = i;

        if (currCapacity < distToTravel) {
            ind = -1;
        }

        if (ind != -1) {
            let j = i;
            while (j < petrolpumps.length + i) {
                let iter = j % petrolpumps.length;
                if (iter !== i) {
                    distToTravel += petrolpumps[iter][1];
                    currCapacity += petrolpumps[iter][0];

                    if (currCapacity < distToTravel) {
                        ind = -1;
                        break;
                    }
                }
                j++;
            }

            if (ind != -1) {
                return ind;
            }
        }
    }
}