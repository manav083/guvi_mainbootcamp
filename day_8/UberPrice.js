class uberPrice {
    constructor(distance, ratePerKM, ratePerMinute = 0, waitingTime = 0, tip = 0) {
        this.distance = distance;
        this.ratePerKM = ratePerKM;
        this.ratePerMinute = ratePerMinute;
        this.waitingTime = waitingTime;
        this.tip = tip;
    }

    getTotalAmount() {
        let total = this.distance*this.ratePerKM + this.ratePerMinute*this.waitingTime;
        let GST = 0.05*total;

        let bill = total + GST + this.tip;

        return bill;

    }
}