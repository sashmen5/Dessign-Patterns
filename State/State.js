var Order = (function () {
    function Order() {
        this.cancelledOrderState = new CancelledOrderState(this);
        this.paymentPendingState = new PaymentPendingState(this);
        this.orderBeingPreparedState = new OrderBeingPreparedState(this);
        this.orderShippedState = new OrderShippedState(this);
        this.setState(this.paymentPendingState);
    }
    Order.prototype.setState = function (state) {
        this.currentState = state;
    };
    Order.prototype.getState = function () {
        return this.currentState;
    };
    return Order;
}());
var PaymentPendingState = (function () {
    function PaymentPendingState(order) {
        this.order = order;
    }
    PaymentPendingState.prototype.cancelOrder = function () {
        console.log('Cancelling your unpaid order...');
        this.order.setState(this.order.cancelledOrderState);
    };
    PaymentPendingState.prototype.verifyPayment = function () {
        console.log('Payment verified! Shipping soon.');
        this.order.setState(this.order.orderBeingPreparedState);
    };
    PaymentPendingState.prototype.shipOrder = function () {
        console.log('Cannot ship the order when payment is pending!');
    };
    return PaymentPendingState;
}());
var CancelledOrderState = (function () {
    function CancelledOrderState(order) {
        this.order = order;
    }
    CancelledOrderState.prototype.cancelOrder = function () {
        console.log('Your order has already been cancelled');
    };
    CancelledOrderState.prototype.verifyPayment = function () {
        console.log('Order cancelled, you cannot verify payment.');
    };
    CancelledOrderState.prototype.shipOrder = function () {
        console.log('Order cannot ship, it was cancelled');
    };
    return CancelledOrderState;
}());
var OrderBeingPreparedState = (function () {
    function OrderBeingPreparedState(order) {
        this.order = order;
    }
    OrderBeingPreparedState.prototype.cancelOrder = function () {
        console.log('Cancelling you order...');
        this.order.setState(this.order.cancelledOrderState);
    };
    OrderBeingPreparedState.prototype.verifyPayment = function () {
        console.log('Already verified your payment.');
    };
    OrderBeingPreparedState.prototype.shipOrder = function () {
        console.log('Shipping your order now!');
        this.order.setState(this.order.orderShippedState);
    };
    return OrderBeingPreparedState;
}());
var OrderShippedState = (function () {
    function OrderShippedState(order) {
        this.order = order;
    }
    OrderShippedState.prototype.cancelOrder = function () {
        console.log('You can not cancel. Already shipped...');
    };
    OrderShippedState.prototype.verifyPayment = function () {
        console.log('You can not verify payment. Already shipped...');
    };
    OrderShippedState.prototype.shipOrder = function () {
        console.log('You can not ship it again. Already shipped...');
    };
    return OrderShippedState;
}());
var order = new Order();
order.getState().verifyPayment();
order.getState().shipOrder();
order.getState().cancelOrder();
console.log('Order state: ' + order.getState().constructor.name);
