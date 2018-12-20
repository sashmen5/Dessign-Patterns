interface State {
    order: Order;

    cancelOrderd();
    verifyPayment();
    shipOrder();
}

class Order {

    public cancelledOrdererState: State;
    public paymentPendingState: State;
    public orderBeingPreparedState: State;
    public orderShippedState: State;


    public currentState: State;
    constructor() {
        this.cancelledOrdererState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.orderShippedState = new OrderShippedState(this);

        this.setState(this.paymentPendingState);
    }

    public setState(state: State) {
        return this.currentState;
    }
}

class PaymentPendingState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrderd() {
        console.log('Cancelling your unpaid order...');
        this.order.setState(this.order.cancelledOrdererState);
    }

    verifyPayment() {
        console.log('Payment verified! Shipping soon.');
        this.order.setState(this.order.orderBeingPreparedState);
    }

    shipOrder() {
        console.log('Cannot ship the order when payment is pending!');
    }
}

class CancelledOrderState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrderd() {
        console.log('Your order has already been cancelled');
    }

    verifyPayment() {
        console.log('Order cancelled, you cannot verify payment.');
    }

    shipOrder() {
        console.log('Order cannot ship, it was cancelled');
    }
}

class OrderBeingPreparedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrderd() {
        console.log('Cancelling you order...');
        this.order.setState(this.order.cancelledOrdererState);
    }

    verifyPayment() {
        console.log('Already verified your payment.');
    }

    shipOrder() {
        console.log('Shipping your order now!');
        this.order.setState(this.order.orderShippedState);
    }
}

class OrderShippedState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrderd() {
        console.log('You can not cancel. Already shipped...');
    }

    verifyPayment() {
        console.log('You can not verify payment. Already shipped...');
    }

    shipOrder() {
        console.log('You can not ship it again. Already shipped...');
    }
}

