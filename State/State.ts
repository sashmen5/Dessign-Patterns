interface State {
    order: Order;

    cancelOrder(): void;
    verifyPayment(): void;
    shipOrder(): void;
}

class Order {

    public cancelledOrderState: State;
    public paymentPendingState: State;
    public orderBeingPreparedState: State;
    public orderShippedState: State;


    public currentState: State;
    constructor() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.orderShippedState = new OrderShippedState(this);

        this.setState(this.paymentPendingState);
    }

    public setState(state: State): void {
        this.currentState = state;
    }

    public getState(): State {
        return this.currentState;
    }
}

class PaymentPendingState implements State {
    order: Order;

    constructor(order: Order) {
        this.order = order;
    }

    cancelOrder() {
        console.log('Cancelling your unpaid order...');
        this.order.setState(this.order.cancelledOrderState);
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

    cancelOrder() {
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

    cancelOrder() {
        console.log('Cancelling you order...');
        this.order.setState(this.order.cancelledOrderState);
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

    cancelOrder() {
        console.log('You can not cancel. Already shipped...');
    }

    verifyPayment() {
        console.log('You can not verify payment. Already shipped...');
    }

    shipOrder() {
        console.log('You can not ship it again. Already shipped...');
    }
}

let order = new Order();
order.getState().verifyPayment();
order.getState().shipOrder();
order.getState().cancelOrder();

console.log('Order state: ' + (<any>order.getState()).constructor.name);

