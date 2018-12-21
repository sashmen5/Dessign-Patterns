interface IPhone {
    useLightning();
}

interface Android {
    useTypeC();
}

class iPhoneXS implements IPhone {
    useLightning() {
        console.log('Using lightning port.');
    }
}

class GooglePixel implements Android {
    useTypeC() {
        console.log('Using type-c');
    }
}

class LightningToTypeCAdapter implements Android {
    iphoneDevice: IPhone;

    constructor(iphoneDevice: IPhone) {
        this.iphoneDevice = iphoneDevice;
    }

    public useTypeC() {
        console.log('Want to use Type-C, converting to Lightning') ;
        this.iphoneDevice.useLightning();
    }
}